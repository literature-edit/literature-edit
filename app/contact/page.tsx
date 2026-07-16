import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import ContactForm from "./ContactForm";

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

interface InfoCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  index: number;
}

const InfoCard = ({ title, subtitle, description, icon, index }: InfoCardProps) => {
  return (
    <ScrollReveal
      delay={index * 80}
      className="relative flex flex-col group w-full max-w-[360px] md:max-w-full mx-auto"
    >
      {/* 3D Offset Background Block */}
      <div className="absolute inset-0 bg-[#C5A880]/10 border border-[#C5A880]/20 rounded-xl translate-x-1.5 translate-y-1.5 transition-transform duration-500 group-hover:translate-x-2.5 group-hover:translate-y-2.5 z-0" />

      {/* Main card body */}
      <div className="relative w-full bg-[#FCFAF7] border border-[#C5A880]/25 rounded-xl p-6 flex flex-col shadow-sm z-10 transition-colors duration-300 group-hover:border-[#9E3E26]/30 flex-grow">
        {/* Icon wrapper */}
        <div className="relative w-12 h-12 mb-5 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={icon}
            alt={title}
            fill
            sizes="48px"
            className="object-contain"
          />
        </div>

        {/* Title */}
        <span className="font-display text-[9px] font-bold tracking-[0.2em] text-[#9E3E26]/80 uppercase mb-2 block">
          {title}
        </span>

        {/* Subtitle */}
        <h3 className="font-display text-base sm:text-lg font-bold text-[#2E2522] tracking-wide mb-3 leading-snug">
          {subtitle}
        </h3>

        {/* Description */}
        <p className="font-serif-body text-[14px] leading-relaxed text-[#2E2522]/80 font-medium">
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
};

export default function ContactPage() {
  const contactInfoList = [
    {
      title: "Email Inquiry",
      subtitle: "hello@literatureedit.com",
      description: "Share the manuscript size, deadlines, learner goals, or specific texts you would like to review.",
      icon: "/personalised-mentorship.webp",
    },
    {
      title: "1-on-1 Consultation",
      subtitle: "Diagnostic Call",
      description: "Schedule a brief call to align on syllabus objectives, manuscript pacing, and match support formats.",
      icon: "/academic-excellence.webp",
    },
    {
      title: "Studio Location",
      subtitle: "Mumbai & Remote",
      description: "Mentorship and editorial feedback are conducted remotely for authors and students globally.",
      icon: "/critikal-thinking.webp",
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
              src="/vintage-studio.png"
              alt="Warm study room with a typewriter and bookshelves"
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
                Contact
              </h1>

              <div className="h-px w-24 bg-[#C5A880] mx-auto my-6" />

              <p className="font-serif-body text-[#FAF6F0]/90 text-[15px] sm:text-lg leading-[1.8] max-w-2xl font-medium">
                Tell us what you are reading, writing, or preparing for. Reach out for academic enquiries, editing drafts, statements, or dynamic consultations.
              </p>

              <a
                href="#contact-section"
                className="mt-10 inline-flex items-center justify-center px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#C5A880] hover:text-[#2E2522] text-xs tracking-[0.2em] font-display font-bold text-[#9E3E26] uppercase transition-all duration-300 rounded shadow-sm"
              >
                Get In Touch
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: Contact Info Grid */}
        <section className="w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#9E3E26] relative inline-block">
              Communication Channels
              <UnderlineScribble />
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 pt-4">
            {contactInfoList.map((info, index) => (
              <InfoCard
                key={info.title}
                title={info.title}
                subtitle={info.subtitle}
                description={info.description}
                icon={info.icon}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Section 3: Contact Form and Guidance */}
        <section id="contact-section" className="w-full bg-[#FCFAF7] border-t border-[#C5A880]/30 py-24 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Guidance */}
            <ScrollReveal className="lg:col-span-5 flex flex-col justify-center">
              <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26]/80 uppercase mb-3">
                Expectations
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2E2522] tracking-wide mb-6 leading-tight">
                Begin with the question in front of you.
              </h2>
              <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium mb-8">
                Whether it is a difficult text, a draft that needs direction, or an application that has to sound human, the studio can help you find the next sentence. Reach out via the form, and we'll reply shortly.
              </p>

              {/* Step list */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="font-display text-[11px] font-bold text-[#9E3E26] bg-[#C5A880]/15 w-8 h-8 rounded-full flex items-center justify-center border border-[#C5A880]/20 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold text-[#2E2522] uppercase tracking-wider mb-1">
                      Initial Review
                    </h4>
                    <p className="font-serif-body text-xs leading-relaxed text-[#2E2522]/80 font-medium">
                      We read your message and review details regarding the syllabus, goals, or manuscript length.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="font-display text-[11px] font-bold text-[#9E3E26] bg-[#C5A880]/15 w-8 h-8 rounded-full flex items-center justify-center border border-[#C5A880]/20 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold text-[#2E2522] uppercase tracking-wider mb-1">
                      Consultation Booking
                    </h4>
                    <p className="font-serif-body text-xs leading-relaxed text-[#2E2522]/80 font-medium">
                      We schedule a brief, focused call to map requirements and agree on the support rhythm.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="font-display text-[11px] font-bold text-[#9E3E26] bg-[#C5A880]/15 w-8 h-8 rounded-full flex items-center justify-center border border-[#C5A880]/20 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold text-[#2E2522] uppercase tracking-wider mb-1">
                      Actionable Plan
                    </h4>
                    <p className="font-serif-body text-xs leading-relaxed text-[#2E2522]/80 font-medium">
                      We secure calendar slots, developmental deadlines, or class tracks, and begin our collaborative work.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Contact Form */}
            <ScrollReveal className="lg:col-span-7 w-full">
              <ContactForm />
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
