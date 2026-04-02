"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroButton } from "./HeroButton";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#fafafa] pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle geometric background tiles (simulating the reference texture) */}
        <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.01)_25%,rgba(0,0,0,0.01)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.01)_75%,rgba(0,0,0,0.01)_100%)] bg-[length:64px_64px]" />

        {/* Soft shadow gradients */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8 p-1.5 pr-4 flex items-center bg-orange-50 rounded-full border border-orange-100 w-fit"
            >
              <span className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center mr-3 shadow-sm" />
              <span className="text-xs font-semibold text-[#ff7a45] uppercase tracking-wider">
                Studies Learning
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#3b2b68] leading-[1.1] mb-6"
            >
              Mastery, <br className="hidden sm:block" /> curated.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl text-zinc-500 font-medium leading-relaxed mb-10 max-w-lg"
            >
              The digital curator for your intellectual journey. Experience a
              dual-engine environment that adapts to how you think.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <HeroButton
                variant="primary"
                className="w-full sm:w-auto bg-[#53408a] hover:bg-[#433175] text-lg px-8 py-4 h-auto shadow-[0_8px_24px_rgba(83,64,138,0.25)] ring-[#53408a]"
              >
                Commencer maintenant
              </HeroButton>
              <HeroButton
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-4 h-auto"
              >
                Contactez-nous
              </HeroButton>
            </motion.div>
          </div>

          {/* Graphical UI Element */}
          <div className="w-full flex justify-center lg:justify-end pr-0 lg:pr-8 py-8">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
