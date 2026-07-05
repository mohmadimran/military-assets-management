import mongoose from "mongoose";

const auditSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  action: String,
  details: Object,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("AuditLog", auditSchema);
