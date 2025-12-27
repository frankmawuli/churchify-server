// middleware/csvUpload.ts
import multer from "multer";

export const csvUpload = multer({
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(_: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) {
    if (!file.originalname.endsWith(".csv")) {
      cb(new Error("Only CSV files allowed"));
    }
    cb(null, true);
  },
});
