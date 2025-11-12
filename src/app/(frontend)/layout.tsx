import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafdian Ramadhan | Personal Website",
  description:
    "Personal website built with Next.js, TypeScript, Tailwind, and Biome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen items-center justify-center font-sans">
          <div className="relative flex h-screen w-full max-w-3xl mx-auto pb-[106px] pt-6 md:py-32 px-6 sm:px-16 bg-white dark:bg-black text-gray-800 dark:text-gray-100 border-x border-zinc-50 shadow-xs">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
