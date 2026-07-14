"use client";

import React from "react";

export default function FeaturedProgrammes() {
  const programmes = [
    {
      title: "CAMBRIDGE & IB ENGLISH",
      description:
        "Expert guidance for IGCSE, IB Language & Literature, Literature in English and more.",
      link: "#",
      // Book stack icon
      icon: (
        <svg
          className="w-10 h-10 text-[#9E3E26]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="8" y1="6" x2="16" y2="6" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="16" y2="14" />
        </svg>
      ),
    },
    {
      title: "EDITORIAL SERVICES",
      description:
        "Developmental editing, proofreading, content review and editorial support for writers and publishers.",
      link: "#",
      // Inkwell and Quill icon
      icon: (
        <svg
          className="w-10 h-10 text-[#9E3E26]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Inkwell */}
          <path d="M17 18h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
          <rect x="7" y="11" width="10" height="9" rx="1" />
          <path d="M9 11V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          {/* Quill */}
          <path d="M19 3c-1.5 2-3 5.5-4 8M13 12l-1.5 1.5M11.5 13.5L9 16l-1 3 3-1 2.5-2.5" />
        </svg>
      ),
    },
    {
      title: "UNIVERSITY APPLICATIONS",
      description:
        "Personal statements, academic essays, interviews and overall application strategy.",
      link: "#",
      // University/Pantheon Classical Pillars icon
      icon: (
        <svg
          className="w-10 h-10 text-[#9E3E26]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 22h18" />
          <path d="M4 18h16" />
          <path d="M4 10h16M4 6l8-4 8 4" />
          {/* Pillars */}
          <line x1="6" y1="10" x2="6" y2="18" />
          <line x1="10" y1="10" x2="10" y2="18" />
          <line x1="14" y1="10" x2="14" y2="18" />
          <line x1="18" y1="10" x2="18" y2="18" />
        </svg>
      ),
    },
    {
      title: "RESEARCH & ACADEMIC WRITING",
      description:
        "Research support, essay mentorship and academic writing for school and university students.",
      link: "#",
      // Magnifying glass over paper/book icon
      icon: (
        <svg
          className="w-10 h-10 text-[#9E3E26]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Paper */}
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          {/* Lens */}
          <circle cx="10" cy="14" r="3" />
          <line x1="12.2" y1="16.2" x2="15" y2="19" />
        </svg>
      ),
    },
  ];

  return (
    <section id="programmes" className="w-full bg-[#FAF6F0] py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex flex-col items-center mb-16">
        <span className="font-display text-[10px] tracking-[0.25em] text-[#9E3E26] uppercase font-semibold">
          What We Offer
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-light text-[#9E3E26] mt-2 tracking-[0.1em] text-center">
          FEATURED PROGRAMMES
        </h2>
        {/* Diamond Divider */}
        <div className="flex items-center gap-3 mt-4 w-full justify-center">
          <div className="h-[0.75px] w-8 bg-[#C5A880]" />
          <div className="w-1.5 h-1.5 bg-[#9E3E26] rotate-45" />
          <div className="h-[0.75px] w-8 bg-[#C5A880]" />
        </div>
      </div>

      {/* Grid Layout with vertical borders on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-y border-[#C5A880]/30 py-8 lg:py-4">
        {programmes.map((prog, index) => (
          <div
            key={prog.title}
            className={`flex flex-col items-center text-center px-6 py-10 lg:py-8 group transition-all duration-300 hover:bg-[#FCFAF7] ${
              // Vertical dividers for desktop (index 0, 1, 2 have border-right)
              index < 3
                ? "lg:border-r lg:border-[#C5A880]/30 border-b border-[#C5A880]/20 md:border-b-0"
                : ""
            } ${
              // Grid dividers for tablet (2x2 structure)
              index % 2 === 0
                ? "md:border-r md:border-[#C5A880]/30"
                : ""
            } ${
              // Bottom border for mobile/tablet rows
              index < 2
                ? "border-b border-[#C5A880]/30 md:border-b md:border-b-[#C5A880]/30 lg:border-b-0"
                : "border-b border-[#C5A880]/20 md:border-b-0"
            }`}
          >
            {/* Styled Icon Wrapper */}
            <div className="mb-6 p-4 rounded-full bg-[#FCFAF7] border border-[#C5A880]/20 group-hover:border-[#9E3E26]/40 transition-colors duration-300">
              {prog.icon}
            </div>

            {/* Title */}
            <h3 className="font-display text-sm font-semibold tracking-[0.16em] text-[#9E3E26] min-h-[40px] flex items-center justify-center">
              {prog.title}
            </h3>

            {/* Description */}
            <p className="font-serif-body text-[13px] leading-[1.65] text-[#2E2522]/80 mt-4 mb-8 flex-grow max-w-[240px]">
              {prog.description}
            </p>

            {/* Link */}
            <a
              href={prog.link}
              className="font-display text-[9px] tracking-[0.2em] font-semibold text-[#2E2522]/90 hover:text-[#9E3E26] transition-colors group/link uppercase flex items-center gap-1.5"
            >
              Learn More
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
