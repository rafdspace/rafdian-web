import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";
import { BASE_PROMPT } from "@/constants/prompt";

export const askAI = async (
  question: string,
  modelName = "mistralai/mistral-nemo",
) => {
  const openrouter = createOpenRouter({
    apiKey: process.env.OPEN_ROUTER_API_KEY || "",
  });

  const response = streamText({
    model: openrouter(modelName),
    messages: [
      {
        role: "user",
        content: BASE_PROMPT(question),
      },
    ],
  });

  await response.consumeStream();

  if (!response.text) {
    throw new Error("Model returned no text output");
  }

  return response.text;
};
