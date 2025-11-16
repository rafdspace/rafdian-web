"use client";

import { House, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LINKS = [
  { href: "/", label: <House />, key: "home" },
  { href: "/chat", label: "Chat", key: "chat" },
  { href: "/projects", label: "Projects", key: "projects" },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const desktopLinks = LINKS.slice(1);
  const mobileLinks = LINKS.slice(1);

  return (
    <header className="fixed top-0 w-full border-b border-gray-100 dark:border-gray-900 bg-white dark:bg-black z-50">
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between py-2 px-6 sm:px-16">
        <Link
          href="/"
          className={`p-2 rounded-md transition flex items-center ${
            pathname === "/"
              ? "bg-foreground text-background"
              : "hover:bg-gray-100 dark:hover:bg-zinc-800 text-foreground"
          }`}
        >
          <House />
        </Link>

        <nav className="hidden md:flex gap-2 items-center">
          {desktopLinks.map(({ href, label, key }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={key}
                href={href}
                className={`p-2 rounded-md transition ${
                  isActive
                    ? "bg-foreground text-background"
                    : "hover:bg-gray-100 dark:hover:bg-zinc-800 text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white dark:bg-black">
          {mobileLinks.map(({ href, label, key }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={key}
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 transition ${
                  isActive
                    ? "bg-foreground text-background"
                    : "hover:bg-gray-100 text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
