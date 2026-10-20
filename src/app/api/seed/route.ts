import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Listing from "@/lib/models/Listing";
import Review from "@/lib/models/Review";
import { INITIAL_LISTINGS } from "@/lib/seed-data";
import { deleteCache } from "@/lib/redis";

export const dynamic = "force-dynamic";

export async function POST() {
  try {
    await connectToDatabase();

    // Clear existing sample listings and reviews
    await Listing.deleteMany({});
    await Review.deleteMany({});

    const reviewsToInsert: InstanceType<typeof Review>[] = [];
    const listingsToInsert = [];

    for (const item of INITIAL_LISTINGS) {
      const reviewIds = [];
      if (item.reviews && item.reviews.length > 0) {
        for (const rev of item.reviews) {
          const revDoc = new Review(rev);
          reviewsToInsert.push(revDoc);
          reviewIds.push(revDoc._id);
        }
      }

      listingsToInsert.push({
        ...item,
        reviews: reviewIds,
      });
    }

    if (reviewsToInsert.length > 0) {
      await Review.insertMany(reviewsToInsert);
    }

    const createdListings = await Listing.insertMany(listingsToInsert);

    // Invalidate Redis caches
    await deleteCache("listings:*");
    await deleteCache("listing:*");

    return NextResponse.json({
      success: true,
      message: `Database successfully seeded with ${createdListings.length} Wonderlust listings!`,
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
