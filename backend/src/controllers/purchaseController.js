import Purchase from "../models/Purchase.js";

export const createPurchase = async (req, res) => {
  try {
    const { base, equipmentType, quantity } = req.body;
    const purchase = await Purchase.create({
      base,
      equipmentType,
      quantity,
      createdBy: req.user.id,
    });
    res.status(201).json({ message: "Purchase created", purchase });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find().populate("createdBy", "name role");
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
