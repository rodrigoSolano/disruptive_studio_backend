import mongoose, { Schema } from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["image", "video", "text"],
      required: true,
    },
    url: {
      type: String,
    },
    theme_id: {
      type: Schema.Types.ObjectId,
      ref: "Theme",
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    credits: String,
  },
  { timestamps: true }
);

export const Content = mongoose.model("Content", contentSchema);
