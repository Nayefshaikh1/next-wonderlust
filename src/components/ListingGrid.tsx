"use client";

import ListingCard, { ListingItem } from "./ListingCard";
import { Sparkles } from "lucide-react";

interface ListingGridProps {
  listings: ListingItem[];
  isLoading: boolean;
  showTaxes: boolean;
  onSeedData?: () => void;
}

export default function ListingGrid({ listings, isLoading, showTaxes, onSeedData }: ListingGridProps) {
  if (isLoading) {
    return (
      <div className="max-w-[1760px] mx-auto px-4 sm:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-3 animate-pulse">
            <div className="aspect-square w-full bg-gray-200 rounded-2xl" />
            <div className="h-4 bg-gray-200 rounded-md w-3/4" />
            <div className="h-3 bg-gray-200 rounded-md w-1/2" />
            <div className="h-4 bg-gray-200 rounded-md w-1/3" />
          </div>
        ))}
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="max-w-[1760px] mx-auto px-4 sm:px-8 py-20 text-center flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-rose-50 text-[#ff385c] rounded-full flex items-center justify-center mb-4">
          <Sparkles className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">No listings found</h3>
        <p className="text-gray-500 max-w-md mb-6">
          Try adjusting your search criteria or seed authentic Airbnb data into the database.
        </p>
        {onSeedData && (
          <button
            onClick={onSeedData}
            className="bg-[#ff385c] hover:bg-[#e00b41] text-white font-semibold py-3 px-6 rounded-full transition shadow-lg flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            Seed Airbnb Data
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-[1760px] mx-auto px-4 sm:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
      {listings.map((listing) => (
        <ListingCard key={listing._id} listing={listing} showTaxes={showTaxes} />
      ))}
    </div>
  );
}
