"use client";

import React, { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "HOME", href: "#", active: true },
    { label: "ABOUT", href: "#" },
    { label: "PROGRAMMES", href: "#" },
    { label: "EDITORIAL SERVICES", href: "#" },
    { label: "RESOURCES", href: "#" },
    { label: "JOURNAL", href: "#" },
    { label: "CONTACT", href: "#" },
  ];

  return (
    <header className="w-full bg-white z-50 border-b border-gray-300">
      {/* Top Utility Bar (Grayscale) */}
      <div className="w-full bg-gray-100 text-gray-600 py-2 px-6 sm:px-12 flex justify-between items-center text-[10px] tracking-wider font-mono border-b border-gray-200">
        <span>[BANNER: A LITERARY STUDIO FOR READERS, WRITERS &amp; THINKERS]</span>
        
        {/* Social Icons Placeholders */}
        <div className="flex items-center gap-3">
          <span className="hover:text-black transition-colors cursor-pointer">[INSTAGRAM]</span>
          <span className="text-gray-300">|</span>
          <span className="hover:text-black transition-colors cursor-pointer">[LINKEDIN]</span>
          <span className="text-gray-300">|</span>
          <span className="hover:text-black transition-colors cursor-pointer">[EMAIL]</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center py-4 relative">
        {/* Wireframe Logo */}
        <a href="#" className="flex-shrink-0 z-10">
          <Logo className="w-20 h-20" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-mono text-xs tracking-wider relative py-2 transition-colors duration-200 ${
                item.active
                  ? "text-black font-bold border-b-2 border-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 border border-gray-300 bg-gray-50 hover:bg-gray-100"
          aria-label="Toggle Menu"
        >
          <span className="font-mono text-xs uppercase px-1">
            {isOpen ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-200 ease-in-out bg-white overflow-hidden ${
          isOpen ? "max-h-[400px] border-b border-gray-300" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-8 py-4 gap-3 border-t border-gray-200">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`font-mono text-xs tracking-wider py-2 ${
                item.active
                  ? "text-black font-bold border-l-2 border-black pl-2"
                  : "text-gray-500 hover:text-black pl-2"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
