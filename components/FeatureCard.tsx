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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 1.02, 0.48, 1] }}
      whileHover="hover"
      className={cn(
        "bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 flex flex-col items-start min-h-[220px]",
        className,
      )}
      variants={{
        hover: { y: -5, transition: { duration: 0.4, ease: "easeOut" } },
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
      <p className="text-sm text-zinc-500 font-medium leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
