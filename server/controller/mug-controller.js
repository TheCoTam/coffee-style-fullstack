import mugModel from "../models/mug-model.js";
import fs from "fs";

// add mug item
export const addMug = async (req, res) => {
  try {
    let image_url = `${req.file.filename}`;

    const mug = new mugModel({
      name: req.body.name,
      description: req.body.description,
      detail: req.body.detail,
      image_url,
      price: req.body.price,
      length: req.body.length,
      height: req.body.height,
      width: req.body.width,
      weight: req.body.weight,
      category: req.body.category,
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
    console.log(req.body.id);

    const mug = await mugModel.findById(req.body.id);
    if (!mug) {
      return res.json({ success: false, message: "Mug not found" });
    }
    console.log(mug);

    fs.unlink(`uploads/${mug.image_url}`, () => {});

    await mugModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Mug removed" });
  } catch (error) {
    console.log("[remove-mug]", error);
    res.json({ success: false, message: "Internal server error" });
  }
};