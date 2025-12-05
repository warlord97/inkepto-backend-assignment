// routes/user.routes.js
import express from "express";
import { getUserDetails } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/user", authMiddleware, getUserDetails);

export default router;
