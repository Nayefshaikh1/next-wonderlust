"use client";

import { useEffect, useState, use, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoMosaic from "@/components/PhotoMosaic";
import BookingWidget from "@/components/BookingWidget";
import ReviewSection, { ReviewItem } from "@/components/ReviewSection";
import { Star, Share, Heart, Award, Sparkles, MapPin, Wifi, Car, Utensils, Waves, Flame, Edit, Trash2 } from "lucide-react";

interface SingleListing {
  _id: string;
  title: string;
  description: string;
  image: { url: string };
  gallery?: string[];
  price: number;
  category: string;
  location: string;
  country: string;
  amenities?: string[];
  host?: { name: string; isSuperhost?: boolean; avatar?: string };
  reviews?: ReviewItem[];
}

export default function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [listing, setListing] = useState<SingleListing | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 2200);
    }
  };

  const fetchListingDetail = useCallback(async () => {
    try {
      const res = await fetch(`/api/listings/${resolvedParams.id}`);
      const data = await res.json();
      if (data.success && data.listing) {
        setListing(data.listing);
      } else {
        setListing(null);
      }
    } catch {
      setListing(null);
    } finally {
      setIsLoading(false);
    }
  }, [resolvedParams.id]);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      if (isMounted) {
        await fetchListingDetail();
      }
    };
    loadData();
    return () => {
      isMounted = false;
    };
  }, [fetchListingDetail]);

  const handleDeleteListing = async () => {
    try {
      const res = await fetch(`/api/listings/${resolvedParams.id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        router.push("/");
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-12 animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded-md w-2/3" />
          <div className="h-96 bg-gray-200 rounded-3xl" />
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 space-y-4">
              <div className="h-6 bg-gray-200 rounded-md w-1/3" />
              <div className="h-20 bg-gray-200 rounded-md" />
            </div>
            <div className="h-80 bg-gray-200 rounded-3xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Listing Not Found</h2>
          <p className="text-gray-500 mb-6">The vacation home you are looking for does not exist or was removed.</p>
          <Link href="/" className="bg-[#ff385c] text-white px-6 py-3 rounded-full font-semibold">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const reviewsList = listing.reviews || [];
  const avgRating =
    reviewsList.length > 0
      ? (reviewsList.reduce((acc, r) => acc + r.rating, 0) / reviewsList.length).toFixed(2)
      : "4.95";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-[1280px] mx-auto px-4 sm:px-8 py-8 w-full">
        {/* Title & Top Action Bar */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{listing.title}</h1>
          
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm font-semibold text-gray-900 pb-2">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-black text-black" />
                {avgRating}
              </span>
              <span>·</span>
              <span className="underline">{reviewsList.length} reviews</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-gray-700">
                <MapPin className="w-4 h-4 text-[#ff385c]" />
                {listing.location}, {listing.country}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 px-3.5 py-2 rounded-full transition shadow-2xs active:scale-95"
              >
                <Share className="w-4 h-4 text-gray-700" />
                Share
              </button>

              <button
                onClick={() => setSaved(!saved)}
                className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-full transition shadow-2xs active:scale-95 ${
                  saved
                    ? "bg-rose-50 text-[#ff385c] border border-rose-200"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                <Heart className={`w-4 h-4 ${saved ? "fill-[#ff385c] text-[#ff385c]" : "text-gray-700"}`} />
                {saved ? "Saved" : "Save"}
              </button>

              {/* Edit / Delete Buttons */}
              <Link
                href={`/listings/${listing._id}/edit`}
                className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 px-3.5 py-2 rounded-full transition shadow-2xs active:scale-95"
              >
                <Edit className="w-4 h-4 text-gray-700" />
                Edit
              </Link>

              <button
                onClick={() => setDeleteConfirm(true)}
                className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-rose-50 hover:bg-rose-100 text-rose-700 px-3.5 py-2 rounded-full transition shadow-2xs active:scale-95"
              >
                <Trash2 className="w-4 h-4 text-rose-600" />
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Delete Confirmation Dialog */}
        {deleteConfirm && (
          <div className="my-4 p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-center justify-between">
            <p className="text-sm font-semibold text-rose-800">Are you sure you want to delete this listing?</p>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDeleteListing}
                className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-2 rounded-xl"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setDeleteConfirm(false)}
                className="bg-white border border-gray-300 text-xs font-semibold px-4 py-2 rounded-xl text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Share Toast Notice */}
        {shareToast && (
          <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-5 py-3 rounded-full shadow-2xl z-50 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-bounce">
            <Share className="w-4 h-4 text-[#ff385c]" />
            Link copied to clipboard!
          </div>
        )}

        {/* Airbnb 5-Photo Mosaic */}
        <PhotoMosaic mainImage={listing.image?.url} gallery={listing.gallery} title={listing.title} />

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
          
          {/* Left Column: Info, Host, Amenities */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Host Header */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Hosted by {listing.host?.name || "Wonderlust Superhost"}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  10 guests · 4 bedrooms · 6 beds · 3 baths · Category: <span className="font-semibold text-gray-800">{listing.category}</span>
                </p>
              </div>
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#ff385c] shrink-0">
                <Image
                  src={listing.host?.avatar || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"}
                  alt="Host Avatar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6 pb-6 border-b border-gray-200">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-[#ff385c] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{listing.host?.name} is a Superhost</h4>
                  <p className="text-xs text-gray-500">Superhosts are experienced, highly rated hosts committed to providing great stays.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#ff385c] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Great check-in experience</h4>
                  <p className="text-xs text-gray-500">100% of recent guests gave the check-in process a 5-star rating.</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="pb-6 border-b border-gray-200 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">About this place</h3>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{listing.description}</p>
            </div>

            {/* Amenities Grid */}
            <div className="pb-6 border-b border-gray-200 space-y-4">
              <h3 className="text-lg font-bold text-gray-900">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-800 font-medium">
                <div className="flex items-center gap-3"><Wifi className="w-5 h-5 text-gray-600" /> High-speed Wi-Fi</div>
                <div className="flex items-center gap-3"><Waves className="w-5 h-5 text-gray-600" /> Heated Pool / Hot Tub</div>
                <div className="flex items-center gap-3"><Car className="w-5 h-5 text-gray-600" /> Free parking on premises</div>
                <div className="flex items-center gap-3"><Utensils className="w-5 h-5 text-gray-600" /> Chef Kitchen & Coffee</div>
                <div className="flex items-center gap-3"><Flame className="w-5 h-5 text-gray-600" /> Fireplace & Firepit</div>
              </div>
            </div>

            {/* Review Section */}
            <ReviewSection
              listingId={listing._id}
              reviews={reviewsList}
              onReviewAdded={fetchListingDetail}
            />
          </div>

          {/* Right Column: Floating Sticky Booking Widget */}
          <div className="lg:col-span-1">
            <BookingWidget
              listingId={listing._id}
              price={listing.price}
              rating={avgRating}
              reviewCount={reviewsList.length}
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
