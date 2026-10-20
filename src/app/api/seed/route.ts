import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Listing from "@/lib/models/Listing";
import Review from "@/lib/models/Review";
import { INITIAL_LISTINGS } from "@/lib/seed-data";
import { deleteCache } from "@/lib/redis";

export async function POST() {
  try {
    await connectToDatabase();

    // Clear existing sample listings and reviews
    await Listing.deleteMany({});
    await Review.deleteMany({});

    const createdListings = [];

    for (const item of INITIAL_LISTINGS) {
      // Create reviews first
      const reviewIds = [];
      if (item.reviews && item.reviews.length > 0) {
        for (const rev of item.reviews) {
          const newRev = await Review.create(rev);
          reviewIds.push(newRev._id);
        }
      }

      const newListing = await Listing.create({
        ...item,
        reviews: reviewIds,
      });

      createdListings.push(newListing);
    }

    // Invalidate Redis caches
    await deleteCache("listings:*");
    await deleteCache("listing:*");

    return NextResponse.json({
      success: true,
      message: `Database successfully seeded with ${createdListings.length} Airbnb listings!`,
      count: createdListings.length,
    });
  } catch (error) {
    console.error("Seeding Error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function GET() {
  return POST();
}
