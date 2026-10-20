"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Compass, Calendar, MapPin, Users, DollarSign } from "lucide-react";

interface BookingItem {
  _id: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  listing: {
    _id: string;
    title: string;
    location: string;
    country: string;
    image?: { url: string };
  };
}

export default function TripsPage() {
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadBookings() {
      try {
        const res = await fetch("/api/bookings");
        const data = await res.json();
        if (isMounted) {
          if (data.success && data.bookings) {
            setBookings(data.bookings);
          } else {
            setBookings([]);
          }
        }
      } catch {
        if (isMounted) setBookings([]);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadBookings();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 w-full">
        
        {/* Responsive Header */}
        <div className="flex items-center gap-3.5 mb-6 sm:mb-8 border-b border-gray-200 pb-4 sm:pb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-rose-50 text-[#ff385c] flex items-center justify-center shrink-0">
            <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              My Trips & Reservations
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Manage your upcoming adventures and past stays booked on Wonderlust.
            </p>
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 animate-pulse">
            <div className="h-56 bg-gray-200 rounded-3xl" />
            <div className="h-56 bg-gray-200 rounded-3xl" />
          </div>
        ) : bookings.length === 0 ? (
          /* Empty State */
          <div className="text-center py-12 sm:py-20 px-4 bg-white rounded-3xl border border-gray-200 shadow-sm space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-rose-50 text-[#ff385c] flex items-center justify-center mx-auto">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">No trips booked yet</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Time to dust off your bags and start planning your next getaway. Explore unique homes around the world.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#ff385c] hover:bg-[#e00b41] text-white font-bold py-3 px-8 rounded-full text-xs sm:text-sm shadow-lg shadow-[#ff385c]/25 transition hover:scale-105"
            >
              Explore Destinations
            </Link>
          </div>
        ) : (
          /* Bookings Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {bookings.map((b) => (
              <div
                key={b._id}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col sm:flex-row group"
              >
                {/* Image Section */}
                <div className="relative w-full sm:w-48 h-52 sm:h-auto bg-gray-100 shrink-0 overflow-hidden">
                  <Image
                    src={b.listing?.image?.url || "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80"}
                    alt={b.listing?.title || "Trip property"}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-3 left-3 sm:hidden bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    Confirmed
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-gray-900 text-base line-clamp-1 group-hover:text-[#ff385c] transition">
                        {b.listing?.title || "Reserved Villa"}
                      </h3>
                      <span className="hidden sm:inline-flex bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                        Confirmed
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#ff385c] shrink-0" />
                      <span className="truncate">{b.listing?.location}, {b.listing?.country}</span>
                    </p>
                  </div>

                  {/* Booking Metadata Box */}
                  <div className="text-xs text-gray-700 space-y-1.5 bg-gray-50 p-3 rounded-2xl border border-gray-100 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">
                        {new Date(b.checkIn).toLocaleDateString()} — {new Date(b.checkOut).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{b.guests} guest(s)</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-gray-900 pt-1 border-t border-gray-200/60">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Total Paid: ${b.totalPrice}</span>
                    </div>
                  </div>

                  {b.listing?._id && (
                    <div className="pt-1">
                      <Link
                        href={`/listings/${b.listing._id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#ff385c] hover:text-[#e00b41] transition"
                      >
                        View Property Details →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
