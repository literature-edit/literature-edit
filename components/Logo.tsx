"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-20 h-30 sm:w-24 sm:h-36" }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/le-logo.png"
        alt="Asma Khan's Literature Edit Logo"
        fill
        priority
        className="object-contain object-left"
      />
    </div>
  );
}
