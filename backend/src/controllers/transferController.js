import Transfer from "../models/Transfer.js";

export const createTransfer = async (req, res) => {
  try {
    const { fromBase, toBase, equipmentType, quantity } = req.body;
    const transfer = await Transfer.create({
      fromBase,
      toBase,
      equipmentType,
      quantity,
      createdBy: req.user.id,
    });
    res.status(201).json({ message: "Transfer recorded", transfer });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.find().populate("createdBy", "name role");
    res.json(transfers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
