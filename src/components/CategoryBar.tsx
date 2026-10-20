"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Flame,
  BedSingle,
  Building2,
  Waves,
  Trees,
  Gamepad2,
  Castle,
  Droplets,
  Tent,
  Wheat,
  Snowflake,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Receipt,
  Check,
} from "lucide-react";

export const CATEGORIES = [
  { name: "Trending", icon: Flame, description: "Popular & highly rated" },
  { name: "Rooms", icon: BedSingle, description: "Cozy rooms & suites" },
  { name: "Iconic Cities", icon: Building2, description: "Metropolitan hubs" },
  { name: "Lakefront", icon: Waves, description: "Serene waterside views" },
  { name: "Treehouses", icon: Trees, description: "Nature canopy retreats" },
  { name: "Play", icon: Gamepad2, description: "Fun & activities" },
  { name: "Castles", icon: Castle, description: "Historic royal estates" },
  { name: "Amazing Pools", icon: Droplets, description: "Luxury infinity pools" },
  { name: "Camping", icon: Tent, description: "Outdoor glamping" },
  { name: "Farms", icon: Wheat, description: "Countryside stays" },
  { name: "Arctic", icon: Snowflake, description: "Snowy winter escapes" },
];

interface CategoryBarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  showTaxes: boolean;
  onToggleTaxes: (show: boolean) => void;
}

export default function CategoryBar({
  selectedCategory,
  onSelectCategory,
  showTaxes,
  onToggleTaxes,
}: CategoryBarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);

  // Check scroll position to dynamically show/hide scroll arrows on desktop
  const checkScrollPosition = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScrollPosition();
    container.addEventListener("scroll", checkScrollPosition, { passive: true });
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [checkScrollPosition]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -340 : 340;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const selectedCatObj = CATEGORIES.find((c) => c.name === selectedCategory) || CATEGORIES[0];
  const SelectedIcon = selectedCatObj.icon;

  return (
    <div className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 py-2.5 sm:py-3 shadow-xs transition duration-300">
      <div className="max-w-[1760px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Mobile Left Side Category Dropdown Menu (Mobile Only < sm) */}
        <div className="relative sm:hidden">
          <button
            onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
            className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 bg-white px-3.5 py-2 rounded-2xl text-xs font-bold text-gray-900 shadow-2xs transition"
          >
            <SelectedIcon className="w-4 h-4 text-[#ff385c]" />
            <span>{selectedCategory}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500 stroke-[2.5]" />
          </button>

          {/* Dropdown Options Box */}
          {isMobileCategoryOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-3xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 max-h-80 overflow-y-auto">
              <div className="px-3 py-1.5 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-1">
                Select Category
              </div>
              {CATEGORIES.map((cat) => {
                const IconComp = cat.icon;
                const isSelected = selectedCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => {
                      onSelectCategory(cat.name);
                      setIsMobileCategoryOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold transition ${
                      isSelected
                        ? "bg-rose-50 text-[#ff385c]"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComp className={`w-4 h-4 ${isSelected ? "text-[#ff385c]" : "text-gray-500"}`} />
                      <span>{cat.name}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#ff385c]" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Desktop/Tablet Horizontal Category Scroll Bar (Hidden on Mobile) */}
        <div className="hidden sm:flex relative flex-1 items-center min-w-0">
          
          {/* Left Arrow Scroll Button */}
          {showLeftArrow && (
            <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center pr-6 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Scroll left categories"
                className="pointer-events-auto w-8 h-8 rounded-full border border-gray-300 bg-white shadow-md hover:scale-110 active:scale-95 transition flex items-center justify-center text-gray-800 hover:bg-gray-50"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          )}

          {/* Horizontal Scroll Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-6 sm:gap-9 overflow-x-auto no-scrollbar py-1 px-1 scroll-smooth w-full"
          >
            {CATEGORIES.map((cat) => {
              const IconComponent = cat.icon;
              const isSelected = selectedCategory === cat.name;

              return (
                <button
                  key={cat.name}
                  onClick={() => onSelectCategory(cat.name)}
                  className={`flex flex-col items-center gap-1.5 pb-2 transition-all duration-200 whitespace-nowrap group relative shrink-0 hover:-translate-y-0.5 ${
                    isSelected
                      ? "text-[#ff385c] font-bold"
                      : "text-gray-500 hover:text-gray-900 font-medium"
                  }`}
                >
                  <div className={`relative p-1 transition duration-200 ${isSelected ? "scale-110 text-[#ff385c]" : "group-hover:scale-105"}`}>
                    <IconComponent
                      className={`w-6 h-6 transition-colors duration-200 ${
                        isSelected ? "text-[#ff385c] stroke-[2.4]" : "text-gray-500 group-hover:text-gray-900 stroke-[1.8]"
                      }`}
                    />
                  </div>

                  <span className={`text-xs tracking-tight transition duration-200 ${isSelected ? "text-gray-900 font-bold" : "text-gray-600 group-hover:text-gray-900"}`}>
                    {cat.name}
                  </span>

                  {isSelected ? (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2.5px] bg-[#ff385c] rounded-full shadow-sm shadow-[#ff385c]/50 animate-in fade-in zoom-in-75 duration-200" />
                  ) : (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gray-300 rounded-full transition-all duration-200 group-hover:w-6" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Arrow Scroll Button */}
          {showRightArrow && (
            <div className="absolute right-0 top-0 bottom-0 z-20 flex items-center pl-6 bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none">
              <button
                onClick={() => handleScroll("right")}
                aria-label="Scroll right categories"
                className="pointer-events-auto w-8 h-8 rounded-full border border-gray-300 bg-white shadow-md hover:scale-110 active:scale-95 transition flex items-center justify-center text-gray-800 hover:bg-gray-50"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          )}

        </div>

        {/* Display Total Before Taxes Toggle Pill (Responsive) */}
        <div className="shrink-0 flex items-center">
          
          {/* Desktop & Tablet Pill */}
          <div
            onClick={() => onToggleTaxes(!showTaxes)}
            className="hidden sm:flex items-center gap-3 border border-gray-200 hover:border-gray-400 rounded-2xl px-4 py-2.5 bg-white shadow-2xs hover:shadow-xs transition duration-200 cursor-pointer select-none"
          >
            <span className="text-xs font-bold text-gray-800">Display total before taxes</span>
            <button
              type="button"
              className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors duration-200 ${
                showTaxes ? "bg-[#ff385c]" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                  showTaxes ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Mobile Pill (Compact) */}
          <button
            onClick={() => onToggleTaxes(!showTaxes)}
            className="sm:hidden flex items-center gap-1.5 border border-gray-200 active:border-gray-400 rounded-2xl px-3 py-2 bg-white text-[11px] font-bold text-gray-800 shadow-2xs transition"
          >
            <Receipt className="w-3.5 h-3.5 text-[#ff385c]" />
            <span>{showTaxes ? "With Taxes" : "Before Taxes"}</span>
            <div
              className={`w-2 h-2 rounded-full ml-0.5 ${
                showTaxes ? "bg-[#ff385c] animate-pulse" : "bg-gray-300"
              }`}
            />
          </button>

        </div>

      </div>
    </div>
  );
}
