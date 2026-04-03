"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/50 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-[1240px] flex items-center justify-between">
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center">
          <div
            className={`relative ${scrolled ? "h-6 w-32" : "h-8 w-40"} transition-all duration-300`}
          >
            <Image
              src="/assets/logo.png"
              alt="Studies Learning"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <Link
            href="#accueil"
            className="text-[15px] font-bold text-[#ff6122] transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="#courses"
            className="text-[15px] font-medium text-zinc-600 transition-colors hover:text-[#4f3885]"
          >
            Cours et formation
          </Link>
          <Link
            href="#method"
            className="text-[15px] font-medium text-zinc-600 transition-colors hover:text-[#4f3885]"
          >
            Devenir formateur
          </Link>
          <Link
            href="#pricing"
            className="text-[15px] font-medium text-zinc-600 transition-colors hover:text-[#4f3885]"
          >
            Le blog
          </Link>
        </div>

        {/* Right Side: Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className="text-[15px] font-medium text-[#4f3885] hover:text-[#3d2a6a] transition-colors"
          >
            Connexion
          </Link>
          <Link
            href="/signup"
            className="bg-[#ff6122] hover:bg-[#e0531a] text-white px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all shadow-sm hover:shadow-md"
          >
            S&apos;inscrire
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="lg:hidden text-zinc-800 p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200/50 shadow-xl flex flex-col py-6 px-6 gap-6 animation-fade-in z-50">
          <Link
            href="#accueil"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-[#ff6122] border-b border-zinc-100 pb-3"
          >
            Accueil
          </Link>
          <Link
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-zinc-700 hover:text-[#4f3885] border-b border-zinc-100 pb-3"
          >
            Cours et formation
          </Link>
          <Link
            href="#method"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-zinc-700 hover:text-[#4f3885] border-b border-zinc-100 pb-3"
          >
            Méthodologie
          </Link>
          <Link
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-zinc-700 hover:text-[#4f3885] border-b border-zinc-100 pb-3"
          >
            Tarifs
          </Link>

          <div className="flex flex-col gap-4 mt-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-lg font-semibold text-[#4f3885] border border-[#4f3885] rounded-full"
            >
              Connexion
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-lg font-semibold text-white bg-[#ff6122] rounded-full"
            >
              S&apos;inscrire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
