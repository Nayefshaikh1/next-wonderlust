"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  const fetchListings = useCallback(async () => {
    try {
      const url = new URL("/api/listings", window.location.origin);
      if (selectedCategory && selectedCategory !== "Trending") {
        url.searchParams.set("category", selectedCategory);
      }
      if (searchQuery) {
        url.searchParams.set("query", searchQuery);
      }

      const res = await fetch(url.toString());
      const data = await res.json();
      if (data.success && data.listings) {
        setListings(data.listings);
      } else {
        setListings([]);
      }
    } catch {
      setListings([]);
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    let ignore = false;
    async function load() {
      await fetchListings();
    }
    if (!ignore) {
      load();
    }
    return () => {
      ignore = true;
    };
  }, [fetchListings]);

  const handleSeedData = async () => {
    setIsLoading(true);
    try {
      await fetch("/api/seed", { method: "POST" });
      await fetchListings();
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Authentic Airbnb Header Navbar */}
      <Navbar onSearch={(query) => setSearchQuery(query)} />
      
      {/* Sticky Airbnb Category Filter Bar & Tax Switcher */}
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        showTaxes={showTaxes}
        onToggleTaxes={(val) => setShowTaxes(val)}
      />

      {/* Main Content: Listing Grid or Full Interactive Map */}
      <main className="flex-1 relative">
        {viewMode === "grid" ? (
          <ListingGrid
            listings={listings}
            isLoading={isLoading}
            showTaxes={showTaxes}
            onSeedData={handleSeedData}
          />
        ) : (
          <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-4 px-4 py-4">
            <div className="w-full h-[calc(100vh-210px)] min-h-[550px] relative">
              <MapView
                listings={listings}
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
