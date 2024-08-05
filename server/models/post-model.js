import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image_url: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const postModel = mongoose.models.post || mongoose.model("post", postSchema);

export default postModel;
