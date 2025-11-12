"use client";

import { useChat } from "@/hooks/useChat";
import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";

const SUGGESTION_QUESTIONS = [
  "Tell me about your experience.",
  "What tools and technologies do you use?",
  "What’s your role at Appfuxion Consulting?",
  "How to connect with you?",
];

export function ChatContainer() {
  const { messages, send, loading, chatEndRef } = useChat();

  const handleSuggestionClick = (question: string) => {
    send(question);
  };

  return (
    <div className="flex flex-col rounded-xl p-4 bg-gray-50 dark:bg-gray-900 gap-4 overflow-hidden h-[65vh]">
      <div
        className={`flex-1 flex flex-col ${
          messages.length ? "justify-end" : "justify-center"
        } overflow-hidden`}
      >
        <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 text-center text-gray-400">
              <div>👋 Start the conversation by asking me something!</div>
              <div className="flex flex-wrap justify-center gap-2">
                {SUGGESTION_QUESTIONS.map((q) => (
                  <button
                    type="button"
                    key={q}
                    onClick={() => handleSuggestionClick(q)}
                    className="px-3 py-1 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {messages.map((message, i) => (
                <ChatBubble key={`message-${i + 1}`} message={message} />
              ))}
              {loading && (
                <div className="text-sm italic text-gray-400">Typing...</div>
              )}
              <div ref={chatEndRef} />
            </div>
          )}
        </div>
      </div>
      <ChatInput onSend={send} disabled={loading} />
    </div>
  );
}
