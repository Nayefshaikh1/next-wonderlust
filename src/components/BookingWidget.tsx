"use client";

import { useState } from "react";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";

interface BookingWidgetProps {
  listingId: string;
  price: number;
  rating?: string;
  reviewCount?: number;
}

export default function BookingWidget({ listingId, price, rating = "4.95", reviewCount = 12 }: BookingWidgetProps) {
  const todayStr = new Date().toISOString().split("T")[0];
  
  const getTomorrowStr = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };

  const getFourDaysLaterStr = () => {
    const d = new Date();
    d.setDate(d.getDate() + 5);
    return d.toISOString().split("T")[0];
  };

  const [checkIn, setCheckIn] = useState(getTomorrowStr);
  const [checkOut, setCheckOut] = useState(getFourDaysLaterStr);
  const [guests, setGuests] = useState(2);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Calculate nights
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.max(end.getTime() - start.getTime(), 86400000);
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 4;

  const basePrice = price * nights;
  const cleaningFee = 85;
  const serviceFee = Math.round(basePrice * 0.12);
  const tax = Math.round((basePrice + serviceFee) * 0.18);
  const totalPrice = basePrice + cleaningFee + serviceFee + tax;

  const handleReserve = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setBookingSuccess(false);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          listingId,
          checkIn,
          checkOut,
          guests,
          totalPrice,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setBookingSuccess(true);
      } else {
        setErrorMessage(data.error || "Failed to place reservation");
      }
    } catch {
      setErrorMessage("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="sticky top-28 bg-white border border-gray-200 rounded-3xl p-6 shadow-xl space-y-6">
      {/* Header Price & Rating */}
      <div className="flex justify-between items-baseline">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-500 font-normal text-sm">/ night</span>
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
          <Star className="w-4 h-4 fill-black text-black" />
          <span>{rating}</span>
          <span className="text-gray-400 font-normal">({reviewCount})</span>
        </div>
      </div>

      {bookingSuccess ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-bold text-emerald-900">Reservation Confirmed!</h4>
          <p className="text-xs text-emerald-700">
            Your trip from {checkIn} to {checkOut} for {guests} guest(s) is booked.
          </p>
          <a
            href="/trips"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-5 rounded-full transition"
          >
            View My Trips
          </a>
        </div>
      ) : (
        <form onSubmit={handleReserve} className="space-y-4">
          {/* Dates & Guests Box */}
          <div className="border border-gray-300 rounded-2xl overflow-hidden divide-y divide-gray-300">
            <div className="grid grid-cols-2 divide-x divide-gray-300">
              <div className="p-3 bg-gray-50/50">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700">Check-in</label>
                <input
                  type="date"
                  min={todayStr}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-xs font-medium text-gray-900 outline-none"
                  required
                />
              </div>
              <div className="p-3 bg-gray-50/50">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700">Check-out</label>
                <input
                  type="date"
                  min={checkIn || todayStr}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-xs font-medium text-gray-900 outline-none"
                  required
                />
              </div>
            </div>
            <div className="p-3 bg-gray-50/50">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-transparent text-xs font-medium text-gray-900 outline-none cursor-pointer"
              >
                <option value={1}>1 guest</option>
                <option value={2}>2 guests</option>
                <option value={3}>3 guests</option>
                <option value={4}>4 guests</option>
                <option value={5}>5+ guests</option>
              </select>
            </div>
          </div>

          {errorMessage && <p className="text-xs text-rose-600 font-medium text-center">{errorMessage}</p>}

          {/* Airbnb Reserve Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 btn-airbnb text-white font-bold text-base rounded-xl shadow-md transition disabled:opacity-50"
          >
            {isSubmitting ? "Reserving..." : "Reserve"}
          </button>

          <p className="text-center text-xs text-gray-500 font-medium">You won&apos;t be charged yet</p>

          {/* Price Breakdown */}
          <div className="space-y-3 pt-3 text-sm border-t border-gray-200 text-gray-700">
            <div className="flex justify-between">
              <span className="underline">${price} x {nights} nights</span>
              <span>${basePrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="underline">Cleaning fee</span>
              <span>${cleaningFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="underline">Wonderlust service fee</span>
              <span>${serviceFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="underline">Estimated taxes (+18% GST)</span>
              <span>${tax}</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between font-bold text-base text-gray-900 pt-1">
              <span>Total before taxes</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </form>
      )}

      {/* Guarantee badge */}
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-xs text-gray-600">
        <ShieldCheck className="w-6 h-6 text-[#ff385c] shrink-0" />
        <span>Every booking includes free protection from Host cancellations and listing inaccuracies.</span>
      </div>
    </div>
  );
}
