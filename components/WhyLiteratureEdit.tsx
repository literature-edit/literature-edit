"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface WhyLiteratureEditProps {
  title?: string;
  items?: { title: string; description: string; image?: string }[];
  whySub?: string;
  whyBody?: string;
}

export default function WhyLiteratureEdit({ title, items, whySub, whyBody }: WhyLiteratureEditProps) {
  const displayTitle = title || "MY APPROACH";
  const defaultItems = [
    {
      title: "PERSONALISED",
      description: "Every learner brings a different perspective, pace, and goal. Lessons are designed around individual strengths while building lasting confidence.",
      image: "/personalised-mentorship.webp",
    },
    {
      title: "RIGOROUS",
      description: "Academic excellence is achieved through consistency, careful feedback, and meaningful engagement—not memorisation.",
      image: "/academic-excellence.webp",
    },
    {
      title: "THOUGHTFUL",
      description: "Students are encouraged to question, analyse, interpret, and communicate ideas with clarity.",
      image: "/critikal-thinking.webp",
    },
    {
      title: "BEYOND THE CLASSROOM",
      description: "The aim isn't simply better grades—it's developing readers and writers who continue learning long after the examination ends.",
      image: "/editorial-precision.webp",
    },
  ];

  const points = items && items.length > 0 ? items : defaultItems;
  const displayWhySub = whySub || "Because language shapes the way we understand the world.";
  const displayWhyBody = whyBody || "Here, literature is explored not only as a subject, but as a way of thinking. Every lesson, editorial project, and mentoring session is guided by patience, precision, and an enduring appreciation for ideas.";

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
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        <div>
          {/* Title */}
          <div className="mb-16">
            <SectionHeading
              eyebrow="Section 4 — Guidance"
              title={displayTitle}
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
                    src={pt.image || "/personalised-mentorship.webp"}
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

        {/* Section 5 — Why Literature Edit? Callout Banner */}
        <ScrollReveal delay={150} className="max-w-4xl mx-auto text-center p-10 bg-[#FAF6F0] border border-[#C5A880]/35 rounded-2xl shadow-sm">
          <span className="font-display text-[10px] font-bold tracking-[0.24em] text-[#9E3E26] uppercase block mb-3">
            Section 5
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2E2522] mb-4">
            Why Literature Edit?
          </h3>
          <p className="font-serif-body text-lg sm:text-xl font-bold text-[#9E3E26] leading-relaxed mb-4">
            "{displayWhySub}"
          </p>
          <p className="font-serif-body text-base leading-relaxed text-[#2E2522]/85 max-w-2xl mx-auto font-medium">
            {displayWhyBody}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
