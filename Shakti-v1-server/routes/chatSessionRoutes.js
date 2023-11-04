// routes/chatSessionRoutes.js
import express from "express";
import {
  getChatSessionById,
  createChatSession,
  deleteChatSession,
  getAllChatSessions,
} from "../controllers/chatSessionController.js";
import validateToken from "../utils/validateToken.js";

const router = express.Router();

// Get chatSession by ID
router.get("/chatSession/:id", validateToken, getChatSessionById);

// Create a new chatSession
router.post("/chatSession", validateToken, createChatSession);

// Delete chatSession by ID
router.delete("/chatSession/:id", validateToken, deleteChatSession);

//Get all chatSessions
router.get("/chatSessions", validateToken, getAllChatSessions);

export default router;
