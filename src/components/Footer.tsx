"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Github from "@/app/(frontend)/assets/images/github-mark.png";
import Gitlab from "@/app/(frontend)/assets/images/gitlab-mark.png";
import LinkedIn from "@/app/(frontend)/assets/images/li-mark.png";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-black z-50">
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between py-2 px-6 sm:px-16">
        <span className="text-xs text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} All rights reserved
        </span>

        <div className="flex items-center gap-4">
          <Link
            href="mailto:rafdian.ramadhan@gmail.com"
            className="text-zinc-600 dark:text-white hover:text-red-600 dark:hover:text-red-400"
          >
            <Mail size={18} />
          </Link>
          <Link
            href="https://github.com/rafdspace"
            target="_blank"
            className="hover:opacity-80"
          >
            <div className="dark:bg-white dark:rounded-sm dark:w-5 dark:h-5 dark:flex dark:items-center dark:justify-center">
              <Image src={Github} alt="GitHub" width={16} height={16} />
            </div>
          </Link>
          <Link
            href="https://gitlab.com/rafdianr"
            target="_blank"
            className="hover:opacity-80"
          >
            <div className="bg-foreground rounded-sm w-5 h-5 flex items-center justify-center">
              <Image src={Gitlab} alt="GitHub" width={20} height={20} />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/rafdian-ramadhan"
            target="_blank"
            className="hover:opacity-80"
          >
            <Image src={LinkedIn} alt="LinkedIn" width={20} height={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
