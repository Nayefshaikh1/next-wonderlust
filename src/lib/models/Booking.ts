import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBooking extends Document {
  listing: mongoose.Types.ObjectId;
  buyer?: mongoose.Types.ObjectId;
  guestName: string;
  guestEmail: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  createdAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    listing: {
      type: Schema.Types.ObjectId,
      ref: "Listing",
      required: true,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    guestName: {
      type: String,
      required: true,
      default: "Airbnb Guest",
    },
    guestEmail: {
      type: String,
      required: true,
      default: "guest@example.com",
    },
    checkIn: {
      type: Date,
      required: true,
    },
    checkOut: {
      type: Date,
      required: true,
    },
    guests: {
      type: Number,
      default: 1,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking: Model<IBooking> = mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);
export default Booking;
