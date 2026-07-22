"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

interface QuoteSectionProps {
  ctaTitle?: string;
  ctaText?: string;
}

export default function QuoteSection({
  ctaTitle,
  ctaText,
}: QuoteSectionProps) {
  const displayCtaTitle = ctaTitle || "Ready to Begin?";
  const displayCtaText =
    ctaText ||
    "Whether you're preparing for examinations, refining your writing, or seeking long-term academic mentorship, I'd be delighted to work with you.";

  return (
    <section className="relative w-full bg-[#9E3E26] text-[#FAF6F0] py-20 lg:py-24 px-6 sm:px-12 overflow-hidden border-y border-[#FAF6F0]/10">
      {/* Background books.webp cover image on the right side spanning full height */}
      <div className="absolute right-0 inset-y-0 w-[300px] sm:w-[420px] h-full opacity-15 pointer-events-none select-none z-0">
        <Image
          src="/books.webp"
          alt="Books background decoration"
          fill
          priority
          className="object-contain object-right-bottom mix-blend-multiply"
        />
      </div>

      <ScrollReveal className="relative z-10 text-center flex flex-col items-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF6F0] tracking-tight mb-6">
          {displayCtaTitle}
        </h2>
        <p className="font-serif-body text-base sm:text-lg leading-relaxed text-[#FAF6F0]/90 font-medium mb-10 max-w-2xl">
          {displayCtaText}
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-[#FAF6F0] hover:bg-[#C5A880] text-[#9E3E26] hover:text-[#2E2522] text-xs tracking-[0.2em] font-display font-bold uppercase transition-all duration-300 rounded shadow-md"
        >
          Book a Consultation
        </Link>
      </ScrollReveal>
    </section>
  );
}
