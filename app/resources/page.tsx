import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import { getPageData } from "../../lib/db-pages";

export default async function ResourcesPage() {
  const page = await getPageData("resources");
  const displayTitle = page?.title || "Practical tools for sharper reading and stronger writing.";
  const displayIntro =
    page?.intro ||
    "A curated studio library of reading lists, analytical essay frameworks, revision prompts, application guides, and classroom toolkits designed for independent study and academic growth.";

  const resourcesList = [
    {
      title: "Curated Reading Lists & Text Pairings",
      category: "STUDIO LIBRARY",
      description:
        "Considered booklists and thematic text pairings designed to expand intellectual range and introduce classic and modern literary traditions.",
      image: "/books.webp",
      date: "July 27, 2026",
      deliverables: [
        "Age & level-appropriate list mappings",
        "Genre and period reference guides",
        "Text pairing & thematic guides",
        "Active annotation reference sheets",
      ],
    },
    {
      title: "Essay & Writing Frameworks",
      category: "ACADEMIC WRITING",
      description:
        "Practical outlines, paragraph templates, thesis-writing worksheets, and syntax prompts that organize arguments without flattening writerly voice.",
      image: "/desk-essay.png",
      date: "July 26, 2026",
      deliverables: [
        "Thesis mapping & logic prompts",
        "Transition & paragraph layouts",
        "Unseen poetry annotation checklists",
        "Self-editing and proofing checklist",
      ],
    },
    {
      title: "Application & Portfolio Reflection Prompts",
      category: "UNIVERSITY MENTORSHIP",
      description:
        "Self-reflection questionnaires and prompt worksheets that help students extract unique personal details for university statements and writing portfolios.",
      image: "/University Application (1).webp",
      date: "July 25, 2026",
      deliverables: [
        "Core personal statement questionnaires",
        "Oxbridge/Ivy reading log templates",
        "Academic interest exploration prompts",
        "Interview mindset reference sheets",
      ],
    },
    {
      title: "Close Reading & Micro-Textual Analysis Guide",
      category: "TEACHING TOOLKIT",
      description:
        "A step-by-step analytical framework for unpacking poetic meter, prose rhythm, characterization, and narrative structure across school and university contexts.",
      image: "/desk-studio.png",
      date: "July 24, 2026",
      deliverables: [
        "Micro-textual annotation keys",
        "Structural turn analysis guides",
        "Rhetorical device reference sheets",
        "Sample candidate exemplar commentary",
      ],
    },
  ];

  const featuredResource = resourcesList[0];
  const secondaryResources = resourcesList.slice(1);

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col text-[#2E2522] relative overflow-x-clip">


      <Navbar />

      <main className="flex-grow">
        {/* ==========================================
            CATEGORY HEADER (LitHub Category Layout)
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
                Resource Library & Toolkits
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
              <span className="font-bold text-[#2E2522]">Curated By Asma Khan</span>
              <span className="text-[#C5A880]">•</span>
              <span>Updated Regularly</span>
              <span className="text-[#C5A880]">•</span>
              <span className="font-semibold text-[#9E3E26]">Free Studio Materials</span>
            </div>
          </ScrollReveal>
        </header>

        {/* ==========================================
            MAIN CONTENT & STICKY SIDEBAR GRID
        ========================================== */}
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* LEFT WELL: RESOURCE CARDS STREAM (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-12">

              {/* FEATURED / HERO RESOURCE CARD */}
              <ScrollReveal>
                <article className="bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-[#C5A880]/25">
                    <Image
                      src={featuredResource.image}
                      alt={featuredResource.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-[#9E3E26] text-white px-3 py-1 rounded-full font-display text-[10px] font-extrabold uppercase tracking-widest">
                      {featuredResource.category}
                    </div>
                  </div>

                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-[#2E2522]/60 mb-3 font-semibold">
                      <span>By Asma Khan</span>
                      <span>•</span>
                      <span>{featuredResource.date}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E2522] group-hover:text-[#9E3E26] transition-colors leading-tight mb-4">
                      {featuredResource.title}
                    </h3>

                    <p className="font-serif-body text-base sm:text-lg leading-relaxed text-[#2E2522]/85 font-medium mb-6">
                      {featuredResource.description}
                    </p>

                    <div className="bg-[#FAF6F0] border border-[#C5A880]/30 rounded-xl p-5 mb-6">
                      <span className="font-display text-[10px] font-extrabold tracking-[0.2em] text-[#9E3E26] uppercase block mb-3">
                        Included Materials & Toolkits
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {featuredResource.deliverables.map((item) => (
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
                      Request Resource Access
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>

              {/* SECONDARY RESOURCES GRID (2 COLUMNS) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {secondaryResources.map((res, index) => (
                  <ScrollReveal key={res.title} delay={index * 100}>
                    <article className="h-full flex flex-col justify-between bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl overflow-hidden p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                      <div>
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 border border-[#C5A880]/20">
                          <Image
                            src={res.image}
                            alt={res.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 bg-[#9E3E26] text-white px-2.5 py-0.5 rounded-full font-display text-[9px] font-extrabold uppercase tracking-wider">
                            {res.category}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] font-display uppercase tracking-wider text-[#2E2522]/60 mb-2 font-semibold">
                          <span>{res.date}</span>
                        </div>

                        <h4 className="font-display text-xl font-extrabold text-[#2E2522] group-hover:text-[#9E3E26] transition-colors leading-snug mb-3">
                          {res.title}
                        </h4>

                        <p className="font-serif-body text-xs sm:text-sm leading-relaxed text-[#2E2522]/85 font-medium mb-5">
                          {res.description}
                        </p>

                        <div className="bg-[#FAF6F0] border border-[#C5A880]/25 rounded-lg p-4 mb-5">
                          <span className="font-display text-[9px] font-extrabold tracking-wider text-[#9E3E26] uppercase block mb-2">
                            Key Deliverables
                          </span>
                          <ul className="space-y-1.5">
                            {res.deliverables.map((item) => (
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
                          Request Access
                          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                            →
                          </span>
                        </Link>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>

              {/* DESIGN PRINCIPLES SECTION ("HOW WE DESIGN") */}
              <ScrollReveal>
                <div className="bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl p-8 sm:p-10 shadow-sm mt-12">
                  <div className="text-center mb-10 border-b border-[#C5A880]/30 pb-4">
                    <span className="font-display text-[10px] font-extrabold tracking-[0.24em] text-[#9E3E26] uppercase block mb-1">
                      Our Methodology
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2E2522]">
                      How We Design Materials
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-16 h-16 mb-4">
                        <Image
                          src="/personalised-mentorship.webp"
                          alt="Invite Practice"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-display text-xs font-bold tracking-widest text-[#9E3E26] uppercase mb-2">
                        Invite Practice
                      </h4>
                      <p className="font-serif-body text-xs leading-relaxed text-[#2E2522]/85 font-medium">
                        Built to be printed, marked up, and returned to during real writing.
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-16 h-16 mb-4">
                        <Image
                          src="/academic-excellence.webp"
                          alt="Depth Over Shortcuts"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-display text-xs font-bold tracking-widest text-[#9E3E26] uppercase mb-2">
                        Depth Over Shortcuts
                      </h4>
                      <p className="font-serif-body text-xs leading-relaxed text-[#2E2522]/85 font-medium">
                        Prompts target deep thinking and genuine intellectual identity.
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-16 h-16 mb-4">
                        <Image
                          src="/critikal-thinking.webp"
                          alt="Writerly Autonomy"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-display text-xs font-bold tracking-widest text-[#9E3E26] uppercase mb-2">
                        Writerly Autonomy
                      </h4>
                      <p className="font-serif-body text-xs leading-relaxed text-[#2E2522]/85 font-medium">
                        Structures make ideas visible while leaving authorial ownership in student hands.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT WELL: STICKY LITHUB SIDEBAR (lg:col-span-4) */}
            <aside className="lg:col-span-4 sticky top-28 self-start space-y-8">
              {/* LitHub Daily / Newsletter Widget */}
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

              {/* Featured Pathways Widget */}
              <div className="bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl p-7 shadow-sm">
                <h3 className="font-display text-xs font-extrabold tracking-[0.2em] text-[#9E3E26] uppercase border-b border-[#C5A880]/30 pb-3 mb-5">
                  Featured Pathways
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      title: "Cambridge & IB English",
                      slug: "ib-english",
                      image: "/Cambridge IB English.webp",
                      date: "July 27, 2026",
                    },
                    {
                      title: "Editorial Services",
                      slug: "editorial-services",
                      image: "/Editorial Services.webp",
                      date: "July 26, 2026",
                    },
                    {
                      title: "University Mentorship",
                      slug: "university-mentorship",
                      image: "/University Application (1).webp",
                      date: "July 25, 2026",
                    },
                    {
                      title: "Academic Writing",
                      slug: "academic-writing",
                      image: "/Research.png from Squoosh.webp",
                      date: "July 24, 2026",
                    },
                  ].map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="flex gap-4 group items-center"
                    >
                      <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border border-[#C5A880]/25 shadow-sm">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="font-serif-body text-[11px] text-[#2E2522]/60 font-medium mb-0.5">
                          {item.date}
                        </span>
                        <h4 className="font-display text-xs font-extrabold text-[#2E2522] group-hover:text-[#9E3E26] transition-colors leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
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
            CTA CALLOUT BOX (Full Width LitHub Style)
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
              Access Resources & Handouts
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
