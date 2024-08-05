import express from "express";
import multer from "multer";

import { addMug, removeMug } from "../controller/mug-controller.js";

const mugRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

mugRouter.post("/add", upload.single("image_url"), addMug);
mugRouter.delete("/remove", removeMug);

export default mugRouter;