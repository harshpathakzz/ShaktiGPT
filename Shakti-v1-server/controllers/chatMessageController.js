import { redis } from "../config/redis.js";
import { BufferMemory } from "langchain/memory";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationChain } from "langchain/chains";
import { UpstashRedisChatMessageHistory } from "langchain/stores/message/upstash_redis";
import { config } from "dotenv";

config();

export const getAllMessagesBySessionId = async (req, res) => {
  try {
    const sessionId = req.params.id;
    const values = await redis.lrange(sessionId, 0, -1);

    if (!values) {
      // Handle the case where no values are found for the given sessionId
      return res
        .status(404)
        .json({ error: "No messages found for the provided session ID" });
    }

    const reversedValues = values.reverse();
    res.send(reversedValues);
  } catch (error) {
    // Handle other types of errors, such as connection issues with Redis
    console.error("Error retrieving messages from Redis:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const processMessage = async (req, res) => {
  const { API_KEY, sessionId, input } = req.body;

  // Validate API_KEY, sessionId, and input
  if (!API_KEY || !sessionId || !input) {
    return res.status(400).json({ error: "Invalid request parameters" });
  }

  // Validate API_KEY (You might want to implement a proper API key validation logic here)

  // Memory
  const memory = new BufferMemory({
    chatHistory: new UpstashRedisChatMessageHistory({
      sessionId: sessionId,
      config: {
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      },
    }),
  });

  // Model
  const model = new ChatOpenAI({
    openAIApiKey: API_KEY,
    modelName: "gpt-3.5-turbo",
    temperature: 0.9,
  });

  // Chain
  const chain = new ConversationChain({
    llm: model,
    memory: memory,
  });

  try {
    const response = await chain.call({ input });
    return res.json({ response });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
