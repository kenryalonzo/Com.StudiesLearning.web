"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#2a1b38] overflow-hidden flex flex-col items-center border-t border-zinc-800">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none">
        <Image
          src="/assets/footer-image-background.png"
          alt="Footer background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12 pt-12 pb-6 flex flex-col">
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-center text-center lg:text-left xl:items-start pl-0 xl:pl-4">
            <div className="relative w-64 h-24 mb-4">
              <Image
                src="/assets/logo-white.png"
                alt="Studies Learning Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-zinc-300 text-[14px] font-medium leading-relaxed max-w-[280px]">
              L&apos;avant-garde de l&apos;apprentissage. Aucun bruit. Juste le
              savoir à l&apos;état pur.
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div className="flex flex-col">
              <h4 className="text-white font-bold text-lg mb-6">Navigation</h4>
              <ul className="flex flex-col gap-3">
                {[...Array(4)].map((_, i) => (
                  <li key={`nav-${i}`}>
                    <Link
                      href="#"
                      className="text-zinc-300 hover:text-white transition-colors text-[15px]"
                    >
                      Navigation
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <h4 className="text-white font-bold text-lg mb-6">Lien</h4>
              <ul className="flex flex-col gap-3">
                {[...Array(4)].map((_, i) => (
                  <li key={`lien-${i}`}>
                    <Link
                      href="#"
                      className="text-zinc-300 hover:text-white transition-colors text-[15px]"
                    >
                      Navigation
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col">
              <h4 className="text-white font-bold text-lg mb-6">Service</h4>
              <ul className="flex flex-col gap-3">
                {[...Array(4)].map((_, i) => (
                  <li key={`service-${i}`}>
                    <Link
                      href="#"
                      className="text-zinc-300 hover:text-white transition-colors text-[15px]"
                    >
                      Navigation
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contacts & Socials Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 w-full">
          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 pl-0 xl:pl-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#ff6122] fill-[#ff6122] w-6 h-6" />
              <span className="text-zinc-300 text-[15px]">Makepe</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#ff6122] fill-[#ff6122] w-6 h-6" />
              <span className="text-zinc-300 text-[15px]">Makepe</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#ff6122] fill-[#ff6122] w-6 h-6" />
              <span className="text-zinc-300 text-[15px]">
                Makepe@gmail.com
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg
                className="w-5 h-5 text-[#2a1b38] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg
                className="w-5 h-5 text-[#2a1b38] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.83 3.89 2.3 7.15 2.15c1.27-.06 1.65-.07 4.85-.07M12 0c-3.26 0-3.67.01-4.95.07-4.36.2-6.78 2.62-6.98 6.98-.06 1.28-.07 1.69-.07 4.95s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.36-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12 4 4 0 0112 16zm5.23-9A1.44 1.44 0 1118.67 5.56 1.44 1.44 0 0117.23 7z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform overflow-hidden px-2 pt-1 pb-[2px]"
            >
              <svg
                className="w-6 h-6 text-[#2a1b38] fill-current -mt-[2px]"
                viewBox="0 0 24 24"
              >
                <path d="M23.5 6.18a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.58a3 3 0 00-2.1 2.1C0 8.08 0 12 0 12s0 3.92.5 5.82a3 3 0 002.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.58a3 3 0 002.1-2.1C24 15.92 24 12 24 12s0-3.92-.5-5.82zM9.54 15.57V8.43L15.82 12l-6.28 3.57z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/10 my-6" />

        {/* Copyright */}
        <div className="text-center w-full">
          <p className="text-zinc-500 text-xs">
            © 2026 Studies Learning. Architecturé pour l&apos;excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
