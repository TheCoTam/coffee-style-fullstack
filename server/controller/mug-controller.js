import mugModel from "../models/mug-model.js";
import fs from "fs";

// add mug item
export const addMug = async (req, res) => {
  try {
    const {
      name,
      description,
      detail,
      price,
      length,
      height,
      width,
      weight,
      category,
    } = req.body;

    if (
      !name ||
      !description ||
      !detail ||
      !price ||
      !length ||
      !height ||
      !width ||
      !weight ||
      !category
    ) {
      return res.json({ success: false, message: "Some fields are missing" });
    }

    let image_url = `${req.file.filename}`;

    const mug = new mugModel({
      name,
      description,
      detail,
      image_url,
      price,
      length,
      height,
      width,
      weight,
      category,
    });

    await mug.save();
    res.json({ success: true, message: "Mug added" });
  } catch (error) {
    console.log("[add-mug]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// remove mug item
export const removeMug = async (req, res) => {
  try {
    const id = req.body.id;

    if (!id) {
      return res.json({ success: false, message: "Missing mug id" });
    }

    const mug = await mugModel.findById(req.body.id);
    if (!mug) {
      return res.json({ success: false, message: "Mug not found" });
    }

    fs.unlink(`uploads/${mug.image_url}`, (err) => {
      if (err) {
        console.error("Failed to remove image:", err);
        return res.json({ success: false, message: "Failed to remove image" });
      }
    });

    await mugModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Mug removed" });
  } catch (error) {
    console.log("[remove-mug]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// featured mug items
export const featuredMug = async (req, res) => {
  try {
    const mugs = await mugModel.aggregate([{ $sample: { size: 2 } }]);

    res.json({ success: true, data: mugs });
  } catch (error) {
    console.log("[featured-mug]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// featured mug items
export const take3Mugs = async (req, res) => {
  try {
    const mugs = await mugModel.aggregate([{ $sample: { size: 3 } }]);

    res.json({ success: true, data: mugs });
  } catch (error) {
    console.log("[featured-mug]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// more products
export const moreMugs = async (req, res) => {
  try {
    const mugs = await mugModel.aggregate([{ $sample: { size: 9 } }]);

    res.json({ success: true, data: mugs });
  } catch (error) {
    console.log("[more-mugs]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// all mugs
export const allMugs = async (req, res) => {
  try {
    const category = req.params.category;

    if (!category) {
      return res.json({ success: false, message: "Missing category" });
    }

    if (category === "all") {
      const mugs = await mugModel.find();
      return res.json({ success: true, data: mugs });
    }

    const mugs = await mugModel.find({ category });

    res.json({ success: true, data: mugs });
  } catch (error) {
    console.log("[all-mugs]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};

//  get mug by id
export const getMugById = async (req, res) => {
  try {
    const id = req.params.mugId;

    if (!id) {
      return res.json({ success: false, message: "Id not found" });
    }

    const mug = await mugModel.findById(id);

    res.json({ success: true, data: mug });
  } catch (error) {
    console.log("[get-mug-by-id]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};
