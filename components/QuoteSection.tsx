"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function QuoteSection() {
  return (
    <section className="relative w-full bg-[#9E3E26] text-[#FAF6F0] py-20 px-6 sm:px-12 overflow-hidden border-y border-[#FAF6F0]/10">
      {/* Background books.webp cover image on the right side spanning full height */}
      <div className="absolute right-0 inset-y-0 w-[300px] sm:w-[420px] h-full opacity-20 pointer-events-none select-none z-0">
        <Image
          src="/books.webp"
          alt="Books background decoration"
          fill
          priority
          className="object-contain object-right-bottom mix-blend-multiply"
        />
      </div>

      <ScrollReveal className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Quote Mark Icon */}
        <span className="font-display text-6xl text-[#C5A880] select-none leading-none opacity-80 mb-2">
          &ldquo;
        </span>

        {/* The Quote */}
        <blockquote className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-[#FAF6F0] leading-relaxed tracking-wide max-w-3xl">
          Good literature doesn&apos;t simply provide answers - it teaches us how to ask better questions.
        </blockquote>

        {/* Author Credit */}
        <cite className="font-display text-xs sm:text-[13px] tracking-[0.25em] text-[#C5A880] not-italic mt-6 font-bold uppercase block">
          &mdash; Asma Khan
        </cite>
      </ScrollReveal>
    </section>
  );
}
