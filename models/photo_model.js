import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: 20,
    },
    description: {
      type: String,
    },
    mime_type: {
      type: String,
      enum: ["JPG", "JPEG", "PNG"],
    },
    media_metadata: {
      type: Object,
    },
  },
  { timestamps: true }
);

export const Photo = mongoose.model("photo", photoSchema);
