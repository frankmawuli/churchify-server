import express from "express";
import { onboardChurch } from "../Controllers/church.controller";
import protectedRoute from "../middleware/protected";

const router = express.Router();

router.post("/onboarding", protectedRoute, onboardChurch);

export default router;
