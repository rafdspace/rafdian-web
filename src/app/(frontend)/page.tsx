import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-3xl flex-col justify-center items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <h1 className="text-4xl font-semibold leading-tight text-black dark:text-zinc-50">
          Hi, I’m Rafdian Ramadhan 👋
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A{" "}
          <span className="font-medium text-black dark:text-zinc-50">
            Frontend Engineer
          </span>{" "}
          specializing in building fast, accessible, and user-friendly
          interfaces with{" "}
          <span className="font-semibold">Next.js, TypeScript,</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span>.
        </p>

        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Want to{" "}
          <span className="font-medium text-black dark:text-zinc-50">
            collaborate
          </span>
          , learn about my{" "}
          <span className="font-medium text-black dark:text-zinc-50">
            experience
          </span>
          , or just{" "}
          <span className="font-medium text-black dark:text-zinc-50">
            connect
          </span>
          ? Let’s chat!
        </p>
      </div>

      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-8">
          <Link
            href="/chat"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-max"
          >
            💬 Ask Me Anything
          </Link>
        </div>
      </div>
    </main>
  );
}
