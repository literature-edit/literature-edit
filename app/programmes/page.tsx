"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";

// Gold hand-drawn style underline doodle
const UnderlineScribble = () => (
  <svg
    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 h-3 text-[#C5A880]/80 pointer-events-none select-none"
    viewBox="0 0 200 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <path d="M5,6 C70,3 130,8 195,5 M15,4 Q100,8 185,4" />
  </svg>
);

interface ProgrammeCardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  features: string[];
  index: number;
}

const ProgrammeCard = ({ title, subtitle, image, link, features, index }: ProgrammeCardProps) => {
  return (
    <ScrollReveal
      delay={index * 80}
      className="relative flex flex-col group w-full max-w-[360px] md:max-w-full mx-auto"
    >
      {/* 3D Offset Background Block */}
      <div className="absolute inset-0 bg-[#C5A880]/10 border border-[#C5A880]/20 rounded-xl translate-x-1.5 translate-y-1.5 transition-transform duration-500 group-hover:translate-x-2.5 group-hover:translate-y-2.5 z-0" />

      {/* Main card body */}
      <div className="relative w-full bg-[#FCFAF7] border border-[#C5A880]/25 rounded-xl overflow-hidden p-5 flex flex-col shadow-sm z-10 transition-colors duration-300 group-hover:border-[#9E3E26]/30 flex-grow">
        {/* Card Image Wrapper */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-5 border border-[#C5A880]/15 shadow-sm">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Title */}
        <h3 className="font-display text-base sm:text-lg font-bold text-[#9E3E26] tracking-wide mb-3 leading-snug">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="font-serif-body text-[14px] leading-relaxed text-[#2E2522]/90 font-medium mb-5">
          {subtitle}
        </p>

        {/* Feature Bullets */}
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feat) => (
            <li key={feat} className="flex items-start gap-2 text-xs font-serif-body text-[#2E2522]/80 font-medium">
              <span className="text-[#9E3E26] mt-0.5">•</span>
              {feat}
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div>
          <Link
            href={link}
            className="inline-flex items-center gap-1.5 font-display text-[10px] tracking-[0.2em] font-bold text-[#2E2522] group-hover:text-[#9E3E26] transition-colors uppercase group/link"
          >
            Explore Syllabus
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default function ProgrammesPage() {
  const handleScrollDown = () => {
    const nextSec = document.getElementById("programmes-grid");
    if (nextSec) {
      nextSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  const academicProgrammes = [
    {
      title: "IGCSE English Support",
      subtitle: "Focused support for literature essays, unseen language analysis, revision routines, and exam strategy.",
      image: "/Cambridge IB English.webp",
      link: "/igcse-english",
      features: [
        "Unseen text close-reading strategy",
        "Clear essay structuring frameworks",
        "coursework review & timed practice",
      ],
    },
    {
      title: "IB English Mentorship",
      subtitle: "Syllabus guidance for Language & Literature, Literature, Individual Oral assessments, and HL essays.",
      image: "/desk-books.png",
      link: "/ib-english",
      features: [
        "Global issues mapping in context",
        "Syllabus oral mock rehearsals",
        "HL essay structural outlining",
      ],
    },
    {
      title: "Literature in English",
      subtitle: "Syllabus-aligned comparative analysis for drama, prose, and close studies of major poets.",
      image: "/desk-essay.png",
      link: "/literature-in-english",
      features: [
        "Comparative essay outlining",
        "Form, structure, and style analysis",
        "Socratic discussion-driven prep",
      ],
    },
    {
      title: "Academic Writing & Research",
      subtitle: "Guidance on framing research arguments, logic structuring, formatting citations, and draft revisions.",
      image: "/Research.png from Squoosh.webp",
      link: "/academic-writing",
      features: [
        "Subject-to-question framing help",
        "Structural transitions review",
        "Sentence-level flow & citation guidance",
      ],
    },
    {
      title: "University Mentorship",
      subtitle: "Strategic and editorial review for application personal statements, portfolios, and interview practice.",
      image: "/University Application (1).webp",
      link: "/university-mentorship",
      features: [
        "Intellectual statement planning",
        "Academic essay review cycles",
        "Mock Oxbridge/Ivy style interviews",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F0] overflow-x-hidden">
      <Navbar />

      <main>
        {/* Section 1: Hero */}
        <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
          {/* Backdrop Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-books.png"
              alt="Vintage books and writing tools spread out on a warm wooden studio table"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Elegant dark brand color overlay */}
            <div className="absolute inset-0 bg-[#2E2522]/65 backdrop-blur-[1px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center">
            <ScrollReveal>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[76px] font-bold text-[#FAF6F0] leading-[1.05] tracking-[0.06em] uppercase">
                Programmes
              </h1>

              <div className="h-px w-24 bg-[#C5A880] mx-auto my-6" />

              <p className="font-serif-body text-[#FAF6F0]/90 text-[15px] sm:text-lg leading-[1.8] max-w-2xl font-medium">
                Structured pathways designed to combine analytical rigour, exam strategy, and the development of authentic voice.
              </p>

              <button
                onClick={handleScrollDown}
                className="mt-10 inline-flex items-center justify-center px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#C5A880] hover:text-[#2E2522] text-xs tracking-[0.2em] font-display font-bold text-[#9E3E26] uppercase transition-all duration-300 rounded shadow-sm"
              >
                Explore Pathways
              </button>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: Programmes Showcase Grid */}
        <section id="programmes-grid" className="w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#9E3E26] relative inline-block">
              Learning Pathways
              <UnderlineScribble />
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 pt-4">
            {academicProgrammes.map((prog, index) => (
              <ProgrammeCard
                key={prog.title}
                title={prog.title}
                subtitle={prog.subtitle}
                image={prog.image}
                link={prog.link}
                features={prog.features}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Section 3: Core Methodologies ("How We Learn") */}
        <section className="w-full bg-[#FCFAF7] border-y border-[#C5A880]/30 py-24 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <div className="mb-20 text-center relative">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#9E3E26] relative inline-block">
                How We Learn
                <UnderlineScribble />
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-6">
              {/* Method 1 */}
              <ScrollReveal className="flex flex-col items-center text-center group">
                <div className="relative w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/personalised-mentorship.webp"
                    alt="Close Reading icon"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display text-[13px] font-bold tracking-[0.16em] text-[#9E3E26] mb-3 uppercase">
                  Close Reading
                </h3>
                <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium max-w-[280px]">
                  Learning to notice textual detail, query writerly choices, and extract deep conceptual ideas from prose and verse.
                </p>
              </ScrollReveal>

              {/* Method 2 */}
              <ScrollReveal delay={90} className="flex flex-col items-center text-center group">
                <div className="relative w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/academic-excellence.webp"
                    alt="Structural Logic icon"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display text-[13px] font-bold tracking-[0.16em] text-[#9E3E26] mb-3 uppercase">
                  Structural Logic
                </h3>
                <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium max-w-[280px]">
                  Building outline frameworks, logical transitions, cohesive thesis claims, and organizing critical arguments cleanly.
                </p>
              </ScrollReveal>

              {/* Method 3 */}
              <ScrollReveal delay={180} className="flex flex-col items-center text-center group">
                <div className="relative w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/critikal-thinking.webp"
                    alt="Authentic Voice icon"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display text-[13px] font-bold tracking-[0.16em] text-[#9E3E26] mb-3 uppercase">
                  Authentic Voice
                </h3>
                <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium max-w-[280px]">
                  Developing original thinking on paper, learning revisions, and acquiring the confidence to participate in serious academic discussions.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 4: CTA Callout Box (Full Width) */}
        <section className="relative w-full bg-[#9E3E26] text-[#FAF6F0] py-24 px-6 sm:px-12 text-center overflow-hidden">
          {/* Background texture overlay */}
          <div 
            className="absolute inset-0 pointer-events-none z-0 opacity-15"
            style={{
              backgroundImage: "url('/bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />
          
          <ScrollReveal className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C5A880] mb-4">
              Begin Mentorship
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-[0.04em] mb-6">
              Start a Conversation
            </h2>
            <p className="font-serif-body text-base leading-[1.8] text-[#FAF6F0]/85 max-w-xl mb-8">
              Spaces are structured around close attention and edit reviews. Schedule an initial consultation to map the right revised revision pathway for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#FAF6F0] text-[#9E3E26] hover:bg-[#C5A880] hover:text-[#2E2522] px-8 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded shadow-sm"
            >
              Book a Consultation
            </Link>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
