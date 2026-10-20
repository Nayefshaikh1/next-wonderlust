import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "demo",
  api_key: process.env.CLOUDINARY_API_KEY || "1234567890",
  api_secret: process.env.CLOUDINARY_API_SECRET || "sample_secret",
  secure: true,
});

export async function uploadToCloudinary(fileUri: string, folder = "wonderlust_listings") {
  try {
    // If running in fallback mode without real secret key, return URL directly or upload to Cloudinary
    if (!process.env.CLOUDINARY_API_SECRET || process.env.CLOUDINARY_API_SECRET === "sample_secret") {
      console.warn("Cloudinary API credentials not fully set, returning uploaded URL as data URI/placeholder");
      if (fileUri.startsWith("http")) {
        return {
          url: fileUri,
          public_id: `wonderlust_${Date.now()}`,
          filename: "listing_image",
        };
      }
      return {
        url: fileUri, // Data URI or fallback link
        public_id: `wonderlust_${Date.now()}`,
        filename: "listing_image",
      };
    }

    const result = await cloudinary.uploader.upload(fileUri, {
      folder,
      resource_type: "auto",
      transformation: [
        { width: 1200, height: 800, crop: "fill", quality: "auto" }
      ]
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
      filename: result.original_filename || "listing_image",
    };
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
}

export function getOptimizedCloudinaryUrl(url: string, width = 800) {
  if (!url) return "/placeholder.jpg";
  if (url.includes("res.cloudinary.com")) {
    return url.replace("/upload/", `/upload/w_${width},f_auto,q_auto/`);
  }
  return url;
}

export default cloudinary;
