"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Send } from "lucide-react";

export interface ReviewItem {
  _id?: string;
  comment: string;
  rating: number;
  author: {
    name: string;
    avatar?: string;
  };
  createdAt?: string;
}

interface ReviewSectionProps {
  listingId: string;
  reviews: ReviewItem[];
  onReviewAdded?: () => void;
}

export default function ReviewSection({ listingId, reviews, onReviewAdded }: ReviewSectionProps) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(2)
      : "4.95";

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch(`/api/listings/${listingId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment, rating }),
      });

      const data = await res.json();
      if (data.success) {
        setComment("");
        setRating(5);
        if (onReviewAdded) onReviewAdded();
      } else {
        setErrorMessage(data.error || "Failed to submit review");
      }
    } catch {
      setErrorMessage("Error submitting review");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 border-t border-gray-200 space-y-8">
      {/* Overall Score Header */}
      <div className="flex items-center gap-3">
        <Star className="w-7 h-7 fill-black text-black stroke-0" />
        <h3 className="text-2xl font-bold text-gray-900">
          {avgRating} <span className="text-gray-400 font-normal text-xl">·</span> {reviews.length} reviews
        </h3>
      </div>

      {/* Add Review Form */}
      <form onSubmit={handleSubmitReview} className="bg-gray-50 border border-gray-200 rounded-3xl p-6 space-y-4">
        <h4 className="font-bold text-gray-900 text-lg">Leave a review</h4>
        
        {/* Star Rating Picker */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-700 mr-2">Your Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="p-1 hover:scale-125 transition"
            >
              <Star
                className={`w-6 h-6 ${
                  star <= rating
                    ? "fill-amber-400 text-amber-400"
                    : "fill-gray-200 text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>

        <textarea
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience staying at this villa or home..."
          className="w-full p-4 border border-gray-300 rounded-2xl bg-white text-sm outline-none focus:border-black transition resize-none"
          required
        />

        {errorMessage && <p className="text-xs text-rose-600 font-medium">{errorMessage}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-gray-900 hover:bg-black text-white font-semibold text-sm py-3 px-6 rounded-full transition flex items-center gap-2 shadow-md disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          {isSubmitting ? "Posting..." : "Post Review"}
        </button>
      </form>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {reviews.map((rev, index) => (
          <div key={rev._id || index} className="space-y-3 p-4 rounded-2xl border border-gray-100 hover:shadow-xs transition">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0">
                <Image
                  src={rev.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}
                  alt={rev.author?.name || "Guest"}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-sm">{rev.author?.name || "Guest traveler"}</h5>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-black text-black" />
                    ))}
                  </div>
                  <span>· Verified Stay</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
