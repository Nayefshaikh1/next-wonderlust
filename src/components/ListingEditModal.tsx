"use client";

import { useState } from "react";
import { X, Save, Sparkles, Image as ImageIcon, MapPin, DollarSign, Tag, FileText } from "lucide-react";

export interface EditableListing {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  country: string;
  category: string;
  image?: { url: string };
  amenities?: string[];
}

interface ListingEditModalProps {
  isOpen: boolean;
  listing: EditableListing | null;
  onClose: () => void;
  onSuccess: (updatedListing: EditableListing) => void;
}

const CATEGORIES = [
  "Trending",
  "Rooms",
  "Iconic Cities",
  "Lakefront",
  "Treehouses",
  "Play",
  "Castles",
  "Amazing Pools",
  "Camping",
  "Farms",
  "Arctic",
];

export default function ListingEditModal({ isOpen, listing, onClose, onSuccess }: ListingEditModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    location: "",
    country: "",
    category: "Trending",
    imageUrl: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [prevListingId, setPrevListingId] = useState<string | null>(null);

  if (listing && listing._id !== prevListingId) {
    setPrevListingId(listing._id);
    setFormData({
      title: listing.title || "",
      description: listing.description || "",
      price: listing.price || 0,
      location: listing.location || "",
      country: listing.country || "",
      category: listing.category || "Trending",
      imageUrl: listing.image?.url || "",
    });
    setError("");
  }

  if (!isOpen || !listing) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        location: formData.location,
        country: formData.country,
        category: formData.category,
        image: {
          url: formData.imageUrl,
          filename: "listing_image",
        },
      };

      const res = await fetch(`/api/listings/${listing._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success && data.listing) {
        onSuccess(data.listing);
        onClose();
      } else {
        setError(data.error || "Failed to update listing.");
      }
    } catch {
      setError("An unexpected error occurred while saving.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#ff385c]/10 text-[#ff385c] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Edit Property Details</h2>
              <p className="text-xs text-gray-500">Update listing details for your guests</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto flex-1">
          {error && (
            <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-2xl font-medium">
              {error}
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Property Title
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#ff385c] outline-none text-sm text-gray-900 font-medium"
              placeholder="Luxury Beachfront Villa with Ocean Views"
            />
          </div>

          {/* Grid: Price & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Price Per Night ($)
              </label>
              <div className="relative">
                <DollarSign className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="number"
                  min="1"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                  className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#ff385c] outline-none text-sm text-gray-900 font-medium"
                  placeholder="250"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Category
              </label>
              <div className="relative">
                <Tag className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#ff385c] outline-none text-sm text-gray-900 font-medium bg-white"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Grid: Location & Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                City / Location
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#ff385c] outline-none text-sm text-gray-900 font-medium"
                  placeholder="Malibu, California"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Country
              </label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#ff385c] outline-none text-sm text-gray-900 font-medium"
                placeholder="United States"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Image URL
            </label>
            <div className="relative">
              <ImageIcon className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="url"
                required
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#ff385c] outline-none text-sm text-gray-900 font-medium"
                placeholder="https://images.unsplash.com/..."
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Description
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <textarea
                rows={4}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#ff385c] outline-none text-sm text-gray-900 font-medium"
                placeholder="Detailed description of your property, features, views..."
              />
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#ff385c] hover:bg-[#e00b41] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#ff385c]/25 transition flex items-center gap-2 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {isSubmitting ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
