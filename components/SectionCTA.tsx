"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroButton } from "./HeroButton";

export function SectionCTA() {
  return (
    <section className="w-full py-32 bg-[#e6e6e8] flex flex-col items-center justify-center">
      <div className="container px-6 max-w-3xl flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-[52px] leading-tight font-extrabold text-[#3a2f52] mb-6 tracking-tight"
        >
          Your cognitive prime starts here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[17px] text-zinc-600 font-medium mb-12 max-w-[500px] leading-relaxed"
        >
          Join the new vanguard of digital learners. No templates, no noise.
          Just pure, unadulterated knowledge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeroButton className="bg-[#614995] hover:bg-[#4d3878] text-white px-8 py-3 h-auto text-[15px] font-medium rounded-lg shadow-sm border border-[#614995]">
            Begin Your Journey
          </HeroButton>
        </motion.div>
      </div>
    </section>
  );
}
