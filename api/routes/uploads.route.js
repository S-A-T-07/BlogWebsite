import express from "express";
import upload from "../utils/multerConfig.js"; // Import the 'upload' middleware from multerConfig.js

const router = express.Router();

// Define the route here
router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

export default router;
