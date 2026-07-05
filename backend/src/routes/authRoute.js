import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();
router.post("/register", async (req, res) => {
  try {
    const { email } = req.body; 

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = new User(req.body);
    await user.save();

    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.status(200).json({
  message: "Login successful",
  token,
  role: user.role, 
});
});

export default router;
