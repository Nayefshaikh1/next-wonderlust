"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import ListingGrid from "@/components/ListingGrid";
import MapView from "@/components/MapView";
import Footer from "@/components/Footer";
import { ListingItem } from "@/components/ListingCard";
import { Map as MapIcon, List as ListIcon } from "lucide-react";

export default function WonderlustHome() {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const [showTaxes, setShowTaxes] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [listings, setListings] = useState<ListingItem[]>([]);
  const [mapListings, setMapListings] = useState<ListingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalListings, setTotalListings] = useState(0);
  const limit = 12;

  const contentTopRef = useRef<HTMLDivElement>(null);

  const fetchListings = useCallback(
    async (pageToFetch = 1) => {
      setIsLoading(true);
      try {
        const url = new URL("/api/listings", window.location.origin);
        if (selectedCategory && selectedCategory !== "Trending") {
          url.searchParams.set("category", selectedCategory);
        }
        if (searchQuery) {
          url.searchParams.set("query", searchQuery);
        }
        url.searchParams.set("page", pageToFetch.toString());
        url.searchParams.set("limit", limit.toString());

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
    [selectedCategory, searchQuery, limit]
  );

  // Fetch all listings for map mode so pins are complete
  const fetchMapListings = useCallback(async () => {
    try {
      const url = new URL("/api/listings", window.location.origin);
      if (selectedCategory && selectedCategory !== "Trending") {
        url.searchParams.set("category", selectedCategory);
      }
      if (searchQuery) {
        url.searchParams.set("query", searchQuery);
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
  }, [selectedCategory, searchQuery]);

  // Load listings on category or search query change (reset to page 1)
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

  const handleSeedData = async () => {
    setIsLoading(true);
    try {
      await fetch("/api/seed", { method: "POST" });
      await fetchListings(1);
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Authentic Airbnb Header Navbar */}
      <Navbar
        onSearch={(query) => {
          setSearchQuery(query);
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
