"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, X, ArrowUpRight } from "lucide-react";
import { ListingItem } from "@/components/ListingCard";
import { getCoordinatesForLocation } from "@/lib/geo";

interface MapViewProps {
  listings?: ListingItem[];
  singleListing?: {
    _id?: string;
    title: string;
    location: string;
    country: string;
    coordinates?: { lat: number; lng: number };
    price?: number;
    image?: { url: string };
  };
  center?: [number, number];
  zoom?: number;
  className?: string;
  showTaxes?: boolean;
  onMarkerClick?: (listingId: string) => void;
}

export default function MapView({
  listings = [],
  singleListing,
  center,
  zoom = 12,
  className = "w-full h-full min-h-[450px]",
  showTaxes = false,
  onMarkerClick,
}: MapViewProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);
  const [activeListing, setActiveListing] = useState<ListingItem | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (!mapContainerRef.current) return;

      // Dynamically import Leaflet so window is always available
      const L = (await import("leaflet")).default;

      if (!isMounted) return;

      // Clean up previous instance if any
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // Determine initial coordinates
      let initialLat = 20;
      let initialLng = 0;
      let initialZoom = 2;

      if (singleListing) {
        const coords =
          singleListing.coordinates?.lat && singleListing.coordinates?.lng
            ? singleListing.coordinates
            : getCoordinatesForLocation(singleListing.location, singleListing.country);
        initialLat = coords.lat;
        initialLng = coords.lng;
        initialZoom = zoom || 13;
      } else if (center) {
        initialLat = center[0];
        initialLng = center[1];
        initialZoom = zoom;
      } else if (listings.length > 0) {
        const first = listings[0];
        const coords =
          first.coordinates?.lat && first.coordinates?.lng
            ? first.coordinates
            : getCoordinatesForLocation(first.location, first.country);
        initialLat = coords.lat;
        initialLng = coords.lng;
        initialZoom = 4;
      }

      // Initialize map instance
      const map = L.map(mapContainerRef.current, {
        center: [initialLat, initialLng],
        zoom: initialZoom,
        zoomControl: false,
        attributionControl: false,
      });

      // Add zoom control top-right
      L.control.zoom({ position: "topright" }).addTo(map);

      // Add CartoDB Voyager tiles (clean, modern Apple Maps/Airbnb style)
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          subdomains: "abcd",
        }
      ).addTo(map);

      mapInstanceRef.current = map;
      markersRef.current = [];

      // Single listing mode
      if (singleListing) {
        const coords =
          singleListing.coordinates?.lat && singleListing.coordinates?.lng
            ? singleListing.coordinates
            : getCoordinatesForLocation(singleListing.location, singleListing.country);

        // Circular neighborhood area
        L.circle([coords.lat, coords.lng], {
          radius: 650,
          color: "#FF385C",
          fillColor: "#FF385C",
          fillOpacity: 0.15,
          weight: 2,
        }).addTo(map);

        // Center Pulsing Pin
        const pinIcon = L.divIcon({
          className: "custom-pin",
          html: `
            <div class="airbnb-single-pin">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF385C" stroke="#ffffff" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3" fill="#ffffff"></circle>
              </svg>
            </div>
          `,
          iconSize: [48, 48],
          iconAnchor: [24, 24],
        });

        L.marker([coords.lat, coords.lng], { icon: pinIcon }).addTo(map);
        map.setView([coords.lat, coords.lng], 13);
        return;
      }

      // Multiple listings mode
      if (listings.length > 0) {
        const bounds = L.latLngBounds([]);

        listings.forEach((listing) => {
          const coords =
            listing.coordinates?.lat && listing.coordinates?.lng
              ? listing.coordinates
              : getCoordinatesForLocation(listing.location, listing.country);

          const displayedPrice = showTaxes
            ? Math.round(listing.price * 1.14)
            : listing.price;

          const priceHtml = `
            <div class="airbnb-price-marker font-semibold tracking-tight" id="marker-${listing._id}">
              $${displayedPrice}
            </div>
          `;

          const priceIcon = L.divIcon({
            className: "airbnb-marker-wrapper",
            html: priceHtml,
            iconSize: [60, 32],
            iconAnchor: [30, 16],
          });

          const marker = L.marker([coords.lat, coords.lng], {
            icon: priceIcon,
          }).addTo(map);

          marker.on("click", () => {
            setActiveListing(listing);
            map.panTo([coords.lat, coords.lng], { animate: true, duration: 0.5 });
            if (onMarkerClick) {
              onMarkerClick(listing._id);
            }
          });

          bounds.extend([coords.lat, coords.lng]);
          markersRef.current.push(marker);
        });

        if (bounds.isValid()) {
          map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
        }
      }
    }

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [listings, singleListing, center, zoom, showTaxes, onMarkerClick]);

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm ${className}`}>
      <div ref={mapContainerRef} className="w-full h-full min-h-[420px] z-0" />

      {/* Floating Active Listing Preview Card (Airbnb Style) */}
      {activeListing && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 p-3.5 flex gap-3.5 items-center transition-all animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={() => setActiveListing(null)}
            className="absolute -top-2.5 -right-2.5 bg-white border border-gray-200 text-gray-500 hover:text-black rounded-full p-1 shadow-md hover:scale-105 transition-transform"
            aria-label="Close preview"
          >
            <X size={14} />
          </button>

          {/* Thumbnail */}
          <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-gray-100">
            <Image
              src={activeListing.image.url}
              alt={activeListing.title}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span className="truncate flex items-center gap-1 font-medium text-gray-700">
                <MapPin size={12} className="text-[#FF385C]" />
                {activeListing.location}
              </span>
              {activeListing.reviews && activeListing.reviews.length > 0 && (
                <span className="flex items-center gap-0.5 font-semibold text-gray-800">
                  <Star size={11} className="fill-black text-black" />
                  {(
                    activeListing.reviews.reduce((a, b) => a + b.rating, 0) /
                    activeListing.reviews.length
                  ).toFixed(1)}
                </span>
              )}
            </div>

            <h4 className="text-sm font-semibold text-gray-900 truncate mb-1">
              {activeListing.title}
            </h4>

            <div className="flex items-baseline justify-between mt-1.5">
              <span className="text-sm font-bold text-gray-900">
                ${showTaxes ? Math.round(activeListing.price * 1.14) : activeListing.price}{" "}
                <span className="text-xs font-normal text-gray-500">night</span>
              </span>

              <Link
                href={`/listings/${activeListing._id}`}
                className="text-xs font-semibold text-white bg-[#FF385C] hover:bg-[#E00B41] px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
              >
                View
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
