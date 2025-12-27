import express from "express";
import protectedRoute from "../middleware/protected";
import { csvUpload } from "../middleware/multer-csv";
import {
  addMember,
  getMemberDetails,
  updateMemberDetails,
  deleteMember,
  getAllMembers,
  addMembersByCSV,
} from "../Controllers/member.controller";

const router = express.Router();

// Member management routes
router.post("/", protectedRoute, addMember);
router.get("/", protectedRoute, getAllMembers);
router.get("/:memberId", protectedRoute, getMemberDetails);
router.put("/:memberId", protectedRoute, updateMemberDetails);
router.delete("/:memberId", protectedRoute, deleteMember);

// CSV bulk upload route
router.post(
  "/upload/csv",
  protectedRoute,
  csvUpload.single("file"),
  addMembersByCSV
);

export default router;
