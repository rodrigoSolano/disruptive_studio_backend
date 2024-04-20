import mongoose, { Schema } from 'mongoose';

const themeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  permissions: {
    images: { type: Boolean, default: false },
    videos: { type: Boolean, default: false },
    texts: { type: Boolean, default: false }
  }
}, { timestamps: true });

export const Theme = mongoose.model('Theme', themeSchema);
