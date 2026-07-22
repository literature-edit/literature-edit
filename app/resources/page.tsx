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

interface ResourceCardProps {
  title: string;
  description: string;
  image: string;
  deliverables: string[];
  index: number;
}

const ResourceCard = ({ title, description, image, deliverables, index }: ResourceCardProps) => {
  return (
    <ScrollReveal
      delay={index * 80}
      className="relative flex flex-col group w-full max-w-[360px] md:max-w-full mx-auto"
    >
      {/* 3D Offset Background Block */}
      <div className="absolute inset-0 bg-[#C5A880]/10 border border-[#C5A880]/20 rounded-xl translate-x-1.5 translate-y-1.5 transition-transform duration-500 group-hover:translate-x-2.5 group-hover:translate-y-2.5 z-0" />

      {/* Main card body */}
      <div className="relative w-full bg-[#FCFAF7] border border-[#C5A880]/25 rounded-xl overflow-hidden p-5 flex flex-col shadow-sm z-10 transition-colors duration-300 group-hover:border-[#9E3E26]/30 flex-grow">
        {/* Image wrapper */}
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

        {/* Description */}
        <p className="font-serif-body text-[14px] leading-relaxed text-[#2E2522]/90 font-medium mb-5">
          {description}
        </p>

        {/* Deliverables header */}
        <span className="font-display text-[9px] font-bold tracking-[0.2em] text-[#9E3E26]/80 uppercase mb-3 block">
          What's Included
        </span>

        {/* Deliverables List */}
        <ul className="space-y-2 mb-6 flex-grow">
          {deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs font-serif-body text-[#2E2522]/80 font-medium">
              <span className="text-[#9E3E26] mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-display text-[10px] tracking-[0.2em] font-bold text-[#2E2522] group-hover:text-[#9E3E26] transition-colors uppercase group/link"
          >
            Request Access
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
};

import { getPageData } from "../../lib/db-pages";

export default async function ResourcesPage() {
  const page = await getPageData("resources");
  const displayTitle = page?.title || "Resources";
  const displayIntro = page?.intro || "A growing collection of reading lists, essay frameworks, revision prompts, application notes, and classroom-friendly guides.";
  const displayImage = page?.image || "/desk-books.png";
  const displayImageAlt = page?.imageAlt || "Books arranged elegantly on a writing desk";

  const resourcesList = [
    {
      title: "Curated Reading Lists",
      description: "Considered booklists and thematic text pairings designed to expand intellectual range and introduce literary traditions.",
      image: "/books.webp",
      deliverables: [
        "Age & level-appropriate list mappings",
        "Genre and period reference guides",
        "Text pairing & thematic guides",
        "Active annotation reference sheets",
      ],
    },
    {
      title: "Essay & Writing Frameworks",
      description: "Practical outlines, paragraph templates, thesis-writing worksheets, and syntax prompts that organize arguments without flattening voice.",
      image: "/desk-essay.png",
      deliverables: [
        "Thesis mapping & logic prompts",
        "Transition & paragraph layouts",
        "Unseen poetry annotation checklists",
        "Self-editing and proofing checklist",
      ],
    },
    {
      title: "Application & Portfolio Prompts",
      description: "Self-reflection questionnaires and prompt worksheets that help students extract unique personal details for university statements.",
      image: "/University Application (1).webp",
      deliverables: [
        "Core personal statement questionnaires",
        "Oxbridge/Ivy reading logs templates",
        "Academic interest exploration prompts",
        "Interview mindset reference sheets",
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
              src={displayImage}
              alt={displayImageAlt}
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
                {displayTitle}
              </h1>

              <div className="h-px w-24 bg-[#C5A880] mx-auto my-6" />

              <p className="font-serif-body text-[#FAF6F0]/90 text-[15px] sm:text-lg leading-[1.8] max-w-2xl font-medium">
                {displayIntro}
              </p>

              <a
                href="#resources-grid"
                className="mt-10 inline-flex items-center justify-center px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#C5A880] hover:text-[#2E2522] text-xs tracking-[0.2em] font-display font-bold text-[#9E3E26] uppercase transition-all duration-300 rounded shadow-sm"
              >
                Explore Library
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: Resources Showcase Grid */}
        <section id="resources-grid" className="w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#9E3E26] relative inline-block">
              Practical Tools
              <UnderlineScribble />
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 pt-4">
            {resourcesList.map((res, index) => (
              <ResourceCard
                key={res.title}
                title={res.title}
                description={res.description}
                image={res.image}
                deliverables={res.deliverables}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Section 3: Design Principles ("How We Design") */}
        <section className="w-full bg-[#FCFAF7] border-y border-[#C5A880]/30 py-24 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <div className="mb-20 text-center relative">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#9E3E26] relative inline-block">
                How We Design
                <UnderlineScribble />
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-6">
              {/* Principle 1 */}
              <ScrollReveal className="flex flex-col items-center text-center group">
                <div className="relative w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/personalised-mentorship.webp"
                    alt="Invite Practice icon"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display text-[13px] font-bold tracking-[0.16em] text-[#9E3E26] mb-3 uppercase">
                  Invite Practice
                </h3>
                <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium max-w-[280px]">
                  Resources should not be passive. They are built to be printed, marked up, and returned to during real writing.
                </p>
              </ScrollReveal>

              {/* Principle 2 */}
              <ScrollReveal delay={90} className="flex flex-col items-center text-center group">
                <div className="relative w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/academic-excellence.webp"
                    alt="Depth Over Shortcuts icon"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display text-[13px] font-bold tracking-[0.16em] text-[#9E3E26] mb-3 uppercase">
                  Depth Over Shortcuts
                </h3>
                <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium max-w-[280px]">
                  We avoid generic shortcuts. Every prompt and framework targets deep thinking and intellectual identity.
                </p>
              </ScrollReveal>

              {/* Principle 3 */}
              <ScrollReveal delay={180} className="flex flex-col items-center text-center group">
                <div className="relative w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/critikal-thinking.webp"
                    alt="Writerly Autonomy icon"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display text-[13px] font-bold tracking-[0.16em] text-[#9E3E26] mb-3 uppercase">
                  Writerly Autonomy
                </h3>
                <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium max-w-[280px]">
                  We design structures that help ideas become visible, leaving creative and authorial ownership in the student's hands.
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
              Access Resources
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-[0.04em] mb-6">
              Resources should invite practice
            </h2>
            <p className="font-serif-body text-base leading-[1.8] text-[#FAF6F0]/85 max-w-xl mb-8">
              Reach out to request custom handouts, reading logs, or details of our academic writing outlines. We add fresh materials each term.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#FAF6F0] text-[#9E3E26] hover:bg-[#C5A880] hover:text-[#2E2522] px-8 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded shadow-sm"
            >
              Request Access
            </Link>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
