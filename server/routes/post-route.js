import express from "express";
import multer from "multer";

import { addPost, removePost } from "../controller/post-controller.js";

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
postRouter.delete("/remove", removePost);

export default postRouter;