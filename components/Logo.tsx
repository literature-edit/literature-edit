"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
}

export default function Logo({
  className = "w-20 h-30 sm:w-24 sm:h-36",
  imageClassName = "",
  imageStyle,
}: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/le-logo.png"
        alt="Asma Khan's Literature Edit Logo"
        fill
        priority
        className={`object-contain object-left ${imageClassName}`}
        style={imageStyle}
      />
    </div>
  );
}
