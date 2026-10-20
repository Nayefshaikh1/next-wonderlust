"use client";

import { useState } from "react";
import {
  X,
  Search,
  Globe,
  SlidersHorizontal,
  Wifi,
  Utensils,
  Car,
  Waves,
  Wind,
  Sparkles,
  Laptop,
  PawPrint,
  Check,
  Plus,
  Minus,
  MapPin,
} from "lucide-react";

export interface FilterState {
  destination: string;
  minPrice: number | "";
  maxPrice: number | "";
  adults: number;
  children: number;
  amenities: string[];
}

interface SearchFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFilters?: Partial<FilterState>;
  onApplyFilters: (filters: FilterState) => void;
}

const REGIONS = [
  { id: "flexible", label: "I'm flexible", icon: Globe, query: "" },
  { id: "europe", label: "Europe", icon: MapPin, query: "Europe" },
  { id: "usa", label: "United States", icon: MapPin, query: "USA" },
  { id: "asia", label: "Asia & Japan", icon: MapPin, query: "Asia" },
  { id: "beach", label: "Beachfront", icon: Waves, query: "Beach" },
  { id: "mountains", label: "Mountains", icon: Sparkles, query: "Mountain" },
];

const AMENITY_OPTIONS = [
  { id: "Wifi", label: "Fast Wifi", icon: Wifi },
  { id: "Kitchen", label: "Kitchen", icon: Utensils },
  { id: "Free parking", label: "Free parking", icon: Car },
  { id: "Pool", label: "Private Pool", icon: Waves },
  { id: "Air conditioning", label: "Air conditioning", icon: Wind },
  { id: "Hot tub", label: "Hot tub", icon: Sparkles },
  { id: "Dedicated workspace", label: "Dedicated workspace", icon: Laptop },
  { id: "Pet friendly", label: "Pet friendly", icon: PawPrint },
];

export default function SearchFilterModal({
  isOpen,
  onClose,
  initialFilters,
  onApplyFilters,
}: SearchFilterModalProps) {
  const [destination, setDestination] = useState(initialFilters?.destination || "");
  const [minPrice, setMinPrice] = useState<number | "">(initialFilters?.minPrice ?? "");
  const [maxPrice, setMaxPrice] = useState<number | "">(initialFilters?.maxPrice ?? "");
  const [adults, setAdults] = useState(initialFilters?.adults || 1);
  const [children, setChildren] = useState(initialFilters?.children || 0);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    initialFilters?.amenities || []
  );

  if (!isOpen) return null;

  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenityId) ? prev.filter((a) => a !== amenityId) : [...prev, amenityId]
    );
  };

  const handleClearAll = () => {
    setDestination("");
    setMinPrice("");
    setMaxPrice("");
    setAdults(1);
    setChildren(0);
    setSelectedAmenities([]);
  };

  const handleApply = () => {
    onApplyFilters({
      destination,
      minPrice,
      maxPrice,
      adults,
      children,
      amenities: selectedAmenities,
    });
    onClose();
  };

  const totalGuests = adults + children;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-rose-50 text-[#ff385c] flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Filters & Search</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close filters"
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          {/* 1. Destination Section */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-900">Destination</label>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Where to? (e.g. Paris, Tokyo, Bali, Switzerland)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-black outline-none text-sm text-gray-900 font-medium transition shadow-xs"
              />
              {destination && (
                <button
                  onClick={() => setDestination("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black text-xs font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Destination Pills */}
            <div className="pt-2">
              <span className="text-xs text-gray-500 font-medium block mb-2">Search by popular region:</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {REGIONS.map((r) => {
                  const Icon = r.icon;
                  const isSelected = destination.toLowerCase() === r.query.toLowerCase();
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setDestination(r.query)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer text-left ${
                        isSelected
                          ? "border-black bg-gray-50 text-black shadow-xs"
                          : "border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50/50"
                      }`}
                    >
                      <Icon className="w-4 h-4 text-[#ff385c] shrink-0" />
                      <span className="truncate">{r.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 2. Price Range Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-900">Price Range</label>
              <p className="text-xs text-gray-500">Nightly prices before taxes and service fees.</p>
            </div>

            {/* Simulated histogram price bars */}
            <div className="flex items-end gap-1 h-14 px-2 pt-2">
              {[15, 30, 45, 80, 60, 95, 75, 100, 85, 60, 40, 25, 18, 10].map((height, i) => (
                <div
                  key={i}
                  style={{ height: `${height}%` }}
                  className="flex-1 bg-rose-100 hover:bg-[#ff385c] rounded-t-xs transition"
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-gray-200 rounded-2xl focus-within:border-black transition">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Minimum Price
                </label>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-sm font-bold text-gray-500">$</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-full text-sm font-bold text-gray-900 outline-none"
                  />
                </div>
              </div>

              <div className="p-3 border border-gray-200 rounded-2xl focus-within:border-black transition">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Maximum Price
                </label>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-sm font-bold text-gray-500">$</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="1500+"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-full text-sm font-bold text-gray-900 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 3. Guests Counter */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-900">Guests</label>
              <p className="text-xs text-gray-500">Who&apos;s coming along on this stay?</p>
            </div>

            <div className="space-y-3">
              {/* Adults */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/70 border border-gray-100">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Adults</h4>
                  <p className="text-xs text-gray-500">Ages 13 or above</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                    disabled={adults <= 1}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-black disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-gray-900">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults((prev) => Math.min(16, prev + 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-black transition cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/70 border border-gray-100">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Children</h4>
                  <p className="text-xs text-gray-500">Ages 2–12</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                    disabled={children <= 0}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-black disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-gray-900">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren((prev) => Math.min(10, prev + 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-black transition cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* 4. Amenities Grid */}
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-bold text-gray-900">Amenities</label>
              <p className="text-xs text-gray-500">Filter by essential features you need.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 pt-1">
              {AMENITY_OPTIONS.map((item) => {
                const Icon = item.icon;
                const isChecked = selectedAmenities.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleAmenity(item.id)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border text-xs font-semibold transition cursor-pointer ${
                      isChecked
                        ? "border-[#ff385c] bg-rose-50/50 text-gray-900 shadow-xs"
                        : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isChecked ? "text-[#ff385c]" : "text-gray-500"}`} />
                      <span>{item.label}</span>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
                        isChecked
                          ? "bg-[#ff385c] border-[#ff385c] text-white"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
          <button
            type="button"
            onClick={handleClearAll}
            className="text-sm font-bold text-gray-700 underline hover:text-black transition cursor-pointer"
          >
            Clear all
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="bg-[#ff385c] hover:bg-[#e00b41] text-white text-sm font-bold py-3 px-6 rounded-full shadow-lg shadow-[#ff385c]/25 hover:scale-105 active:scale-95 transition cursor-pointer flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>
              Search {totalGuests > 1 ? `· ${totalGuests} guests` : ""}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
