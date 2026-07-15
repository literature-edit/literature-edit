"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function WhyLiteratureEdit() {
  const points = [
    {
      title: "PERSONALISED MENTORSHIP",
      description: "Every learner is unique. Our approach is tailored, thoughtful and student-led.",
      image: "/personalised-mentorship.webp",
    },
    {
      title: "EDITORIAL PRECISION",
      description: "We bring the rigour of editing to every piece of writing.",
      image: "/editorial-precision.webp",
    },
    {
      title: "CRITICAL THINKING",
      description: "We nurture curiosity, independent thought and intellectual confidence.",
      image: "/critikal-thinking.webp",
    },
    {
      title: "ACADEMIC EXCELLENCE",
      description: "Excellence is not about perfection, but about purpose and progress.",
      image: "/academic-excellence.webp",
    },
  ];

  return (
    <section className="w-full bg-[#FCFAF7] border-y border-[#C5A880]/40 py-20 px-6 sm:px-12 relative overflow-hidden">
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
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="Our Core Values"
            title="WHY LITERATURE EDIT?"
            description="A studio shaped by precision, empathy, and the belief that strong writing begins with better attention."
          />
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {points.map((pt, index) => (
            <ScrollReveal
              key={pt.title}
              delay={index * 85}
              className={`flex flex-col items-center text-center px-4 py-6 group ${
                index < 3
                  ? "lg:border-r lg:border-[#C5A880]/45"
                  : ""
              } ${
                index % 2 === 0 ? "md:border-r-0 lg:border-r lg:border-[#C5A880]/45" : ""
              }`}
            >
              {/* Image (Treated as an Icon) */}
              <div className="relative w-36 h-36 mb-5 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={pt.image}
                  alt={pt.title}
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-display text-[12px] font-bold tracking-[0.18em] text-[#9E3E26] mb-3">
                {pt.title}
              </h3>

              {/* Description */}
              <p className="font-serif-body text-[14px] sm:text-[15px] leading-[1.6] text-[#2E2522] font-medium max-w-[220px]">
                {pt.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
