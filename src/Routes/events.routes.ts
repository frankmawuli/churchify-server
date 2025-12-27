import express from "express";
import protectedRoute from "../middleware/protected";
import {
  createEvent,
  updateEvent,
  deleteEvent,
  getAllEventsForChurch,
  getEventById,
} from "../Controllers/events.controller";

const router = express.Router();

// Event management routes
router.post("/church/:churchId", protectedRoute, createEvent);
router.put("/:eventId", protectedRoute, updateEvent);
router.delete("/:eventId", protectedRoute, deleteEvent);
router.get("/church/:churchId", getAllEventsForChurch);
router.get("/:eventId", getEventById);

export default router;
