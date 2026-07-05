import express from "express";
import Base from "../models/Base.js";
import { protect } from "../middleware/authMiddlware.js";
import { permit } from "../middleware/roleMiddlware.js";

const router = express.Router();

router.post("/", protect, permit("Admin"), async (req, res) => {
  const base = await Base.create(req.body);
  res.json(base);
});

router.get("/", protect, async (req, res) => {
  const bases = await Base.find();
  res.json(bases);
});

export default router;
