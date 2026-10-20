import Redis from "ioredis";

const REDIS_URL = process.env.REDIS_URL;

// ====================================================================
// In-Memory Multi-Tier Cache Fallback (High-Performance LRU-like)
// ====================================================================
interface MemoryCacheEntry {
  value: string;
  expiresAt: number;
}

const memoryCache = new Map<string, MemoryCacheEntry>();

function getMemoryCache<T>(key: string): T | null {
  const entry = memoryCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    memoryCache.delete(key);
    return null;
  }
  try {
    return JSON.parse(entry.value) as T;
  } catch {
    return null;
  }
}

function setMemoryCache(key: string, value: unknown, ttlSeconds: number): void {
  // Prevent unbounded memory growth by evicting oldest if size exceeds 2000
  if (memoryCache.size > 2000) {
    const oldestKey = memoryCache.keys().next().value;
    if (oldestKey) memoryCache.delete(oldestKey);
  }
  memoryCache.set(key, {
    value: JSON.stringify(value),
    expiresAt: Date.now() + ttlSeconds * 1000,
  });
}

function deleteMemoryCache(keyPattern: string): void {
  if (keyPattern.includes("*")) {
    const regexPattern = new RegExp("^" + keyPattern.replace(/\*/g, ".*") + "$");
    for (const key of memoryCache.keys()) {
      if (regexPattern.test(key)) {
        memoryCache.delete(key);
      }
    }
  } else {
    memoryCache.delete(keyPattern);
  }
}

// ====================================================================
// Redis Client Setup
// ====================================================================
let redisClient: Redis | null = null;
let isRedisAvailable = false;

if (REDIS_URL) {
  try {
    redisClient = new Redis(REDIS_URL, {
      lazyConnect: true,
      maxRetriesPerRequest: 1,
      connectTimeout: 2000,
      retryStrategy(times) {
        if (times > 3) {
          isRedisAvailable = false;
          return null; // Stop retrying, use memory fallback
        }
        return Math.min(times * 100, 1000);
      },
    });

    redisClient.on("ready", () => {
      isRedisAvailable = true;
    });

    redisClient.on("error", () => {
      isRedisAvailable = false;
    });

    redisClient.on("close", () => {
      isRedisAvailable = false;
    });
  } catch {
    isRedisAvailable = false;
  }
}

// ====================================================================
// Public Cache API
// ====================================================================

export async function getCache<T>(key: string): Promise<T | null> {
  // Try Redis first
  if (redisClient) {
    try {
      if (redisClient.status === "wait") {
        await redisClient.connect();
      }
      if (redisClient.status === "ready") {
        const data = await redisClient.get(key);
        if (data) {
          return JSON.parse(data) as T;
        }
      }
    } catch {
      // Redis failed, fall through to memory cache
    }
  }

  // Fallback to high-speed memory cache
  return getMemoryCache<T>(key);
}

export async function setCache(key: string, value: unknown, ttlSeconds = 3600): Promise<void> {
  // Always write to memory cache
  setMemoryCache(key, value, ttlSeconds);

  // Write to Redis if available
  if (redisClient) {
    try {
      if (redisClient.status === "wait") {
        await redisClient.connect();
      }
      if (redisClient.status === "ready") {
        await redisClient.set(key, JSON.stringify(value), "EX", ttlSeconds);
      }
    } catch {
      // Ignore Redis write errors since memory cache succeeded
    }
  }
}

export async function deleteCache(keyPattern: string): Promise<void> {
  // Purge from memory cache
  deleteMemoryCache(keyPattern);

  // Purge from Redis if available
  if (redisClient) {
    try {
      if (redisClient.status === "wait") {
        await redisClient.connect();
      }
      if (redisClient.status === "ready") {
        if (keyPattern.includes("*")) {
          const keys = await redisClient.keys(keyPattern);
          if (keys.length > 0) {
            await redisClient.del(...keys);
          }
        } else {
          await redisClient.del(keyPattern);
        }
      }
    } catch {
      // Ignore Redis delete errors
    }
  }
}

export function getCacheStatus() {
  return {
    redisConfigured: Boolean(REDIS_URL),
    redisConnected: isRedisAvailable,
    memoryCacheEntries: memoryCache.size,
  };
}

export default redisClient;
