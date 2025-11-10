"use client";

import { useState } from "react";

interface Props {
  disabled?: boolean;
  onSend: (question: string) => void;
}

export function ChatInput({ disabled, onSend }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Ask me anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        className="flex-1 border rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={disabled}
        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg transition"
      >
        Send
      </button>
    </form>
  );
}
