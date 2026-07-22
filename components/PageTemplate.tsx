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
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden border-b border-[#C5A880]/25 px-6 pb-20 pt-16 sm:px-12 lg:px-16 lg:pb-28 lg:pt-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(197,168,128,0.25),transparent_28%),linear-gradient(120deg,#fffaf3_0%,#faf6f0_45%,#f0e6d7_100%)]" />
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-6">
              <Link
                href="/"
                className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-[#9E3E26] transition-colors hover:text-[#742b1b]"
              >
                Literature Edit
              </Link>
              <p className="mt-8 font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9E3E26]/80">
                {page.eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[0.98] tracking-[0.035em] text-[#9E3E26] sm:text-6xl lg:text-[82px]">
                {page.title}
              </h1>
              <p className="mt-7 max-w-2xl font-serif-body text-base leading-[1.85] text-[#2E2522]/82 sm:text-lg">
                {page.intro}
              </p>
            </ScrollReveal>

            <ScrollReveal
              delay={120}
              className="relative h-[340px] overflow-hidden border border-[#C5A880]/30 shadow-[0_24px_80px_rgba(46,37,34,0.13)] sm:h-[460px] lg:col-span-6 lg:h-[560px]"
            >
              <Image
                src={page.image}
                alt={page.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2522]/25 via-transparent to-transparent" />
            </ScrollReveal>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-12 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
            {page.highlights.map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={index * 110}
                className="group border border-[#C5A880]/25 bg-[#FFFCF7]/80 p-7 shadow-[0_16px_50px_rgba(46,37,34,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9E3E26]/35 hover:shadow-[0_22px_65px_rgba(46,37,34,0.1)]"
              >
                <p className="font-display text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9E3E26]/75">
                  {item.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight tracking-[0.03em] text-[#2E2522] transition-colors group-hover:text-[#9E3E26]">
                  {item.title}
                </h2>
                <p className="mt-4 font-serif-body text-[15px] leading-[1.75] text-[#2E2522]/76">
                  {item.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="overflow-hidden bg-[#9E3E26] px-6 py-20 text-[#FAF6F0] sm:px-12 lg:px-16">
          <ScrollReveal className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C5A880]">
              Next Chapter
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-[0.04em] sm:text-5xl">
              {page.closingTitle}
            </h2>
            <p className="mt-6 max-w-3xl font-serif-body text-base leading-[1.85] text-[#FAF6F0]/82 sm:text-lg">
              {page.closingText}
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center justify-center border border-[#FAF6F0]/55 px-6 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-[#FAF6F0] transition-all duration-300 hover:bg-[#FAF6F0] hover:text-[#9E3E26]"
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
