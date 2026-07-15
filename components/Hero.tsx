"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative top-[-14px] w-full px-6 sm:px-12 lg:px-16 pt-28 pb-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:left-[2px]"
    >
      {/* Left Text Content */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-[76px] font-bold text-[#9E3E26] leading-[1.05] tracking-[0.06em]">
          LITERATURE
          <span className="block mt-2">EDIT</span>
        </h1>

        {/* Asterisk/Flower Divider Ornament */}
        <div className="my-6 text-left">
          <svg className="w-4 h-4 text-[#9E3E26]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Subtitle */}
        <p className="font-display italic text-[#9E3E26] text-2xl sm:text-[28px] leading-[1.3] font-medium tracking-wide">
          Read Closely. Think Boldly.
          <span className="block mt-1">Write Authentically.</span>
        </p>

        {/* Body Paragraph */}
        <p className="font-serif-body text-[#2E2522]/90 text-[15px] sm:text-base leading-relaxed max-w-md mt-6 opacity-95">
          A literary studio dedicated to thoughtful teaching, editorial excellence, and academic mentorship. From IGCSE and IB classrooms to university applications and editorial projects, every interaction is rooted in curiosity, clarity, and craft.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/programmes"
            className="inline-flex justify-center items-center px-6 py-3.5 text-xs tracking-[0.18em] font-display font-bold bg-[#9E3E26] text-[#FAF6F0] hover:bg-[#85321E] hover:shadow-sm transition-all duration-300 uppercase rounded"
          >
            Explore Programmes
          </Link>
          <Link
            href="/contact"
            className="inline-flex justify-center items-center px-6 py-3.5 border border-[#9E3E26] text-xs tracking-[0.18em] font-display font-bold text-[#9E3E26] bg-[#FAF6F0] hover:bg-[#9E3E26] hover:text-[#FAF6F0] transition-all duration-300 uppercase rounded"
          >
            Book a Consultation
          </Link>
        </div>
      </div>

      {/* Right Image Display with Left Fade Gradient */}
      <div className="lg:col-span-7 relative w-full h-[350px] sm:h-[500px] lg:h-[580px] overflow-hidden group rounded-xl">
        {/* Soft edge blur overlay blending the image left-side to background on desktop */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/80 to-transparent pointer-events-none z-10 hidden lg:block" />

        {/* Soft edge blur overlay blending the image top-side to background on mobile */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FAF6F0] to-transparent pointer-events-none z-10 lg:hidden" />

        <Image
          src="/hero-books.png"
          alt="Vintage books open on a wooden table, teacup, and dried flowers in front of a window with warm morning light"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
    </section>
  );
}
