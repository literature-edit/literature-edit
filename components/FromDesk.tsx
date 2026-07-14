"use client";

import React from "react";
import Image from "next/image";

export default function FromDesk() {
  const articles = [
    {
      label: "ESSAY",
      title: "Why We Still Read Literature",
      excerpt: "On the enduring relevance of stories in an age of speed.",
      image: "/desk-essay.png",
      link: "#",
    },
    {
      label: "READING LIST",
      title: "Books That Stay With You",
      excerpt: "A curated list of timeless reads across genres.",
      image: "/desk-books.png",
      link: "#",
    },
    {
      label: "STUDIO NOTE",
      title: "On Writing with Honesty",
      excerpt: "A note on voice, vulnerability and the writing process.",
      image: "/desk-studio.png",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-[#FAF6F0] py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-16">
        <span className="font-display text-[10px] tracking-[0.25em] text-[#963D26] uppercase font-semibold">
          The Journal
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-light text-[#963D26] mt-2 tracking-[0.1em] text-center">
          FROM THE LITERARY DESK
        </h2>
        <p className="font-serif-body text-[13px] italic text-[#2A2421]/70 mt-2 text-center">
          Reflections, reading lists and essays from the studio.
        </p>
        {/* Diamond Divider */}
        <div className="flex items-center gap-3 mt-4 w-full justify-center">
          <div className="h-[0.75px] w-8 bg-[#C5A880]" />
          <div className="w-1.5 h-1.5 bg-[#963D26] rotate-45" />
          <div className="h-[0.75px] w-8 bg-[#C5A880]" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {articles.map((art) => (
          <article key={art.title} className="flex flex-col group cursor-pointer">
            {/* Card Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden shadow-sm mb-5 bg-[#FAF6F0] border border-[#D1C2B0]/20">
              <Image
                src={art.image}
                alt={art.title}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>

            {/* Label */}
            <span className="font-display text-[9px] font-semibold tracking-[0.2em] text-[#963D26] mb-2 uppercase">
              {art.label}
            </span>

            {/* Title */}
            <h3 className="font-display text-lg font-light text-[#2A2421] tracking-wide group-hover:text-[#963D26] transition-colors duration-300 mb-2 leading-snug">
              {art.title}
            </h3>

            {/* Excerpt */}
            <p className="font-serif-body text-[13px] leading-relaxed text-[#2A2421]/80 mb-5 flex-grow">
              {art.excerpt}
            </p>

            {/* Read Link */}
            <div>
              <a
                href={art.link}
                className="inline-flex items-center gap-1.5 font-display text-[9px] tracking-[0.2em] font-bold text-[#963D26] hover:text-[#80311D] uppercase group/link"
              >
                Read More
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
