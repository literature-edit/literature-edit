"use client";

import React from "react";
import PlaceholderImage from "./PlaceholderImage";

export default function StudioSection() {
  return (
    <section className="relative w-full bg-white border-y border-gray-300 py-16 overflow-hidden">
      {/* Wireframe Placeholder for background decoration */}
      <div className="absolute right-4 bottom-4 w-48 h-48 border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-[10px] text-gray-400 font-mono p-4 text-center pointer-events-none select-none z-0">
        [BG GRAPHIC: BOTANICAL BRANCH]
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Side: Typewriter Image Placeholder */}
        <div className="lg:col-span-6 w-full h-[320px] sm:h-[400px]">
          <PlaceholderImage
            label="Vintage Typewriter & Library Desk"
            className="w-full h-full"
            aspectRatio=""
          />
        </div>

        {/* Right Side: Paragraphs */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="font-mono text-[10px] tracking-wider text-gray-500 uppercase font-bold">
            [SECTION: ABOUT THE STUDIO]
          </span>
          
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-gray-900 mt-2 uppercase tracking-wide">
            A LITERARY STUDIO
          </h2>
          
          {/* Wireframe divider */}
          <div className="w-24 h-1 bg-gray-400 my-4" />

          <div className="font-sans text-sm leading-relaxed text-gray-600 space-y-4 max-w-xl">
            <p className="font-bold text-gray-700">
              Literature Edit is where ideas are explored, questions are deepened, and voices are shaped.
            </p>
            <p>
              Founded by Asma Khan, the studio brings together teaching, editing, and research to help learners and writers engage with language with depth and purpose.
            </p>
            <p>
              Here, literature is not just studied—it is lived, questioned, and reimagined.
            </p>
          </div>

          <div className="mt-6">
            <a
              href="#about"
              className="inline-flex items-center gap-1 font-mono text-xs font-bold text-gray-800 hover:text-black transition-colors uppercase"
            >
              [LEARN MORE ABOUT ASMA →]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
