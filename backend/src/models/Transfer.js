import mongoose from "mongoose";

const transferSchema = new mongoose.Schema({
  fromBase: { type: String, required: true },
  toBase: { type: String, required: true },
  equipmentType: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Transfer", transferSchema);
