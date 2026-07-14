"use client";

import React from "react";

export default function FeaturedProgrammes() {
  const programmes = [
    {
      title: "CAMBRIDGE & IB ENGLISH",
      description:
        "Expert guidance for IGCSE, IB Language & Literature, Literature in English and more.",
      link: "#",
      iconLabel: "BOOKS STACK",
    },
    {
      title: "EDITORIAL SERVICES",
      description:
        "Developmental editing, proofreading, content review and editorial support for writers and publishers.",
      link: "#",
      iconLabel: "QUILL & INK",
    },
    {
      title: "UNIVERSITY APPLICATIONS",
      description:
        "Personal statements, academic essays, interviews and overall application strategy.",
      link: "#",
      iconLabel: "PILLARS / ACADEMIC",
    },
    {
      title: "RESEARCH & ACADEMIC WRITING",
      description:
        "Research support, essay mentorship and academic writing for school and university students.",
      link: "#",
      iconLabel: "MAGNIFYING LENS",
    },
  ];

  return (
    <section id="programmes" className="w-full bg-gray-50 py-16 px-6 sm:px-12 max-w-7xl mx-auto border-b border-gray-300">
      {/* Title */}
      <div className="flex flex-col items-center mb-12">
        <span className="font-mono text-[10px] tracking-wider text-gray-500 uppercase font-bold">
          [SECTION: OFFERINGS]
        </span>
        <h2 className="font-mono text-2xl font-bold text-gray-900 mt-2 tracking-wide uppercase text-center">
          FEATURED PROGRAMMES
        </h2>
        {/* Simple divider line */}
        <div className="w-20 h-1 bg-gray-400 mt-4" />
      </div>

      {/* Grid Layout with wireframe border cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {programmes.map((prog) => (
          <div
            key={prog.title}
            className="flex flex-col items-center text-center p-6 bg-white border border-gray-300 shadow-sm"
          >
            {/* Generic Icon Box */}
            <div className="mb-4 w-14 h-14 border border-dashed border-gray-400 bg-gray-50 flex items-center justify-center text-[9px] font-mono text-gray-500 p-2 text-center">
              [{prog.iconLabel}]
            </div>

            {/* Title */}
            <h3 className="font-mono text-xs font-bold tracking-wider text-gray-900 min-h-[35px] flex items-center justify-center uppercase">
              {prog.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-xs leading-relaxed text-gray-600 mt-3 mb-6 flex-grow max-w-[220px]">
              {prog.description}
            </p>

            {/* Link */}
            <a
              href={prog.link}
              className="font-mono text-[10px] tracking-wider font-bold text-gray-800 hover:text-black transition-colors uppercase"
            >
              [Learn More →]
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
