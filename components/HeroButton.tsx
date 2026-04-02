"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline";
}

export function HeroButton({
  children,
  className,
  variant = "primary",
  ...props
}: HeroButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === "primary" &&
          "bg-[#4361ee] text-white shadow-md hover:bg-[#3f57cf] hover:shadow-lg focus:ring-[#4361ee]",
        variant === "outline" &&
          "border border-[#ff7a45]/30 bg-transparent text-[#ff7a45] hover:bg-[#ff7a45]/5 hover:border-[#ff7a45] focus:ring-[#ff7a45]",
        "px-6 py-3 text-sm sm:text-base",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
