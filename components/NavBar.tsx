"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:bg-black/90"
          : "bg-transparent",
      )}
    >
      {/* Logo Area */}
      <Link
        href="/"
        className="flex items-center group relative w-44 h-12 transition-transform hover:scale-105"
      >
        <Image
          src="/assets/logo.png"
          alt="Studies Learning"
          fill
          priority
          sizes="(max-width: 768px) 140px, 176px"
          className="object-contain object-left"
        />
      </Link>

      {/* Center Links (Desktop only) */}
      <nav className="hidden items-center gap-8 md:flex">
        <Link
          href="#courses"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#4361ee] dark:text-zinc-400 dark:hover:text-white"
        >
          Accueil
        </Link>
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
