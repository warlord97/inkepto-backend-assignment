import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { connectDB } from "./config/db.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

//middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Load Swagger YAML
const swaggerDocument = YAML.load("./swagger/swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);

// Health check route
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Backend service is running" });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error("ERROR:", err);

  return res.status(err.status || 500).json({
    message: err.message || "Internal server error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  connectDB();
});
