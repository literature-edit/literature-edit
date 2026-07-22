import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import { getPageData } from "../../lib/db-pages";

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

export default async function ProgrammesPage() {
  const page = await getPageData("programmes");
  const displayTitle = page?.title || "THE LITERARY STUDIO";
  const displayIntro =
    page?.intro ||
    "A space where literature is studied deeply, writing is refined thoughtfully, and every learner is encouraged to think beyond the page.";

  const learningPathways = [
    {
      num: "01",
      title: "International English",
      eyebrow: "For students pursuing international curricula",
      description:
        "Comprehensive preparation for international examinations and rigorous textual analysis.",
      idealFor: [
        "Cambridge IGCSE and World Literature",
        "IB Language & Literature",
        "IB Literature",
        "AS & A Level English",
        "University Foundation Programmes",
      ],
      focusAreas: [
        "Literary Analysis",
        "Close Reading",
        "Essay Writing",
        "Critical Thinking",
        "Examination Strategy",
        "Academic Vocabulary",
      ],
    },
    {
      num: "02",
      title: "Literary Foundations",
      eyebrow: "A strong beginning for younger learners (Grades 5–8)",
      description:
        "Designed for students in Grades 5–8, this pathway develops confident reading habits, expressive writing, vocabulary, grammar, and analytical thinking through novels, poetry, and creative texts.",
      focusAreas: [
        "Reading Comprehension",
        "Vocabulary Building",
        "Grammar in Context",
        "Creative Writing",
        "Public Speaking",
        "Critical Reading",
      ],
    },
    {
      num: "03",
      title: "Academic Writing & Research",
      eyebrow: "For university students and aspiring researchers",
      description:
        "Develop the skills required for scholarly writing through structured guidance in research, critical analysis, and academic communication.",
      includes: [
        "Research Papers",
        "Literature Reviews",
        "Dissertations",
        "Essays",
        "Referencing & Citation",
        "Presentation Skills",
      ],
    },
    {
      num: "04",
      title: "University Admissions",
      eyebrow: "Supporting students as they prepare for higher education",
      description:
        "Guidance for crafting compelling application documents and developing a strong academic profile.",
      services: [
        "Personal Statements",
        "Statements of Purpose (SOPs)",
        "Supplemental Essays",
        "Interview Preparation",
        "Academic Profile Development",
      ],
    },
    {
      num: "05",
      title: "Research Mentorship",
      eyebrow: "For students undertaking independent academic work",
      description:
        "Students receive individual mentorship on topic selection, research methods, source evaluation, structure, and scholarly writing.",
      idealFor: [
        "IB Extended Essay",
        "Theory of Knowledge",
        "IGCSE Global Perspectives",
        "Independent Research Projects",
        "Literary Research",
      ],
    },
    {
      num: "06",
      title: "Writing Studio",
      eyebrow: "For learners who simply want to become better writers",
      description:
        "Whether you're writing fiction, essays, articles, speeches, or personal projects, this pathway focuses on developing an authentic voice while strengthening structure, style, and expression.",
      focusAreas: [
        "Voice & Style",
        "Narrative Structure",
        "Essay Craft",
        "Refensive Editing",
      ],
    },
  ];

  const methodologyPoints = [
    { title: "Personalised learning plans", icon: "✦" },
    { title: "One-to-one mentoring", icon: "✦" },
    { title: "Annotated feedback", icon: "✦" },
    { title: "Writing workshops", icon: "✦" },
    { title: "Reading discussions", icon: "✦" },
    { title: "Regular assessments", icon: "✦" },
    { title: "Individual progress reports", icon: "✦" },
    { title: "Resource recommendations", icon: "✦" },
  ];

  const audienceCards = [
    {
      icon: "📖",
      title: "School Students",
      description: "Grades 5–12 across international curricula.",
    },
    {
      icon: "🎓",
      title: "University Students",
      description: "Academic writing, literary studies, dissertations.",
    },
    {
      icon: "📝",
      title: "Researchers",
      description: "Publication support, editing, scholarly guidance.",
    },
    {
      icon: "✍️",
      title: "Writers",
      description: "Creative and professional writing mentorship.",
    },
  ];

  const philosophyPillars = [
    {
      title: "Thoughtful over formulaic",
      description: "We prioritise understanding over memorisation.",
    },
    {
      title: "Personal over standardisation",
      description: "Every learner follows an individual learning journey.",
    },
    {
      title: "Literature beyond examinations",
      description:
        "Our goal is not simply higher grades, but stronger readers, clearer writers, and more confident thinkers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F0] overflow-x-hidden flex flex-col relative">
      <Navbar />

      <main className="flex-grow relative z-10">
        {/* ==========================================
            HERO SECTION (Full Width)
        ========================================== */}
        <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-b border-[#C5A880]/30 text-center">
          <ScrollReveal className="w-full mx-auto">
            <span className="font-display text-[11px] sm:text-[12px] font-bold tracking-[0.28em] text-[#9E3E26] uppercase block mb-4">
              The Studio
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
            WELCOME SECTION (Full Width Styled Card)
        ========================================== */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-b border-[#C5A880]/30">
          <ScrollReveal className="w-full bg-[#FCFAF7] border border-[#C5A880]/40 rounded-3xl p-10 sm:p-14 shadow-[0_12px_45px_rgba(46,37,34,0.06)] relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
              <span className="font-display text-[10px] font-bold tracking-[0.25em] text-[#9E3E26] uppercase block">
                Heart of Literature Edit
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E2522]">
                Welcome to The Literary Studio
              </h2>
              <p className="font-serif-body text-base sm:text-xl text-[#2E2522]/90 leading-[1.85] font-medium">
                The Literary Studio is the heart of Literature Edit. Designed for readers, writers, researchers, and lifelong learners, our studio brings together personalised education, literary scholarship, and academic mentorship. Whether you're preparing for international examinations, developing research skills, or strengthening your writing, every programme is tailored to help you grow with confidence and clarity.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ==========================================
            OUR LEARNING PATHWAYS (Full Width Grid)
        ========================================== */}
        <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-b border-[#C5A880]/30">
          <ScrollReveal className="text-center w-full mb-20 relative">
            <span className="font-display text-[11px] font-bold tracking-[0.26em] text-[#9E3E26] uppercase block mb-3">
              Curriculum & Mentorship
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2E2522] tracking-tight relative inline-block mb-5">
              Our Learning Pathways
              <UnderlineScribble />
            </h2>
            <p className="font-serif-body text-lg sm:text-xl text-[#2E2522]/85 font-medium max-w-4xl mx-auto">
              Instead of fixed "courses," we design individual learning pathways tailored to your academic and creative goals.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full">
            {learningPathways.map((pathway, idx) => (
              <ScrollReveal
                key={pathway.title}
                delay={idx * 80}
                className="relative flex flex-col bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl p-8 sm:p-9 shadow-[0_8px_30px_rgba(46,37,34,0.05)] hover:shadow-[0_16px_45px_rgba(46,37,34,0.1)] hover:-translate-y-1.5 transition-all duration-500 group"
              >
                {/* Number Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-display text-xs font-black tracking-[0.2em] text-[#9E3E26] bg-[#9E3E26]/10 px-3 py-1 rounded-full uppercase">
                    Pathway {pathway.num}
                  </span>
                  <span className="font-display text-2xl font-black text-[#C5A880]/40 group-hover:text-[#9E3E26]/40 transition-colors">
                    {pathway.num}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold text-[#2E2522] mb-2 group-hover:text-[#9E3E26] transition-colors leading-tight">
                  {pathway.title}
                </h3>
                <p className="font-display text-[11px] font-bold tracking-wider text-[#9E3E26]/85 uppercase mb-4">
                  {pathway.eyebrow}
                </p>

                <p className="font-serif-body text-sm sm:text-base text-[#2E2522]/85 leading-relaxed font-medium mb-6 flex-grow">
                  {pathway.description}
                </p>

                {pathway.idealFor && (
                  <div className="mb-5 pt-4 border-t border-[#C5A880]/20">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26] uppercase block mb-2.5">
                      Ideal For
                    </span>
                    <ul className="space-y-2">
                      {pathway.idealFor.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs font-serif-body text-[#2E2522]/85 font-semibold">
                          <span className="text-[#9E3E26] font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {pathway.focusAreas && (
                  <div className="pt-4 border-t border-[#C5A880]/20">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26] uppercase block mb-2.5">
                      Focus Areas
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pathway.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 bg-[#FAF6F0] border border-[#C5A880]/35 rounded-md text-[11px] font-serif-body font-semibold text-[#2E2522]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {pathway.includes && (
                  <div className="pt-4 border-t border-[#C5A880]/20">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26] uppercase block mb-2.5">
                      Includes
                    </span>
                    <ul className="space-y-2">
                      {pathway.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs font-serif-body text-[#2E2522]/85 font-semibold">
                          <span className="text-[#9E3E26] font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {pathway.services && (
                  <div className="pt-4 border-t border-[#C5A880]/20">
                    <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26] uppercase block mb-2.5">
                      Services Include
                    </span>
                    <ul className="space-y-2">
                      {pathway.services.map((serv) => (
                        <li key={serv} className="flex items-start gap-2 text-xs font-serif-body text-[#2E2522]/85 font-semibold">
                          <span className="text-[#9E3E26] font-bold">•</span>
                          {serv}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 pt-5 border-t border-[#C5A880]/25">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-display text-[11px] tracking-[0.2em] font-bold text-[#9E3E26] group-hover:text-[#85321E] uppercase"
                  >
                    Enquire About Pathway
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
            HOW LEARNING HAPPENS (Full Width Methodology)
        ========================================== */}
        <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-b border-[#C5A880]/30 bg-[#FCFAF7]/80 backdrop-blur-sm">
          <ScrollReveal className="text-center w-full mb-16">
            <span className="font-display text-[11px] font-bold tracking-[0.26em] text-[#9E3E26] uppercase block mb-3">
              Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#2E2522] tracking-tight mb-4">
              How Learning Happens
            </h2>
            <p className="font-serif-body text-lg sm:text-xl text-[#2E2522]/85 font-medium max-w-4xl mx-auto">
              Every learner receives personalised guidance built around active mentorship and detailed feedback.
            </p>
          </ScrollReveal>

          <div className="w-full flex flex-wrap justify-center gap-6">
            {methodologyPoints.map((item, idx) => (
              <ScrollReveal
                key={item.title}
                delay={idx * 60}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] p-6 bg-[#FAF6F0] border border-[#C5A880]/35 rounded-2xl flex items-center gap-4 shadow-sm hover:border-[#9E3E26]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-[#9E3E26] text-[#FAF6F0] flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm">
                  ✓
                </div>
                <span className="font-serif-body text-base font-bold text-[#2E2522]">
                  {item.title}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ==========================================
            WHO THIS STUDIO IS FOR (Full Width Cards)
        ========================================== */}
        <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-b border-[#C5A880]/30">
          <ScrollReveal className="text-center w-full mb-16">
            <span className="font-display text-[11px] font-bold tracking-[0.26em] text-[#9E3E26] uppercase block mb-3">
              Our Community
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#2E2522] tracking-tight mb-4">
              Who This Studio Is For
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {audienceCards.map((aud, idx) => (
              <ScrollReveal
                key={aud.title}
                delay={idx * 90}
                className="p-8 bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl text-center flex flex-col items-center shadow-sm hover:border-[#9E3E26]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-5xl mb-5 select-none">{aud.icon}</span>
                <h3 className="font-display text-xl font-extrabold text-[#2E2522] mb-3">
                  {aud.title}
                </h3>
                <p className="font-serif-body text-base text-[#2E2522]/85 font-medium leading-relaxed">
                  {aud.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ==========================================
            WHY STUDY WITH LITERATURE EDIT? (Full Width Pillars)
        ========================================== */}
        <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-b border-[#C5A880]/30">
          <ScrollReveal className="text-center w-full mb-16">
            <span className="font-display text-[11px] font-bold tracking-[0.26em] text-[#9E3E26] uppercase block mb-3">
              Our Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#2E2522] tracking-tight mb-4">
              Why Study With Literature Edit?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 w-full">
            {philosophyPillars.map((pil, idx) => (
              <ScrollReveal
                key={pil.title}
                delay={idx * 100}
                className="p-10 bg-[#FCFAF7] border-t-4 border-t-[#9E3E26] border-x border-b border-[#C5A880]/35 rounded-2xl text-center flex flex-col items-center shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#9E3E26] mb-4">
                  {pil.title}
                </h3>
                <p className="font-serif-body text-base sm:text-lg text-[#2E2522]/85 font-medium leading-relaxed">
                  {pil.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ==========================================
            ENDING QUOTE (Full Width Banner)
        ========================================== */}
        <section className="w-full py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto text-center">
          <ScrollReveal className="max-w-5xl mx-auto">
            <span className="font-display text-6xl text-[#C5A880] select-none leading-none opacity-80 mb-4 block">
              &ldquo;
            </span>
            <blockquote className="font-serif-body italic text-2xl sm:text-4xl text-[#9E3E26] font-bold leading-relaxed mb-8">
              "Great writing begins with careful reading, and careful reading begins with curiosity."
            </blockquote>
            <cite className="font-display text-xs tracking-[0.28em] text-[#2E2522]/80 not-italic uppercase font-bold block">
              &mdash; Literature Edit
            </cite>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
