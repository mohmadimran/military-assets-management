import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoute.js";
import baseRoutes from "./routes/basesRoute.js";
import purchaseRoutes from "./routes/purchasesRoute.js";
import transferRoutes from "./routes/transfersRoute.js";
import assignmentRoutes from "./routes/assigmentRoute.js";
import expenditureRoutes from "./routes/expendaturesRoute.js";
import dashboardRoutes from "./routes/dashbordRoute.js";
import auditRoutes from "./routes/auditRoute.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bases", baseRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/api/transfers", transferRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/expenditures", expenditureRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/audit", auditRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
