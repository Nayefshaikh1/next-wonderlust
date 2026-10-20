/**
 * Admin Authentication Configuration
 * 
 * Default Administrator credentials and system permissions.
 */
export const ADMIN_CONFIG = {
  email: process.env.ADMIN_EMAIL || "admin@gmail.com",
  password: process.env.ADMIN_PASSWORD || "password",
  username: process.env.ADMIN_USERNAME || "Administrator",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  role: "admin" as const,
};

export type UserRole = "admin" | "owner" | "user";
