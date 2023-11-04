import ChatSession from "../models/chatSessionModel.js";
import User from "../models/userModel.js";

// Get chatSession by ID
export const getChatSessionById = async (req, res) => {
  try {
    const chatSession = await ChatSession.findById(req.params.id);
    if (chatSession) {
      return res.json(chatSession);
    } else {
      return res.status(404).json({ error: "ChatSession not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new chatSession
export const createChatSession = async (req, res) => {
  try {
    const { chatname } = req.body;
    const userId = req.user.id;
    const chatSession = new ChatSession({ userId, chatname });
    await chatSession.save();

    return res.status(201).json(chatSession);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete chatSession by ID
export const deleteChatSession = async (req, res) => {
  const chatId = req.params.id;
  try {
    await ChatSession.findByIdAndDelete(chatId);
    return res.json({ message: "ChatSession deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllChatSessions = async (req, res) => {
  const userId = req.user.id;
  try {
    const chatSessions = await ChatSession.find({ userId });
    return res.json(chatSessions);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
