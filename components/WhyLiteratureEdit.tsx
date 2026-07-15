"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function WhyLiteratureEdit() {
  const points = [
    {
      title: "PERSONALISED MENTORSHIP",
      description: "Every learner is unique. Our approach is tailored, thoughtful and student-led.",
      // Leaf / Branch icon
      icon: (
        <svg
          className="w-8 h-8 text-[#9E3E26]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2A10 10 0 0 0 2 12c0 4.4 3.6 8 8 8h2a10 10 0 0 0 10-10C22 6.5 17.5 2 12 2z" />
          <path d="M12 22V12" />
          <path d="M12 12c2.5-3 5.5-3 8-2" />
          <path d="M12 15c-2.5-2-5-1.5-7 0" />
        </svg>
      ),
    },
    {
      title: "EDITORIAL PRECISION",
      description: "We bring the rigour of editing to every piece of writing.",
      // Sparkle / Star icon
      icon: (
        <svg
          className="w-8 h-8 text-[#9E3E26]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
          <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" fill="currentColor" fillOpacity="0.15" />
        </svg>
      ),
    },
    {
      title: "CRITICAL THINKING",
      description: "We nurture curiosity, independent thought and intellectual confidence.",
      // Open book icon
      icon: (
        <svg
          className="w-8 h-8 text-[#9E3E26]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
    {
      title: "ACADEMIC EXCELLENCE",
      description: "Excellence is not about perfection, but about purpose and progress.",
      // Feather pen icon
      icon: (
        <svg
          className="w-8 h-8 text-[#9E3E26]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <line x1="16" y1="8" x2="2" y2="22" />
          <line x1="17.5" y1="15" x2="9" y2="15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#FCFAF7] border-y border-[#C5A880]/20 py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="Our Core Values"
            title="WHY LITERATURE EDIT?"
            description="A studio shaped by precision, empathy, and the belief that strong writing begins with better attention."
          />
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {points.map((pt, index) => (
            <ScrollReveal
              key={pt.title}
              delay={index * 85}
              className={`flex flex-col items-center text-center px-4 py-6 group ${
                index < 3
                  ? "lg:border-r lg:border-[#C5A880]/20"
                  : ""
              } ${
                index % 2 === 0 ? "md:border-r-0 lg:border-r lg:border-[#C5A880]/20" : ""
              }`}
            >
              {/* Icon */}
              <div className="mb-5 text-[#9E3E26] opacity-90 transition-transform duration-300 group-hover:scale-105">
                {pt.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-[11px] font-bold tracking-[0.18em] text-[#9E3E26] mb-3">
                {pt.title}
              </h3>

              {/* Description */}
              <p className="font-serif-body text-[14px] sm:text-[15px] leading-[1.6] text-[#2E2522]/80 max-w-[220px]">
                {pt.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
