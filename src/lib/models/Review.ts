import mongoose, { Schema, Document, Model } from "mongoose";

export interface IReview extends Document {
  comment: string;
  rating: number;
  author: {
    name: string;
    avatar?: string;
    userId?: mongoose.Types.ObjectId;
  };
  createdAt: Date;
}

const ReviewSchema = new Schema<IReview>(
  {
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    author: {
      name: { type: String, required: true, default: "Guest traveler" },
      avatar: { type: String, default: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
      userId: { type: Schema.Types.ObjectId, ref: "User" },
    },
  },
  { timestamps: true }
);

const Review: Model<IReview> = mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);
export default Review;
