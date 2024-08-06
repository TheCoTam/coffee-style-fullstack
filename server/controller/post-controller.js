import postModel from "../models/post-model.js";
import fs from "fs";

// add post item
export const addPost = async (req, res) => {
  try {
    const { title, description, content, category } = req.body;

    if (!title || !description || !content || !category || !req.file) {
      return res.json({ success: false, message: "Some fields are missing" });
    }

    let image_url = `${req.file.filename}`;

    const post = new postModel({
      title,
      description,
      content,
      image_url,
      category,
    });

    post.save();
    res.json({ success: true, message: "Post Added" });
  } catch (error) {
    console.log("[add-post]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// remove post item
export const removePost = async (req, res) => {
  try {
    const id = req.body.id;

    if (!id) {
      return res.json({ success: false, message: "Missing post id" });
    }

    const post = await postModel.findById(id);
    if (!post) {
      return res.json({ success: false, message: "Post not found" });
    }
    console.log(post);

    fs.unlink(`uploads/${post.image_url}`, (err) => {
      if (err) {
        console.error("Failed to remove image:", err);
        return res.json({ success: false, message: "Failed to remove image" });
      }
    });

    await postModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Post removed" });
  } catch (error) {
    console.log("[remove-post]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// get post item
export const getPost = async (req, res) => {
  try {
    const category = req.params.category;
    if (!category) {
      return res.json({ success: false, message: "Missing category" });
    }

    if (category === "all") {
      const posts = await postModel.find();
      return res.json({ success: true, data: posts });
    }

    const posts = await postModel.find({ category });

    res.json({ success: true, data: posts });
  } catch (error) {
    console.log("[get-post]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// featured posts items
export const featuredPosts = async (req, res) => {
  try {
    const posts = await postModel.aggregate([{ $sample: { size: 2 } }]);

    res.json({ success: true, data: posts });
  } catch (error) {
    console.log("[featured-posts]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// get home posts
export const homePosts = async (req, res) => {
  try {
    const posts = await postModel.aggregate([{ $sample: { size: 3 } }]);

    res.json({ success: true, data: posts });
  } catch (error) {
    console.log("[home-posts]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};
