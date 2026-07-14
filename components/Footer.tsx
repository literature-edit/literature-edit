"use client";

import React from "react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 border-t border-gray-300 text-gray-800 pt-12 pb-6 px-6 sm:px-12 relative overflow-hidden">
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-gray-200">
        {/* Column 1: Logo & Bio */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <Logo className="w-16 h-16 mb-3" />
          <span className="font-mono text-xs font-bold text-gray-800 tracking-wider">
            [LITERATURE EDIT]
          </span>
          <p className="font-sans text-xs leading-relaxed text-gray-600 mt-2 max-w-xs">
            For Readers, Writers, Learners. Dedicated to thoughtful teaching, editorial excellence, and academic mentorship.
          </p>

          {/* Social Icons Placeholders */}
          <div className="flex items-center gap-3 mt-4 text-[10px] font-mono text-gray-500">
            <span className="hover:text-black cursor-pointer">[IG]</span>
            <span>•</span>
            <span className="hover:text-black cursor-pointer">[LN]</span>
            <span>•</span>
            <span className="hover:text-black cursor-pointer">[EMAIL]</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2 flex flex-col">
          <span className="font-mono text-[10px] tracking-wider font-bold text-gray-800 mb-3 uppercase">
            [Quick Links]
          </span>
          <nav className="flex flex-col gap-2 font-mono text-[11px] text-gray-600">
            <a href="#" className="hover:text-black">[About]</a>
            <a href="#" className="hover:text-black">[Programmes]</a>
            <a href="#" className="hover:text-black">[Editorial Services]</a>
            <a href="#" className="hover:text-black">[Resources]</a>
            <a href="#" className="hover:text-black">[Journal]</a>
            <a href="#" className="hover:text-black">[Contact]</a>
          </nav>
        </div>

        {/* Column 3: Programmes */}
        <div className="lg:col-span-3 flex flex-col">
          <span className="font-mono text-[10px] tracking-wider font-bold text-gray-800 mb-3 uppercase">
            [Programmes]
          </span>
          <nav className="flex flex-col gap-2 font-mono text-[11px] text-gray-600">
            <a href="#" className="hover:text-black">[IGCSE English]</a>
            <a href="#" className="hover:text-black">[IB English]</a>
            <a href="#" className="hover:text-black">[Literature in English]</a>
            <a href="#" className="hover:text-black">[Academic Writing]</a>
            <a href="#" className="hover:text-black">[University Mentorship]</a>
          </nav>
        </div>

        {/* Column 4: Contact */}
        <div className="lg:col-span-3 flex flex-col">
          <span className="font-mono text-[10px] tracking-wider font-bold text-gray-800 mb-3 uppercase">
            [Contact]
          </span>
          <div className="flex flex-col gap-2 font-sans text-xs text-gray-600">
            <p>Email: hello@literatureedit.com</p>
            <p>Location: Mumbai, India</p>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center pt-6 text-[10px] font-mono text-gray-500 gap-3">
        <p>&copy; {currentYear} Literature Edit. [All rights reserved]</p>
        <div className="flex gap-3">
          <a href="#" className="hover:text-black">[Privacy Policy]</a>
          <span>|</span>
          <a href="#" className="hover:text-black">[Terms of Service]</a>
        </div>
      </div>
    </footer>
  );
}
