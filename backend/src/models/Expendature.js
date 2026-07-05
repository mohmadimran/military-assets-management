import mongoose from "mongoose";

const expenditureSchema = new mongoose.Schema({
  base: { type: String, required: true },
  equipmentType: { type: String, required: true },
  quantity: { type: Number, required: true },
  reason: { type: String },
  date: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Expenditure", expenditureSchema);
