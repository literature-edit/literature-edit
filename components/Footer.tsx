"use client";

import React from "react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#F3EDE2] border-t border-[#D1C2B0]/40 text-[#2A2421] pt-16 pb-8 px-6 sm:px-12 relative overflow-hidden">
      {/* Botanical outline element on bottom right */}
      <div className="absolute right-4 bottom-4 w-40 h-60 opacity-15 pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 100 150"
          fill="none"
          stroke="#963D26"
          strokeWidth="0.8"
          strokeLinecap="round"
          className="w-full h-full"
        >
          <path d="M10,140 C15,105 25,70 65,15" />
          <path d="M38,85 C42,75 50,72 56,76 C59,78 58,82 54,88 C48,94 40,90 38,85 Z" />
          <path d="M46,70 C50,60 58,57 64,61 C67,63 66,67 62,73 C56,79 48,75 46,70 Z" />
          <path d="M28,100 C22,95 16,87 19,81 C21,78 25,78 29,83 C34,88 33,95 28,100 Z" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10 border-b border-[#D1C2B0]/30 pb-12">
        {/* Column 1: Logo & Bio */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <Logo className="w-20 h-20 -ml-2 mb-4" />
          <span className="font-display text-sm font-semibold tracking-wider text-[#963D26]">
            LITERATURE EDIT
          </span>
          <p className="font-serif-body text-[13px] leading-relaxed text-[#2A2421]/80 mt-2 max-w-xs">
            For Readers, Writers, Learners. Dedicated to thoughtful teaching, editorial excellence, and academic mentorship.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#963D26] hover:text-[#80311D] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#963D26] hover:text-[#80311D] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="mailto:hello@literatureedit.com"
              className="text-[#963D26] hover:text-[#80311D] transition-colors"
              aria-label="Email"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2 flex flex-col">
          <span className="font-display text-[10px] tracking-[0.2em] font-bold text-[#963D26] mb-4 uppercase">
            Quick Links
          </span>
          <nav className="flex flex-col gap-2.5 font-display text-[11px] tracking-wider font-medium text-[#2A2421]/80">
            <a href="#" className="hover:text-[#963D26] transition-colors">About</a>
            <a href="#" className="hover:text-[#963D26] transition-colors">Programmes</a>
            <a href="#" className="hover:text-[#963D26] transition-colors">Editorial Services</a>
            <a href="#" className="hover:text-[#963D26] transition-colors">Resources</a>
            <a href="#" className="hover:text-[#963D26] transition-colors">Journal</a>
            <a href="#" className="hover:text-[#963D26] transition-colors">Contact</a>
          </nav>
        </div>

        {/* Column 3: Programmes */}
        <div className="lg:col-span-3 flex flex-col">
          <span className="font-display text-[10px] tracking-[0.2em] font-bold text-[#963D26] mb-4 uppercase">
            Programmes
          </span>
          <nav className="flex flex-col gap-2.5 font-display text-[11px] tracking-wider font-medium text-[#2A2421]/80">
            <a href="#" className="hover:text-[#963D26] transition-colors">IGCSE English</a>
            <a href="#" className="hover:text-[#963D26] transition-colors">IB English</a>
            <a href="#" className="hover:text-[#963D26] transition-colors">Literature in English</a>
            <a href="#" className="hover:text-[#963D26] transition-colors">Academic Writing</a>
            <a href="#" className="hover:text-[#963D26] transition-colors">University Mentorship</a>
          </nav>
        </div>

        {/* Column 4: Contact */}
        <div className="lg:col-span-3 flex flex-col">
          <span className="font-display text-[10px] tracking-[0.2em] font-bold text-[#963D26] mb-4 uppercase">
            Contact
          </span>
          <div className="flex flex-col gap-3 font-serif-body text-[13px] leading-relaxed text-[#2A2421]/85">
            <p>
              <a
                href="mailto:hello@literatureedit.com"
                className="hover:text-[#963D26] transition-colors underline decoration-[#C5A880]/50 underline-offset-4"
              >
                hello@literatureedit.com
              </a>
            </p>
            <p className="opacity-90">Mumbai, India</p>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center pt-8 text-[10px] tracking-wider font-display font-medium text-[#2A2421]/60 gap-4 relative z-10">
        <p>&copy; {currentYear} Literature Edit. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#963D26] transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-[#963D26] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
