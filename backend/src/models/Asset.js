import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
  name: String,
  type: String, // weapon, vehicle, ammo
  quantity: { type: Number, default: 0 },
  base: { type: mongoose.Schema.Types.ObjectId, ref: "Base" },
});

export default mongoose.model("Asset", assetSchema);
