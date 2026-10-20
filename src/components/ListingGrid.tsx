"use client";

import ListingCard, { ListingItem } from "./ListingCard";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

interface ListingGridProps {
  listings: ListingItem[];
  isLoading: boolean;
  showTaxes: boolean;
  onSeedData?: () => void;
  currentPage?: number;
  totalPages?: number;
  totalListings?: number;
  limit?: number;
  onPageChange?: (page: number) => void;
}

export default function ListingGrid({
  listings,
  isLoading,
  showTaxes,
  onSeedData,
  currentPage = 1,
  totalPages = 1,
  totalListings = 0,
  limit = 12,
  onPageChange,
}: ListingGridProps) {
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
            className="bg-[#ff385c] hover:bg-[#e00b41] text-white font-semibold py-3 px-6 rounded-full transition shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            Seed Airbnb Data
          </button>
        )}
      </div>
    );
  }

  // Calculate range numbers for "Showing X – Y of Z stays"
  const startIdx = (currentPage - 1) * limit + 1;
  const endIdx = Math.min(currentPage * limit, totalListings || listings.length);

  // Generate page numbers array with ellipses if needed
  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [1];
    if (currentPage > 3) pages.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let p = start; p <= end; p++) {
      pages.push(p);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  return (
    <div className="max-w-[1760px] mx-auto px-4 sm:px-8 py-8 flex flex-col gap-10">
      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
        {listings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} showTaxes={showTaxes} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && onPageChange && (
        <div className="border-t border-gray-100 pt-8 pb-12 flex flex-col items-center justify-center gap-4">
          {totalListings > 0 && (
            <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
              Showing <span className="text-gray-900 font-bold">{startIdx}</span> –{" "}
              <span className="text-gray-900 font-bold">{endIdx}</span> of{" "}
              <span className="text-gray-900 font-bold">{totalListings}</span> stays
            </p>
          )}

          <nav aria-label="Pagination Navigation" className="flex items-center gap-2">
            {/* Previous Page Button */}
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              aria-label="Previous Page"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-gray-900 hover:text-black disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Number Buttons */}
            <div className="flex items-center gap-1.5">
              {getPageNumbers().map((item, idx) => {
                if (item === "...") {
                  return (
                    <span key={`dots-${idx}`} className="w-8 text-center text-gray-400 select-none">
                      ...
                    </span>
                  );
                }
                const pageNum = item as number;
                const isActive = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    aria-current={isActive ? "page" : undefined}
                    className={`w-10 h-10 rounded-full text-sm font-semibold transition cursor-pointer ${
                      isActive
                        ? "bg-[#222222] text-white shadow-md scale-105"
                        : "text-gray-700 hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Next Page Button */}
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              aria-label="Next Page"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-gray-900 hover:text-black disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
