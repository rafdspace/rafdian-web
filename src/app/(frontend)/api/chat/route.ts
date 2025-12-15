import { NextResponse } from "next/server";
import { askAI } from "@/lib/ai/openRouter";

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 },
      );
    }

    const answer = await askAI(question);

    return NextResponse.json({ answer });
  } catch (err: unknown) {
    console.error("Error in /api/chat:", err);

    const message =
      err instanceof Error ? err.message : "Internal server error";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
