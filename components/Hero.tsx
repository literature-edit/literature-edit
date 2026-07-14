"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Text Content */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[#963D26] leading-[1.1] tracking-[0.06em]">
          LITERATURE
          <span className="block mt-1 font-normal">EDIT</span>
        </h1>

        <p className="font-display italic text-[#963D26] text-xl sm:text-2xl mt-8 leading-relaxed">
          Read Closely. Think Boldly.
          <span className="block">Write Authentically.</span>
        </p>

        <p className="font-serif-body text-[#2A2421]/90 text-sm sm:text-[15px] leading-relaxed max-w-md mt-6 opacity-95">
          A literary studio dedicated to thoughtful teaching, editorial excellence, and academic mentorship. From IGCSE and IB classrooms to university applications and editorial projects, every interaction is rooted in curiosity, clarity, and craft.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#programmes"
            className="inline-flex justify-center items-center px-6 py-3.5 text-[10px] tracking-[0.2em] font-display font-medium bg-[#963D26] text-[#FAF6F0] hover:bg-[#80311D] hover:shadow-sm transition-all duration-300 uppercase"
          >
            Explore Programmes
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center items-center px-6 py-3.5 border border-[#963D26] text-[10px] tracking-[0.2em] font-display font-medium text-[#963D26] bg-transparent hover:bg-[#963D26] hover:text-[#FAF6F0] transition-all duration-300 uppercase"
          >
            Book a Consultation
          </a>
        </div>
      </div>

      {/* Right Image Display */}
      <div className="lg:col-span-7 relative w-full h-[350px] sm:h-[500px] lg:h-[580px] overflow-hidden shadow-sm group">
        {/* Soft edge blur border matching background for visual premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/20 to-transparent pointer-events-none z-10" />
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
