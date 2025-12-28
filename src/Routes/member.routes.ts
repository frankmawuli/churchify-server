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
router.post("/:churchId", protectedRoute, addMember);
router.get("/:churchId", protectedRoute, getAllMembers);
router.get("/:churchId/:memberId", protectedRoute, getMemberDetails);
router.put("/:churchId/:memberId", protectedRoute, updateMemberDetails);
router.delete("/:churchId/:memberId", protectedRoute, deleteMember);

// CSV bulk upload route
router.post(
  "/:churchId/upload/csv",
  protectedRoute,
  csvUpload.single("file"),
  addMembersByCSV
);

export default router;
