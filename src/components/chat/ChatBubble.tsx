import type { Message } from "@/types/chat";

interface Props {
  message: Message;
}

export function ChatBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`max-w-[80%] rounded-lg px-4 py-2 text-sm leading-relaxed wrap-break-word ${
        isUser
          ? "bg-blue-600 text-white self-end ml-auto"
          : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 self-start"
      }`}
    >
      {message.content}
    </div>
  );
}
