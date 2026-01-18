import express from "express";
import upload from "../middleware/multer";

const router = express.Router();

router.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file as any;

  return res.status(201).json({
    message: "Upload successful",
    url: file.path, 
    publicId: file.filename, // Cloudinary public_id
  });
});

export default router;
