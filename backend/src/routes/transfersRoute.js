import express from "express";
import {createTransfer, getTransfers } from "../controllers/transferController.js";
import { protect } from "../middleware/authMiddlware.js";

const router = express.Router();

router.post("/", protect, createTransfer);
router.get("/", protect,getTransfers );

export default router;
