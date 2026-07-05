import express from "express";
import {createExpenditure, getExpenditures } from "../controllers/expenditureController.js";
import { protect } from "../middleware/authMiddlware.js";

const router = express.Router();

router.post("/", protect, createExpenditure);
router.get("/", protect,getExpenditures);

export default router;
