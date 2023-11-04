import express from "express";
import {
  getAllMessagesBySessionId,
  processMessage,
} from "../controllers/chatMessageController.js";
import validateToken from "../utils/validateToken.js";
const router = express.Router();

router.get("/messages/:id", validateToken, getAllMessagesBySessionId);
router.post("/process-message", validateToken, processMessage);
export default router;
