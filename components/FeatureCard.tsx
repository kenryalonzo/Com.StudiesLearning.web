"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({
  title,
  description,
  iconSrc,
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
      className={cn(
        "bg-white rounded-[2rem] p-8 md:p-10 border border-zinc-50/50 shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_48px_rgba(78,56,133,0.08)] transition-all duration-500 flex flex-col items-start min-h-[220px]",
        className,
      )}
      variants={{
        hover: {
          y: -8,
          scale: 1.02,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
    >
      <motion.div
        variants={{
          hover: {
            scale: 1.06,
            rotate: 2,
            transition: { duration: 0.4, ease: "easeOut" },
          },
        }}
        className="relative w-12 h-12 mb-6 pointer-events-none"
      >
        <Image
          src={iconSrc}
          alt={title}
          fill
          sizes="48px"
          className="object-contain"
        />
      </motion.div>
      <h3 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-[15px] text-zinc-500 font-medium leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
