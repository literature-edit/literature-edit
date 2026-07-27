import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import { getPageData } from "../../lib/db-pages";

export default async function EditorialServicesPage() {
  const page = await getPageData("editorial-services");
  const displayTitle = page?.title || "Editorial support that respects the mind behind the manuscript.";
  const displayIntro =
    page?.intro ||
    "Professional line-by-line editing, academic review, copy editing, and proofreading that refines structure, tone, and expression while preserving your authentic voice.";

  const servicesList = [
    {
      num: "01",
      title: "Academic Editing & Scholarly Review",
      target: "For students, researchers, and academics",
      badge: "FEATURED SERVICE",
      image: "/Editorial Services.webp",
      weEdit: [
        "Essays",
        "Research Papers",
        "Literature Reviews",
        "Dissertations",
        "Theses",
        "Journal Submissions",
      ],
      focus: [
        "Argument structure & logical spine",
        "Academic tone & scholarly precision",
        "Paragraph coherence & transitions",
        "Citation consistency & bibliography audit",
        "Syntax accuracy & sentence variety",
      ],
    },
    {
      num: "02",
      title: "Copy Editing & Prose Polish",
      target: "For polished, professional writing",
      badge: "PROSE & STYLE",
      image: "/desk-essay.png",
      weEdit: [
        "Articles & Essays",
        "Educational Content",
        "Website Copy",
        "Reports & Manuscripts",
      ],
      focus: [
        "Grammar & sentence flow",
        "Word choice & vocabulary tone",
        "Style consistency & rhythm",
        "Elimination of filler & repetition",
      ],
    },
    {
      num: "03",
      title: "Final Proofreading & Formatting",
      target: "The final stage before submission or publication",
      badge: "FINAL STAGE",
      image: "/desk-books.png",
      weEdit: [
        "Final Drafts",
        "Published Submissions",
        "Academic Papers",
        "Portfolio Documents",
      ],
      focus: [
        "Spelling & punctuation check",
        "Formatting & margin alignment",
        "Typographical error correction",
        "Footnote & reference validation",
      ],
    },
    {
      num: "04",
      title: "Developmental Editing",
      target: "For writers seeking in-depth structural feedback",
      badge: "MANUSCRIPT REVIEW",
      image: "/vintage-studio.png",
      weEdit: [
        "Book Manuscripts",
        "Creative Nonfiction",
        "Personal Essays",
        "Long-Form Articles",
      ],
      focus: [
        "Overall structure & narrative arc",
        "Argument & chapter development",
        "Voice consistency & tone pacing",
        "Comprehensive chapter critique",
      ],
    },
    {
      num: "05",
      title: "Admissions & Application Documents",
      target: "High-stakes university & career statements",
      badge: "HIGH-STAKES",
      image: "/University Application (1).webp",
      weEdit: [
        "Statements of Purpose (SOPs)",
        "Personal Statements",
        "Motivation Letters",
        "Scholarship Essays",
      ],
      focus: [
        "Authentic voice audit",
        "Elimination of cliché phrasing",
        "Strategic narrative positioning",
        "Word count compliance",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Review",
      description: "Understanding your document goals, target audience, and academic criteria.",
    },
    {
      step: "02",
      title: "Edit",
      description: "Improving clarity, structure, academic tone, syntax, and sentence flow.",
    },
    {
      step: "03",
      title: "Refine",
      description: "Line-by-line feedback, marginal comments, and track-changes edits that strengthen your voice.",
    },
    {
      step: "04",
      title: "Deliver",
      description: "A polished, submission-ready document accompanied by an editor's summary note.",
    },
  ];

  const featuredService = servicesList[0];
  const secondaryServices = servicesList.slice(1);

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col text-[#2E2522] relative overflow-x-clip">


      <Navbar />

      <main className="flex-grow">
        {/* ==========================================
            EDITORIAL HEADER (LitHub Category Header Layout)
        ========================================== */}
        <header className="w-full max-w-7xl mx-auto pt-12 pb-8 px-6 sm:px-12 lg:px-16 text-center border-b border-[#C5A880]/20">
          <ScrollReveal className="w-full mx-auto">
            {/* Category / Source Tag */}
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="font-display text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#9E3E26] bg-[#9E3E26]/10 px-3.5 py-1 rounded-full">
                Via Literature Edit
              </span>
              <span className="text-[#C5A880]">•</span>
              <span className="font-display text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#9E3E26]/80">
                Editorial Studio & Services
              </span>
            </div>

            {/* Headline (h1) */}
            <h1 className="font-serif-body text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2E2522] tracking-normal leading-[1.2] mb-6 max-w-5xl mx-auto normal-case">
              {displayTitle}
            </h1>

            {/* Subhead / Deck (h2) */}
            <h2 className="font-serif-body text-xl sm:text-2xl lg:text-3xl text-[#2E2522]/85 italic max-w-5xl mx-auto mb-8 font-medium leading-relaxed">
              {displayIntro}
            </h2>

            {/* Byline & Date Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-display uppercase tracking-widest text-[#2E2522]/75 border-t border-[#C5A880]/30 pt-6 max-w-5xl mx-auto">
              <span className="font-bold text-[#2E2522]">Professional Editing</span>
              <span className="text-[#C5A880]">•</span>
              <span>Academic Review</span>
              <span className="text-[#C5A880]">•</span>
              <span className="font-semibold text-[#9E3E26]">Manuscript Feedback</span>
            </div>
          </ScrollReveal>
        </header>

        {/* ==========================================
            MAIN CONTENT & STICKY SIDEBAR GRID
        ========================================== */}
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* LEFT WELL: SERVICES STREAM & PROCESS (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-12">

              {/* FEATURED SERVICE HERO CARD */}
              <ScrollReveal>
                <article className="bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-[#C5A880]/25">
                    <Image
                      src={featuredService.image}
                      alt={featuredService.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-[#9E3E26] text-white px-3.5 py-1 rounded-full font-display text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                      {featuredService.badge}
                    </div>
                  </div>

                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-[#2E2522]/60 mb-3 font-semibold">
                      <span>Service {featuredService.num}</span>
                      <span>•</span>
                      <span>{featuredService.target}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E2522] group-hover:text-[#9E3E26] transition-colors leading-tight mb-4">
                      {featuredService.title}
                    </h3>

                    {/* We Edit Tags */}
                    <div className="mb-6">
                      <span className="font-display text-[10px] font-extrabold tracking-[0.2em] text-[#9E3E26] uppercase block mb-2">
                        We Edit
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {featuredService.weEdit.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 bg-[#FAF6F0] border border-[#C5A880]/35 rounded-md text-xs font-serif-body font-semibold text-[#2E2522]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#FAF6F0] border border-[#C5A880]/30 rounded-xl p-5 mb-6">
                      <span className="font-display text-[10px] font-extrabold tracking-[0.2em] text-[#9E3E26] uppercase block mb-3">
                        Focus Areas & Editorial Scope
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {featuredService.focus.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-xs font-serif-body text-[#2E2522]/85 font-medium">
                            <span className="text-[#9E3E26] mt-0.5">•</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#9E3E26] hover:bg-[#80311e] text-white font-display text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                    >
                      Inquire About Academic Editing
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>

              {/* SECONDARY SERVICES STREAM (2 COLUMNS) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {secondaryServices.map((service, index) => (
                  <ScrollReveal key={service.title} delay={index * 100}>
                    <article className="h-full flex flex-col justify-between bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl overflow-hidden p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                      <div>
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 border border-[#C5A880]/20">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 bg-[#9E3E26] text-white px-2.5 py-0.5 rounded-full font-display text-[9px] font-extrabold uppercase tracking-wider">
                            {service.badge}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] font-display uppercase tracking-wider text-[#2E2522]/60 mb-2 font-semibold">
                          <span>Service {service.num}</span>
                          <span>•</span>
                          <span className="text-[#9E3E26]">{service.target}</span>
                        </div>

                        <h4 className="font-display text-xl font-extrabold text-[#2E2522] group-hover:text-[#9E3E26] transition-colors leading-snug mb-3">
                          {service.title}
                        </h4>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1.5">
                            {service.weEdit.map((item) => (
                              <span
                                key={item}
                                className="px-2.5 py-0.5 bg-[#FAF6F0] border border-[#C5A880]/30 rounded text-[10px] font-serif-body font-semibold text-[#2E2522]"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-[#FAF6F0] border border-[#C5A880]/25 rounded-lg p-4 mb-5">
                          <span className="font-display text-[9px] font-extrabold tracking-wider text-[#9E3E26] uppercase block mb-2">
                            Focus Areas
                          </span>
                          <ul className="space-y-1.5">
                            {service.focus.map((item) => (
                              <li key={item} className="flex items-start gap-1.5 text-[11px] font-serif-body text-[#2E2522]/80 font-medium">
                                <span className="text-[#9E3E26]">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-[#9E3E26] hover:text-[#80311e] uppercase tracking-wider group/link"
                        >
                          Inquire Service
                          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                            →
                          </span>
                        </Link>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>

              {/* EDITORIAL WORKFLOW PROCESS SECTION */}
              <ScrollReveal>
                <div className="bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl p-8 sm:p-10 shadow-sm mt-12">
                  <div className="text-center mb-10 border-b border-[#C5A880]/30 pb-4">
                    <span className="font-display text-[10px] font-extrabold tracking-[0.24em] text-[#9E3E26] uppercase block mb-1">
                      Our Workflow
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2E2522]">
                      The Editorial Process
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((p) => (
                      <div
                        key={p.step}
                        className="bg-[#FAF6F0] border border-[#C5A880]/30 rounded-xl p-6 flex flex-col items-center text-center group hover:border-[#9E3E26]/40 transition-colors"
                      >
                        <span className="w-12 h-12 rounded-full bg-[#9E3E26] text-[#FAF6F0] font-display font-black text-sm flex items-center justify-center mb-4 shadow-sm">
                          {p.step}
                        </span>
                        <h4 className="font-display text-lg font-extrabold text-[#2E2522] mb-2">
                          {p.title}
                        </h4>
                        <p className="font-serif-body text-xs text-[#2E2522]/85 leading-relaxed font-medium">
                          {p.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT WELL: STICKY LITHUB SIDEBAR (lg:col-span-4) */}
            <aside className="lg:col-span-4 sticky top-28 self-start space-y-8">
              {/* Top Services Widget */}
              <div className="bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl p-7 shadow-sm">
                <h3 className="font-display text-xs font-extrabold tracking-[0.2em] text-[#9E3E26] uppercase border-b border-[#C5A880]/30 pb-3 mb-5">
                  Core Editorial Services
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      num: "01",
                      title: "Academic Editing",
                      badge: "FEATURED",
                      image: "/Editorial Services.webp",
                    },
                    {
                      num: "02",
                      title: "Copy Editing & Style",
                      badge: "PROSE",
                      image: "/desk-essay.png",
                    },
                    {
                      num: "03",
                      title: "Final Proofreading",
                      badge: "FINAL",
                      image: "/desk-books.png",
                    },
                    {
                      num: "04",
                      title: "Developmental Editing",
                      badge: "MANUSCRIPT",
                      image: "/vintage-studio.png",
                    },
                  ].map((item) => (
                    <Link
                      key={item.num}
                      href="/contact"
                      className="flex gap-4 group items-center"
                    >
                      <span className="font-display font-black text-lg text-[#C5A880] w-6 flex-shrink-0">
                        {item.num}
                      </span>
                      <div className="relative w-14 h-14 rounded-md overflow-hidden flex-shrink-0 border border-[#C5A880]/25 shadow-sm">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="font-display text-[9px] font-extrabold text-[#9E3E26] uppercase tracking-wider mb-0.5">
                          {item.badge}
                        </span>
                        <h4 className="font-display text-xs font-extrabold text-[#2E2522] group-hover:text-[#9E3E26] transition-colors leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Lit Hub Daily / Newsletter Widget */}
              <div className="bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#9E3E26] text-white flex items-center justify-center font-display font-black text-xs tracking-wider">
                    LE
                  </div>
                  <div>
                    <h3 className="font-display text-base font-extrabold text-[#2E2522]">
                      Lit Hub Daily
                    </h3>
                    <span className="font-serif-body text-xs text-[#2E2522]/70 italic block">
                      Weekly Curated Insights
                    </span>
                  </div>
                </div>
                <p className="font-serif-body text-xs text-[#2E2522]/85 leading-relaxed mb-5 font-medium">
                  Subscribe to receive weekly essays, close reading notes, and academic revision strategies directly in your inbox.
                </p>
                <form className="space-y-3" action="#">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-[#C5A880]/35 rounded text-xs font-serif-body focus:outline-none focus:border-[#9E3E26]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#9E3E26] hover:bg-[#80311e] text-white font-display text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Curated Reads Widget */}
              <div className="bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl p-7 shadow-sm">
                <h3 className="font-display text-xs font-extrabold tracking-[0.2em] text-[#9E3E26] uppercase border-b border-[#C5A880]/30 pb-3 mb-4">
                  Curated Reads
                </h3>
                <ul className="space-y-3 font-serif-body text-xs text-[#2E2522]">
                  <li>
                    <Link
                      href="/thoughtful-explorations"
                      className="hover:text-[#9E3E26] font-semibold leading-relaxed block transition-colors"
                    >
                      • Why We Still Read Literature in an Age of Distraction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/curated-recommendations"
                      className="hover:text-[#9E3E26] font-semibold leading-relaxed block transition-colors"
                    >
                      • Books That Stay With You: A Studio Reading List
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/teaching-reflections"
                      className="hover:text-[#9E3E26] font-semibold leading-relaxed block transition-colors"
                    >
                      • On Writing With Honesty: Moving Beyond Application Clichés
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>

          </div>
        </section>

        {/* ==========================================
            CTA CALLOUT BOX (Full Width Styled Banner)
        ========================================== */}
        <section className="relative w-full bg-[#9E3E26] text-[#FAF6F0] py-24 px-6 sm:px-12 text-center overflow-hidden border-t border-[#C5A880]/30">
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-15"
            style={{
              backgroundImage: "url('/bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <ScrollReveal className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C5A880] mb-4">
              Submit Your Document
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-[0.04em] mb-6">
              Ready to Refine Your Writing?
            </h2>
            <p className="font-serif-body text-base leading-[1.8] text-[#FAF6F0]/85 max-w-xl mb-8">
              Share your manuscript, document type, and deadline with us for a custom editorial review and timeline.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#FAF6F0] text-[#9E3E26] hover:bg-[#C5A880] hover:text-[#2E2522] px-8 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded shadow-sm"
            >
              Submit Document for Review
            </Link>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
