import express from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "./config/dbConnection.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import chatSessionRoutes from "./routes/chatSessionRoutes.js";
import chatMessageRoutes from "./routes/chatMessageRoutes.js";

config();

const app = express();

connectDB();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/chat", chatSessionRoutes);
app.use("/api/chat", chatMessageRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, console.log(`Server running on port ${PORT}`)); // listen to port

export default app;
