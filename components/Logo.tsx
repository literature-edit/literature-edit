"use client";

import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-28 h-28" }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Outer Circular Border */}
        <circle cx="60" cy="60" r="57" stroke="#963D26" strokeWidth="1.25" />
        
        {/* Dotted Inner Ring */}
        <circle cx="60" cy="60" r="51" stroke="#C5A880" strokeWidth="0.75" strokeDasharray="3 2" />
        
        {/* Solid Inner Ring */}
        <circle cx="60" cy="60" r="47" stroke="#963D26" strokeWidth="0.75" />

        {/* Curved Path for top text */}
        <path
          id="top-text-path"
          d="M 17,60 A 43,43 0 0,1 103,60"
          fill="none"
        />
        
        {/* Curved Path for bottom text */}
        <path
          id="bottom-text-path"
          d="M 17,60 A 43,43 0 0,0 103,60"
          fill="none"
        />

        {/* Outer Circle Text: FOR READERS, WRITERS, LEARNERS */}
        <text className="font-display fill-[#963D26] text-[6.5px] font-medium tracking-[0.24em]">
          <textPath href="#bottom-text-path" startOffset="50%" textAnchor="middle">
            FOR READERS, WRITERS, LEARNERS
          </textPath>
        </text>

        {/* Center content group */}
        <g transform="translate(60, 56)">
          {/* Asma Khan's */}
          <text
            y="-24"
            className="font-display fill-[#963D26] text-[8.5px] font-semibold tracking-[0.16em]"
            textAnchor="middle"
          >
            ASMA
          </text>
          <text
            y="-14"
            className="font-display fill-[#963D26] text-[8.5px] font-semibold tracking-[0.16em]"
            textAnchor="middle"
          >
            KHAN&apos;S
          </text>

          {/* Top Divider line */}
          <line x1="-18" y1="-8" x2="18" y2="-8" stroke="#C5A880" strokeWidth="0.75" opacity="0.8" />

          {/* Book Icon */}
          {/* Cover */}
          <path
            d="M -11,-1 C -8,-3 -3,-3 0,-1 C 3,-3 8,-3 11,-1 L 11,5 C 8,3 3,3 0,5 C -3,3 -8,3 -11,5 Z"
            stroke="#963D26"
            strokeWidth="0.75"
            fill="none"
          />
          {/* Pages lines */}
          <path
            d="M -9,1 L -3,-0.5 M -9,2.5 L -3,1 M 3,-0.5 L 9,1 M 3,1 L 9,2.5"
            stroke="#963D26"
            strokeWidth="0.5"
            opacity="0.6"
          />
          {/* Center Spine */}
          <line x1="0" y1="-1" x2="0" y2="5" stroke="#963D26" strokeWidth="0.75" />

          {/* Bottom Divider line */}
          <line x1="-18" y1="10" x2="18" y2="10" stroke="#C5A880" strokeWidth="0.75" opacity="0.8" />

          {/* Literature Edit */}
          <text
            y="19"
            className="font-display fill-[#963D26] text-[8.5px] font-bold tracking-[0.18em]"
            textAnchor="middle"
          >
            LITERATURE
          </text>
          <text
            y="27"
            className="font-display fill-[#963D26] text-[8.5px] font-bold tracking-[0.18em]"
            textAnchor="middle"
          >
            EDIT
          </text>
        </g>
      </svg>
    </div>
  );
}
