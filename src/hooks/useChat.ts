"use client";

import { useEffect, useRef, useState } from "react";
import type { Message } from "@/types/chat";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  async function send(question: string) {
    if (!question.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer || "Sorry, I couldn’t generate an answer.",
        },
      ]);
    } catch (err) {
      const _errMessage = err instanceof Error ? err.message : String(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "❌ Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return { messages, loading, send, chatEndRef };
}
