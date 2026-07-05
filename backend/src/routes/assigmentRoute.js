import express from "express";
import { createAssignment,getAssignments } from "../controllers/assigmentContoller.js";
import { protect } from "../middleware/authMiddlware.js";

const router = express.Router();

router.post("/", protect, createAssignment);
router.get("/", protect, getAssignments);

export default router;
