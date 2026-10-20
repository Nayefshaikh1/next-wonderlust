"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import ListingGrid from "@/components/ListingGrid";
import Footer from "@/components/Footer";
import { ListingItem } from "@/components/ListingCard";

export default function WonderlustHome() {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const [showTaxes, setShowTaxes] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [listings, setListings] = useState<ListingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

      {/* Main Listing Grid (Same to Same Airbnb Layout) */}
      <main className="flex-1">
        <ListingGrid
          listings={listings}
          isLoading={isLoading}
          showTaxes={showTaxes}
          onSeedData={handleSeedData}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
