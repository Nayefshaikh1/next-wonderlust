import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/lib/models/User";
import Listing from "@/lib/models/Listing";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  try {
    await connectToDatabase();
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ success: false, wishlist: [] });
    }

    const user = await User.findById(currentUser.userId).populate({
      path: "savedListings",
      model: Listing,
      populate: { path: "reviews" },
    });

    return NextResponse.json({ success: true, wishlist: user?.savedListings || [] });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 });
    }

    const { listingId } = await req.json();
    if (!listingId) {
      return NextResponse.json({ success: false, error: "Listing ID is required" }, { status: 400 });
    }

    const user = await User.findById(currentUser.userId);
    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    const index = user.savedListings.findIndex((id) => id.toString() === listingId);
    let isSaved = false;

    if (index > -1) {
      user.savedListings.splice(index, 1);
      isSaved = false;
    } else {
      user.savedListings.push(listingId);
      isSaved = true;
    }

    await user.save();

    return NextResponse.json({ success: true, isSaved, savedListings: user.savedListings });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
