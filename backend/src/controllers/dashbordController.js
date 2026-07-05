import Purchase from "../models/Purchase.js";
import Transfer from "../models/Transfer.js";
import Assignment from "../models/Assigment.js";
import Expenditure from "../models/Expendature.js";

export const getDashboardStats = async (req, res) => {
  try {
    const { base, equipmentType, from, to } = req.query;

    // Common date filter for all collections
    const dateFilter = {};
    if (from || to) {
      dateFilter.createdAt = {};
      if (from) dateFilter.createdAt.$gte = new Date(from);
      if (to) dateFilter.createdAt.$lte = new Date(to);
    }

    // Base and equipment filter setup
    const baseFilter = base ? { base } : {};
    const equipmentFilter = equipmentType ? { equipmentType } : {};

    // Combine filters
    const filter = { ...baseFilter, ...equipmentFilter, ...dateFilter };

    // Data fetching with filters
    const purchases = await Purchase.find(filter);
    const transfersIn = await Transfer.find({
      ...equipmentFilter,
      ...dateFilter,
      ...(base ? { toBase: base } : {}),
    });
    const transfersOut = await Transfer.find({
      ...equipmentFilter,
      ...dateFilter,
      ...(base ? { fromBase: base } : {}),
    });
    const assignments = await Assignment.find(filter);
    const expenditures = await Expenditure.find(filter);

    // Aggregations
    const totalPurchases = purchases.reduce((sum, p) => sum + p.quantity, 0);
    const totalTransfersIn = transfersIn.reduce((sum, t) => sum + t.quantity, 0);
    const totalTransfersOut = transfersOut.reduce((sum, t) => sum + t.quantity, 0);
    const totalAssigned = assignments.reduce((sum, a) => sum + a.quantity, 0);
    const totalExpended = expenditures.reduce((sum, e) => sum + e.quantity, 0);

    // Computed Metrics
    const netMovement = totalPurchases + totalTransfersIn - totalTransfersOut;
    const openingBalance = 100; // Placeholder (DB logic later)
    const closingBalance = openingBalance + netMovement - totalAssigned - totalExpended;

    res.json({
      base: base || "All Bases",
      equipmentType: equipmentType || "All Types",
      dateRange: { from: from || "N/A", to: to || "N/A" },
      openingBalance,
      purchases: totalPurchases,
      transfersIn: totalTransfersIn,
      transfersOut: totalTransfersOut,
      netMovement,
      assigned: totalAssigned,
      expended: totalExpended,
      closingBalance,
    });
  } catch (err) {
    console.error("Dashboard Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
