import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import { getPageData } from "../../lib/db-pages";
import { AudienceCard } from "../../data/site";

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

interface OrganicImageProps {
  src: string;
  alt: string;
  index?: number;
}

const OrganicImage = ({ src, alt, index = 0 }: OrganicImageProps) => {
  const borderRadii = [
    "60% 40% 65% 35% / 40% 60% 35% 65%",
    "40% 60% 35% 65% / 60% 40% 65% 35%",
    "55% 45% 60% 40% / 45% 55% 40% 60%",
  ];

  const currentRadius = borderRadii[index % borderRadii.length];

  return (
    <div className="relative w-full max-w-[360px] md:max-w-[420px] aspect-square mx-auto group">
      {/* Decorative Vector Sparkle */}
      <svg
        className="absolute -top-6 -left-6 w-12 h-12 text-[#C5A880]/60 pointer-events-none select-none transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      >
        <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>

      {/* Floating offset frame */}
      <div
        className="absolute inset-2 border border-[#C5A880]/40 transition-transform duration-700 ease-out group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none z-0"
        style={{ borderRadius: currentRadius }}
      />

      {/* Image container */}
      <div
        className="relative w-full h-full overflow-hidden border border-[#C5A880]/30 shadow-[0_12px_40px_rgba(46,37,34,0.08)] bg-[#FAF6F0] z-10 transition-transform duration-700 ease-out group-hover:scale-[1.01]"
        style={{ borderRadius: currentRadius }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default async function AboutPage() {
  const page = await getPageData("about");

  // Section 1: Meet the Founder
  const founderTitle: string = page?.founderTitle || page?.title || "Meet Asma Khan";
  const founderSub: string = page?.founderSub || "Founder & Lead Mentor";
  const founderBio: string[] = page?.founderBio || [
    "Literature Edit was founded by Asma Khan, an English Language and Literature educator, editor, and researcher with a passion for thoughtful learning and meaningful writing.",
    "With experience spanning international curricula, academic mentoring, publishing, and editorial work, she has worked with students, researchers, and writers across different stages of their academic and creative journeys. Her teaching combines close reading, critical inquiry, and structured writing to help learners develop confidence, clarity, and intellectual independence.",
    "What began as a commitment to helping students move beyond memorisation has grown into a literary studio dedicated to nurturing readers, writers, and thinkers.",
  ];
  const founderImage: string = page?.founderImage || page?.image || "/asma-khan.png";

  // Section 2: The Story Behind Literature Edit
  const storyEyebrow: string = page?.storyEyebrow || "The Story Behind Literature Edit";
  const storyTitle: string = page?.storyTitle || "Why Literature Edit?";
  const storyParagraphs: string[] = page?.storyParagraphs || [
    "Literature Edit was created from a simple belief: that literature is more than an academic subject—it is a way of understanding people, ideas, and the world around us.",
    "In a learning environment often focused on examinations and model answers, Literature Edit offers a different approach. Here, students are encouraged to question, analyse, interpret, and write with originality. Every lesson is designed to cultivate curiosity, strengthen communication, and inspire a lifelong engagement with language and literature.",
    "As the studio evolved, it expanded beyond teaching to include editorial services, academic research support, and writing mentorship, bringing together education and publishing under one roof.",
  ];

  // Section 3: What Makes Us Different
  const approachEyebrow: string = page?.approachEyebrow || "What Makes Us Different";
  const approachTitle: string = page?.approachTitle || "Our Approach";
  const approachIntro: string =
    page?.approachIntro ||
    "Every learner arrives with different strengths, challenges, and ambitions. Our teaching is designed around the individual rather than a fixed curriculum.";
  const approachPoints: string[] = page?.approachPoints || [
    "Close reading of literary and non-literary texts",
    "Guided discussions that develop analytical thinking",
    "Personalised writing workshops with detailed feedback",
    "Research-based learning beyond examination requirements",
    "Structured preparation for international curricula and university writing",
  ];
  const approachOutro: string =
    page?.approachOutro ||
    "Our goal extends beyond examination success. We aim to help students become confident readers, articulate writers, and independent thinkers.";

  // Section 4: Who We Work With
  const audienceEyebrow: string = page?.audienceEyebrow || "Who We Work With";
  const audienceTitle: string = page?.audienceTitle || "Learners We Support";
  const audienceCards: AudienceCard[] = page?.audienceCards || [
    {
      title: "School Students",
      subtitle: "IGCSE • IB • AS & A Level • ICSE • CBSE",
      description: "Structured preparation and textual analysis across international curricula.",
    },
    {
      title: "University Students",
      subtitle: "Academic Writing & Research",
      description: "Academic writing, dissertations, literary research, presentations.",
    },
    {
      title: "Researchers",
      subtitle: "Publication & Scholarly Support",
      description: "Editing, publication support, literature reviews, scholarly writing.",
    },
    {
      title: "Writers",
      subtitle: "Editorial & Manuscript Review",
      description: "Developmental editing, proofreading, manuscript feedback.",
    },
  ];

  // Section 5: Beyond Teaching
  const beyondEyebrow: string = page?.beyondEyebrow || "Beyond Teaching";
  const beyondTitle: string = page?.beyondTitle || "More Than a Classroom";
  const beyondParagraphs: string[] = page?.beyondParagraphs || [
    "Literature Edit combines academic teaching with professional editorial experience.",
    "Alongside our educational programmes, we support writers, researchers, and institutions through editorial services including manuscript editing, academic proofreading, content development, and research guidance.",
    "This integration of teaching and publishing allows students to learn from the perspective of both an educator and an editor—understanding not only how great writing is analysed, but how it is refined and brought to life.",
    "Whether you're preparing for international examinations, writing your first dissertation, editing a manuscript, or simply hoping to become a stronger reader and writer, Literature Edit is a place where thoughtful learning is valued above hurried achievement.",
    "We invite you to join a community built on curiosity, precision, and a genuine love for language.",
  ];

  // Quote
  const quote: string =
    page?.quote ||
    "The purpose of literature is not merely to teach us what to think, but to help us discover how to think.";

  return (
    <div className="min-h-screen bg-[#FAF6F0] overflow-x-hidden">
      <Navbar />

      <main>
        {/* ==========================================
            SECTION 1 — MEET THE FOUNDER (HERO)
        ========================================== */}
        <section className="relative w-full py-20 lg:py-28 px-6 sm:px-12 max-w-7xl mx-auto border-b border-[#C5A880]/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Narrative & Intro */}
            <ScrollReveal className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2E2522] tracking-tight leading-[1.08] mb-3">
                {founderTitle}
              </h1>

              <p className="font-display text-xs sm:text-sm font-bold tracking-[0.18em] text-[#9E3E26]/90 uppercase mb-8">
                {founderSub}
              </p>

              <div className="space-y-5 font-serif-body text-[15px] sm:text-[16px] leading-[1.85] text-[#2E2522]/85 font-medium">
                {founderBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#story"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#9E3E26] hover:bg-[#85321E] text-[#FAF6F0] text-xs tracking-[0.2em] font-display font-bold uppercase transition-all duration-300 rounded shadow-sm"
                >
                  Our Story
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-[#9E3E26]/40 hover:border-[#9E3E26] text-[#9E3E26] hover:bg-[#9E3E26]/5 text-xs tracking-[0.2em] font-display font-bold uppercase transition-all duration-300 rounded"
                >
                  Get In Touch
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Column: Founder Image */}
            <ScrollReveal delay={120} className="lg:col-span-5 flex justify-center">
              <OrganicImage src={founderImage} alt={founderTitle} index={0} />
            </ScrollReveal>
          </div>
        </section>

        {/* ==========================================
            SECTION 2 — THE STORY BEHIND LITERATURE EDIT
        ========================================== */}
        <section id="story" className="w-full bg-[#FCFAF7] border-b border-[#C5A880]/25 py-24 px-6 sm:px-12">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-16 relative">
              <span className="font-display text-[11px] font-bold tracking-[0.24em] text-[#9E3E26] uppercase block mb-3">
                {storyEyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-[#2E2522] relative inline-block">
                {storyTitle}
                <UnderlineScribble />
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100} className="max-w-5xl mx-auto text-center py-4">
              <div className="space-y-6 font-serif-body text-[15px] sm:text-[17px] leading-[1.88] text-[#2E2522]/88 font-medium text-center">
                {storyParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={idx === 0 ? "text-lg sm:text-xl font-semibold text-[#9E3E26] leading-relaxed text-center" : "text-center"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ==========================================
            SECTION 3 — WHAT MAKES US DIFFERENT (OUR APPROACH)
        ========================================== */}
        <section className="w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-[#C5A880]/25">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 relative">
            <span className="font-display text-[11px] font-bold tracking-[0.24em] text-[#9E3E26] uppercase block mb-3">
              {approachEyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E2522] tracking-wide relative inline-block mb-6">
              {approachTitle}
              <UnderlineScribble />
            </h2>
            <p className="font-serif-body text-[15px] sm:text-lg text-[#2E2522]/80 leading-relaxed font-medium">
              {approachIntro}
            </p>
          </ScrollReveal>

          {/* Expectations List */}
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 mb-16">
            {approachPoints.map((point, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 80}
                className="w-full md:w-[calc(50%-12px)] flex items-start gap-4 p-6 bg-[#FCFAF7] border border-[#C5A880]/30 rounded-xl shadow-sm hover:border-[#9E3E26]/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9E3E26]/10 text-[#9E3E26] flex items-center justify-center font-display font-bold text-sm mt-0.5">
                  ✓
                </div>
                <p className="font-serif-body text-[15px] leading-relaxed text-[#2E2522]/90 font-semibold">
                  {point}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Outro Callout */}
          <ScrollReveal delay={200} className="max-w-3xl mx-auto text-center py-4">
            <p className="font-serif-body text-base sm:text-xl text-[#9E3E26] font-bold italic leading-relaxed text-center">
              "{approachOutro}"
            </p>
          </ScrollReveal>
        </section>

        {/* ==========================================
            SECTION 4 — WHO WE WORK WITH (LEARNERS WE SUPPORT)
        ========================================== */}
        <section className="w-full bg-[#FCFAF7] border-b border-[#C5A880]/25 py-24 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-16 relative">
              <span className="font-display text-[11px] font-bold tracking-[0.24em] text-[#9E3E26] uppercase block mb-3">
                {audienceEyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-[#2E2522] relative inline-block">
                {audienceTitle}
                <UnderlineScribble />
              </h2>
            </ScrollReveal>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {audienceCards.map((card, idx) => (
                <ScrollReveal
                  key={idx}
                  delay={idx * 100}
                  className="group relative flex flex-col justify-between bg-[#FAF6F0] border border-[#C5A880]/30 rounded-2xl p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9E3E26]/50 hover:shadow-md"
                >
                  <div>
                    {/* Icon Badge */}
                    <div className="w-12 h-12 rounded-xl bg-[#9E3E26] text-[#FAF6F0] flex items-center justify-center font-display font-bold text-lg mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      {idx === 0 && "🎓"}
                      {idx === 1 && "🏛️"}
                      {idx === 2 && "🔬"}
                      {idx === 3 && "✍️"}
                      {idx > 3 && "📚"}
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#2E2522] mb-2 group-hover:text-[#9E3E26] transition-colors">
                      {card.title}
                    </h3>

                    {card.subtitle && (
                      <span className="inline-block px-3 py-1 bg-[#C5A880]/20 text-[#9E3E26] text-[11px] font-display font-bold tracking-wider rounded-full mb-4">
                        {card.subtitle}
                      </span>
                    )}

                    <p className="font-serif-body text-[14px] leading-relaxed text-[#2E2522]/80 font-medium">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#C5A880]/20 flex items-center justify-between text-xs font-display font-bold text-[#9E3E26]">
                    <span>Learn More</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 5 — BEYOND TEACHING (MORE THAN A CLASSROOM)
        ========================================== */}
        <section className="w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto border-b border-[#C5A880]/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <ScrollReveal className="lg:col-span-7 flex flex-col justify-center">
              <span className="font-display text-[11px] font-bold tracking-[0.24em] text-[#9E3E26] uppercase mb-3">
                {beyondEyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E2522] tracking-wide mb-8">
                {beyondTitle}
              </h2>

              <div className="space-y-6 font-serif-body text-[15px] sm:text-[16.5px] leading-[1.85] text-[#2E2522]/85 font-medium">
                {beyondParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-xl group">
                <Image
                  src="/vintage-studio.png"
                  alt="Literature Edit Editorial Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2522]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF6F0]">
                  <p className="font-display text-xs uppercase tracking-[0.2em] font-bold text-[#C5A880]">
                    Editorial Studio &amp; Research
                  </p>
                  <p className="font-serif-body text-sm font-medium mt-1">
                    Where educational clarity meets publishing expertise.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ==========================================
            SMALL QUOTE AT THE END & CTA
        ========================================== */}
        <section className="relative overflow-hidden bg-[#9E3E26] text-[#FAF6F0] py-20 px-6 sm:px-12 lg:px-16">
          {/* Subtle background pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF6F0_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <ScrollReveal className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Quote Mark Icon */}
            <svg
              className="w-12 h-12 text-[#C5A880] mb-6 opacity-90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <blockquote className="font-serif-body text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-wide max-w-3xl mb-8 text-[#FAF6F0]">
              "{quote}"
            </blockquote>

            <div className="h-px w-20 bg-[#C5A880] my-2 mb-8" />

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#FAF6F0]/60 px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#FAF6F0] transition-all duration-300 hover:bg-[#FAF6F0] hover:text-[#9E3E26] rounded"
            >
              Join Our Community
            </Link>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
