import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    desc: { type: String, require: true },
    options: { type: Array },
    sizes: { type: Array },
    categories: { type: Array },
    price: { type: Number, require: true },
    slug: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('Product', ProductSchema);
