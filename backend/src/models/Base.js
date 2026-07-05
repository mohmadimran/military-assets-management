import mongoose from "mongoose";

const baseSchema = new mongoose.Schema({
  name: String,
  location: String,
});

export default mongoose.model("Base", baseSchema);
