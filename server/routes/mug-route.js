import express from "express";
import multer from "multer";

import {
  addMug,
  allMugs,
  featuredMug,
  getMugById,
  moreMugs,
  removeMug,
  take3Mugs,
  updateMug,
} from "../controller/mug-controller.js";

const mugRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    if (file) {
      return cb(null, `${Date.now()}${file.originalname}`);
    }
  },
});

const upload = multer({ storage: storage });

mugRouter.post("/add", upload.single("image_url"), addMug);
mugRouter.delete("/:mugId", removeMug);
mugRouter.get("/featured", featuredMug);
mugRouter.get("/take-3-mugs", take3Mugs);
mugRouter.get("/more-products", moreMugs);
mugRouter.get("/all/:category", allMugs);
mugRouter.get("/detail/:mugId", getMugById);
mugRouter.patch("/:mugId", upload.single("image_url"), updateMug);

export default mugRouter;
