"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroButton } from "./HeroButton";

export function SectionSwitchModes() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-visible flex items-center shadow-xs">
      {/* 
        PREMIUM UX OVERLAP FIX: Bottom-left decor ring moved drastically downward
        so it natively overlaps this section baseline AND BLEEDS into the next module
      */}
      <div className="absolute -left-10 md:-left-8 -bottom-20 sm:-bottom-32 md:-bottom-48 w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] z-0 pointer-events-none opacity-20 sm:opacity-30 mix-blend-multiply flex my-auto overflow-hidden">
        <Image
          src="/assets/demi-cercle.png"
          alt="Decoration Loop"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1240px] relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* LEFT COLUMN: Compressed Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-center md:items-start text-center md:text-left relative z-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#ff7a45] font-bold tracking-widest uppercase text-[12px] sm:text-sm mb-2 sm:mb-3"
          >
            Switching
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[32px] sm:text-[38px] md:text-[48px] font-extrabold text-[#2a1b38] leading-[1.1] mb-4 sm:mb-6 tracking-tight"
          >
            Change de mode <br className="hidden sm:block" /> en un clin
            d&apos;œil.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[15px] sm:text-[17px] text-zinc-600 font-medium leading-relaxed mb-8 sm:mb-10 max-w-[480px]"
          >
            Qu&apos;il s&apos;agisse d&apos;un guide conversationnel pour
            vulgariser vos doutes ou d&apos;un atelier condensé pour la
            recherche, l&apos;interface pivote instantanément selon votre humeur
            mentale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            className="relative w-full sm:w-auto"
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <HeroButton className="w-full sm:w-auto bg-[#4f3885] hover:bg-[#3d2a6a] text-white px-8 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all scale-100 hover:scale-105">
              Tanya sekarang
            </HeroButton>

            {/* Premium refined hand-drawn arrow curve */}
            <svg
              className="hidden sm:block absolute -right-28 -top-2 w-[120px] h-[80px] text-zinc-300 pointer-events-none opacity-70 drop-shadow-sm"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 100 100"
            >
              <path d="M 10 20 Q 50 20 85 80" strokeDasharray="4 4" />
              <path d="M 75 70 L 85 80 L 70 85" strokeWidth="2.5" />
            </svg>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Compressed Premium Image Matrix */}
        <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end mt-4 sm:mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[540px] aspect-4/5 rounded-l-2xl rounded-tr-[60px] sm:rounded-tr-[100px] rounded-br-none rounded-bl-[60px] sm:rounded-bl-[100px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.06)] border border-zinc-100/50"
          >
            <Image
              src="/assets/working-people.png"
              alt="Professionals in deep focus"
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="absolute -top-4 sm:-top-6 left-2 sm:left-4 lg:-left-4 z-30 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] px-3 py-2 sm:px-5 sm:py-3 border border-white"
          >
            <span className="text-[#2a1b38] font-extrabold text-[11px] sm:text-sm leading-tight text-center tracking-tight">
              Autonome <br /> AI Guide
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="hidden sm:flex absolute bottom-4 sm:bottom-6 -left-4 sm:-left-12 lg:-left-20 z-30 bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-[0_16px_40px_rgba(0,0,0,0.08)] p-2 sm:pr-6 items-center gap-3 sm:gap-4 border border-white"
          >
            <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] rounded-xl sm:rounded-2xl bg-[#ff7a45] text-white flex items-center justify-center font-bold text-lg sm:text-2xl shadow-sm border-b-2 sm:border-b-4 border-[#e06330]">
              ?
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2.5">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden relative shadow-sm">
                  <Image
                    src="/assets/joseph-gonzalez-iFgRcqHznqg-unsplash.png"
                    alt="Mini User 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-1 sm:h-1.5 w-8 sm:w-10 bg-zinc-200/80 rounded-full" />
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden relative shadow-sm">
                  <Image
                    src="/assets/michael-dam-mEZ3PoFGs_k-unsplash.png"
                    alt="Mini User 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-1 sm:h-1.5 w-12 sm:w-14 bg-zinc-200/80 rounded-full" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-4 lg:right-6 z-30 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-[1.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-3 sm:p-4 border border-white"
          >
            <span className="text-[9px] sm:text-[12px] font-extrabold text-[#2a1b38] block mb-1.5 sm:mb-2.5 ml-1 uppercase tracking-widest">
              Questioner
            </span>
            <div className="flex -space-x-2 sm:-space-x-2.5 items-center">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white overflow-hidden relative shadow-sm z-30">
                <Image
                  src="/assets/joseph-gonzalez-iFgRcqHznqg-unsplash.png"
                  alt="User 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white overflow-hidden relative shadow-sm z-20">
                <Image
                  src="/assets/michael-dam-mEZ3PoFGs_k-unsplash.png"
                  alt="User 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white overflow-hidden relative shadow-sm z-10">
                <Image
                  src="/assets/albert-dera-ILip77SbmOE-unsplash.png"
                  alt="User 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white bg-blue-600 text-white flex items-center justify-center text-[8px] sm:text-[10px] font-bold shadow-sm relative z-0">
                +117
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
