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
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const amenities = searchParams.get("amenities");
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "8", 10)));
    const fetchAll = searchParams.get("all") === "true";

    // Cache key based on query params & pagination
    const cacheKey = fetchAll
      ? `listings:${category || "all"}:${query || ""}:${minPrice || ""}:${maxPrice || ""}:${amenities || ""}:all`
      : `listings:${category || "all"}:${query || ""}:${minPrice || ""}:${maxPrice || ""}:${amenities || ""}:p${page}:l${limit}`;

    const cachedData = await getCache<{
      listings: unknown[];
      pagination: {
        currentPage: number;
        totalPages: number;
        totalListings: number;
        hasMore: boolean;
        limit: number;
      };
    }>(cacheKey);

    if (cachedData) {
      if (Array.isArray(cachedData)) {
        return NextResponse.json({
          success: true,
          source: "cache",
          listings: cachedData,
          pagination: {
            currentPage: 1,
            totalPages: 1,
            totalListings: cachedData.length,
            hasMore: false,
            limit: cachedData.length,
          },
        });
      }
      return NextResponse.json({
        success: true,
        source: "cache",
        listings: cachedData.listings,
        pagination: cachedData.pagination,
      });
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

      if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);
      }

      if (amenities) {
        const amenityList = amenities.split(",").map((a) => a.trim()).filter(Boolean);
        if (amenityList.length > 0) {
          filter.amenities = { $all: amenityList.map((a) => new RegExp(a, "i")) };
        }
      }

      // Count total matches for pagination
      const totalListings = await Listing.countDocuments(filter);
      const totalPages = Math.ceil(totalListings / limit) || 1;
      const skip = fetchAll ? 0 : (page - 1) * limit;

      const queryBuilder = Listing.find(filter)
        .populate("reviews")
        .sort({ createdAt: -1 })
        .skip(skip);

      if (!fetchAll) {
        queryBuilder.limit(limit);
      }

      const rawListings = await queryBuilder.lean();

      if (rawListings) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const listings = rawListings.map((l: any) => ({
          ...l,
          coordinates:
            l.coordinates?.lat && l.coordinates?.lng
              ? l.coordinates
              : getCoordinatesForLocation(l.location, l.country),
        }));

        const pagination = {
          currentPage: fetchAll ? 1 : page,
          totalPages: fetchAll ? 1 : totalPages,
          totalListings,
          hasMore: fetchAll ? false : page < totalPages,
          limit: fetchAll ? totalListings : limit,
        };

        await setCache(cacheKey, { listings, pagination }, 600);

        return NextResponse.json({
          success: true,
          source: "database",
          listings,
          pagination,
        });
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
    if (minPrice) {
      fallback = fallback.filter((item) => item.price >= Number(minPrice));
    }
    if (maxPrice) {
      fallback = fallback.filter((item) => item.price <= Number(maxPrice));
    }
    if (amenities) {
      const amenityList = amenities.split(",").map((a) => a.trim().toLowerCase()).filter(Boolean);
      if (amenityList.length > 0) {
        fallback = fallback.filter((item) => {
          const itemAmenities = (item.amenities || []).map((a) => a.toLowerCase());
          return amenityList.every((reqA) => itemAmenities.some((ia) => ia.includes(reqA)));
        });
      }
    }

    const totalFallback = fallback.length;
    const totalFallbackPages = Math.ceil(totalFallback / limit) || 1;
    const paginatedFallback = fetchAll
      ? fallback
      : fallback.slice((page - 1) * limit, page * limit);

    return NextResponse.json({
      success: true,
      source: "fallback_data",
      listings: paginatedFallback,
      pagination: {
        currentPage: fetchAll ? 1 : page,
        totalPages: fetchAll ? 1 : totalFallbackPages,
        totalListings: totalFallback,
        hasMore: fetchAll ? false : page < totalFallbackPages,
        limit: fetchAll ? totalFallback : limit,
      },
    });
  } catch (error) {
    console.error("GET Listings Error:", error);
    return NextResponse.json({
      success: true,
      source: "error_fallback",
      listings: MOCK_FALLBACK_LISTINGS.slice(0, 12),
      pagination: {
        currentPage: 1,
        totalPages: Math.ceil(MOCK_FALLBACK_LISTINGS.length / 12),
        totalListings: MOCK_FALLBACK_LISTINGS.length,
        hasMore: true,
        limit: 12,
      },
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

    // If the creator is a regular user, elevate their role to owner
    if (user && user.userId) {
      const User = (await import("@/lib/models/User")).default;
      const creator = await User.findById(user.userId);
      if (creator && creator.role === "user") {
        creator.role = "owner";
        await creator.save();
      }
    }

    // Invalidate Redis and in-memory caches
    await deleteCache("listings:*");

    return NextResponse.json({ success: true, listing: newListing }, { status: 201 });
  } catch (error) {
    console.error("POST Listing Error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
