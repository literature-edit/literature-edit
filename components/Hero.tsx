"use client";

import React from "react";
import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      {/* Left Text Content */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <h1 className="font-mono text-4xl sm:text-5xl font-bold text-gray-900 leading-tight uppercase tracking-wider">
          LITERATURE
          <span className="block mt-1 font-light text-gray-500">EDIT</span>
        </h1>

        <p className="font-mono text-sm text-gray-500 mt-6 tracking-wide uppercase font-semibold border-l-2 border-gray-400 pl-3">
          [SUBTITLE PLACEHOLDER: Read Closely. Think Boldly. Write Authentically.]
        </p>

        <p className="font-sans text-sm leading-relaxed text-gray-600 mt-4 max-w-md">
          A literary studio dedicated to thoughtful teaching, editorial excellence, and academic mentorship. From IGCSE and IB classrooms to university applications and editorial projects, every interaction is rooted in curiosity, clarity, and craft.
        </p>

        {/* Wireframe CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <a
            href="#programmes"
            className="inline-flex justify-center items-center px-5 py-2.5 text-xs tracking-wider font-mono font-bold bg-gray-800 text-white hover:bg-gray-700 transition-colors uppercase border border-gray-800"
          >
            [Explore Programmes]
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center items-center px-5 py-2.5 text-xs tracking-wider font-mono font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition-colors uppercase"
          >
            [Book a Consultation]
          </a>
        </div>
      </div>

      {/* Right Wireframe Image */}
      <div className="lg:col-span-7 w-full h-[300px] sm:h-[400px] lg:h-[450px]">
        <PlaceholderImage
          label="Hero Books & Window Light"
          className="w-full h-full"
          aspectRatio=""
        />
      </div>
    </section>
  );
}
