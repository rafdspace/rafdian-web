import { BASE_PROMPT } from "@/constants/prompt";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function askGemini(question: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: BASE_PROMPT(question),
          },
        ],
      },
    ],
  });

  return response.text ?? "No answer available.";
}
