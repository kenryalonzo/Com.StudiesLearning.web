"use client";

import React from "react";
import { motion } from "framer-motion";

function ChatBubble() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="absolute -left-6 -top-6 flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-tr from-[#ff7a45] to-[#ffa07a] shadow-[0_8px_16px_rgba(255,122,69,0.3)]"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    </motion.div>
  );
}

function StatRing() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.6, type: "spring" }}
      whileHover={{ y: -5 }}
      className="absolute -right-10 top-10 flex flex-col items-center justify-center h-32 w-32 rounded-3xl bg-white/60 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.06)] border border-white/40"
    >
      <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-yellow-400 shadow-lg border-[3px] border-white" />
      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-2">
        Questioner
      </span>
      <div className="relative flex items-center justify-center h-16 w-16">
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#f1f5f9"
            strokeWidth="6"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#4361ee"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ strokeDasharray: "175", strokeDashoffset: "175" }}
            animate={{ strokeDashoffset: "40" }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <span className="text-sm font-bold text-zinc-900">117k</span>
      </div>
    </motion.div>
  );
}

function SupportBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="absolute -left-12 bottom-12 flex flex-col items-start p-4 rounded-2xl bg-white/50 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.05)] border border-white/50"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#ff7a45] to-[#ffb8a0] text-white font-bold text-sm mb-2 shadow-md">
        ?
      </div>
      <span className="text-sm font-semibold text-[#4361ee] leading-tight">
        Assisting
        <br />
        Support
      </span>
    </motion.div>
  );
}

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center mt-12 lg:mt-0"
    >
      {/* Background soft glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.6, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-[#4361ee]/20 blur-[100px]"
      />

      {/* Blue Circle Base */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-[85%] w-[85%] rounded-full bg-[#4361ee] flex flex-col shadow-2xl items-center justify-center overflow-visible"
      >
        {/* Main UI Card */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute inset-x-8 -inset-y-4 rounded-[2rem] bg-white shadow-[0_24px_56px_rgba(0,0,0,0.15)] border border-white/60 p-6 flex flex-col gap-4 z-10"
        >
          {/* Mock Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="h-3 w-1/3 rounded-full bg-zinc-100" />
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-red-400" />
              <div className="h-2 w-2 rounded-full bg-yellow-400" />
              <div className="h-2 w-2 rounded-full bg-green-400" />
            </div>
          </div>

          {/* Input / Response Blocks */}
          <div className="space-y-4 flex-1">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-[#4361ee] to-[#7f9cf5]" />
              <div className="space-y-2 flex-1">
                <div className="h-3 w-3/4 rounded-full bg-zinc-100" />
                <div className="h-3 w-1/2 rounded-full bg-zinc-100" />
              </div>
            </div>

            <div className="flex items-start gap-3 pr-8 mt-6">
              <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-[#ff7a45] to-[#ffa07a] flex items-center justify-center text-white">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="space-y-2 flex-1 p-3 rounded-2xl rounded-tl-none bg-zinc-50 border border-zinc-100">
                <div className="h-2 w-full rounded-full bg-zinc-200" />
                <div className="h-2 w-4/5 rounded-full bg-zinc-200" />
                <div className="h-2 w-2/3 rounded-full bg-zinc-200" />
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="mt-auto h-12 w-full rounded-xl border border-zinc-100 bg-zinc-50/50 flex items-center px-4 justify-between">
            <div className="h-2 w-1/4 rounded-full bg-zinc-200" />
            <div className="h-6 w-16 rounded-full bg-[#4361ee] opacity-20" />
          </div>
        </motion.div>

        {/* Floating elements attached to the circle / card */}
        <ChatBubble />
        <StatRing />
        <SupportBadge />
      </motion.div>
    </motion.div>
  );
}
