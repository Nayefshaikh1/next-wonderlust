import Redis from "ioredis";

const REDIS_URL = process.env.REDIS_URL;

let redisClient: Redis | null = null;

if (REDIS_URL) {
  try {
    redisClient = new Redis(REDIS_URL, {
      lazyConnect: true,
      maxRetriesPerRequest: 1,
      connectTimeout: 2000,
      retryStrategy(times) {
        if (times > 2) {
          console.warn("Redis connection attempt limit reached. Operating without cache.");
          return null; // Stop retrying
        }
        return Math.min(times * 100, 1000);
      },
    });

    redisClient.on("error", (err) => {
      console.warn("Redis error (fallback to DB):", err.message);
    });
  } catch (e) {
    console.warn("Redis initialization failed, falling back to direct DB access:", e);
  }
}

export async function getCache<T>(key: string): Promise<T | null> {
  if (!redisClient) return null;
  try {
    if (redisClient.status === "wait") {
      await redisClient.connect();
    }
    if (redisClient.status !== "ready" && redisClient.status !== "connecting") return null;
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export async function setCache(key: string, value: unknown, ttlSeconds = 3600): Promise<void> {
  if (!redisClient) return;
  try {
    if (redisClient.status === "wait") {
      await redisClient.connect();
    }
    if (redisClient.status !== "ready" && redisClient.status !== "connecting") return;
    await redisClient.set(key, JSON.stringify(value), "EX", ttlSeconds);
  } catch {
    // Ignore cache write errors
  }
}

export async function deleteCache(keyPattern: string): Promise<void> {
  if (!redisClient) return;
  try {
    if (redisClient.status === "wait") {
      await redisClient.connect();
    }
    if (redisClient.status !== "ready" && redisClient.status !== "connecting") return;
    if (keyPattern.includes("*")) {
      const keys = await redisClient.keys(keyPattern);
      if (keys.length > 0) {
        await redisClient.del(...keys);
      }
    } else {
      await redisClient.del(keyPattern);
    }
  } catch {
    // Ignore cache delete errors
  }
}

export default redisClient;
