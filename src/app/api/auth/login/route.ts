import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";
import { ADMIN_CONFIG } from "@/lib/admin-config";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, error: "Email and password are required" }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check special admin configuration credentials
    if (
      normalizedEmail === ADMIN_CONFIG.email.toLowerCase() &&
      password === ADMIN_CONFIG.password
    ) {
      let adminUser = await User.findOne({ email: ADMIN_CONFIG.email }).select("+password");

      if (!adminUser) {
        const hashedPassword = await bcrypt.hash(ADMIN_CONFIG.password, 10);
        adminUser = await User.create({
          username: ADMIN_CONFIG.username,
          email: ADMIN_CONFIG.email,
          password: hashedPassword,
          role: "admin",
          avatar: ADMIN_CONFIG.avatar,
        });
      } else if (adminUser.role !== "admin") {
        adminUser.role = "admin";
        await adminUser.save();
      }

      const token = signToken({
        userId: (adminUser._id as import("mongoose").Types.ObjectId).toString(),
        email: adminUser.email,
        username: adminUser.username,
        role: "admin",
        avatar: adminUser.avatar,
      });

      const response = NextResponse.json({
        success: true,
        user: {
          id: adminUser._id,
          username: adminUser.username,
          email: adminUser.email,
          avatar: adminUser.avatar,
          role: "admin",
        },
      });

      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
      });

      return response;
    }

    const user = await User.findOne({ email: normalizedEmail }).select("+password");
    if (!user || !user.password) {
      return NextResponse.json({ success: false, error: "Invalid email or password" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, error: "Invalid email or password" }, { status: 401 });
    }

    const token = signToken({
      userId: (user._id as import("mongoose").Types.ObjectId).toString(),
      email: user.email,
      username: user.username,
      role: user.role || "user",
      avatar: user.avatar,
    });

    const response = NextResponse.json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        role: user.role || "user",
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
