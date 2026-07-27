"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { SitePage } from "../data/site";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollReveal from "./ScrollReveal";

type PageTemplateProps = {
  page: SitePage;
};

export default function PageTemplate({ page }: PageTemplateProps) {
  const author = page.author || "Asma Khan";
  const authorRole = page.authorRole || "Founder & Lead Mentor";
  const publishDate = page.publishDate || "July 27, 2026";
  const readTime = page.readTime || "6 min read";
  const tags = page.tags || ["Cambridge English", "IB Literature", "Close Reading", "Academic Writing", "Mentorship"];

  const paragraphs = page.articleParagraphs || [
    page.intro,
    "The study of English in international curricula—such as the International Baccalaureate (IB) and Cambridge IGCSE / A Levels—is often misunderstood as an exercise in memorising predefined interpretations. Students are frequently taught to look for 'hidden meanings' as though a text were a riddle with a single locked answer. At Literature Edit, we challenge this formulaic approach.",
    "Close reading is the beating heart of our teaching methodology. When a student learns to observe how word choice, syntactic rhythm, structural turns, and literary motifs shape meaning, the text opens up. Whether analyzing a poem by Carol Ann Duffy, a prose extract from Chimamanda Ngozi Adichie, or a dramatic soliloquy from Shakespeare, analytical writing transforms from a mechanical chore into a confident intellectual conversation.",
    "For IB English Language & Literature and IB Literature candidates, mastering Paper 1 (Guided Textual Analysis) and Paper 2 (Comparative Essay) demands a synthesis of conceptual understanding and micro-textual evidence. Our mentorship breaks down these demands into actionable, repeatable routines: constructing a thesis with an interpretive spine, organizing body paragraphs around analytical claims rather than plot points, and crafting conclusions that reflect on broader human implications.",
  ];

  const firstParagraph = paragraphs[0] || "";
  const remainingParagraphs = paragraphs.slice(1);

  const bgImageMap: Record<string, string> = {
    "ib-english": "/1.png",
    "igcse-english": "/1.png",
    "academic-writing": "/1.png",
    "university-mentorship": "/flower.webp",
    "thoughtful-explorations": "/flower.webp",
    "curated-recommendations": "/1.png",
    "teaching-reflections": "/flower.webp",
    "literature-in-english": "/flower.webp",
  };
  const bgDecoration =
    bgImageMap[page.slug] ||
    (page.slug.length % 2 === 0
      ? "/1.png"
      : "/flower.webp");

  const secondaryBgDecoration =
    bgDecoration === "/1.png" ? "/flower.webp" : "/1.png";

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col text-[#2E2522] relative overflow-x-clip">


      <Navbar />

      <main className="flex-grow">
        {/* ==========================================
            ARTICLE HEADER (LitHub story-info - Full Width)
        ========================================== */}
        <header className="w-full max-w-7xl mx-auto pt-12 pb-8 px-6 sm:px-12 lg:px-16 text-center border-b border-[#C5A880]/20">
          <ScrollReveal className="w-full mx-auto">
            {/* Category / Source Tag */}
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="font-display text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#9E3E26] bg-[#9E3E26]/10 px-3 py-1 rounded-full">
                Via Literature Edit
              </span>
              <span className="text-[#C5A880]">•</span>
              <span className="font-display text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#9E3E26]/80">
                {page.eyebrow}
              </span>
            </div>

            {/* Headline (h1) */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#2E2522] tracking-tight leading-[1.08] mb-6 max-w-6xl mx-auto">
              {page.title}
            </h1>

            {/* Subhead / Deck (h2) */}
            <h2 className="font-serif-body text-xl sm:text-2xl lg:text-3xl text-[#2E2522]/85 italic max-w-5xl mx-auto mb-8 font-medium leading-relaxed">
              {page.intro}
            </h2>

            {/* Byline & Date Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-display uppercase tracking-widest text-[#2E2522]/75 border-t border-[#C5A880]/30 pt-6 max-w-5xl mx-auto">
              <span className="font-bold text-[#2E2522]">By {author}</span>
              <span className="text-[#C5A880]">•</span>
              <span>{publishDate}</span>
              <span className="text-[#C5A880]">•</span>
              <span className="font-semibold text-[#9E3E26]">{readTime}</span>
            </div>
          </ScrollReveal>
        </header>

        {/* ==========================================
            FEATURED HERO IMAGE (LitHub featured-img)
        ========================================== */}
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-10 pb-6">
          <ScrollReveal className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border border-[#C5A880]/35 shadow-[0_20px_60px_rgba(46,37,34,0.12)]">
            <Image
              src={page.image || "/hero-books.png"}
              alt={page.imageAlt || page.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 85vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E2522]/20 via-transparent to-transparent" />
          </ScrollReveal>
        </section>

        {/* ==========================================
            BODY CONTENT & SIDEBAR GRID (LitHub Grid Layout)
        ========================================== */}
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* MAIN ARTICLE WELL (lg:col-span-8) */}
            <article className="lg:col-span-8">
              <ScrollReveal>
                <div className="story-body font-serif-body text-lg sm:text-[19px] leading-[1.85] text-[#2E2522] font-normal space-y-7">
                  
                  {/* First Paragraph with LitHub Drop Cap */}
                  {firstParagraph && (
                    <p className="first-letter:float-left first-letter:text-6xl first-letter:font-extrabold first-letter:font-display first-letter:mr-3.5 first-letter:mt-1.5 first-letter:leading-none first-letter:text-[#9E3E26]">
                      {firstParagraph}
                    </p>
                  )}

                  {/* Remaining Body Paragraph 1 */}
                  {remainingParagraphs[0] && <p>{remainingParagraphs[0]}</p>}

                  {/* LitHub Signature Pullquote */}
                  <blockquote className="my-10 p-8 border-l-4 border-[#9E3E26] bg-[#FCFAF7] border-y border-r border-r-[#C5A880]/20 border-y-[#C5A880]/20 rounded-r-lg shadow-sm">
                    <p className="font-serif-body text-xl sm:text-2xl italic text-[#9E3E26] font-bold leading-relaxed">
                      "{page.pullquote || 'Literature is not merely a subject to be examined; it is a discipline of attention, teaching us how to read the world with subtlety and precision.'}"
                    </p>
                    <cite className="block mt-4 font-display text-xs tracking-widest text-[#2E2522]/70 uppercase not-italic font-bold">
                      — {author}, Literature Edit
                    </cite>
                  </blockquote>

                  {/* Remaining Body Paragraph 2 */}
                  {remainingParagraphs[1] && <p>{remainingParagraphs[1]}</p>}

                  {/* Inline Advertisement / Highlight Callout Box (LitHub style insert-post-ads) */}
                  {page.highlights && page.highlights.length > 0 && (
                    <div className="my-10 border-y border-[#C5A880]/40 py-8 px-6 bg-[#FCFAF7] text-center rounded-sm">
                      <span className="font-display text-[10px] font-bold tracking-[0.24em] text-[#9E3E26] uppercase block mb-2">
                        Article Focus • Highlights
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left mt-6">
                        {page.highlights.map((h) => (
                          <div
                            key={h.title}
                            className="p-5 bg-[#FAF6F0] border border-[#C5A880]/30 rounded-lg flex flex-col justify-between"
                          >
                            <div>
                              <span className="font-display text-[9px] font-extrabold tracking-wider text-[#9E3E26] uppercase block mb-1.5">
                                {h.eyebrow}
                              </span>
                              <h4 className="font-display text-base font-extrabold text-[#2E2522] mb-2 leading-snug">
                                {h.title}
                              </h4>
                              <p className="font-serif-body text-xs text-[#2E2522]/85 leading-relaxed font-medium">
                                {h.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Remaining Body Paragraphs */}
                  {remainingParagraphs.slice(2).map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}

                  {/* Second Pullquote if available */}
                  {page.pullquote2 && (
                    <blockquote className="my-10 p-8 border-l-4 border-[#C5A880] bg-[#FCFAF7] border-y border-r border-r-[#C5A880]/20 border-y-[#C5A880]/20 rounded-r-lg shadow-sm">
                      <p className="font-serif-body text-xl sm:text-2xl italic text-[#2E2522] font-bold leading-relaxed">
                        "{page.pullquote2}"
                      </p>
                    </blockquote>
                  )}

                  {/* End of Story Divider */}
                  <div className="my-12 text-center text-[#C5A880] font-display tracking-[0.3em] text-sm select-none">
                    __________________________________
                  </div>

                  {/* End Citation */}
                  <p className="text-center font-serif-body italic text-sm text-[#2E2522]/75">
                    From Literature Edit Academic & Mentorship Series. Used with permission of the author, {author}. © 2026 Literature Edit.
                  </p>

                  {/* Tag Badges Container (LitHub tag-container) */}
                  <div className="my-10 border-t border-[#C5A880]/30 pt-8">
                    <span className="font-display text-[10px] font-bold tracking-widest text-[#9E3E26] uppercase block mb-3">
                      Article Tags
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 py-1.5 bg-[#FCFAF7] border border-[#C5A880]/40 rounded-full text-xs font-display font-bold text-[#9E3E26] uppercase hover:bg-[#9E3E26] hover:text-white transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author Bio Container (LitHub bio-container) */}
                  <div className="my-12 p-8 bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#C5A880]/40 shadow-sm">
                      <Image
                        src={page.authorImage || "/asma-khan.png"}
                        alt={author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="font-display text-2xl font-extrabold text-[#2E2522] mb-1">
                        {author}
                      </h4>
                      <span className="font-display text-xs font-bold text-[#9E3E26] uppercase tracking-wider block mb-3">
                        {authorRole}
                      </span>
                      <p className="font-serif-body text-sm text-[#2E2522]/85 leading-relaxed font-medium">
                        {page.authorBio ||
                          "Asma Khan is an English Language and Literature educator, editor, and researcher with a passion for thoughtful learning and meaningful writing. She has guided hundreds of Cambridge IGCSE, IB, and university students toward academic confidence and editorial clarity."}
                      </p>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            </article>

            {/* SIDEBAR CONTENT WELL (lg:col-span-4) - Sticky sidebar */}
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
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
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
                  ]
                    .filter((item) => item.slug !== page.slug)
                    .slice(0, 3)
                    .map((item) => (
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
            "THE LATEST" FOOTER BAR (LitHub the-latest-footer)
        ========================================== */}
        <section className="w-full bg-[#FCFAF7] border-t border-[#C5A880]/30 py-16 px-6 sm:px-12 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="px-8 py-3 bg-[#9E3E26] text-white font-display text-xs tracking-[0.22em] font-bold uppercase rounded shadow-sm inline-block select-none">
                The Latest
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Cambridge & IB English",
                  category: "PROGRAMME",
                  image: "/Cambridge IB English.webp",
                  slug: "ib-english",
                  excerpt: "Close reading, paper strategies, and examination excellence.",
                },
                {
                  title: "Why We Still Read Literature",
                  category: "ESSAY",
                  image: "/hero-books.png",
                  slug: "thoughtful-explorations",
                  excerpt: "Slowing down on the page in an age of digital distraction.",
                },
                {
                  title: "University Mentorship",
                  category: "ADMISSIONS",
                  image: "/University Application (1).webp",
                  slug: "university-mentorship",
                  excerpt: "Personal statements and essays with authentic intellectual voice.",
                },
                {
                  title: "Books That Stay With You",
                  category: "READING LIST",
                  image: "/desk-books.png",
                  slug: "curated-recommendations",
                  excerpt: "Recommended literature across periods for deep reading.",
                },
              ].map((card) => (
                <Link
                  key={card.title}
                  href={`/${card.slug}`}
                  className="group flex flex-col bg-[#FAF6F0] border border-[#C5A880]/30 rounded-xl overflow-hidden p-4 shadow-sm hover:border-[#9E3E26]/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 border border-[#C5A880]/20">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="font-display text-[9px] font-extrabold tracking-[0.2em] text-[#9E3E26] uppercase mb-1.5 block">
                    {card.category}
                  </span>
                  <h4 className="font-display text-sm font-extrabold text-[#2E2522] group-hover:text-[#9E3E26] transition-colors mb-2 leading-snug">
                    {card.title}
                  </h4>
                  <p className="font-serif-body text-xs text-[#2E2522]/80 leading-relaxed font-medium flex-grow mb-4">
                    {card.excerpt}
                  </p>
                  <span className="font-display text-[10px] font-bold text-[#9E3E26] uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-block">
                    Read More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="w-full bg-[#9E3E26] text-[#FAF6F0] py-20 px-6 sm:px-12 text-center">
          <ScrollReveal className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              {page.closingTitle || "Ready to Begin?"}
            </h2>
            <p className="font-serif-body text-base sm:text-xl text-[#FAF6F0]/90 font-medium max-w-2xl mb-8 leading-relaxed">
              {page.closingText || "Whether you're preparing for examinations, refining your writing, or seeking academic mentorship, I'd be delighted to work with you."}
            </p>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#C5A880] text-[#9E3E26] hover:text-[#2E2522] font-display text-xs tracking-[0.22em] font-bold uppercase rounded shadow-md transition-all duration-300"
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
