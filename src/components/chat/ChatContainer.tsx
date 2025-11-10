"use client";

import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";
import { useChat } from "@/hooks/useChat";

export function ChatContainer() {
  const { messages, send, loading, chatEndRef } = useChat();

  return (
    <div className="flex flex-col rounded-xl p-4 bg-gray-50 dark:bg-gray-900 gap-4 overflow-hidden h-[65vh]">
      <div
        className={`flex-1 flex flex-col ${
          messages.length ? "justify-end" : "justify-center"
        } overflow-hidden`}
      >
        <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400">
              👋 Start the conversation by asking me something!
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {messages.map((message, i) => (
                <ChatBubble key={i} message={message} />
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
