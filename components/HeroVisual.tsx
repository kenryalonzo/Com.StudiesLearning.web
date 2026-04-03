"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto opacity-100 flex items-center justify-center lg:ml-auto">
      {/* 
        PREMIUM POLISH: Scale down visual slightly (scale-90) to ensure content isn't overwhelmingly heavy 
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[90%] md:w-[85%] aspect-square"
      >
        {/* Foundation Native Shadow Blob behind the circle */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[3%] bg-[#c6d7ff] rounded-full blur-3xl opacity-30 z-0"
        />

        {/* The Core Circle Container (Strict bounds) */}
        <div className="absolute inset-0 rounded-full border border-zinc-100/40 bg-zinc-50 shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden z-10">
          {/* Secondary gradient filling container */}
          <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 to-orange-50/50" />

          {/* Man Character directly constrained gracefully */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 h-[92%] flex justify-center origin-bottom z-10"
          >
            <Image
              src="/assets/man.png"
              alt="Student standing holding book"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-contain object-bottom drop-shadow-xl"
            />
          </motion.div>
        </div>

        {/* 
          FLOATING ELEMENTS 
          Added refined spacing, backdrop-blur, and premium softer shadows
        */}

        {/* Floating Tag (Left) Top */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="absolute -left-8 top-[15%] z-20 flex items-center gap-3 py-2.5 px-4 rounded-xl bg-white/80 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-white"
        >
          <div className="relative w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="h-4 w-4 bg-blue-500 rounded-sm rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest leading-none mb-1">
              Stats
            </span>
            <span className="text-sm font-bold text-[#2a1b38] leading-none">
              +125h Apprises
            </span>
          </div>
        </motion.div>

        {/* Floating Top Right Tag */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="absolute -right-6 top-[25%] z-20 flex flex-col items-center justify-center h-[90px] w-[90px] rounded-[2rem] bg-indigo-600/90 backdrop-blur-md shadow-[0_16px_32px_rgba(79,70,229,0.25)] border border-indigo-400/50"
        >
          <span className="text-2xl font-black text-white leading-none">
            4.9
          </span>
          <span className="text-[10px] text-indigo-100 font-medium uppercase tracking-wider mt-1">
            Rating
          </span>
        </motion.div>

        {/* Floating Left Component Box */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="absolute -left-12 top-[45%] z-20 flex flex-col items-start p-4 w-[140px] rounded-2xl bg-white/85 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.06)] border border-white"
        >
          {/* Interrogation Icon Node */}
          <div className="absolute -top-5 left-4 h-10 w-10 shadow-lg bg-[#ff7a45] rounded-full p-2.5 flex items-center justify-center border-4 border-white">
            <div className="relative w-full h-full">
              <Image
                src="/assets/interrogation.png"
                alt="Quiz"
                fill
                className="object-contain invert brightness-0"
              />
            </div>
          </div>
          <span className="text-zinc-800 font-extrabold text-[15px] pt-4 leading-tight mb-2">
            Quiz Master<span className="text-[#ff7a45]">.</span>
          </span>
          <div className="w-full flex justify-between items-end">
            <div className="flex flex-col gap-1 w-full">
              <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full w-[65%] rounded-full bg-linear-to-r from-[#ffae88] to-[#ff7a45]" />
              </div>
              <span className="text-[10px] text-zinc-400 font-bold ml-auto mt-0.5">
                65%
              </span>
            </div>
          </div>
        </motion.div>

        {/* Floating Right Component Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="absolute -right-10 bottom-[15%] z-20 flex flex-col items-start p-4 w-[160px] rounded-[1.5rem] bg-white/85 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white"
        >
          <div className="flex items-center gap-3 mb-4 w-full border-b border-zinc-100 pb-3">
            <div className="h-8 w-8 shadow-sm bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <div className="relative w-4 h-4">
                <Image
                  src="/assets/Chat.png"
                  alt="Message"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-extrabold text-zinc-800">
                Support
              </span>
              <span className="text-[10px] font-medium text-zinc-400">
                24/7 Actif
              </span>
            </div>
          </div>
          <div className="flex -space-x-2">
            <div className="h-7 w-7 rounded-full border-2 border-white bg-indigo-100 z-30" />
            <div className="h-7 w-7 rounded-full border-2 border-white bg-blue-100 z-20" />
            <div className="h-7 w-7 rounded-full border-2 border-white bg-purple-100 flex text-[9px] font-bold text-purple-700 items-center justify-center z-10">
              +5
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
