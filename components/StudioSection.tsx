"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function StudioSection() {
  return (
    <section className="relative w-full bg-[#FCFAF7] border-y border-[#C5A880]/20 py-20 overflow-hidden">
      {/* Decorative Botanical Branch (flower.webp) background on the right */}
      <div className="absolute right-0 bottom-0 w-80 h-[480px] opacity-[0.06] pointer-events-none select-none z-0">
        <Image
          src="/flower.webp"
          alt="Botanical flower decoration"
          fill
          className="object-contain object-right-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Side: Vintage Typewriter & Books Image */}
        <ScrollReveal className="lg:col-span-6 relative w-full h-[320px] sm:h-[450px] lg:h-[520px] shadow-[0_22px_70px_rgba(46,37,34,0.12)] overflow-hidden group border border-[#C5A880]/25">
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
            eyebrow="About the Studio"
            title="A LITERARY STUDIO"
            align="left"
          />

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
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-display text-[10px] tracking-[0.2em] font-semibold text-[#9E3E26] hover:text-[#85321E] transition-colors group uppercase"
            >
              Learn more about Asma
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
