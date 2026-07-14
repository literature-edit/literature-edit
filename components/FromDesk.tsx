"use client";

import React from "react";
import PlaceholderImage from "./PlaceholderImage";

export default function FromDesk() {
  const articles = [
    {
      label: "ESSAY",
      title: "Why We Still Read Literature",
      excerpt: "On the enduring relevance of stories in an age of speed.",
      imageLabel: "Essay (Pen & Notebook)",
      link: "#",
    },
    {
      label: "READING LIST",
      title: "Books That Stay With You",
      excerpt: "A curated list of timeless reads across genres.",
      imageLabel: "Reading List (Books stack & Tea)",
      link: "#",
    },
    {
      label: "STUDIO NOTE",
      title: "On Writing with Honesty",
      excerpt: "A note on voice, vulnerability and the writing process.",
      imageLabel: "Studio Note (Autumn Street)",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-6 sm:px-12 max-w-7xl mx-auto border-b border-gray-300">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-12">
        <span className="font-mono text-[10px] tracking-wider text-gray-500 uppercase font-bold">
          [SECTION: JOURNAL]
        </span>
        <h2 className="font-mono text-2xl font-bold text-gray-900 mt-2 tracking-wide uppercase text-center">
          FROM THE LITERARY DESK
        </h2>
        <p className="font-mono text-[11px] text-gray-500 mt-1 text-center">
          Reflections, reading lists and essays from the studio.
        </p>
        {/* Simple line divider */}
        <div className="w-20 h-1 bg-gray-400 mt-4" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art) => (
          <article key={art.title} className="flex flex-col bg-white border border-gray-300 p-4 shadow-sm">
            {/* Image Placeholder */}
            <div className="relative w-full aspect-[4/3] mb-4">
              <PlaceholderImage
                label={art.imageLabel}
                className="w-full h-full"
                aspectRatio=""
              />
            </div>

            {/* Label */}
            <span className="font-mono text-[9px] font-bold text-gray-500 mb-1 uppercase tracking-wider">
              {art.label}
            </span>

            {/* Title */}
            <h3 className="font-mono text-sm font-bold text-gray-900 mb-2 uppercase leading-snug">
              {art.title}
            </h3>

            {/* Excerpt */}
            <p className="font-sans text-xs leading-relaxed text-gray-600 mb-4 flex-grow">
              {art.excerpt}
            </p>

            {/* Read Link */}
            <div>
              <a
                href={art.link}
                className="font-mono text-[10px] tracking-wider font-bold text-gray-800 hover:text-black uppercase"
              >
                [Read More →]
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
