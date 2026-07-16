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

interface OrganicImageProps {
  src: string;
  alt: string;
  index: number;
}

const OrganicImage = ({ src, alt, index }: OrganicImageProps) => {
  // Dynamic shapes for morphing look
  const borderRadii = [
    "60% 40% 65% 35% / 40% 60% 35% 65%", // blob 1
    "40% 60% 35% 65% / 60% 40% 65% 35%", // blob 2
    "55% 45% 60% 40% / 45% 55% 40% 60%", // blob 3
  ];

  const currentRadius = borderRadii[index % borderRadii.length];

  return (
    <div className="relative w-full max-w-[360px] md:max-w-[400px] aspect-square mx-auto group">
      {/* Custom Vector Doodles */}
      {index === 0 && (
        <>
          {/* Sparkle top-left */}
          <svg className="absolute -top-6 -left-6 w-12 h-12 text-[#C5A880]/60 pointer-events-none select-none transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
          {/* Scribble loop bottom-right */}
          <svg className="absolute -bottom-8 -right-8 w-20 h-10 text-[#C5A880]/60 pointer-events-none select-none" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M10,25 Q30,5 50,25 T90,25 Q95,35 90,40 T70,30" strokeLinecap="round" />
          </svg>
        </>
      )}

      {index === 1 && (
        <>
          {/* Sparkle top-right */}
          <svg className="absolute -top-6 -right-6 w-10 h-10 text-[#C5A880]/60 pointer-events-none select-none transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
          {/* Botanical branch bottom-left */}
          <svg className="absolute -bottom-6 -left-6 w-16 h-16 text-[#C5A880]/60 pointer-events-none select-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 22C12 22 17 17 22 2" />
            <path d="M12 14c1.5-2 3.5-3 5.5-2.5M8 18c1.5-1.5 3-2 4.5-1.5M16 10c1-1.5 2.5-2 4-1.5" />
          </svg>
        </>
      )}

      {index === 2 && (
        <>
          {/* Sparkle bottom-right */}
          <svg className="absolute -bottom-6 -right-6 w-12 h-12 text-[#C5A880]/60 pointer-events-none select-none transition-transform duration-500 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
          {/* Creative swirl top-left */}
          <svg className="absolute -top-6 -left-6 w-16 h-10 text-[#C5A880]/60 pointer-events-none select-none" viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M10,40 Q20,10 40,25 T70,10" strokeLinecap="round" />
          </svg>
        </>
      )}

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
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
      </div>
    </div>
  );
};

interface TeacherCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
  isCenter?: boolean;
}

const TeacherCard = ({ name, role, image, description, isCenter = false }: TeacherCardProps) => {
  return (
    <ScrollReveal
      delay={isCenter ? 120 : 60}
      className={`relative flex flex-col items-center group w-full max-w-[340px] mx-auto ${
        isCenter ? "lg:-translate-y-6 z-20" : "z-10"
      }`}
    >
      {/* Layered offset 3D block */}
      <div
        className={`absolute inset-0 bg-[#C5A880]/10 border border-[#C5A880]/20 rounded-lg transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5 ${
          isCenter ? "translate-x-2 translate-y-2 border-[#9E3E26]/20 bg-[#9E3E26]/5" : "translate-x-1 translate-y-1"
        }`}
      />

      {/* Main profile card */}
      <div className="relative w-full bg-[#FCFAF7] border border-[#C5A880]/25 rounded-lg p-6 flex flex-col items-center shadow-sm z-10 transition-colors duration-300 group-hover:border-[#9E3E26]/30">
        {/* Headshot */}
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 overflow-hidden rounded-full border-2 border-[#C5A880]/40 mb-5">
          <Image
            src={image}
            alt={name}
            fill
            sizes="160px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Highlighted offset tag */}
        <div
          className={`px-6 py-2 text-center shadow-sm font-display tracking-[0.16em] text-[11px] sm:text-[11.5px] font-bold uppercase transition-all duration-300 ${
            isCenter
              ? "bg-[#9E3E26] text-[#FAF6F0] -rotate-1 group-hover:rotate-0"
              : "bg-[#C5A880] text-[#2E2522] rotate-1 group-hover:rotate-0"
          }`}
          style={{ transformOrigin: "center" }}
        >
          {name}
        </div>

        {/* Role tag */}
        <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26]/80 uppercase mt-4 mb-2">
          {role}
        </span>

        {/* Short description */}
        <p className="font-serif-body text-[14px] leading-relaxed text-[#2E2522]/85 text-center font-medium max-w-[240px]">
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
};

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-[#FAF6F0] overflow-x-hidden">
      <Navbar />

      <main>
        {/* Section 1: Hero Container */}
        <section className="relative w-full h-[85vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
          {/* Hero Image Backdrop */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/books.webp"
              alt="Cozy library setting with bookshelves and academic warmth"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Elegant dark brand color overlay */}
            <div className="absolute inset-0 bg-[#2E2522]/65 backdrop-blur-[1px]" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center">
            <ScrollReveal>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[76px] font-bold text-[#FAF6F0] leading-[1.05] tracking-[0.06em] uppercase">
                About Us
              </h1>

              <div className="h-px w-24 bg-[#C5A880] mx-auto my-6" />

              <p className="font-serif-body text-[#FAF6F0]/90 text-[15px] sm:text-lg leading-[1.8] max-w-2xl font-medium">
                From close reading to critical expression, our students discover depth, clarity, and voice - empowered to think beyond the classroom.
              </p>

              <a
                href="#learners-grid"
                className="mt-10 inline-flex items-center justify-center px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#C5A880] hover:text-[#2E2522] text-xs tracking-[0.2em] font-display font-bold text-[#9E3E26] uppercase transition-all duration-300 rounded shadow-sm"
              >
                See More
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: Preparing Students to Achieve Success (Alternating Rows) */}
        <section id="learners-grid" className="w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-20 text-center relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#9E3E26] relative inline-block">
              Preparing Students to Achieve Success
              <UnderlineScribble />
            </h2>
          </div>

          <div className="space-y-24 md:space-y-32">
            {/* Row 1: Text Left | Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <ScrollReveal className="lg:col-span-6 flex flex-col justify-center">
                <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26]/80 uppercase mb-3">
                  Cognitive Development
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2E2522] tracking-wide mb-6 leading-tight">
                  Developing Confident and Successful Learners
                </h3>
                <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium mb-8">
                  We guide students to look beneath the surface of texts, building the analytical habits and expressive confidence needed for academic and personal growth. Literature Edit is a dedicated thinking space where voice is shaped through active reading.
                </p>
                <div>
                  <Link
                    href="/programmes"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#9E3E26] text-[10px] tracking-[0.18em] font-display font-bold text-[#9E3E26] hover:bg-[#9E3E26] hover:text-[#FAF6F0] uppercase transition-all duration-300 rounded"
                  >
                    View Programmes
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={120} className="lg:col-span-6">
                <OrganicImage
                  src="/Cambridge IB English.webp"
                  alt="Student writing in their notebook during close study"
                  index={0}
                />
              </ScrollReveal>
            </div>

            {/* Row 2: Image Left | Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <ScrollReveal delay={120} className="lg:col-span-6 order-2 lg:order-1">
                <OrganicImage
                  src="/University Application (1).webp"
                  alt="A student reading books in a cozy study setting"
                  index={1}
                />
              </ScrollReveal>
              <ScrollReveal className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
                <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26]/80 uppercase mb-3">
                  Engagement & Conversation
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2E2522] tracking-wide mb-6 leading-tight">
                  Enjoy Learning with a Unique Classroom Experience
                </h3>
                <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium mb-8">
                  Our sessions are discussion-driven and student-centered. We treat literature and writing as an active, engaging conversation rather than a set of rules, enabling students to explore alternative perspectives and discover intellectual depth.
                </p>
                <div>
                  <Link
                    href="/programmes"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#9E3E26] text-[10px] tracking-[0.18em] font-display font-bold text-[#9E3E26] hover:bg-[#9E3E26] hover:text-[#FAF6F0] uppercase transition-all duration-300 rounded"
                  >
                    View Programmes
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Row 3: Text Left | Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <ScrollReveal className="lg:col-span-6 flex flex-col justify-center">
                <span className="font-display text-[10px] font-bold tracking-[0.2em] text-[#9E3E26]/80 uppercase mb-3">
                  Strategic Mentorship
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2E2522] tracking-wide mb-6 leading-tight">
                  Passionate Teachers That Make a Difference
                </h3>
                <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium mb-8">
                  Led by founder Asma Khan, the studio brings the rigorous eye of an editor and the warmth of a mentor to every draft, class, and consultation. We are committed to nurturing intellectual identity, academic precision, and original voice.
                </p>
                <div>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#9E3E26] text-[10px] tracking-[0.18em] font-display font-bold text-[#9E3E26] hover:bg-[#9E3E26] hover:text-[#FAF6F0] uppercase transition-all duration-300 rounded"
                  >
                    Meet Asma
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={120} className="lg:col-span-6">
                <OrganicImage
                  src="/Editorial Services.webp"
                  alt="Editorial services and manuscripts review process in a studio setting"
                  index={2}
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 3: Teachers (Carousel Grid) */}
        <section className="w-full bg-[#FCFAF7] border-y border-[#C5A880]/30 py-24 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <div className="mb-24 text-center relative">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#9E3E26] relative inline-block">
                Teachers
                <UnderlineScribble />
              </h2>
            </div>

            {/* Profile Grid (Left, Center/Highlighted, Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-center pt-8">
              {/* Profile 1: Left */}
              <TeacherCard
                name="John Carvan"
                role="Editorial Associate"
                image="/john-carvan.png"
                description="Specializes in developmental editing, manuscript architecture, and rigorous content reviews for academic essays and editorial projects."
              />

              {/* Profile 2: Center (Highlighted) */}
              <TeacherCard
                name="Asma Khan"
                role="Founder &amp; Lead Mentor"
                image="/asma-khan.png"
                description="Brings teaching, editorial craft, and strategic university mentorship together to cultivate students' critical reading and original writerly voice."
                isCenter={true}
              />

              {/* Profile 3: Right */}
              <TeacherCard
                name="Sarah Jenkins"
                role="Writing Mentor"
                image="/sarah-jenkins.png"
                description="Focuses on creative writing portfolios, personal statement diagnostics, and school syllabus alignment (IGCSE, Cambridge, and IB English)."
              />
            </div>
          </div>
        </section>

        {/* Section 4: Why it works (Three Columns) */}
        <section className="w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto">
          {/* Title */}
          <div className="mb-20 text-center relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[0.08em] text-[#9E3E26] relative inline-block">
              Why it works
              <UnderlineScribble />
            </h2>
          </div>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-6">
            {/* Column 1 */}
            <ScrollReveal className="flex flex-col items-center text-center group">
              <div className="relative w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/personalised-mentorship.webp"
                  alt="Personalized learning icon"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <h3 className="font-display text-[13px] font-bold tracking-[0.16em] text-[#9E3E26] mb-3 uppercase">
                Personalized learning
              </h3>
              <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium max-w-[280px]">
                Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.
              </p>
            </ScrollReveal>

            {/* Column 2 */}
            <ScrollReveal delay={90} className="flex flex-col items-center text-center group">
              <div className="relative w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/academic-excellence.webp"
                  alt="Trusted content icon"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <h3 className="font-display text-[13px] font-bold tracking-[0.16em] text-[#9E3E26] mb-3 uppercase">
                Trusted content
              </h3>
              <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium max-w-[280px]">
                Created by experts, our library of trusted practice and lessons covers literature, analysis, writing structures, and more.
              </p>
            </ScrollReveal>

            {/* Column 3 */}
            <ScrollReveal delay={180} className="flex flex-col items-center text-center group">
              <div className="relative w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/critikal-thinking.webp"
                  alt="Tools to empower teachers icon"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <h3 className="font-display text-[13px] font-bold tracking-[0.16em] text-[#9E3E26] mb-3 uppercase">
                Tools to empower teachers
              </h3>
              <p className="font-serif-body text-[14px] sm:text-[15px] leading-relaxed text-[#2E2522]/85 font-medium max-w-[280px]">
                Teachers and mentors can identify specific gaps in their students' understanding, tailor instruction, and meet the needs of every student.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
