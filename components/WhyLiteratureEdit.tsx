"use client";

import React from "react";

export default function WhyLiteratureEdit() {
  const points = [
    {
      title: "PERSONALISED MENTORSHIP",
      description: "Every learner is unique. Our approach is tailored, thoughtful and student-led.",
      iconLabel: "MENTORSHIP",
    },
    {
      title: "EDITORIAL PRECISION",
      description: "We bring the rigour of editing to every piece of writing.",
      iconLabel: "PRECISION",
    },
    {
      title: "CRITICAL THINKING",
      description: "We nurture curiosity, independent thought and intellectual confidence.",
      iconLabel: "THINKING",
    },
    {
      title: "ACADEMIC EXCELLENCE",
      description: "Excellence is not about perfection, but about purpose and progress.",
      iconLabel: "EXCELLENCE",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-12 border-b border-gray-300">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center mb-12">
          <span className="font-mono text-[10px] tracking-wider text-gray-500 uppercase font-bold">
            [SECTION: WHY CHOOSE US]
          </span>
          <h2 className="font-mono text-2xl font-bold text-gray-900 mt-2 tracking-wide uppercase text-center">
            WHY LITERATURE EDIT?
          </h2>
          {/* Simple line divider */}
          <div className="w-20 h-1 bg-gray-400 mt-4" />
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt) => (
            <div
              key={pt.title}
              className="flex flex-col items-center text-center p-6 bg-gray-50 border border-gray-200"
            >
              {/* Icon Box */}
              <div className="mb-4 w-12 h-12 border border-dashed border-gray-400 bg-white flex items-center justify-center text-[9px] font-mono text-gray-500">
                [{pt.iconLabel}]
              </div>

              {/* Title */}
              <h3 className="font-mono text-xs font-bold tracking-wider text-gray-900 mb-2 uppercase">
                {pt.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs leading-relaxed text-gray-600 max-w-[200px]">
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
