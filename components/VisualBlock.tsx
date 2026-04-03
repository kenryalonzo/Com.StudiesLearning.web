"use client";

import React from "react";
import Image from "next/image";
import { FloatingElement } from "./FloatingElement";
import { motion } from "framer-motion";

export function VisualBlock() {
  return (
    <div className="relative w-full h-[600px] flex items-end justify-center pt-16">
      {/* Main Blue Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 w-[90%] md:w-[85%] h-[85%] rounded-[3rem] bg-linear-to-br from-[#536dfe] to-[#304ffe] shadow-xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/assets/background-image.jpg')] opacity-10 mix-blend-overlay" />
      </motion.div>

      {/* Human Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 w-[95%] h-full flex items-end justify-center origin-bottom"
      >
        {/* The image strictly must slightly overflow the container */}
        <Image
          src="/assets/women.png"
          alt="Professional Woman pointing"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain object-bottom pointer-events-none drop-shadow-[0_20px_40px_rgba(48,79,254,0.3)]"
        />
      </motion.div>

      {/* 1. Top-left pills */}
      <FloatingElement
        delay={0}
        duration={5}
        yOffset={6}
        className="top-12 sm:top-24 left-[-10px] sm:left-4"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50 pr-8">
            <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center p-1">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/Chart.png"
                  alt="Chart"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-[11px] font-bold text-zinc-600">
              Category
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50 pr-8 ml-6">
            <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center p-1">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/Chat-purple.png"
                  alt="Comment"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-[11px] font-bold text-zinc-600">
              Komentar
            </span>
          </div>
        </div>
      </FloatingElement>

      {/* 2. Top-right floating card */}
      <FloatingElement
        delay={1}
        duration={6}
        yOffset={8}
        className="top-16 sm:top-20 right-[-10px] sm:-right-8"
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-white/60 p-4 w-[110px] sm:w-[130px] flex flex-col gap-3">
          {/* Image placeholder block */}
          <div className="w-full aspect-4/3 bg-zinc-100 rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute -top-3 -right-3 w-10 h-10 blur-sm rounded-full bg-blue-100" />
            <div className="relative w-8 h-8 rounded shadow-sm overflow-hidden z-10 bg-white p-1">
              <Image
                src="/assets/Gallery.png"
                alt="Gallery"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Text lines simulate */}
          <div className="space-y-2 w-full mt-1">
            <div className="w-full h-2 rounded-full bg-zinc-200" />
            <div className="w-2/3 h-2 rounded-full bg-zinc-200" />
          </div>
        </div>
      </FloatingElement>

      {/* 3. Orange circular button */}
      <FloatingElement
        delay={0.5}
        duration={4.5}
        yOffset={5}
        className="bottom-24 sm:bottom-32 left-[-10px] sm:left-2"
      >
        <div className="relative w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full bg-[#ff7a45] shadow-[0_12px_28px_rgba(255,122,69,0.4)] border border-[#ff9368] flex items-center justify-center group">
          {/* Pulse Layer */}
          <div className="absolute inset-0 bg-[#ff7a45] rounded-full animate-ping opacity-20" />
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:scale-110">
            <Image
              src="/assets/Chat.png"
              alt="Chat"
              fill
              className="object-contain pointer-events-none"
            />
          </div>
        </div>
      </FloatingElement>
    </div>
  );
}
