"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title?: string;
  eyebrow?: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
}

export default function Hero({ title, eyebrow, intro, image, imageAlt }: HeroProps) {
  const displayTitle = title || "LITERATURE EDIT";
  const displayEyebrow = eyebrow || "Read Closely. Think Boldly. Write Authentically.";
  const displayIntro = intro || "A literary studio dedicated to thoughtful teaching, editorial excellence, and academic mentorship. From IGCSE and IB classrooms to university applications and editorial projects, every interaction is rooted in curiosity, clarity, and craft.";
  const displayImage = image || "/hero-books.png";
  const displayImageAlt = imageAlt || "Vintage books open on a wooden table, teacup, and dried flowers in front of a window with warm morning light";

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-16 pt-8 pb-12 lg:pt-14 lg:pb-16 flex flex-col justify-between overflow-hidden bg-[#FAF6F0]">

      {/* Decorative Top Right Botanical Accent */}
      <div className="absolute right-0 top-0 w-80 h-[480px] opacity-20 pointer-events-none select-none z-0">
        <Image
          src="/1.png"
          alt="Decorative background accent"
          fill
          className="object-contain object-right-top"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* TOP ROW: Image Card on Left, Intro & Actions on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full mb-12 lg:mb-16">
          {/* Left Side: Image Card + Caption */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="relative w-full h-72 sm:h-85 lg:h-[370px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(46,37,34,0.08)] border border-[#C5A880]/35 group">
              <Image
                src={displayImage}
                alt={displayImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2522]/30 via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="mt-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#9E3E26]" />
              <p className="font-serif-body italic text-sm sm:text-base text-[#9E3E26] font-semibold tracking-wide">
                {displayEyebrow}
              </p>
            </div>
          </div>

          {/* Right Side: Paragraph Intro, Highlights & CTA Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-4">
            <span className="font-display text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-[#9E3E26] bg-[#9E3E26]/10 px-4 py-1.5 rounded-full mb-4 inline-block">
              Asma Khan's Literary Studio
            </span>

            <p className="font-serif-body text-base sm:text-lg text-[#2E2522]/90 leading-[1.75] font-medium mb-6">
              {displayIntro}
            </p>

            {/* Studio Badges / Highlights Row */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#2E2522] bg-[#FCFAF7] border border-[#C5A880]/40 px-3.5 py-1.5 rounded-md shadow-2xs">
                IGCSE & IB English
              </span>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#2E2522] bg-[#FCFAF7] border border-[#C5A880]/40 px-3.5 py-1.5 rounded-md shadow-2xs">
                Academic Writing & Mentorship
              </span>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#2E2522] bg-[#FCFAF7] border border-[#C5A880]/40 px-3.5 py-1.5 rounded-md shadow-2xs">
                Editorial Services
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-[#9E3E26] hover:bg-[#80311e] text-[#FAF6F0] font-display text-xs font-bold uppercase tracking-[0.2em] rounded shadow-md transition-all duration-300 inline-flex items-center gap-2 group"
              >
                Book a Consultation
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/programmes"
                className="px-7 py-3.5 bg-[#FCFAF7] border border-[#C5A880]/50 hover:bg-[#2E2522] hover:text-[#FAF6F0] hover:border-[#2E2522] text-[#2E2522] font-display text-xs font-bold uppercase tracking-[0.2em] rounded shadow-2xs transition-all duration-300 inline-flex items-center gap-2 group"
              >
                Explore Programmes
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Massive Brand Display Title on a single line */}
        <div className="w-full pt-8 border-t border-[#C5A880]/30 flex items-center justify-center sm:justify-start">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[125px] xl:text-[155px] font-extrabold text-[#9E3E26] leading-none tracking-tight uppercase select-none flex items-start whitespace-nowrap">
            {displayTitle}
            <span className="text-xl sm:text-3xl lg:text-5xl text-[#9E3E26] ml-1 font-bold">
              ©
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
