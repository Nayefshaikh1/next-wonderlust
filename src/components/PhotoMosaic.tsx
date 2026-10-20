"use client";

import Image from "next/image";
import { Grid } from "lucide-react";

interface PhotoMosaicProps {
  mainImage: string;
  gallery?: string[];
  title: string;
}

export default function PhotoMosaic({ mainImage, gallery = [], title }: PhotoMosaicProps) {
  // Build array of up to 5 photos
  const photos = [mainImage, ...gallery].slice(0, 5);

  // If missing extra photos, fill with high quality fallback interior photos
  while (photos.length < 5) {
    photos.push(
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    );
  }

  return (
    <div className="relative my-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-2xl overflow-hidden aspect-[16/9] max-h-[500px]">
        {/* Main Big Photo */}
        <div className="md:col-span-2 relative h-full bg-gray-200 cursor-pointer overflow-hidden">
          <Image
            src={photos[0]}
            alt={`${title} main`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover img-zoom-hover"
          />
        </div>

        {/* 4 Grid Photos */}
        <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-2 h-full">
          {photos.slice(1, 5).map((photoUrl, idx) => (
            <div key={idx} className="relative h-full bg-gray-200 cursor-pointer overflow-hidden">
              <Image
                src={photoUrl}
                alt={`${title} photo ${idx + 2}`}
                fill
                sizes="25vw"
                className="object-cover img-zoom-hover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Show All Photos Pill Button */}
      <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-gray-900 border border-black/10 hover:bg-white text-xs font-semibold px-4 py-2 rounded-lg shadow-md flex items-center gap-2 transition">
        <Grid className="w-4 h-4" />
        Show all photos
      </button>
    </div>
  );
}
