import { ChatContainer } from "@/components/chat/ChatContainer";

export default async function ChatPage() {
  return (
    <div className="flex-1 flex gap-10 flex-col justify-between">
      <div className="text-left md:text-center">
        <h2 className="text-3xl font-bold">Ask Me Anything 💬</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Chat with my AI twin! Ask about my experience, projects, or thoughts
          on web development.
        </p>
      </div>
      <ChatContainer />
    </div>
  );
}
