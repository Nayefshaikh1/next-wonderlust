import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ success: false, error: "Please fill all required fields" }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return NextResponse.json({ success: false, error: "Email is already registered" }, { status: 400 });
    }

    const role = normalizedEmail === "admin@gmail.com" ? "admin" : "user";
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email: normalizedEmail,
      password: hashedPassword,
      role,
    });

    const token = signToken({
      userId: (newUser._id as import("mongoose").Types.ObjectId).toString(),
      email: newUser.email,
      username: newUser.username,
      role,
      avatar: newUser.avatar,
    });

    const response = NextResponse.json({
      success: true,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar,
        role,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
