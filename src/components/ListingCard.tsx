"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Star, Sparkles } from "lucide-react";

export interface ListingItem {
  _id: string;
  title: string;
  description: string;
  image: { url: string };
  price: number;
  category: string;
  location: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  host?: { isSuperhost?: boolean };
  reviews?: Array<{ rating: number }>;
}

interface ListingCardProps {
  listing: ListingItem;
  showTaxes?: boolean;
  isSaved?: boolean;
  onToggleSaved?: (id: string) => void;
}

export default function ListingCard({
  listing,
  showTaxes = false,
  isSaved = false,
  onToggleSaved,
}: ListingCardProps) {
  const [liked, setLiked] = useState(isSaved);

  const avgRating =
    listing.reviews && listing.reviews.length > 0
      ? (
          listing.reviews.reduce((acc, r) => acc + r.rating, 0) /
          listing.reviews.length
        ).toFixed(2)
      : "4.92";

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    if (onToggleSaved) {
      onToggleSaved(listing._id);
    }
  };

  const taxMultiplier = 1.18; // +18% GST
  const finalPrice = showTaxes ? Math.round(listing.price * taxMultiplier) : listing.price;

  return (
    <Link href={`/listings/${listing._id}`} className="group cursor-pointer flex flex-col gap-2.5">
      {/* Image Container */}
      <div className="relative aspect-[20/19] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-sm border border-gray-100/80 transition duration-300 group-hover:shadow-md">
        <Image
          src={listing.image?.url || "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"}
          alt={listing.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10 pointer-events-none">
          {listing.host?.isSuperhost ? (
            <div className="bg-white/95 backdrop-blur-md text-gray-900 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400" />
              Superhost
            </div>
          ) : (
            <div className="bg-gray-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {listing.category || "Guest Favorite"}
            </div>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={handleHeartClick}
          aria-label="Save listing to wishlist"
          className="absolute top-3 right-3 p-2 rounded-full bg-black/10 backdrop-blur-xs hover:bg-black/20 transition transform hover:scale-110 active:scale-95 z-10"
        >
          <Heart
            className={`w-5 h-5 transition duration-200 ${
              liked
                ? "fill-[#ff385c] text-[#ff385c] drop-shadow"
                : "fill-black/30 text-white stroke-[2.2]"
            }`}
          />
        </button>

        {/* Bottom Subtle Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>

      {/* Info Details */}
      <div className="space-y-1">
        <div className="flex justify-between items-start pt-0.5">
          <h3 className="font-bold text-gray-900 text-sm line-clamp-1 leading-tight group-hover:text-[#ff385c] transition">
            {listing.location}, {listing.country}
          </h3>
          <div className="flex items-center gap-1 text-xs font-bold text-gray-900 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100 shrink-0">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{avgRating}</span>
          </div>
        </div>

        <p className="text-gray-500 text-xs line-clamp-1 font-medium">{listing.title}</p>
        <p className="text-gray-400 text-[11px] font-normal">{listing.category}</p>

        {/* Price */}
        <div className="flex items-baseline gap-1 pt-1">
          <span className="font-extrabold text-gray-900 text-base">${finalPrice}</span>
          <span className="text-gray-600 text-xs font-normal">night</span>
          {showTaxes && (
            <span className="text-[11px] text-gray-500 font-medium ml-1 underline">
              total before taxes
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
