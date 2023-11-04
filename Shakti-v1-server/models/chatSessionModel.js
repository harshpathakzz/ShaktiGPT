import mongoose from "mongoose";

const { Schema } = mongoose;

const chatSessionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    chatname: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ChatSession = mongoose.model("ChatSession", chatSessionSchema);

export default ChatSession;
