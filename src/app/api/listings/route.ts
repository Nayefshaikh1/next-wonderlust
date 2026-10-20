import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Listing from "@/lib/models/Listing";
import Review from "@/lib/models/Review";
import { getCache, setCache, deleteCache } from "@/lib/redis";
import { INITIAL_LISTINGS } from "@/lib/seed-data";
import { getCurrentUser } from "@/lib/auth";
import { getCoordinatesForLocation } from "@/lib/geo";

export const dynamic = "force-dynamic";

// Fallback listings with generated string IDs for instant demo display
const MOCK_FALLBACK_LISTINGS = INITIAL_LISTINGS.map((item, idx) => ({
  _id: `demo_${idx + 1}`,
  ...item,
  reviews: item.reviews || [],
}));

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const query = searchParams.get("query");
    const maxPrice = searchParams.get("maxPrice");

    // Cache key based on query params
    const cacheKey = `listings:${category || "all"}:${query || ""}:${maxPrice || ""}`;
    const cachedData = await getCache(cacheKey);

    if (cachedData && Array.isArray(cachedData) && cachedData.length > 0) {
      return NextResponse.json({ success: true, source: "redis_cache", listings: cachedData });
    }

    try {
      await connectToDatabase();

      // Check count and auto-seed if empty
      const count = await Listing.countDocuments();
      if (count === 0) {
        console.log("No listings found in DB. Auto-seeding database...");
        for (const item of INITIAL_LISTINGS) {
          const reviewIds = [];
          if (item.reviews && item.reviews.length > 0) {
            for (const rev of item.reviews) {
              const newRev = await Review.create(rev);
              reviewIds.push(newRev._id);
            }
          }
          await Listing.create({ ...item, reviews: reviewIds });
        }
      }

      // Build filter
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const filter: any = {};
      if (category && category !== "All" && category !== "Trending") {
        filter.category = category;
      }

      if (query) {
        filter.$or = [
          { title: { $regex: query, $options: "i" } },
          { location: { $regex: query, $options: "i" } },
          { country: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } },
        ];
      }

      if (maxPrice) {
        filter.price = { $lte: Number(maxPrice) };
      }

      const rawListings = await Listing.find(filter)
        .populate("reviews")
        .sort({ createdAt: -1 })
        .lean();

      if (rawListings && rawListings.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const listings = rawListings.map((l: any) => ({
          ...l,
          coordinates:
            l.coordinates?.lat && l.coordinates?.lng
              ? l.coordinates
              : getCoordinatesForLocation(l.location, l.country),
        }));

        await setCache(cacheKey, listings, 600);
        return NextResponse.json({ success: true, source: "database", listings });
      }
    } catch (dbErr) {
      console.warn("DB query failed, falling back to mock initial listings:", dbErr);
    }

    // Fallback filter on MOCK_FALLBACK_LISTINGS
    let fallback = MOCK_FALLBACK_LISTINGS;
    if (category && category !== "All" && category !== "Trending") {
      fallback = fallback.filter((item) => item.category === category);
    }
    if (query) {
      const q = query.toLowerCase();
      fallback = fallback.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.country.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }

    return NextResponse.json({
      success: true,
      source: "fallback_data",
      listings: fallback.length > 0 ? fallback : MOCK_FALLBACK_LISTINGS,
    });
  } catch (error) {
    console.error("GET Listings Error:", error);
    return NextResponse.json({
      success: true,
      source: "error_fallback",
      listings: MOCK_FALLBACK_LISTINGS,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const user = await getCurrentUser();
    const body = await req.json();

    const { title, description, image, price, category, location, country, amenities, gallery } = body;

    if (!title || !description || !image || !price || !location || !country) {
      return NextResponse.json({ success: false, error: "Missing required listing fields" }, { status: 400 });
    }

    const newListing = await Listing.create({
      title,
      description,
      image: typeof image === "string" ? { url: image, filename: "listing_image" } : image,
      gallery: gallery || [],
      price: Number(price),
      category: category || "Trending",
      location,
      country,
      coordinates: body.coordinates || getCoordinatesForLocation(location, country),
      amenities: amenities || ["Wifi", "Kitchen", "Free parking"],
      host: {
        name: user?.username || "Wonderlust Host",
        isSuperhost: true,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      },
      owner: user?.userId,
    });

    // Invalidate Redis caches
    await deleteCache("listings:*");

    return NextResponse.json({ success: true, listing: newListing }, { status: 201 });
  } catch (error) {
    console.error("POST Listing Error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
