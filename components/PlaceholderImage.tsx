"use client";

import React from "react";

interface PlaceholderImageProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

export default function PlaceholderImage({
  label,
  className = "w-full h-full",
  aspectRatio = "aspect-video",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-4 select-none overflow-hidden ${aspectRatio} ${className}`}
    >
      {/* Crossed Diagonal Wireframe Lines */}
      <svg
        className="absolute inset-0 w-full h-full text-gray-200 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Label Box */}
      <div className="relative bg-white border border-gray-300 px-3 py-1.5 shadow-sm text-[11px] font-mono tracking-wider text-gray-500 uppercase z-10">
        [IMAGE: {label}]
      </div>
    </div>
  );
}
