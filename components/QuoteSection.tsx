"use client";

import React from "react";

export default function QuoteSection() {
  return (
    <section className="relative w-full bg-[#9E3E26] text-[#FAF6F0] py-20 px-6 sm:px-12 overflow-hidden border-y border-[#FAF6F0]/10">
      {/* Decorative Book Illustration watermark on the bottom right */}
      <div className="absolute right-0 bottom-0 w-80 h-44 opacity-20 pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 200 100"
          fill="none"
          stroke="#FAF6F0"
          strokeWidth="0.75"
          className="w-full h-full"
        >
          {/* Stack of books */}
          {/* Bottom Book */}
          <path d="M110,95 L195,95 L195,85 L110,85 Z" />
          <path d="M110,95 C100,95 100,85 110,85" />
          
          {/* Middle Book */}
          <path d="M115,85 L190,85 L190,73 L115,73 Z" />
          <path d="M115,85 C106,85 106,73 115,73" />
          
          {/* Top Open Book leaning */}
          <g transform="translate(130, 48) rotate(-15)">
            {/* Open Pages */}
            <path d="M-30,20 C-20,15 -10,15 0,20 C10,15 20,15 30,20 L30,-5 C20,-10 10,-10 0,-5 C-10,-10 -20,-10 -30,-5 Z" />
            <line x1="0" y1="-5" x2="0" y2="20" />
            {/* Pages deckle */}
            <path d="M-28,17 C-19,13 -9,13 0,17 C9,13 19,13 28,17" />
          </g>
          
          {/* Quill in ink bottle */}
          <path d="M75,95 L95,95 L90,80 L80,80 Z" />
          <path d="M85,80 L80,50 C77,45 74,40 70,30 C76,42 79,48 83,55" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Quote Mark Icon */}
        <span className="font-display text-6xl text-[#C5A880] select-none leading-none opacity-80 mb-2">
          &ldquo;
        </span>

        {/* The Quote */}
        <blockquote className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-[#FAF6F0] leading-relaxed tracking-wide max-w-3xl">
          Good literature doesn&apos;t simply provide answers&mdash;it teaches us how to ask better questions.
        </blockquote>

        {/* Author Credit */}
        <cite className="font-display text-[10px] tracking-[0.3em] text-[#C5A880] not-italic mt-6 font-semibold uppercase block">
          &mdash; Asma Khan
        </cite>
      </div>
    </section>
  );
}
