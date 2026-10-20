/**
 * Admin Authentication Configuration
 * 
 * Default Administrator credentials and system permissions.
 */
export const ADMIN_CONFIG = {
  email: "admin@gmail.com",
  password: "password",
  username: "Administrator",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  role: "admin" as const,
};

export type UserRole = "admin" | "owner" | "user";
