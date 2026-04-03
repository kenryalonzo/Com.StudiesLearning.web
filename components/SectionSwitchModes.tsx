"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroButton } from "./HeroButton";
import { FloatingElement } from "./FloatingElement";

export function SectionSwitchModes() {
  return (
    <section className="relative w-full min-h-screen py-24 bg-[#fef6ee] overflow-hidden flex items-center">
      {/* Bottom-left decor ring */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] z-0 pointer-events-none opacity-40">
        <Image
          src="/assets/demi-cercle.png"
          alt="Decoration"
          fill
          className="object-contain object-bottom-left"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[1280px] relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* LEFT COLUMN: Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start relative z-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#ff7a45] font-bold tracking-wide uppercase mb-4"
          >
            Switching
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] md:text-[52px] font-extrabold text-[#53408a] leading-[1.1] mb-8"
          >
            Switch modes in a<br />
            heartbeat.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-700 leading-relaxed mb-12 max-w-lg"
          >
            Whether you need a conversational guide to explain complex concepts
            or a structured workbench for deep research, Studies Learning pivots
            to your current mental state.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <HeroButton className="bg-[#5a488c] hover:bg-[#483770] text-white px-8 py-4 rounded-full font-medium">
              Tanya sekarang
            </HeroButton>

            {/* Hand-drawn inline SVG arrow */}
            <svg
              className="absolute -right-24 top-0 w-32 h-24 text-zinc-300 pointer-events-none opacity-80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 100 100"
            >
              <path d="M 10 20 Q 50 60 90 90" strokeDasharray="4 4" />
              <path d="M 10 20 L 25 10 M 10 20 L 20 30" />
            </svg>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Image & Floating Cards */}
        <div className="w-full lg:w-[55%] relative flex justify-end">
          {/* Constrained Image Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[600px] aspect-4/5 rounded-l-3xl rounded-tr-[120px] rounded-br-none rounded-bl-[120px] overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/working-people.png"
              alt="People working"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </motion.div>

          {/* FLOATING CARD 1: Autonome AI Guide (Top Left Image constraint) */}
          <FloatingElement
            delay={0}
            duration={6}
            yOffset={6}
            className="absolute -top-6 left-12 lg:left-0 z-30"
          >
            <div className="bg-white rounded-3xl shadow-[0_12px_24px_rgba(0,0,0,0.06)] px-6 py-4 flex flex-col items-center justify-center">
              <span className="text-zinc-900 font-extrabold text-[15px] leading-tight text-center">
                Autonome
                <br />
                AI Guide
              </span>
            </div>
          </FloatingElement>

          {/* FLOATING CARD 2: Questioner avatars (Bottom Right) */}
          <FloatingElement
            delay={0.5}
            duration={5}
            yOffset={8}
            className="absolute -bottom-8 right-0 sm:-right-8 z-30"
          >
            <div className="bg-white rounded-3xl shadow-[0_16px_32px_rgba(0,0,0,0.06)] p-5 flex flex-col">
              <span className="text-[13px] font-bold text-zinc-900 mb-3 ml-1 tracking-wide">
                Questioner
              </span>
              <div className="flex -space-x-3 items-center">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                  <Image
                    src="/assets/joseph-gonzalez-iFgRcqHznqg-unsplash.png"
                    alt="User 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                  <Image
                    src="/assets/michael-dam-mEZ3PoFGs_k-unsplash.png"
                    alt="User 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                  <Image
                    src="/assets/albert-dera-ILip77SbmOE-unsplash.png"
                    alt="User 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#1a5cff] text-white flex items-center justify-center text-[11px] font-bold shadow-sm relative z-10">
                  +117
                </div>
              </div>
            </div>
          </FloatingElement>

          {/* FLOATING CARD 3: Left Orange (?) Interaction Component */}
          <FloatingElement
            delay={1}
            duration={4.5}
            yOffset={4}
            className="absolute bottom-6 -left-8 sm:-left-12 lg:-left-20 z-30"
          >
            <div className="bg-white rounded-3xl shadow-[0_12px_32px_rgba(0,0,0,0.06)] p-2 pr-6 flex items-center gap-4">
              <div className="w-[52px] h-[52px] rounded-2xl bg-[#ff7a45] text-white flex items-center justify-center font-bold text-2xl shadow-md border-b-4 border-[#e06330]">
                ?
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden relative border border-white">
                    <Image
                      src="/assets/joseph-gonzalez-iFgRcqHznqg-unsplash.png"
                      alt="Mini User 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="h-2 w-8 bg-zinc-200 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden relative border border-white">
                    <Image
                      src="/assets/michael-dam-mEZ3PoFGs_k-unsplash.png"
                      alt="Mini User 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="h-2 w-10 bg-zinc-200 rounded-full" />
                </div>
              </div>
            </div>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
}
