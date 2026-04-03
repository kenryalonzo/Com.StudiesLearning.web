"use client";

import React from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { VisualBlock } from "./VisualBlock";

export function SectionWhyChooseUs() {
  return (
    <section className="relative w-full min-h-screen py-24 bg-[#f2f4f7] overflow-hidden flex items-center">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1280px]">
        {/* Mobile Title (shows only on small screens for better UX, originally assumed desktop layout) */}
        <div className="block lg:hidden mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[38px] sm:text-[46px] font-extrabold text-[#2a1b38]"
          >
            Pourquoi <span className="text-[#ff6122]">nous choisir ?</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          {/* LEFT: 40% Visual Block */}
          <div className="w-full lg:w-[40%] shrink-0 relative z-10">
            <VisualBlock />
          </div>

          {/* RIGHT: 60% Content & Grid */}
          <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start z-10 pl-0 lg:pl-12 xl:pl-20">
            {/* Desktop Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block text-[40px] xl:text-[48px] font-extrabold text-[#2a1b38] tracking-tight mb-12"
            >
              Pourquoi <span className="text-[#ff6122]">nous choisir ?</span>
            </motion.h2>

            {/* Matrix Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full max-w-2xl lg:max-w-none">
              <FeatureCard
                delay={0.1}
                title="Parcours Adaptatif"
                description="Notre IA ajuste la difficulté en temps réel pour un apprentissage en état de flux constant."
                iconSrc="/assets/Edit.png"
              />

              <FeatureCard
                delay={0.2}
                title="Librairie Premium"
                description="Accès instantané à un répertoire de solutions éducatives vérifiées. Aucun bruit."
                iconSrc="/assets/Star.png"
              />

              <FeatureCard
                delay={0.3}
                title="Soutien Intelligent"
                description="Analyse de vos schémas cognitifs pour vous guider exactement là où vous bloquez."
                iconSrc="/assets/Paper Plus.png"
              />

              <FeatureCard
                delay={0.4}
                title="Développement Pur"
                description="Générez de la vraie compétence, et laissez l'IA abstraire les tâches rébarbatives."
                iconSrc="/assets/Discovery.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
