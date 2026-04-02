"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroButton } from "./HeroButton";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-12 lg:px-24",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:bg-black/80"
          : "bg-transparent",
      )}
    >
      {/* Logo Area */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-transform group-hover:scale-105">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold leading-none tracking-tight text-[#ff7a45]">
            STUDIES
          </span>
          <span className="text-[10px] font-semibold leading-none tracking-widest text-[#4361ee]">
            LEARNING
          </span>
        </div>
      </Link>

      {/* Center Links (Desktop only) */}
      <nav className="hidden items-center gap-8 md:flex">
        <Link
          href="#courses"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#4361ee] dark:text-zinc-400 dark:hover:text-white"
        >
          Cours et formation
        </Link>
        <Link
          href="#mentoring"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#4361ee] dark:text-zinc-400 dark:hover:text-white"
        >
          Devenir formateur
        </Link>
        <Link
          href="#blog"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#4361ee] dark:text-zinc-400 dark:hover:text-white"
        >
          Le blog
        </Link>
      </nav>

      {/* Right CTA */}
      <div className="flex items-center">
        <HeroButton className="hidden md:inline-flex" variant="primary">
          Commencer
        </HeroButton>

        {/* Mobile menu icon */}
        <button className="md:hidden p-2 text-zinc-500">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
