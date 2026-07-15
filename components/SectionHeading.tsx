import React from "react";
import ScrollReveal from "./ScrollReveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <ScrollReveal
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="font-display text-[11px] tracking-[0.24em] text-[#9E3E26] uppercase font-bold">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#9E3E26] mt-2 tracking-[0.07em] leading-tight">
        {title}
      </h2>
      {description ? (
        <p
          className={`font-serif-body text-[15px] sm:text-base leading-relaxed text-[#2E2522] font-medium mt-4 ${
            isCenter ? "max-w-2xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      ) : null}
      <div
        className={`flex items-center gap-3 mt-5 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <div className="h-[1.5px] w-12 bg-[#C5A880]" />
        <div className="h-1.5 w-1.5 rotate-45 bg-[#9E3E26]" />
        <div className="h-[1.5px] w-20 bg-[#C5A880]/80" />
      </div>
    </ScrollReveal>
  );
}
