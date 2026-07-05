import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  base: { type: String, required: true },
  equipmentType: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Purchase", purchaseSchema);
