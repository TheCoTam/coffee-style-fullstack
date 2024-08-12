import express from "express";
import multer from "multer";

import {
  addPost,
  featuredPosts,
  getPost,
  getPostById,
  homePosts,
  removePost,
} from "../controller/post-controller.js";

const postRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

postRouter.post("/add", upload.single("image_url"), addPost);
postRouter.delete("/:postId", removePost);
postRouter.get("/get/:category", getPost);
postRouter.get("/featured", featuredPosts);
postRouter.get("/home-posts", homePosts);
postRouter.get("/detail/:postId", getPostById);

export default postRouter;
