"use client";

import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-24 h-36" }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Outer Arched Capsule Border */}
        {/* r=45, top center is at (50, 47), bottom center is at (50, 103) */}
        <path
          d="M 5,47 L 5,103 A 45,45 0 0,0 95,103 L 95,47 A 45,45 0 0,0 5,47 Z"
          stroke="#9E3E26"
          strokeWidth="1"
        />

        {/* Dotted Inner Arched Capsule */}
        <path
          d="M 9,47 L 9,103 A 41,41 0 0,0 91,103 L 91,47 A 41,41 0 0,0 9,47 Z"
          stroke="#C5A880"
          strokeWidth="0.75"
          strokeDasharray="2 2"
          opacity="0.8"
        />

        {/* Solid Inner Arched Capsule */}
        <path
          d="M 12,47 L 12,103 A 38,38 0 0,0 88,103 L 88,47 A 38,38 0 0,0 12,47 Z"
          stroke="#9E3E26"
          strokeWidth="0.75"
        />

        {/* Curved Path for text on the bottom curve (r=35 inside the channel) */}
        <path
          id="bottom-text-path-logo"
          d="M 15,103 A 35,35 0 0,0 85,103"
          fill="none"
        />

        {/* Curved Path for text on the top curve (optional/future) */}
        <path
          id="top-text-path-logo"
          d="M 15,47 A 35,35 0 0,1 85,47"
          fill="none"
        />

        {/* Outer Circle Curved Text: FOR READERS, WRITERS, LEARNERS */}
        <text className="font-display fill-[#9E3E26] text-[5px] font-semibold tracking-[0.24em]">
          <textPath href="#bottom-text-path-logo" startOffset="50%" textAnchor="middle">
            FOR READERS, WRITERS, LEARNERS
          </textPath>
        </text>

        {/* Outer Circle Curved Text: FOR READERS, WRITERS, LEARNERS */}
        <text className="font-display fill-[#C5A880] text-[4.5px] tracking-[0.2em] opacity-40">
          <textPath href="#top-text-path-logo" startOffset="50%" textAnchor="middle">
            • ESTD 2026 •
          </textPath>
        </text>

        {/* Center content group */}
        <g transform="translate(50, 48)">
          {/* Asma Khan's */}
          <text
            y="-14"
            className="font-display fill-[#9E3E26] text-[8.5px] font-bold tracking-[0.18em]"
            textAnchor="middle"
          >
            ASMA
          </text>
          <text
            y="-4"
            className="font-display fill-[#9E3E26] text-[8.5px] font-bold tracking-[0.18em]"
            textAnchor="middle"
          >
            KHAN&apos;S
          </text>

          {/* Diamond Divider */}
          <path
            d="M -2,4 L 0,2 L 2,4 L 0,6 Z"
            fill="#C5A880"
          />
          <line x1="-16" y1="4" x2="-4" y2="4" stroke="#C5A880" strokeWidth="0.5" opacity="0.6" />
          <line x1="4" y1="4" x2="16" y2="4" stroke="#C5A880" strokeWidth="0.5" opacity="0.6" />

          {/* Literature Edit */}
          <text
            y="14"
            className="font-display fill-[#9E3E26] text-[7.5px] font-bold tracking-[0.18em]"
            textAnchor="middle"
          >
            LITERATURE
          </text>
          <text
            y="22"
            className="font-display fill-[#9E3E26] text-[7.5px] font-bold tracking-[0.18em]"
            textAnchor="middle"
          >
            EDIT
          </text>

          {/* Detailed book drawing below */}
          <g transform="translate(0, 36)">
            {/* Open Book Pages */}
            <path
              d="M -15,4 C -10,0 -4,0 0,4 C 4,0 10,0 15,4 L 15,-4 C 10,-8 4,-8 0,-4 C -4,-8 -10,-8 -15,-4 Z"
              stroke="#9E3E26"
              strokeWidth="0.75"
              fill="#FAF6F0"
            />
            {/* Page spine line */}
            <line x1="0" y1="-4" x2="0" y2="4" stroke="#9E3E26" strokeWidth="0.75" />
            
            {/* Book lines (pages layout details) */}
            <path
              d="M -12,0 L -4,-1.5 M -12,1.5 L -4,0 M 4,-1.5 L 12,0 M 4,0 L 12,1.5"
              stroke="#9E3E26"
              strokeWidth="0.4"
              opacity="0.6"
            />
            
            {/* Second closed book underneath */}
            <path
              d="M -12,4 L 12,4 L 10,8 L -10,8 Z"
              stroke="#9E3E26"
              strokeWidth="0.6"
              fill="#FAF6F0"
            />
            {/* Spines lines */}
            <line x1="-10" y1="6" x2="10" y2="6" stroke="#C5A880" strokeWidth="0.5" opacity="0.5" />
            
            {/* Leaves and quill details */}
            <path d="M-20,-2 C-23,-6 -17,-10 -15,-8" stroke="#C5A880" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M20,-2 C23,-6 17,-10 15,-8" stroke="#C5A880" strokeWidth="0.5" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
