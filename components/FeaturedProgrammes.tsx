"use client";
 
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
 
export default function FeaturedProgrammes() {
  const programmes = [
    {
      title: "CAMBRIDGE & IB ENGLISH",
      description:
        "Expert guidance for IGCSE, IB Language & Literature, Literature in English and more.",
      link: "/programmes",
      image: "/Cambridge IB English.webp",
    },
    {
      title: "EDITORIAL SERVICES",
      description:
        "Developmental editing, proofreading, content review and editorial support for writers and publishers.",
      link: "/editorial-services",
      image: "/Editorial Services.webp",
    },
    {
      title: "UNIVERSITY APPLICATIONS",
      description:
        "Personal statements, academic essays, interviews and overall application strategy.",
      link: "/university-mentorship",
      image: "/University Application (1).webp",
    },
    {
      title: "RESEARCH & ACADEMIC WRITING",
      description:
        "Research support, essay mentorship and academic writing for school and university students.",
      link: "/academic-writing",
      image: "/Research.png from Squoosh.webp",
    },
  ];
 
  return (
    <section id="programmes" className="w-full bg-[#FAF6F0] py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Title */}
      <div className="mb-16">
        <SectionHeading
          eyebrow="What We Offer"
          title="FEATURED PROGRAMMES"
          description="Carefully structured support for students, applicants, and writers who want rigour with a human pulse."
        />
      </div>
 
      {/* Grid Layout with vertical borders on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-y border-[#C5A880]/30 py-8 lg:py-4">
        {programmes.map((prog, index) => (
          <ScrollReveal
            key={prog.title}
            delay={index * 90}
            className={`flex flex-col items-center text-center px-6 py-10 lg:py-8 group transition-all duration-300 ${
              // Vertical dividers for desktop (index 0, 1, 2 have border-right)
              index < 3
                ? "lg:border-r lg:border-[#C5A880]/30 border-b border-[#C5A880]/20 md:border-b-0"
                : ""
            } ${
              // Grid dividers for tablet (2x2 structure)
              index % 2 === 0
                ? "md:border-r md:border-[#C5A880]/30"
                : ""
            } ${
              // Bottom border for mobile/tablet rows
              index < 2
                ? "border-b border-[#C5A880]/30 md:border-b md:border-b-[#C5A880]/30 lg:border-b-0"
                : "border-b border-[#C5A880]/20 md:border-b-0"
            }`}
          >
            {/* Image Wrapper with elegant zoom (borderless, slightly smaller) */}
            <div className="relative w-[80%] aspect-[4/3] overflow-hidden rounded-sm mb-6 mx-auto">
              <Image
                src={prog.image}
                alt={prog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
 
            {/* Title */}
            <h3 className="font-display text-sm font-bold tracking-[0.16em] text-[#9E3E26] min-h-[40px] flex items-center justify-center">
              {prog.title}
            </h3>
 
            {/* Description */}
            <p className="font-serif-body text-[14px] sm:text-[15px] leading-[1.65] text-[#2E2522] font-medium mt-4 mb-8 flex-grow max-w-[240px]">
              {prog.description}
            </p>
 
            {/* Link */}
            <Link
              href={prog.link}
              className="font-display text-[10px] tracking-[0.2em] font-bold text-[#2E2522] hover:text-[#9E3E26] transition-colors group/link uppercase flex items-center gap-1.5"
            >
              Learn More
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
