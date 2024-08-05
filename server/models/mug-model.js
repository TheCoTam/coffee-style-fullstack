import mongoose from "mongoose";

const mugSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    detail: { type: String, required: true },
    image_url: { type: String, required: true },
    price: { type: Number, required: true },
    length: { type: Number, required: true },
    height: { type: Number, required: true },
    width: { type: Number, required: true },
    weight: { type: Number, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const mugModel = mongoose.models.mug || mongoose.model("mug", mugSchema);

export default mugModel;
