"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CATEGORIES } from "@/components/CategoryBar";
import { Upload, Sparkles, Image as ImageIcon } from "lucide-react";

export default function NewListingPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("250");
  const [category, setCategory] = useState("Trending");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: reader.result }),
        });
        const data = await res.json();
        if (data.success && data.url) {
          setImageUrl(data.url);
        }
      } catch {
        setErrorMessage("Cloudinary upload failed");
      } finally {
        setIsUploading(false);
      }
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    const finalImage = imageUrl || "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80";

    try {
      const res = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          image: { url: finalImage, filename: "user_upload" },
          price: Number(price),
          category,
          location,
          country,
        }),
      });

      const data = await res.json();
      if (data.success && data.listing) {
        router.push(`/listings/${data.listing._id}`);
      } else {
        setErrorMessage(data.error || "Failed to create listing");
      }
    } catch {
      setErrorMessage("Error submitting listing");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-10 w-full">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl space-y-6">
          
          <div className="border-b border-gray-100 pb-4">
            <span className="text-xs font-bold text-[#ff385c] uppercase tracking-wider">Airbnb your home</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Create a new listing</h1>
            <p className="text-sm text-gray-500">Host travelers from around the world on Wonderlust.</p>
          </div>

          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-semibold">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Image Upload Box */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-900">Listing Main Photo (Cloudinary)</label>
              
              <div className="border-2 border-dashed border-gray-300 hover:border-[#ff385c] transition rounded-2xl p-6 text-center bg-gray-50 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
                {imageUrl ? (
                  <div className="relative w-full h-56 rounded-xl overflow-hidden">
                    <Image src={imageUrl} alt="Uploaded preview" fill className="object-cover" />
                    <button
                      type="button"
                      onClick={() => setImageUrl("")}
                      className="absolute top-2 right-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-bold"
                    >
                      Change Photo
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-10 h-10 text-gray-400 mb-2" />
                    <p className="text-sm font-semibold text-gray-700">Click to upload photo to Cloudinary</p>
                    <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (max 5MB)</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </>
                )}
                {isUploading && (
                  <div className="absolute inset-0 bg-white/80 flex items-center justify-center font-bold text-sm text-[#ff385c]">
                    Uploading to Cloudinary...
                  </div>
                )}
              </div>

              {/* Or Direct Image URL input */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-gray-600 mb-1">Or paste an Image URL directly:</label>
                <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white">
                  <ImageIcon className="w-4 h-4 text-gray-400 mr-2" />
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full text-xs outline-none text-gray-900"
                  />
                </div>
              </div>
            </div>

            {/* Title & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  placeholder="e.g. Modern Cliffside Villa in Bali"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm outline-none focus:border-black"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm outline-none bg-white cursor-pointer"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price, Location, Country */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Price per Night ($)</label>
                <input
                  type="number"
                  min={1}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm outline-none focus:border-black"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Location / City</label>
                <input
                  type="text"
                  placeholder="e.g. Ubud, Bali"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm outline-none focus:border-black"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  placeholder="e.g. Indonesia"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm outline-none focus:border-black"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Description</label>
              <textarea
                rows={4}
                placeholder="Describe your home, special amenities, neighborhood, and views..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl text-sm outline-none focus:border-black resize-none"
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting || isUploading}
              className="w-full py-4 btn-airbnb text-white font-bold text-base rounded-xl shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              {isSubmitting ? "Creating Listing..." : "Publish Airbnb Listing"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
