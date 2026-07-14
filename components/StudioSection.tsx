"use client";

import React from "react";
import Image from "next/image";

export default function StudioSection() {
  return (
    <section className="relative w-full bg-[#FCFAF7] border-y border-[#C5A880]/20 py-20 overflow-hidden">
      {/* Decorative Botanical Branch SVG background on the right */}
      <div className="absolute right-0 bottom-4 lg:bottom-10 w-64 h-96 opacity-15 pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 100 200"
          fill="none"
          stroke="#9E3E26"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          {/* Main stem */}
          <path d="M10,190 C15,140 35,90 80,20" />
          {/* Leaves/Offshoots */}
          <path d="M40,115 C45,105 55,100 62,105 C65,107 65,112 60,120 C52,128 42,122 40,115 Z" />
          <path d="M50,95 C55,85 65,80 72,85 C75,87 75,92 70,100 C62,108 52,102 50,95 Z" />
          <path d="M60,75 C65,65 75,60 82,65 C85,67 85,72 80,80 C72,88 62,82 60,75 Z" />
          
          <path d="M30,135 C22,130 15,120 18,112 C20,108 25,108 30,115 C37,122 35,130 30,135 Z" fill="none" />
          <path d="M22,155 C14,150 7,140 10,132 C12,128 17,128 22,135 C29,142 27,150 22,155 Z" fill="none" />
          
          <path d="M70,45 C73,38 80,35 85,38 C88,40 87,45 83,50 C78,55 72,52 70,45 Z" />
          <path d="M78,25 C80,20 85,18 88,21 C90,23 89,27 85,31 C81,35 79,32 78,25 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Side: Vintage Typewriter & Books Image */}
        <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] shadow-sm overflow-hidden group">
          <Image
            src="/vintage-studio.png"
            alt="Vintage writing desk with a typewriter, quill and inkwell, open books, and a background bookshelf"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* Right Side: Paragraphs and Info */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="font-display text-[10px] tracking-[0.25em] text-[#9E3E26] uppercase font-semibold">
            About the Studio
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#9E3E26] mt-3 tracking-[0.08em]">
            A LITERARY STUDIO
          </h2>
          
          {/* Styled Separator Line */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-[0.75px] w-12 bg-[#C5A880]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#9E3E26]" />
            <div className="h-[0.75px] w-24 bg-[#C5A880]/50" />
          </div>

          <div className="font-serif-body text-[#2E2522]/90 text-[15px] sm:text-base leading-[1.75] space-y-6 max-w-xl">
            <p className="font-semibold text-[#9E3E26]/90">
              Literature Edit is where ideas are explored, questions are deepened, and voices are shaped.
            </p>
            <p>
              Founded by Asma Khan, the studio brings together teaching, editing, and research to help learners and writers engage with language with depth and purpose.
            </p>
            <p>
              Here, literature is not just studied—it is lived, questioned, and reimagined.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#about"
              className="inline-flex items-center gap-2 font-display text-[10px] tracking-[0.2em] font-semibold text-[#9E3E26] hover:text-[#85321E] transition-colors group uppercase"
            >
              Learn more about Asma
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
