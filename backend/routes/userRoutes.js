import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddlewre.js";

const router = express.Router();

// router.route('endpoint').method(controller)
// Get all the users by Admin, post registeruser
router.route("/").get(protect, admin, getUsers).post(registerUser);
// Post login and logout
router.post("/logout", logoutUser);
router.post("/auth", authUser);
// Get user profile, update user profile
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile); // Add the protect middleware in front of the get and put route
// Manipulate User by Id
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserByID)
  .put(protect, admin, updateUser);

export default router;
