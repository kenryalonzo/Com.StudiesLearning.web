"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center translate-x-4">
      {/* Solid Blue Circle */}
      <motion.div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full bg-[#465cf4] shadow-lg bottom-4 left-1/2 -translate-x-1/2" />

      {/* Main image of the man (Slightly overflows top of circle) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="absolute bottom-0 w-[80%] h-[120%] left-[10%] flex items-end drop-shadow-2xl"
      >
        <Image
          src="/assets/man.png"
          alt="Curator"
          fill
          priority
          className="object-contain object-bottom pointer-events-none"
        />
      </motion.div>

      {/* FLOATING UI ELEMENTS */}

      {/* 1. Questioner Card (Top Right) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        whileHover={{ y: -4 }}
        className="absolute right-0 top-12 z-20 flex flex-col items-center justify-center h-32 w-32 rounded-3xl bg-white shadow-[0_12px_24px_rgba(0,0,0,0.08)] p-4"
      >
        {/* Yellow dot top right */}
        <div className="absolute top-0 right-0 -mr-2 -mt-2 h-6 w-6 rounded-full bg-[#ffcd1f] shadow-sm border-2 border-white" />
        <span className="text-[11px] font-bold text-zinc-800 mb-2 whitespace-nowrap">
          Questioner
        </span>
        <div className="relative flex items-center justify-center h-[72px] w-[72px]">
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            {/* Background ring */}
            <circle
              cx="36"
              cy="36"
              r="26"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="6"
            />
            {/* Progress ring */}
            <motion.circle
              cx="36"
              cy="36"
              r="26"
              fill="none"
              stroke="#4361ee"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ strokeDasharray: "164", strokeDashoffset: "164" }}
              animate={{ strokeDashoffset: "30" }}
              transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <span className="text-lg font-bold text-zinc-900 absolute font-sans">
            117k
          </span>
        </div>
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
        />
      </motion.div>

      {/* 2. Assisting Support Card (Middle Left) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="absolute left-[-1.5rem] top-[45%] z-20 flex flex-col items-start p-4 w-[140px] rounded-2xl bg-white/60 backdrop-blur-md shadow-[0_8px_16px_rgba(0,0,0,0.04)] border border-white/50"
      >
        {/* Interrogation Icon Top Left */}
        <div className="absolute -top-6 left-6 h-[46px] w-[46px] shadow-sm bg-[#ff7a45] rounded-full p-[10px] flex items-center justify-center border-4 border-[#ffb8a0]">
          <div className="relative w-full h-full">
            <Image
              src="/assets/interrogation.png"
              alt="Help"
              fill
              className="object-contain pointer-events-none"
            />
          </div>
        </div>

        <span className="text-[13px] font-bold text-[#4361ee] leading-[1.2] mt-6 text-left">
          Assisting
          <br />
          Support
        </span>
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute inset-0 pointer-events-none"
        />
      </motion.div>

      {/* 3. Orange Chat Icon (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="absolute right-4 bottom-24 z-30 flex items-center justify-center h-[60px] w-[60px] rounded-full bg-[#ff7a45] shadow-[0_12px_24px_rgba(255,122,69,0.4)] border border-[#ff9368]"
      >
        <div className="relative w-7 h-7 mt-0.5 ml-0.5">
          <Image
            src="/assets/Chat.png"
            alt="Chat"
            fill
            className="object-contain pointer-events-none"
          />
        </div>
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute inset-0 pointer-events-none"
        />
      </motion.div>
    </div>
  );
}
