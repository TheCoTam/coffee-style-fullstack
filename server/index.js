import express from "express";
import cors from "cors";
import "dotenv/config";

import { connectDB } from "./config/db.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connect
connectDB();

// api endpoints
app.use("/images", express.static("uploads"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
