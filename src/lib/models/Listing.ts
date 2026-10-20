import mongoose, { Schema, Document, Model } from "mongoose";

export interface IListingImage {
  url: string;
  filename?: string;
  public_id?: string;
}

export interface IListingHost {
  name: string;
  isSuperhost?: boolean;
  avatar?: string;
}

export interface IListing extends Document {
  title: string;
  description: string;
  image: IListingImage;
  gallery: string[];
  price: number;
  category: "Trending" | "Rooms" | "Iconic Cities" | "Lakefront" | "Treehouses" | "Play" | "Castles" | "Amazing Pools" | "Camping" | "Farms" | "Arctic";
  location: string;
  country: string;
  amenities: string[];
  host: IListingHost;
  reviews: mongoose.Types.ObjectId[];
  owner?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ListingSchema = new Schema<IListing>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    image: {
      url: { type: String, required: true },
      filename: { type: String, default: "listing_image" },
      public_id: { type: String, default: "" },
    },
    gallery: {
      type: [String],
      default: [],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },
    category: {
      type: String,
      enum: [
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
      ],
      default: "Trending",
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    amenities: {
      type: [String],
      default: ["Wifi", "Kitchen", "Free parking", "Air conditioning", "Pool"],
    },
    host: {
      name: { type: String, default: "Wonderlust Host" },
      isSuperhost: { type: Boolean, default: true },
      avatar: { type: String, default: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" },
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

ListingSchema.post("findOneAndDelete", async function (listing) {
  if (listing && listing.reviews && listing.reviews.length > 0) {
    const Review = mongoose.models.Review;
    if (Review) {
      await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
  }
});

const Listing: Model<IListing> = mongoose.models.Listing || mongoose.model<IListing>("Listing", ListingSchema);
export default Listing;
