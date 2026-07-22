"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface TestimonialsSectionProps {
  title?: string;
  testimonials?: { quote: string; author?: string }[];
}

export default function TestimonialsSection({
  title,
  testimonials,
}: TestimonialsSectionProps) {
  const displayTitle = title || "A FEW WORDS FROM STUDENTS";
  const defaultTestimonials = [
    {
      quote:
        "Asma made literature feel less like an examination subject and more like something worth returning to.",
      author: "Student",
    },
  ];

  const displayTestimonials =
    testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="w-full bg-[#FCFAF7] border-t border-[#C5A880]/30 py-20 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Testimonials"
          title={displayTitle}
          align="center"
        />

        <div className="mt-12 space-y-10 max-w-3xl mx-auto text-center">
          {displayTestimonials.map((t, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 100}
              className="py-4 flex flex-col items-center"
            >
              <span className="font-display text-5xl text-[#C5A880] select-none leading-none opacity-80 mb-4">
                &ldquo;
              </span>
              <blockquote className="font-serif-body italic text-lg sm:text-2xl text-[#2E2522] leading-relaxed font-medium">
                "{t.quote}"
              </blockquote>
              {t.author && (
                <cite className="font-display text-xs tracking-[0.22em] text-[#9E3E26] not-italic mt-6 font-bold uppercase block">
                  &mdash; {t.author}
                </cite>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
