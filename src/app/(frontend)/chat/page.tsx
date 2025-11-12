import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ChatContainer } from "@/components/chat/ChatContainer";

export default async function ChatPage() {
  return (
    <section className="relative flex flex-col gap-6 justify-between h-screen w-full max-w-3xl mx-auto pb-8 pt-14 md:py-32 px-6 sm:px-16 bg-white dark:bg-black text-gray-800 dark:text-gray-100">
      <div className="flex items-center absolute top-4 md:top-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground hover:text-[#4b4b4b] transition"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </Link>
      </div>
      <div className="text-left md:text-center">
        <h2 className="text-3xl font-bold">Ask Me Anything 💬</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Chat with my AI twin! Ask about my experience, projects, or thoughts
          on web development.
        </p>
      </div>
      <ChatContainer />
    </section>
  );
}
