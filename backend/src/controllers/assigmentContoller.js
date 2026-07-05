import Assignment from "../models/Assigment.js";

export const createAssignment = async (req, res) => {
  try {
    const { base, equipmentType, quantity, assignedTo } = req.body;
    const assignment = await Assignment.create({
      base,
      equipmentType,
      quantity,
      assignedTo,
      createdBy: req.user.id,
    });
    res.status(201).json({ message: "Assignment created", assignment });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find().populate("createdBy", "name role");
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
