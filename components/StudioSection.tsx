"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface StudioSectionProps {
  title?: string;
  eyebrow?: string;
  paragraphs?: string[];
}

export default function StudioSection({ title, eyebrow, paragraphs }: StudioSectionProps) {
  const displayEyebrow = eyebrow || "About the Studio";
  const displayTitle = title || "MORE THAN TUTORING";
  const displayParagraphs = paragraphs && paragraphs.length > 0 ? paragraphs : [
    "Literature Edit was created with the belief that education should cultivate independent thinkers rather than simply prepare students for examinations.",
    "Every lesson is designed to encourage close reading, thoughtful discussion, and purposeful writing. Beyond the classroom, the studio offers editorial support, university guidance, and research mentoring—helping learners become articulate readers, confident writers, and critical thinkers."
  ];

  return (
    <section className="relative w-full bg-[#FCFAF7] border-y border-[#C5A880]/20 py-20 overflow-hidden">
      {/* Background texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: "url('/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Decorative Botanical Branch (flower.webp) background on the right */}
      <div className="absolute right-0 bottom-0 w-80 h-[480px] opacity-[0.08] pointer-events-none select-none z-0">
        <Image
          src="/flower.webp"
          alt="Botanical flower decoration"
          fill
          className="object-contain object-right-bottom filter brightness-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Side: Vintage Typewriter & Books Image */}
        <ScrollReveal className="lg:col-span-6 relative w-full h-[320px] sm:h-[450px] lg:h-[520px] shadow-[0_22px_70px_rgba(46,37,34,0.12)] overflow-hidden group border border-[#C5A880]/25 rounded-xl">
          <Image
            src="/vintage-studio.png"
            alt="Vintage writing desk with a typewriter, quill and inkwell, open books, and a background bookshelf"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </ScrollReveal>

        {/* Right Side: Paragraphs and Info */}
        <ScrollReveal delay={120} className="lg:col-span-6 flex flex-col justify-center">
          <SectionHeading
            eyebrow={displayEyebrow}
            title={displayTitle}
            align="left"
          />

          <div className="font-serif-body text-[#2E2522] font-medium text-[15px] sm:text-base leading-[1.75] space-y-6 max-w-xl">
            {displayParagraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "font-bold text-[#9E3E26]" : ""}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-display text-[11px] tracking-[0.2em] font-bold text-[#9E3E26] hover:text-[#85321E] transition-colors group uppercase"
            >
              Learn more about Asma
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
