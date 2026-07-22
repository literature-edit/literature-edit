"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

interface FromDeskProps {
  title?: string;
  intro?: string;
  cards?: { label: string; title: string; excerpt: string; image?: string; link?: string }[];
}

export default function FromDesk({ title, intro, cards }: FromDeskProps) {
  const displayTitle = title || "FROM THE LITERARY DESK";
  const displayIntro = intro || "A space for essays, reflections, reading recommendations, and conversations about literature, language, and culture.";
  const defaultArticles = [
    {
      label: "ESSAYS",
      title: "Thoughtful Explorations",
      excerpt: "Thoughtful explorations of literary works, contemporary issues, and the craft of writing.",
      image: "/desk-essay.png",
      link: "/journal",
    },
    {
      label: "READING LISTS",
      title: "Curated Recommendations",
      excerpt: "Curated recommendations for readers at every stage—from classics to contemporary voices.",
      image: "/desk-books.png",
      link: "/resources",
    },
    {
      label: "STUDIO NOTES",
      title: "Teaching & Research Reflections",
      excerpt: "Observations from teaching, editing, and research, alongside reflections on books and learning.",
      image: "/desk-studio.png",
      link: "/journal",
    },
  ];

  const articles = cards && cards.length > 0 ? cards : defaultArticles;

  return (
    <section className="w-full bg-[#FAF6F0] py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="mb-16">
        <SectionHeading
          eyebrow="The Journal"
          title={displayTitle}
          description={displayIntro}
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {articles.map((art, index) => (
          <ScrollReveal key={art.title} delay={index * 110}>
            <article className="flex flex-col group cursor-pointer">
            {/* Card Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden shadow-[0_18px_50px_rgba(46,37,34,0.09)] mb-5 bg-[#FAF6F0] border border-[#C5A880]/20 rounded-lg">
              <Image
                src={art.image || "/desk-essay.png"}
                alt={art.title}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>

            {/* Label */}
            <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26] mb-2 uppercase">
              {art.label}
            </span>

            {/* Title */}
            <h3 className="font-display text-lg font-bold text-[#2E2522] tracking-wide group-hover:text-[#9E3E26] transition-colors duration-300 mb-2 leading-snug">
              {art.title}
            </h3>

            {/* Excerpt */}
            <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522] font-medium mb-5 flex-grow">
              {art.excerpt}
            </p>

            {/* Read Link */}
            <div>
              <Link
                href={art.link || "/journal"}
                className="inline-flex items-center gap-1.5 font-display text-[10px] tracking-[0.2em] font-bold text-[#9E3E26] hover:text-[#85321E] uppercase group/link"
              >
                Read More
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
