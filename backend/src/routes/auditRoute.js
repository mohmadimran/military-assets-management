import express from "express";
import AuditLog from "../models/AuditLog.js";
import { protect } from "../middleware/authMiddlware.js";
import { permit } from "../middleware/roleMiddlware.js";

const router = express.Router();

router.get("/", protect, permit("Admin"), async (req, res) => {
  const logs = await AuditLog.find().populate("user");
  res.json(logs);
});

export default router;
