"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
  delay?: number;
}

export function FloatingElement({
  children,
  className,
  yOffset = 8,
  duration = 4,
  delay = 0,
}: FloatingElementProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay * 0.5, ease: "easeOut" }}
      className={cn("absolute z-20", className)}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -yOffset, 0] }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Infinity,
          delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
