import Expenditure from "../models/Expendature.js";

export const createExpenditure = async (req, res) => {
  try {
    const { base, equipmentType, quantity, reason } = req.body;
    const expenditure = await Expenditure.create({
      base,
      equipmentType,
      quantity,
      reason,
      createdBy: req.user.id,
    });
    res.status(201).json({ message: "Expenditure recorded", expenditure });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getExpenditures = async (req, res) => {
  try {
    const expenditures = await Expenditure.find().populate("createdBy", "name role");
    res.json(expenditures);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
