import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import validateToken from "../utils/validateToken.js";

const router = express.Router();

router.get("/", validateToken, getUserProfile);
router.put("/", validateToken, updateUserProfile);

export default router;
