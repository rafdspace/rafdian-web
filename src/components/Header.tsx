"use client";

import { House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LINKS = [
  { href: "/", label: <House />, key: "home" },
  { href: "/chat", label: "Chat", key: "chat" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div
      className="fixed h-max flex gap-2 items-center left-1/2 -translate-x-1/2 bottom-6 md:absolute md:left-14 md:top-8 md:translate-x-0 border rounded-md border-gray-50 p-2 shadow-xs bg-white dark:bg-black z-100
      "
    >
      {LINKS.map(({ href, label, key }, index) => {
        const isActive = pathname === href;
        const isLast = index === LINKS.length - 1;

        return (
          <React.Fragment key={key}>
            <Link
              href={href}
              className={`p-2 w-max rounded-md cursor-pointer transition-colors flex items-center ${
                isActive
                  ? "bg-foreground text-white"
                  : "hover:bg-gray-100 text-foreground"
              }`}
            >
              {label}
            </Link>
            {!isLast && <div className="h-6 w-px bg-zinc-200 mx-1" />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Header;
