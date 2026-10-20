"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingGrid from "@/components/ListingGrid";
import { ListingItem } from "@/components/ListingCard";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<ListingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadWishlist() {
      try {
        const res = await fetch("/api/wishlist");
        const data = await res.json();
        if (data.success && data.wishlist) {
          setWishlist(data.wishlist);
        }
      } catch {
        setWishlist([]);
      } finally {
        setIsLoading(false);
      }
    }
    loadWishlist();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-[1760px] mx-auto px-4 sm:px-8 py-10 w-full">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-8 h-8 fill-[#ff385c] text-[#ff385c]" />
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Wishlists</h1>
        </div>

        <ListingGrid listings={wishlist} isLoading={isLoading} showTaxes={false} />
      </main>

      <Footer />
    </div>
  );
}
