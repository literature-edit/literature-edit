"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavLinks } from "../data/site";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full bg-[#FAF6F0]/92 backdrop-blur-md z-50 shadow-[0_1px_0_rgba(197,168,128,0.24)]">
      {/* Background texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: "url('/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Top Utility Bar */}
      <div className="w-full bg-[#9E3E26] text-[#FAF6F0] py-2 px-6 sm:px-12 flex justify-between items-center text-[10px] tracking-[0.18em] font-display font-medium relative z-10">
        <span className="truncate">A LITERARY STUDIO FOR READERS, WRITERS &amp; THINKERS.</span>
        
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A880] transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A880] transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="mailto:hello@literatureedit.com"
            className="hover:text-[#C5A880] transition-colors"
            aria-label="Email"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full px-6 sm:px-12 lg:px-16 flex justify-between items-center h-16 sm:h-20 relative z-10">
        {/* Logo positioned absolutely to allow overlap without stretching the navbar */}
        <Link href="/" className="absolute left-6 sm:left-12 -top-2 sm:-top-6 z-20 transition-opacity hover:opacity-90">
          <Logo className="w-24 h-36 sm:w-36 sm:h-54" imageClassName="-translate-y-3" />
        </Link>

        {/* Spacer to reserve space for the absolute logo */}
        <div className="w-24 sm:w-36 flex-shrink-0" />

        {/* Desktop Menu */}
        <nav 
          className="hidden lg:flex items-center gap-8 xl:gap-10"
          style={{ position: "relative", top: "1px" }}
        >
          {mainNavLinks.map((item) => {
            const active = pathname === item.href;

            return (
            <Link
              key={item.label}
              href={item.href}
              className={`font-display text-xs tracking-[0.2em] font-bold relative py-2 transition-colors duration-300 ${
                active
                  ? "text-[#9E3E26]"
                  : "text-[#2E2522] hover:text-[#9E3E26]"
              }`}
            >
              {item.label}
              {active && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E3E26]" />
              )}
            </Link>
          )})}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#2E2522] focus:outline-none border border-[#C5A880]/30 rounded-sm bg-[#FAF6F0]"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out bg-[#FAF6F0]/92 overflow-hidden ${
          isOpen ? "max-h-[450px] border-b border-[#C5A880]/40" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-8 py-4 gap-4 border-t border-[#C5A880]/20">
          {mainNavLinks.map((item) => {
            const active = pathname === item.href;

            return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`font-display text-[13px] sm:text-sm tracking-[0.2em] font-bold py-2 transition-colors ${
                active
                  ? "text-[#9E3E26] border-l-2 border-[#9E3E26] pl-3"
                  : "text-[#2E2522] hover:text-[#9E3E26] pl-3"
              }`}
            >
              {item.label}
            </Link>
          )})}
        </nav>
      </div>
    </header>
  );
}
