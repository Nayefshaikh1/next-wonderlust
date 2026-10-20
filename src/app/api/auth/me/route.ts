import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import User from "@/lib/models/User";

export async function GET() {
  try {
    const session = await getCurrentUser();
    if (!session) {
      return NextResponse.json({ success: false, user: null });
    }

    await connectToDatabase();
    const user = await User.findById(session.userId).lean();

    return NextResponse.json({
      success: true,
      user: user
        ? {
            id: user._id,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
            savedListings: user.savedListings || [],
          }
        : null,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
