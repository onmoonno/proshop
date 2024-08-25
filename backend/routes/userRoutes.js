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

const router = express.Router();

// router.route('endpoint').method(controller)
// Get all the users by Admin, post registeruser
router.route("/").get(getUsers).post(registerUser);
// Post login and logout
router.post("/logout", logoutUser);
router.post("/login", authUser);
// Get user profile, update user profile
router.route("/profile").get(getUserProfile).put(updateUserProfile);
// Manipulate User by Id
router.route("/:id").delete(deleteUser).get(getUserByID).put(updateUser);

export default router;
