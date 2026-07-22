import React from "react";
import Link from "next/link";
import { getPageData } from "../../lib/db-pages";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";

// Gold hand-drawn style underline doodle
const UnderlineScribble = () => (
  <svg
    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-64 h-4 text-[#C5A880]/80 pointer-events-none select-none"
    viewBox="0 0 200 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <path d="M5,6 C70,3 130,8 195,5 M15,4 Q100,8 185,4" />
  </svg>
);

export default async function EditorialServicesPage() {
  const page = await getPageData("editorial-services");
  const displayTitle = page?.title || "OUR EDITORIAL SERVICES";
  const displayIntro =
    page?.intro ||
    "Professional editing, academic feedback, and manuscript review that refines structure, tone, and expression while preserving your authentic voice.";

  const servicesList = [
    {
      num: "01",
      title: "Academic Editing",
      target: "For students, researchers, and academics",
      weEdit: [
        "Essays",
        "Research papers",
        "Literature reviews",
        "Dissertations",
        "Theses",
        "Conference papers",
        "Journal submissions",
      ],
      focus: [
        "Structure",
        "Academic tone",
        "Coherence",
        "Citation consistency",
        "Language accuracy",
      ],
    },
    {
      num: "02",
      title: "Copy Editing",
      target: "For polished, professional writing",
      suitableFor: [
        "Articles",
        "Blogs",
        "Educational content",
        "Website copy",
        "Reports",
        "Marketing content",
      ],
      description:
        "We improve grammar, flow, readability, consistency, and style while preserving your authentic voice.",
    },
    {
      num: "03",
      title: "Proofreading",
      target: "The final stage before submission or publication",
      includes: [
        "Grammar & Spelling",
        "Punctuation",
        "Formatting Alignment",
        "Consistency checks",
        "Typographical corrections",
      ],
    },
    {
      num: "04",
      title: "Developmental Editing",
      target: "For writers seeking in-depth editorial feedback",
      idealFor: [
        "Book manuscripts",
        "Creative nonfiction",
        "Personal essays",
        "Long-form articles",
      ],
      guidance: [
        "Organisation",
        "Narrative flow",
        "Argument development",
        "Character consistency",
        "Chapter structure",
        "Overall readability",
      ],
    },
    {
      num: "05",
      title: "Admissions & Professional Documents",
      target: "Supporting students and professionals with high-stakes applications",
      servicesInclude: [
        "Statements of Purpose (SOPs)",
        "Personal Statements",
        "Motivation Letters",
        "CVs and Résumés",
        "LinkedIn profiles",
        "Scholarship applications",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Review",
      description: "Understanding your goals, audience, and purpose.",
    },
    {
      step: "02",
      title: "Edit",
      description:
        "Improving clarity, structure, grammar, style, and coherence.",
    },
    {
      step: "03",
      title: "Refine",
      description:
        "Suggestions, comments, and revisions that strengthen your writing while maintaining your voice.",
    },
    {
      step: "04",
      title: "Deliver",
      description:
        "A polished document ready for submission, publication, or presentation.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F0] overflow-x-hidden flex flex-col relative">
      <Navbar />

      {/* Background texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: "url('/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <main className="flex-grow relative z-10">
        {/* ==========================================
            HERO SECTION (Full Width)
        ========================================== */}
        <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-b border-[#C5A880]/30 text-center">
          <ScrollReveal className="w-full mx-auto">
            <span className="font-display text-[11px] sm:text-[12px] font-bold tracking-[0.28em] text-[#9E3E26] uppercase block mb-4">
              Editorial Studio
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#2E2522] tracking-tight mb-8 relative inline-block">
              {displayTitle}
              <UnderlineScribble />
            </h1>
            <p className="font-serif-body text-lg sm:text-2xl leading-relaxed text-[#2E2522]/90 font-medium max-w-5xl mx-auto mt-6">
              {displayIntro}
            </p>
          </ScrollReveal>
        </section>

        {/* ==========================================
            OUR EDITORIAL SERVICES (Full Width Grid)
        ========================================== */}
        <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-b border-[#C5A880]/30">
          <ScrollReveal className="text-center w-full mb-20 relative">
            <span className="font-display text-[11px] font-bold tracking-[0.26em] text-[#9E3E26] uppercase block mb-3">
              What We Edit
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2E2522] tracking-tight relative inline-block mb-4">
              Our Core Editorial Services
              <UnderlineScribble />
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full">
            {servicesList.map((service, idx) => (
              <ScrollReveal
                key={service.title}
                delay={idx * 80}
                className="relative flex flex-col bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl p-8 sm:p-9 shadow-[0_8px_30px_rgba(46,37,34,0.05)] hover:shadow-[0_16px_45px_rgba(46,37,34,0.1)] hover:-translate-y-1.5 transition-all duration-500 group"
              >
                {/* Number Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-display text-xs font-black tracking-[0.2em] text-[#9E3E26] bg-[#9E3E26]/10 px-3 py-1 rounded-full uppercase">
                    Service {service.num}
                  </span>
                  <span className="font-display text-2xl font-black text-[#C5A880]/40 group-hover:text-[#9E3E26]/40 transition-colors">
                    {service.num}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold text-[#2E2522] mb-2 group-hover:text-[#9E3E26] transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="font-display text-[11px] font-bold tracking-wider text-[#9E3E26]/85 uppercase mb-4">
                  {service.target}
                </p>

                {service.description && (
                  <p className="font-serif-body text-sm sm:text-base text-[#2E2522]/85 leading-relaxed font-medium mb-6">
                    {service.description}
                  </p>
                )}

                {service.weEdit && (
                  <div className="mb-5 pt-4 border-t border-[#C5A880]/20">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26] uppercase block mb-2.5">
                      We Edit
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.weEdit.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-[#FAF6F0] border border-[#C5A880]/35 rounded-md text-[11px] font-serif-body font-semibold text-[#2E2522]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.suitableFor && (
                  <div className="mb-5 pt-4 border-t border-[#C5A880]/20">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26] uppercase block mb-2.5">
                      Suitable For
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.suitableFor.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-[#FAF6F0] border border-[#C5A880]/35 rounded-md text-[11px] font-serif-body font-semibold text-[#2E2522]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.focus && (
                  <div className="pt-4 border-t border-[#C5A880]/20">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26] uppercase block mb-2.5">
                      Focus Areas
                    </span>
                    <ul className="space-y-2">
                      {service.focus.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs font-serif-body text-[#2E2522]/85 font-semibold">
                          <span className="text-[#9E3E26] font-bold">•</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.includes && (
                  <div className="pt-4 border-t border-[#C5A880]/20">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26] uppercase block mb-2.5">
                      Includes
                    </span>
                    <ul className="space-y-2">
                      {service.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2 text-xs font-serif-body text-[#2E2522]/85 font-semibold">
                          <span className="text-[#9E3E26] font-bold">•</span>
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.idealFor && (
                  <div className="mb-5 pt-4 border-t border-[#C5A880]/20">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26] uppercase block mb-2.5">
                      Ideal For
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.idealFor.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-[#FAF6F0] border border-[#C5A880]/35 rounded-md text-[11px] font-serif-body font-semibold text-[#2E2522]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.guidance && (
                  <div className="pt-4 border-t border-[#C5A880]/20">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26] uppercase block mb-2.5">
                      Feedback Provided On
                    </span>
                    <ul className="space-y-2">
                      {service.guidance.map((g) => (
                        <li key={g} className="flex items-start gap-2 text-xs font-serif-body text-[#2E2522]/85 font-semibold">
                          <span className="text-[#9E3E26] font-bold">•</span>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.servicesInclude && (
                  <div className="pt-4 border-t border-[#C5A880]/20">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26] uppercase block mb-2.5">
                      Documents Covered
                    </span>
                    <ul className="space-y-2">
                      {service.servicesInclude.map((serv) => (
                        <li key={serv} className="flex items-start gap-2 text-xs font-serif-body text-[#2E2522]/85 font-semibold">
                          <span className="text-[#9E3E26] font-bold">•</span>
                          {serv}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 pt-5 border-t border-[#C5A880]/25 flex-grow flex items-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-display text-[11px] tracking-[0.2em] font-bold text-[#9E3E26] group-hover:text-[#85321E] uppercase"
                  >
                    Inquire About Service
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ==========================================
            OUR EDITORIAL PROCESS (Full Width Infographic)
        ========================================== */}
        <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-b border-[#C5A880]/30 bg-[#FCFAF7]/80 backdrop-blur-sm">
          <ScrollReveal className="text-center w-full mb-20 relative">
            <span className="font-display text-[11px] font-bold tracking-[0.26em] text-[#9E3E26] uppercase block mb-3">
              Workflow
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2E2522] tracking-tight relative inline-block mb-4">
              Our Editorial Process
              <UnderlineScribble />
            </h2>
            <p className="font-serif-body text-lg sm:text-xl text-[#2E2522]/85 font-medium max-w-4xl mx-auto">
              A clear, four-step timeline designed to refine your writing while maintaining your authentic voice.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full relative">
            {processSteps.map((p, idx) => (
              <ScrollReveal
                key={p.step}
                delay={idx * 100}
                className="relative bg-[#FAF6F0] border border-[#C5A880]/35 rounded-2xl p-8 sm:p-9 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <span className="w-14 h-14 rounded-full bg-[#9E3E26] text-[#FAF6F0] font-display font-black text-lg flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {p.step}
                </span>
                <h3 className="font-display text-2xl font-extrabold text-[#2E2522] mb-3">
                  {p.title}
                </h3>
                <p className="font-serif-body text-base text-[#2E2522]/85 font-medium leading-relaxed">
                  {p.description}
                </p>

                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-[#9E3E26] font-bold text-2xl z-20 opacity-40">
                    &rarr;
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ==========================================
            FINAL CTA (Full Width Styled Banner)
        ========================================== */}
        <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto text-center">
          <ScrollReveal className="w-full bg-[#9E3E26] text-[#FAF6F0] rounded-3xl p-12 sm:p-16 shadow-xl relative overflow-hidden flex flex-col items-center">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Ready to Refine Your Writing?
            </h2>
            <p className="font-serif-body text-lg sm:text-xl text-[#FAF6F0]/90 font-medium max-w-3xl mb-10 leading-relaxed">
              Share your manuscript, document type, and deadline with us for a custom editorial review and timeline.
            </p>
            <Link
              href="/contact"
              className="px-9 py-4 bg-[#FAF6F0] hover:bg-[#C5A880] text-[#9E3E26] hover:text-[#2E2522] font-display text-xs tracking-[0.22em] font-bold uppercase rounded shadow-lg transition-all duration-300"
            >
              Submit Your Document
            </Link>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
