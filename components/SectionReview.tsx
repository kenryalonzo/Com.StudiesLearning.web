"use client";

import React, { useState, useEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import { motion } from "framer-motion";

const REVIEWS_DATA = [
  {
    id: 0,
    score: "4.8",
    name: "Rizka Amalia",
    role: "Penanya",
    content:
      "L'interface m'a offert des réponses claires, sans bruit, éliminant totalement mes heures de recherche inutiles.",
    avatarSrc: "/assets/michael-dam-mEZ3PoFGs_k-unsplash.png",
  },
  {
    id: 1,
    score: "4.9",
    name: "Fajar Nur",
    role: "Chercheur",
    content:
      "Super service ! Totalement en symbiose avec mes besoins. L'absence de distractions est un luxe incroyable.",
    avatarSrc: "/assets/albert-dera-ILip77SbmOE-unsplash.png",
  },
  {
    id: 2,
    score: "5.0",
    name: "Alima Sari",
    role: "Étudiante",
    content:
      "Une esthétique qui m'apaise. Le mode switch a révolutionné mon apprentissage lors du sprint de révision.",
    avatarSrc: "/assets/joseph-gonzalez-iFgRcqHznqg-unsplash.png",
  },
];

export function SectionReview() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % REVIEWS_DATA.length);
    }, 6000); // 6 seconds auto-play
    return () => clearInterval(timer);
  }, []);

  const slideNext = () =>
    setActiveIndex((current) => (current + 1) % REVIEWS_DATA.length);
  const slidePrev = () =>
    setActiveIndex(
      (current) => (current - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length,
    );

  const getPreviousIndex = () =>
    (activeIndex - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length;
  const getNextIndex = () => (activeIndex + 1) % REVIEWS_DATA.length;

  return (
    <section className="relative w-full py-16 lg:py-20 bg-transparent overflow-visible flex flex-col items-center justify-center z-10">
      {/* Title & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className="text-center mb-10 px-6 z-20"
      >
        <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#2a1b38] mb-3 tracking-tight">
          Avis vérifiés
        </h2>
        <p className="text-base text-zinc-500 font-medium tracking-wide">
          Plus de 17 000 utilisateurs quotidiens.
        </p>
      </motion.div>

      {/* Dynamic Native Carousel Container */}
      <div className="relative w-full max-w-[1300px] flex items-center justify-center h-auto min-h-[340px] md:min-h-[380px] z-20">
        {/* Background / Peripheral Left Card (PREVIOUS) */}
        <div className="absolute left-[-20%] md:left-[-10%] lg:left-[5%] xl:left-[10%] w-[80%] md:w-[60%] lg:w-[45%] pointer-events-none select-none z-0">
          <motion.div
            key={`prev-${REVIEWS_DATA[getPreviousIndex()].id}`}
            initial={{ opacity: 0, scale: 0.9, x: -40 }}
            animate={{ opacity: 0.4, scale: 0.9, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: 40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ReviewCard
              {...REVIEWS_DATA[getPreviousIndex()]}
              isActive={false}
            />
          </motion.div>
        </div>

        {/* Background / Peripheral Right Card (NEXT) */}
        <div className="absolute right-[-20%] md:right-[-10%] lg:right-[5%] xl:right-[10%] w-[80%] md:w-[60%] lg:w-[45%] pointer-events-none select-none z-0">
          <motion.div
            key={`next-${REVIEWS_DATA[getNextIndex()].id}`}
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 0.4, scale: 0.9, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: -40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ReviewCard {...REVIEWS_DATA[getNextIndex()]} isActive={false} />
          </motion.div>
        </div>

        {/* Central Foreground Active Card */}
        <div className="relative z-20 px-4 w-full md:w-[70%] lg:w-[50%] flex items-center justify-center pointer-events-auto">
          <motion.div
            key={`active-${REVIEWS_DATA[activeIndex].id}`}
            initial={{ opacity: 0.3, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <ReviewCard {...REVIEWS_DATA[activeIndex]} isActive={true} />
          </motion.div>
        </div>

        {/* Interactive Navigation Controller Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between px-4 sm:px-10 lg:px-20 w-full max-w-[100vw] lg:max-w-7xl mx-auto pointer-events-none">
          <button
            onClick={slidePrev}
            className="pointer-events-auto group h-12 w-12 flex items-center justify-center rounded-full border border-zinc-200 bg-white/60 backdrop-blur-md text-zinc-500 hover:border-[#53408a] hover:text-[#53408a] hover:bg-white hover:shadow-lg hover:scale-110 transition-all duration-300 shadow-sm"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={slideNext}
            className="pointer-events-auto group h-12 w-12 flex items-center justify-center rounded-full border border-zinc-200 bg-white/60 backdrop-blur-md text-zinc-500 hover:border-[#53408a] hover:text-[#53408a] hover:bg-white hover:shadow-lg hover:scale-110 transition-all duration-300 shadow-sm"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
