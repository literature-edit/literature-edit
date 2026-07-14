"use client";

import React from "react";

export default function QuoteSection() {
  return (
    <section className="relative w-full bg-gray-200 text-gray-800 py-16 px-6 sm:px-12 border-b border-gray-300">
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Simple Blockquote Quote Mark */}
        <span className="font-mono text-5xl text-gray-500 select-none leading-none opacity-80 mb-2">
          &ldquo;
        </span>

        {/* The Quote */}
        <blockquote className="font-sans font-medium text-lg sm:text-xl lg:text-2xl text-gray-900 leading-relaxed max-w-3xl">
          Good literature doesn&apos;t simply provide answers&mdash;it teaches us how to ask better questions.
        </blockquote>

        {/* Author Credit */}
        <cite className="font-mono text-xs tracking-wider text-gray-600 not-italic mt-4 uppercase block font-bold">
          &mdash; Asma Khan
        </cite>
      </div>
    </section>
  );
}
