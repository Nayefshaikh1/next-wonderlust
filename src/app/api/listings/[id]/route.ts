import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Listing from "@/lib/models/Listing";
import "@/lib/models/Review"; // ensure model is registered
import { getCache, setCache, deleteCache } from "@/lib/redis";
import { INITIAL_LISTINGS } from "@/lib/seed-data";
import { getCoordinatesForLocation } from "@/lib/geo";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Handle demo fallback listings
    if (id.startsWith("demo_")) {
      const idx = parseInt(id.replace("demo_", ""), 10) - 1;
      const demoItem = INITIAL_LISTINGS[idx] || INITIAL_LISTINGS[0];
      return NextResponse.json({
        success: true,
        source: "mock_demo",
        listing: { _id: id, ...demoItem },
      });
    }

    try {
      await connectToDatabase();

      const cacheKey = `listing:${id}`;
      const cachedListing = await getCache(cacheKey);

      if (cachedListing) {
        return NextResponse.json({ success: true, source: "redis_cache", listing: cachedListing });
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rawListing: any = await Listing.findById(id).populate("reviews").lean();

      if (rawListing) {
        const listing = {
          ...rawListing,
          coordinates:
            rawListing.coordinates?.lat && rawListing.coordinates?.lng
              ? rawListing.coordinates
              : getCoordinatesForLocation(rawListing.location, rawListing.country),
        };

        await setCache(cacheKey, listing, 3600);
        return NextResponse.json({ success: true, source: "database", listing });
      }
    } catch (dbErr) {
      console.warn("DB findById failed, attempting fallback:", dbErr);
    }

    // Fallback to first initial listing item if DB query fails
    return NextResponse.json({
      success: true,
      source: "fallback",
      listing: { _id: id, ...INITIAL_LISTINGS[0] },
    });
  } catch (error) {
    console.error("GET Single Listing Error:", error);
    return NextResponse.json({
      success: true,
      source: "error_fallback",
      listing: { _id: "demo_1", ...INITIAL_LISTINGS[0] },
    });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const body = await req.json();

    const updatedListing = await Listing.findByIdAndUpdate(id, body, { new: true }).populate("reviews");

    if (!updatedListing) {
      return NextResponse.json({ success: false, error: "Listing not found" }, { status: 404 });
    }

    // Invalidate Redis cache
    await deleteCache(`listing:${id}`);
    await deleteCache("listings:*");

    return NextResponse.json({ success: true, listing: updatedListing });
  } catch (error) {
    console.error("PUT Listing Error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectToDatabase();

    const deletedListing = await Listing.findByIdAndDelete(id);

    if (!deletedListing) {
      return NextResponse.json({ success: false, error: "Listing not found" }, { status: 404 });
    }

    // Invalidate Redis cache
    await deleteCache(`listing:${id}`);
    await deleteCache("listings:*");

    return NextResponse.json({ success: true, message: "Listing deleted successfully" });
  } catch (error) {
    console.error("DELETE Listing Error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
