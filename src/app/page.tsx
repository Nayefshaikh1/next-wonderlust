"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import ListingGrid from "@/components/ListingGrid";
import MapView from "@/components/MapView";
import Footer from "@/components/Footer";
import { ListingItem } from "@/components/ListingCard";
import { FilterState } from "@/components/SearchFilterModal";
import { Map as MapIcon, List as ListIcon, X, SlidersHorizontal } from "lucide-react";

export default function WonderlustHome() {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const [showTaxes, setShowTaxes] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [listings, setListings] = useState<ListingItem[]>([]);
  const [mapListings, setMapListings] = useState<ListingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  // Advanced Filters state
  const [filters, setFilters] = useState<FilterState>({
    destination: "",
    minPrice: "",
    maxPrice: "",
    adults: 1,
    children: 0,
    amenities: [],
  });

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalListings, setTotalListings] = useState(0);
  const [limit, setLimit] = useState(15);

  const contentTopRef = useRef<HTMLDivElement>(null);

  const fetchListings = useCallback(
    async (pageToFetch = 1, currentLimit = limit) => {
      setIsLoading(true);
      try {
        const url = new URL("/api/listings", window.location.origin);
        if (selectedCategory && selectedCategory !== "Trending") {
          url.searchParams.set("category", selectedCategory);
        }

        const effectiveQuery = filters.destination || searchQuery;
        if (effectiveQuery) {
          url.searchParams.set("query", effectiveQuery);
        }

        if (filters.minPrice !== "") {
          url.searchParams.set("minPrice", filters.minPrice.toString());
        }
        if (filters.maxPrice !== "") {
          url.searchParams.set("maxPrice", filters.maxPrice.toString());
        }
        if (filters.amenities.length > 0) {
          url.searchParams.set("amenities", filters.amenities.join(","));
        }

        url.searchParams.set("page", pageToFetch.toString());
        url.searchParams.set("limit", currentLimit.toString());

        const res = await fetch(url.toString());
        const data = await res.json();
        if (data.success && data.listings) {
          setListings(data.listings);
          if (data.pagination) {
            setCurrentPage(data.pagination.currentPage);
            setTotalPages(data.pagination.totalPages);
            setTotalListings(data.pagination.totalListings);
          }
        } else {
          setListings([]);
        }
      } catch {
        setListings([]);
      } finally {
        setIsLoading(false);
      }
    },
    [selectedCategory, searchQuery, filters, limit]
  );

  // Fetch all listings for map mode so pins are complete
  const fetchMapListings = useCallback(async () => {
    try {
      const url = new URL("/api/listings", window.location.origin);
      if (selectedCategory && selectedCategory !== "Trending") {
        url.searchParams.set("category", selectedCategory);
      }

      const effectiveQuery = filters.destination || searchQuery;
      if (effectiveQuery) {
        url.searchParams.set("query", effectiveQuery);
      }

      if (filters.minPrice !== "") {
        url.searchParams.set("minPrice", filters.minPrice.toString());
      }
      if (filters.maxPrice !== "") {
        url.searchParams.set("maxPrice", filters.maxPrice.toString());
      }
      if (filters.amenities.length > 0) {
        url.searchParams.set("amenities", filters.amenities.join(","));
      }

      url.searchParams.set("all", "true");

      const res = await fetch(url.toString());
      const data = await res.json();
      if (data.success && data.listings) {
        setMapListings(data.listings);
      }
    } catch {
      setMapListings([]);
    }
  }, [selectedCategory, searchQuery, filters]);

  // Load listings on category or filter change
  useEffect(() => {
    let ignore = false;
    async function load() {
      if (!ignore) {
        setCurrentPage(1);
        await fetchListings(1);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, [fetchListings]);

  // When switching to map mode, load all listings if not already loaded
  useEffect(() => {
    if (viewMode === "map") {
      fetchMapListings();
    }
  }, [viewMode, fetchMapListings]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    fetchListings(newPage);

    // Smooth scroll to top of listings
    if (contentTopRef.current) {
      contentTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setCurrentPage(1);
    fetchListings(1, newLimit);
  };

  const handleSeedData = async () => {
    setIsLoading(true);
    try {
      await fetch("/api/seed", { method: "POST" });
      await fetchListings(1);
    } catch {
      setIsLoading(false);
    }
  };

  const removeFilter = (filterKey: keyof FilterState, value?: string) => {
    setFilters((prev) => {
      if (filterKey === "amenities" && value) {
        return { ...prev, amenities: prev.amenities.filter((a) => a !== value) };
      }
      if (filterKey === "minPrice" || filterKey === "maxPrice") {
        return { ...prev, [filterKey]: "" };
      }
      if (filterKey === "destination") {
        setSearchQuery("");
        return { ...prev, destination: "" };
      }
      return prev;
    });
    setCurrentPage(1);
  };

  const hasActiveFilters =
    Boolean(filters.destination) ||
    filters.minPrice !== "" ||
    filters.maxPrice !== "" ||
    filters.adults > 1 ||
    filters.children > 0 ||
    filters.amenities.length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Authentic Airbnb Header Navbar */}
      <Navbar
        onSearch={(query) => {
          setSearchQuery(query);
          setFilters((prev) => ({ ...prev, destination: query }));
          setCurrentPage(1);
        }}
        onFilterChange={(newFilters) => {
          setFilters(newFilters);
          setSearchQuery(newFilters.destination);
          setCurrentPage(1);
        }}
      />

      {/* Sticky Airbnb Category Filter Bar & Tax Switcher */}
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setCurrentPage(1);
        }}
        showTaxes={showTaxes}
        onToggleTaxes={(val) => setShowTaxes(val)}
      />

      {/* Active Filter Chips Bar (Shown when search/filters are active) */}
      {hasActiveFilters && (
        <div className="max-w-[1760px] mx-auto px-4 sm:px-8 py-2.5 flex items-center flex-wrap gap-2 border-b border-gray-100 bg-gray-50/50 w-full animate-in fade-in">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#ff385c]" />
            <span>Active Filters:</span>
          </div>

          {filters.destination && (
            <span className="inline-flex items-center gap-1 bg-white border border-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-2xs">
              Destination: {filters.destination}
              <button
                onClick={() => removeFilter("destination")}
                className="hover:text-rose-500 transition cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {(filters.minPrice !== "" || filters.maxPrice !== "") && (
            <span className="inline-flex items-center gap-1 bg-white border border-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-2xs">
              Price: ${filters.minPrice || 0} - ${filters.maxPrice || "Any"}
              <button
                onClick={() => {
                  removeFilter("minPrice");
                  removeFilter("maxPrice");
                }}
                className="hover:text-rose-500 transition cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {(filters.adults > 1 || filters.children > 0) && (
            <span className="inline-flex items-center gap-1 bg-white border border-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-2xs">
              {filters.adults + filters.children} Guests
            </span>
          )}

          {filters.amenities.map((amenity) => (
            <span
              key={amenity}
              className="inline-flex items-center gap-1 bg-white border border-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-2xs"
            >
              {amenity}
              <button
                onClick={() => removeFilter("amenities", amenity)}
                className="hover:text-rose-500 transition cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          <button
            onClick={() => {
              setFilters({
                destination: "",
                minPrice: "",
                maxPrice: "",
                adults: 1,
                children: 0,
                amenities: [],
              });
              setSearchQuery("");
              setCurrentPage(1);
            }}
            className="text-xs font-bold text-[#ff385c] hover:underline ml-2 cursor-pointer"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Anchor for smooth scroll on pagination */}
      <div ref={contentTopRef} className="scroll-mt-36" />

      {/* Main Content: Listing Grid or Full Interactive Map */}
      <main className="flex-1 relative">
        {viewMode === "grid" ? (
          <ListingGrid
            listings={listings}
            isLoading={isLoading}
            showTaxes={showTaxes}
            onSeedData={handleSeedData}
            currentPage={currentPage}
            totalPages={totalPages}
            totalListings={totalListings}
            limit={limit}
            onPageChange={handlePageChange}
            onLimitChange={handleLimitChange}
          />
        ) : (
          <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-4 px-4 py-4">
            <div className="w-full h-[calc(100vh-210px)] min-h-[550px] relative">
              <MapView
                listings={mapListings.length > 0 ? mapListings : listings}
                showTaxes={showTaxes}
                className="w-full h-full rounded-2xl shadow-md border border-gray-200"
              />
            </div>
          </div>
        )}

        {/* Floating Map / List Toggle Button (Airbnb Signature) */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-30">
          <button
            onClick={() => setViewMode(viewMode === "grid" ? "map" : "grid")}
            className="bg-[#222222] hover:bg-black text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 text-sm font-semibold transition-all hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
          >
            {viewMode === "grid" ? (
              <>
                <span>Show map</span>
                <MapIcon size={16} className="text-white" />
              </>
            ) : (
              <>
                <span>Show list</span>
                <ListIcon size={16} className="text-white" />
              </>
            )}
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
