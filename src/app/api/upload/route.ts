import { NextRequest, NextResponse } from "next/server";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { image } = body;

    if (!image) {
      return NextResponse.json({ success: false, error: "No image file or URL provided" }, { status: 400 });
    }

    const uploaded = await uploadToCloudinary(image);
    return NextResponse.json({ success: true, ...uploaded });
  } catch (error) {
    console.error("Image Upload API Error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
