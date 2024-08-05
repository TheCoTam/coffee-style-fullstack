import postModel from "../models/post-model.js";
import fs from "fs";

// add post item
export const addPost = async (req, res) => {
  try {
    const { title, description, content } = req.body;

    if (!title || !description || !content) {
      res.json({ success: false, message: "Some fields are missing" });
    }

    let image_url = `${req.file.filename}`;

    const post = new postModel({
      title,
      description,
      content,
      image_url,
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
      res.json({ success: false, message: "Missing post id" });
    }

    const post = await postModel.findById(id);
    if (!post) {
      res.json({ success: false, message: "Post not found" });
    }
    console.log(post);

    fs.unlink(`uploads/${post.image_url}`, (err) => {
      if (err) {
        console.error("Failed to remove image:", err);
        res.json({ success: false, message: "Failed to remove image" });
      } else {
        console.log("Image removed");
      }
    });

    await postModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Post removed" });
  } catch (error) {
    console.log("[remove-post]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};
