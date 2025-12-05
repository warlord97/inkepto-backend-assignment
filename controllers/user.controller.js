// controllers/userController.js
import User from "../models/User.js";

export const getUserDetails = async (req, res, next) => {
  try {
    const userId = req.user.id; // comes from authMiddleware

    const user = await User.findById(userId).select("email firstName lastName");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  } catch (err) {
    next(err);
  }
};
