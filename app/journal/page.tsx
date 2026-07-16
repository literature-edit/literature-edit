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

interface JournalCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
  points: string[];
  index: number;
}

const JournalCard = ({ category, title, description, image, points, index }: JournalCardProps) => {
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

        {/* Category */}
        <span className="font-display text-[9px] font-bold tracking-[0.2em] text-[#9E3E26]/80 uppercase mb-2 block">
          {category}
        </span>

        {/* Title */}
        <h3 className="font-display text-base sm:text-lg font-bold text-[#2E2522] group-hover:text-[#9E3E26] transition-colors tracking-wide mb-3 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="font-serif-body text-[14px] leading-relaxed text-[#2E2522]/90 font-medium mb-5">
          {description}
        </p>

        {/* Highlights List */}
        <ul className="space-y-2 mb-6 flex-grow">
          {points.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs font-serif-body text-[#2E2522]/80 font-medium">
              <span className="text-[#C5A880] mt-0.5">•</span>
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
            Read Article
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default function JournalPage() {
  const journalList = [
    {
      category: "Essay",
      title: "Why We Still Read Literature",
      description: "A short reflection on why stories and close reading remain one of the deepest ways we learn attention in an age of distractions.",
      image: "/hero-books.png",
      points: [
        "Stories as cognitive attention gyms",
        "How narrative build deep empathy",
        "Resisting the shortcuts of speed-reading",
        "Reclaiming patience on the page",
      ],
    },
    {
      category: "Reading List",
      title: "Books That Stay With You",
      description: "A considered library list of recommended books across periods and genres that leave a lasting mark on young minds.",
      image: "/books.webp",
      points: [
        "Classical prose & poetry selections",
        "Hidden modern literary masterpieces",
        "Diverse global voices & perspectives",
        "Annotated commentary on select works",
      ],
    },
    {
      category: "Studio Note",
      title: "On Writing With Honesty",
      description: "An editorial perspective on how vulnerability, rigorous structure, and authentic voice meet on the personal statement page.",
      image: "/vintage-studio.png",
      points: [
        "Moving past typical application clichés",
        "The vulnerability-structure equilibrium",
        "Draft-revision rhythms that work",
        "Auditing for authentic writerly voice",
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
              src="/desk-essay.png"
              alt="Handwritten notes beside a literary book in a warm library room"
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
                Journal
              </h1>

              <div className="h-px w-24 bg-[#C5A880] mx-auto my-6" />

              <p className="font-serif-body text-[#FAF6F0]/90 text-[15px] sm:text-lg leading-[1.8] max-w-2xl font-medium">
                Essays, notes, and reading reflections from the studio. The journal gathers reflections on literature, teaching, writing, and habits that make intellectual life richer.
              </p>

              <a
                href="#journal-grid"
                className="mt-10 inline-flex items-center justify-center px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#C5A880] hover:text-[#2E2522] text-xs tracking-[0.2em] font-display font-bold text-[#9E3E26] uppercase transition-all duration-300 rounded shadow-sm"
              >
                Read Journal
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: Journal Essays Showcase Grid */}
        <section id="journal-grid" className="w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#9E3E26] relative inline-block">
              From the Literary Desk
              <UnderlineScribble />
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 pt-4">
            {journalList.map((item, index) => (
              <JournalCard
                key={item.title}
                category={item.category}
                title={item.title}
                description={item.description}
                image={item.image}
                points={item.points}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Section 3: CTA Callout Box (Full Width) */}
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
              Next Chapter
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-[0.04em] mb-6">
              A journal is a thinking room
            </h2>
            <p className="font-serif-body text-base leading-[1.8] text-[#FAF6F0]/85 max-w-xl mb-8">
              Expect reflections that are practical enough for students and expansive enough for readers who simply love language. Sign up for a consultation to get direct edits.
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
