import { NextResponse } from "next/server";
import { askGemini } from "@/lib/ai/gemini";

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    const answer = await askGemini(question);
    return NextResponse.json({ answer });
  } catch (err: any) {
    console.error("Error in /api/chat:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
