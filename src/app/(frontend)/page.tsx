import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-1 flex-col justify-center">
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

        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Interested in my{" "}
          <Link
            href="/projects"
            className="font-medium text-black dark:text-zinc-50 underline underline-offset-4"
          >
            projects
          </Link>
          , curious about my{" "}
          <span className="font-medium text-black dark:text-zinc-50">
            experience
          </span>
          , or want to{" "}
          <Link
            href="/chat"
            className="font-medium text-black dark:text-zinc-50 underline underline-offset-4"
          >
            chat with me
          </Link>
          ? I’d love to connect!
        </p>
      </div>
    </div>
  );
}
