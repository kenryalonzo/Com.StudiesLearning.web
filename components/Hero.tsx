"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroVisual } from "./HeroVisual";
import { HeroButton } from "./HeroButton";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-white">
      {/* Muted Premium Background Cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/background-image.jpg"
          alt="Abstract Architecture Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom opacity-20 sepia-[0.2]"
        />
        <div className="absolute inset-0 bg-white/60 mix-blend-overlay backdrop-blur-[2px]" />
      </div>

      {/* Container aligned specifically 45% left / 55% right */}
      <div className="container max-w-[1240px] relative z-10 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT BLOCK: 45% Width */}
        <div className="w-full md:w-[45%] flex flex-col items-start text-left shrink-0 z-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-200/50 shadow-sm mb-6"
          >
            <div className="h-5 w-5 rounded-full bg-[#ff6122] flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-zinc-800">
              Elevez votre apprentissage
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="text-[44px] md:text-[54px] xl:text-[62px] leading-[1.1] font-extrabold text-[#2a1b38] tracking-tight mb-8"
          >
            Maîtrisez <br /> l&apos;art{" "}
            <span className="font-normal italic font-serif text-[#5a4687]">
              d&apos;apprendre.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-[19px] text-zinc-600 font-medium mb-10 max-w-[480px] leading-relaxed"
          >
            Rejoignez l&apos;élite digitale. Plus de distractions. Uniquement un
            savoir pur et condensé pour accélérer votre trajectoire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <HeroButton className="bg-[#4f3885] hover:bg-[#3d2a6a] text-white px-8 py-4 h-auto text-base rounded-full shadow-[0_8px_20px_rgba(79,56,133,0.25)] hover:shadow-[0_12px_28px_rgba(79,56,133,0.35)] transition-all">
              Découvrir nos cours
            </HeroButton>
            <HeroButton className="bg-white/80 backdrop-blur-sm border border-zinc-200 text-[#4f3885] hover:bg-zinc-50 px-8 py-4 h-auto text-base rounded-full shadow-sm hover:shadow-md transition-all">
              Voir la démo
            </HeroButton>
          </motion.div>
        </div>

        {/* RIGHT VISUAL: 55% Width */}
        <div className="w-full md:w-[55%] flex justify-end items-center shrink-0 z-10 w-full max-w-[500px] lg:max-w-[580px] mx-auto md:mx-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
