"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  score: string;
  name: string;
  role: string;
  content: string;
  avatarSrc: string;
  className?: string;
  isActive?: boolean;
}

export function ReviewCard({
  score,
  name,
  role,
  content,
  avatarSrc,
  className,
  isActive = true,
}: ReviewCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-[2rem] shadow-[0_16px_40px_rgba(0,0,0,0.06)] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start justify-center transition-all duration-500 max-w-[600px] w-full mx-auto",
        !isActive && "opacity-60 scale-95",
        className,
      )}
    >
      {/* Left: Score & Stars */}
      <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-zinc-100 pb-6 md:pb-0 md:pr-10">
        <span className="text-[40px] font-extrabold text-[#3a2c5a] leading-none mb-3">
          {score}
        </span>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={cn(
                "w-3.5 h-3.5",
                star <= parseFloat(score) ? "text-[#ffcd1f]" : "text-zinc-200",
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {star <= parseFloat(score) ? (
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              ) : (
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  d="M10 2l2.39 5.37h5.83l-4.46 4.39 1.39 6.24L10 15l-5.15 3 1.39-6.24L1.78 7.37H7.61z"
                />
              )}
            </svg>
          ))}
        </div>
      </div>

      {/* Right: Quote, Profile, Body */}
      <div className="flex flex-col items-start pt-2 flex-1">
        {/* Quote Icon */}
        <div className="mb-4 text-[#4b327b]">
          <svg
            className="w-8 h-8 opacity-80"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9.983 3v7.391C9.983 16.02 6.2 19.585 3 21L1.616 18.232c2.259-1.282 4.417-3.805 4.417-6.52H3V3h6.983zm14.017 0v7.391c0 5.629-3.783 9.194-6.983 10.609L15.633 18.232c2.258-1.282 4.418-3.805 4.418-6.52H16V3h8z" />
          </svg>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm">
            <Image src={avatarSrc} alt={name} fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-zinc-800 text-[15px]">{name}</span>
            <span className="text-zinc-500 font-medium text-[13px]">
              {role}
            </span>
          </div>
        </div>

        {/* Dynamic Content */}
        <p className="text-[#3a2c5a] font-bold text-[15px] leading-relaxed tracking-wide">
          {content}
        </p>
      </div>
    </div>
  );
}
