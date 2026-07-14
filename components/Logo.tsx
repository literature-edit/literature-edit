"use client";

import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-24 h-24" }: LogoProps) {
  return (
    <div
      className={`border border-dashed border-gray-400 rounded-full flex flex-col items-center justify-center bg-gray-100 text-center p-2 ${className}`}
    >
      <span className="font-mono text-[10px] tracking-widest text-gray-600 font-bold uppercase">
        [LOGO]
      </span>
      <span className="font-mono text-[7px] text-gray-500 mt-1 uppercase tracking-wider">
        LITERATURE EDIT
      </span>
    </div>
  );
}
