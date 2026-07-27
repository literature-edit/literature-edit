import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import { getPageData } from "../../lib/db-pages";

export default async function JournalPage() {
  const page = await getPageData("journal");
  const displayTitle = page?.title || "Literary Reviews & Studio Journal";
  const displayIntro =
    page?.intro ||
    "A sanctuary for close reading notes, book recommendations, teaching reflections, and critical essays on language, literature, and culture.";

  const journalList = [
    {
      category: "RAVE REVIEW",
      ratingBadge: "★ RAVE REVIEW",
      title: "Why We Still Read Literature in an Age of Distraction",
      slug: "/thoughtful-explorations",
      description:
        "A critical reflection on why long-form stories and close reading remain one of the deepest ways to cultivate sustained attention, empathy, and intellectual independence.",
      image: "/hero-books.png",
      date: "July 27, 2026",
      readTime: "6 min read",
      author: "Asma Khan",
      quote:
        "Literature is not a passive pastime; it is a discipline of attention. In an age of algorithmic noise, close reading reclaims patience on the page.",
      points: [
        "Stories as cognitive attention gyms",
        "How narrative builds deep empathy",
        "Resisting the shortcuts of speed-reading",
        "Reclaiming patience on the page",
      ],
    },
    {
      category: "RECOMMENDED READ",
      ratingBadge: "POSITIVE",
      title: "Books That Stay With You: A Studio Reading List",
      slug: "/curated-recommendations",
      description:
        "A considered library list of recommended books across periods and genres that leave a lasting mark on young minds and mature scholars alike.",
      image: "/books.webp",
      date: "July 26, 2026",
      readTime: "8 min read",
      author: "Asma Khan",
      quote:
        "A great book does not merely entertain; it alters the vocabulary through which we understand ourselves and the world around us.",
      points: [
        "Classical prose & poetry selections",
        "Hidden modern literary masterpieces",
        "Diverse global voices & perspectives",
        "Annotated commentary on select works",
      ],
    },
    {
      category: "STUDIO NOTE",
      ratingBadge: "EDITORIAL NOTE",
      title: "On Writing With Honesty: Moving Beyond Application Clichés",
      slug: "/teaching-reflections",
      description:
        "An editorial perspective on how vulnerability, rigorous structure, and authentic voice meet on the personal statement and college essay page.",
      image: "/vintage-studio.png",
      date: "July 25, 2026",
      readTime: "5 min read",
      author: "Asma Khan",
      quote:
        "The best application essays avoid formulaic performance. Authenticity emerges when a student writes with precision, vulnerability, and structural clarity.",
      points: [
        "Moving past typical application clichés",
        "The vulnerability-structure equilibrium",
        "Draft-revision rhythms that work",
        "Auditing for authentic writerly voice",
      ],
    },
  ];

  const featuredEntry = journalList[0];
  const secondaryEntries = journalList.slice(1);

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col text-[#2E2522] relative overflow-x-clip">
      {/* Decorative background image accents (2.png & flower.webp) */}
      <div className="absolute right-0 top-32 w-80 h-[500px] opacity-25 pointer-events-none select-none z-0">
        <Image
          src="/2.png"
          alt="Decorative background accent"
          fill
          className="object-contain object-right-top"
        />
      </div>
      <div className="absolute left-0 bottom-40 w-80 h-[480px] opacity-20 pointer-events-none select-none z-0">
        <Image
          src="/flower.webp"
          alt="Decorative background accent"
          fill
          className="object-contain object-left-bottom"
        />
      </div>

      <Navbar />

      <main className="flex-grow">
        {/* ==========================================
            BOOKMARKS HEADER (Bookmarks Reviews Header)
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
                Bookmarks & Reviews
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
              <span className="font-bold text-[#2E2522]">Curated Essays & Reviews</span>
              <span className="text-[#C5A880]">•</span>
              <span>By Asma Khan</span>
              <span className="text-[#C5A880]">•</span>
              <span className="font-semibold text-[#9E3E26]">Literary Studio Desk</span>
            </div>
          </ScrollReveal>
        </header>

        {/* ==========================================
            MAIN CONTENT & STICKY SIDEBAR GRID (Bookmarks Grid)
        ========================================== */}
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* LEFT WELL: JOURNAL & REVIEWS STREAM (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-12">

              {/* FEATURED BOOKMARKS RAVE REVIEW CARD */}
              <ScrollReveal>
                <article className="bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-[#C5A880]/25">
                    <Image
                      src={featuredEntry.image}
                      alt={featuredEntry.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-[#9E3E26] text-white px-3.5 py-1 rounded-full font-display text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                      {featuredEntry.ratingBadge}
                    </div>
                  </div>

                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-[#2E2522]/60 mb-3 font-semibold">
                      <span>By {featuredEntry.author}</span>
                      <span>•</span>
                      <span>{featuredEntry.date}</span>
                      <span>•</span>
                      <span className="text-[#9E3E26]">{featuredEntry.readTime}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E2522] group-hover:text-[#9E3E26] transition-colors leading-tight mb-4">
                      {featuredEntry.title}
                    </h3>

                    {/* Pullquote Box */}
                    <blockquote className="my-6 p-6 border-l-4 border-[#9E3E26] bg-[#FAF6F0] rounded-r-xl border-y border-r border-r-[#C5A880]/20 border-y-[#C5A880]/20">
                      <p className="font-serif-body text-base sm:text-lg italic font-bold text-[#9E3E26] leading-relaxed">
                        "{featuredEntry.quote}"
                      </p>
                    </blockquote>

                    <p className="font-serif-body text-base sm:text-lg leading-relaxed text-[#2E2522]/85 font-medium mb-6">
                      {featuredEntry.description}
                    </p>

                    <div className="bg-[#FAF6F0] border border-[#C5A880]/30 rounded-xl p-5 mb-6">
                      <span className="font-display text-[10px] font-extrabold tracking-[0.2em] text-[#9E3E26] uppercase block mb-3">
                        Key Essay Themes & Takeaways
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {featuredEntry.points.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-xs font-serif-body text-[#2E2522]/85 font-medium">
                            <span className="text-[#9E3E26] mt-0.5">•</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={featuredEntry.slug}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#9E3E26] hover:bg-[#80311e] text-white font-display text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                    >
                      Read Full Journal Essay
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>

              {/* SECONDARY REVIEWS STREAM (2 COLUMNS) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {secondaryEntries.map((entry, index) => (
                  <ScrollReveal key={entry.title} delay={index * 100}>
                    <article className="h-full flex flex-col justify-between bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl overflow-hidden p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                      <div>
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 border border-[#C5A880]/20">
                          <Image
                            src={entry.image}
                            alt={entry.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 bg-[#9E3E26] text-white px-2.5 py-0.5 rounded-full font-display text-[9px] font-extrabold uppercase tracking-wider">
                            {entry.ratingBadge}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] font-display uppercase tracking-wider text-[#2E2522]/60 mb-2 font-semibold">
                          <span>{entry.date}</span>
                          <span>•</span>
                          <span className="text-[#9E3E26]">{entry.readTime}</span>
                        </div>

                        <h4 className="font-display text-xl font-extrabold text-[#2E2522] group-hover:text-[#9E3E26] transition-colors leading-snug mb-3">
                          {entry.title}
                        </h4>

                        <p className="font-serif-body text-xs sm:text-sm leading-relaxed text-[#2E2522]/85 font-medium mb-5">
                          {entry.description}
                        </p>

                        <div className="bg-[#FAF6F0] border border-[#C5A880]/25 rounded-lg p-4 mb-5">
                          <span className="font-display text-[9px] font-extrabold tracking-wider text-[#9E3E26] uppercase block mb-2">
                            Key Points
                          </span>
                          <ul className="space-y-1.5">
                            {entry.points.map((item) => (
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
                          href={entry.slug}
                          className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-[#9E3E26] hover:text-[#80311e] uppercase tracking-wider group/link"
                        >
                          Read Review / Essay
                          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                            →
                          </span>
                        </Link>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>

            </div>

            {/* RIGHT WELL: STICKY BOOKMARKS SIDEBAR (lg:col-span-4) */}
            <aside className="lg:col-span-4 sticky top-28 self-start space-y-8">
              {/* Top Reviewed Essays Widget */}
              <div className="bg-[#FCFAF7] border border-[#C5A880]/35 rounded-2xl p-7 shadow-sm">
                <h3 className="font-display text-xs font-extrabold tracking-[0.2em] text-[#9E3E26] uppercase border-b border-[#C5A880]/30 pb-3 mb-5">
                  Top Reviewed Essays
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      num: "01",
                      title: "Why We Still Read Literature",
                      badge: "★ RAVE",
                      slug: "/thoughtful-explorations",
                      image: "/hero-books.png",
                    },
                    {
                      num: "02",
                      title: "Books That Stay With You",
                      badge: "POSITIVE",
                      slug: "/curated-recommendations",
                      image: "/books.webp",
                    },
                    {
                      num: "03",
                      title: "On Writing With Honesty",
                      badge: "STUDIO NOTE",
                      slug: "/teaching-reflections",
                      image: "/vintage-studio.png",
                    },
                  ].map((item) => (
                    <Link
                      key={item.slug}
                      href={item.slug}
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
            CTA CALLOUT BOX (Bookmarks Reviews Style)
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
              A Journal is a Thinking Room
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-[0.04em] mb-6">
              Reflections on Literature & Writing
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
