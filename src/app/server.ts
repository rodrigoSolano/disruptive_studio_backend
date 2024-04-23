import cors from "cors";
import express from "express";

import statsRouter from "../modules/stats/routes/statsRoutes";

import authRoutes from "../modules/auth/routes/authRoutes";
import userRoutes from "../modules/users/routes/userRoutes";
import themeRoutes from "../modules/themes/routes/themeRoutes";
import contentRoutes from "../modules/content/routes/contentRoutes";
import categoryRoutes from "../modules/categories/routes/categoryRoutes";
import permissionsRoutes from "../modules/permissions/routes/permissionsRoutes";

import { authMiddleware } from "../middleware/authMiddleware";

import { config } from "../config";
import connectDatabase from "../config/database";

const app = express();
const port = config.port || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.use("/api/stats", authMiddleware, statsRouter);

app.use("/api/users", authMiddleware, userRoutes);

app.use("/api/themes", themeRoutes);

app.use("/api/contents", authMiddleware, contentRoutes);

app.use("/api/categories", authMiddleware, categoryRoutes);

app.use("/api/permissions", authMiddleware, permissionsRoutes);

const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();
