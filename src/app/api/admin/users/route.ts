import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import User from "@/lib/models/User";

export const dynamic = "force-dynamic";

/**
 * GET /api/admin/users
 * Returns all users in the system (Admin only)
 */
export async function GET() {
  try {
    const session = await getCurrentUser();
    if (!session || session.role !== "admin") {
      return NextResponse.json(
        { success: false, error: "Access denied. Administrator privileges required." },
        { status: 403 }
      );
    }

    await connectToDatabase();
    const users = await User.find({})
      .select("_id username email role createdAt avatar")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error("GET Admin Users Error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/admin/users
 * Update user role (e.g. make admin, owner, or user) (Admin only)
 */
export async function PUT(req: NextRequest) {
  try {
    const session = await getCurrentUser();
    if (!session || session.role !== "admin") {
      return NextResponse.json(
        { success: false, error: "Access denied. Administrator privileges required." },
        { status: 403 }
      );
    }

    const { userId, role } = await req.json();

    if (!userId || !role || !["admin", "owner", "user"].includes(role)) {
      return NextResponse.json(
        { success: false, error: "Valid userId and role ('admin' | 'owner' | 'user') are required." },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const targetUser = await User.findById(userId);

    if (!targetUser) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // Update role
    targetUser.role = role;
    await targetUser.save();

    return NextResponse.json({
      success: true,
      message: `User ${targetUser.username} role updated to ${role}.`,
      user: {
        _id: targetUser._id,
        username: targetUser.username,
        email: targetUser.email,
        role: targetUser.role,
      },
    });
  } catch (error) {
    console.error("PUT Admin Users Error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
