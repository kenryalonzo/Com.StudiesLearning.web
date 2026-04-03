"use client";

import React from "react";
import { ReviewCard } from "./ReviewCard";

export function SectionReview() {
  return (
    <section className="relative w-full py-28 bg-[#e6e6e8] overflow-hidden flex flex-col items-center justify-center">
      {/* Title & Subtitle */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl sm:text-[44px] font-extrabold text-[#53408a] mb-4">
          Review
        </h2>
        <p className="text-lg text-zinc-700 font-medium tracking-wide">
          Lebih dari 17.000 penanya telah terbantu
        </p>
      </div>

      {/* Primary Carousel Structure Container */}
      <div className="relative w-full max-w-[1400px] flex items-center justify-center h-auto min-h-[400px]">
        {/* Background/Offset Cards Limits Container */}
        <div className="absolute inset-0 flex items-center justify-between pointer-events-none opacity-40 xl:opacity-100">
          {/* Left Hidden Card */}
          <div className="w-[30%] translate-x-[-40%] scale-95 opacity-60 transition-transform duration-500 hidden md:block">
            <ReviewCard
              score="4.8"
              name="Fajar Nur"
              role="Penanya"
              content="Sangat membantu ! Saya tidak menyangka layanannya sebagus ini."
              avatarSrc="/assets/albert-dera-ILip77SbmOE-unsplash.png"
              isActive={false}
            />
          </div>
          {/* Right Hidden Card */}
          <div className="w-[30%] translate-x-[40%] scale-95 opacity-60 transition-transform duration-500 hidden md:block">
            <ReviewCard
              score="4.9"
              name="Alima Sari"
              role="Pelajar"
              content="Banyak teman yang menyarankan, dan benar saja hasilnya memuaskan."
              avatarSrc="/assets/joseph-gonzalez-iFgRcqHznqg-unsplash.png"
              isActive={false}
            />
          </div>
        </div>

        {/* Central Active Card Structure */}
        <div className="relative z-10 px-4 w-full flex items-center justify-center">
          <ReviewCard
            score="4.8"
            name="Rizka Amalia"
            role="Penanya"
            content="Saya sudah banyak mencari tentang pertanyaan yang saya cari saat ini, dan di Brainly Reborn ini saya mendapatkan jawaban yang akurat dan simple."
            avatarSrc="/assets/michael-dam-mEZ3PoFGs_k-unsplash.png"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between px-6 sm:px-12 md:px-24 w-full max-w-[96vw] lg:max-w-7xl mx-auto pointer-events-none">
          <button className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full border-[2.5px] border-zinc-400 text-zinc-500 hover:border-[#53408a] hover:text-[#53408a] hover:bg-white hover:scale-105 transition-all shadow-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full border-[2.5px] border-zinc-400 text-zinc-500 hover:border-[#53408a] hover:text-[#53408a] hover:bg-white hover:scale-105 transition-all shadow-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
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

      {/* Bottom Floating Visual Elements */}
      <div className="absolute bottom-12 w-full flex justify-between items-center px-4 md:px-12 lg:px-24 pointer-events-none opacity-80">
        {/* Left Bottom Star Widget */}
        <div className="relative flex items-center">
          <div className="bg-white/40 h-24 w-32 rounded-3xl backdrop-blur-sm -ml-8 flex flex-col justify-center gap-3 p-4">
            <div className="w-full h-1.5 bg-zinc-300 rounded-full opacity-50" />
            <div className="w-2/3 h-1.5 bg-zinc-300 rounded-full opacity-50" />
            <div className="w-[85%] h-1.5 bg-zinc-300 rounded-full opacity-50" />
          </div>
          <div className="absolute top-0 right-0 -mr-6 h-12 w-12 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-[#ffcd1f]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* Center Muted Text */}
        <span className="text-zinc-400 text-sm font-medium">
          Dari bertanya hingga mengerti
        </span>

        {/* Right Bottom Star Widget */}
        <div className="relative flex items-center">
          <div className="absolute top-0 left-0 -ml-6 h-12 w-12 bg-white rounded-2xl shadow-lg flex items-center justify-center z-10">
            <svg
              className="w-6 h-6 text-[#ffcd1f]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div className="bg-white/40 h-24 w-32 rounded-3xl backdrop-blur-sm flex flex-col justify-center gap-3 p-4 pl-10">
            <div className="w-full h-1.5 bg-zinc-300 rounded-full opacity-50" />
            <div className="w-[85%] h-1.5 bg-zinc-300 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
