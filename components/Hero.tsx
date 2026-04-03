"use client";

import React from "react";
import Image from "next/image";
import { HeroButton } from "./HeroButton";
import { HeroVisual } from "./HeroVisual";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Exact Native Background Asset */}
      <Image
        src="/assets/background-image.jpg"
        alt="Background Texture"
        fill
        priority
        className="absolute inset-0 z-0 object-cover opacity-90 mix-blend-multiply"
      />

      {/* Container aligned specifically 45% left / 55% right */}
      <div className="container max-w-[1200px] relative z-10 mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between mt-20 md:mt-0">
        {/* LEFT BLOCK: 45% Width */}
        <div className="w-full md:w-[45%] flex flex-col items-start text-left shrink-0 z-20 md:-mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 px-4 py-1.5 flex items-center bg-[#fdf2ec] rounded-full border border-orange-100"
          >
            <span className="text-[13px] font-medium text-[#ff7a45]">
              Studies Learning
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[52px] md:text-[64px] font-extrabold tracking-tight text-[#4a3978] leading-[1.05] mb-5 w-[110%]"
          >
            Mastery, curated.
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[17px] text-zinc-600 font-medium leading-[1.6] mb-10 max-w-[420px]"
          >
            The digital curator for your intellectual journey. Experience a
            dual-engine environment that adapts to how you think.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <HeroButton className="bg-[#5a488c] hover:bg-[#483770] text-white text-[15px] font-medium px-7 py-3.5 rounded-lg shadow-md border-transparent">
              Commencer maintenant
            </HeroButton>
            <HeroButton className="bg-[#fafafa]/80 hover:bg-[#fff5f0] text-[#ff7a45] border border-[#ff7a45] text-[15px] font-medium px-7 py-3.5 rounded-lg backdrop-blur-sm">
              Contactez-nous
            </HeroButton>
          </motion.div>
        </div>

        {/* RIGHT VISUAL: 55% Width */}
        <div className="w-full md:w-[55%] h-full flex justify-end items-center shrink-0 mt-12 md:mt-0 z-10">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
