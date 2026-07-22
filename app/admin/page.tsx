"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type FeatureCard = {
  title: string;
  eyebrow: string;
  description: string;
};

type AudienceCard = {
  title: string;
  subtitle: string;
  description: string;
};

type OfferItem = {
  title: string;
  description: string;
  link?: string;
  image?: string;
};

type ApproachItem = {
  title: string;
  description: string;
  image?: string;
};

type TestimonialItem = {
  quote: string;
  author?: string;
};

type SitePage = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  highlights: FeatureCard[];
  closingTitle: string;
  closingText: string;

  // Home Page Rich Sections
  studioTitle?: string;
  studioEyebrow?: string;
  studioParagraphs?: string[];

  offerTitle?: string;
  offerItems?: OfferItem[];

  myApproachTitle?: string;
  myApproachItems?: ApproachItem[];

  whySub?: string;
  whyBody?: string;

  deskTitle?: string;
  deskIntro?: string;

  testimonialsTitle?: string;
  testimonials?: TestimonialItem[];

  ctaTitle?: string;
  ctaText?: string;

  footerTagline?: string;
  footerSubtagline?: string;

  // Rich About Page Sections
  founderName?: string;
  founderTitle?: string;
  founderSub?: string;
  founderBio?: string[];
  founderImage?: string;

  storyEyebrow?: string;
  storyTitle?: string;
  storyParagraphs?: string[];

  approachEyebrow?: string;
  approachTitle?: string;
  approachIntro?: string;
  approachPoints?: string[];
  approachOutro?: string;

  audienceEyebrow?: string;
  audienceTitle?: string;
  audienceCards?: AudienceCard[];

  beyondEyebrow?: string;
  beyondTitle?: string;
  beyondParagraphs?: string[];

  quote?: string;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [pages, setPages] = useState<SitePage[]>([]);
  const [selectedPage, setSelectedPage] = useState<SitePage | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  // Standard Form State
  const [label, setLabel] = useState("");
  const [eyebrow, setEyebrow] = useState("");
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [highlights, setHighlights] = useState<FeatureCard[]>([]);
  const [closingTitle, setClosingTitle] = useState("");
  const [closingText, setClosingText] = useState("");

  // Home Page State
  const [studioTitle, setStudioTitle] = useState("");
  const [studioEyebrow, setStudioEyebrow] = useState("");
  const [studioParagraphsText, setStudioParagraphsText] = useState("");

  const [offerTitle, setOfferTitle] = useState("");
  const [offerItems, setOfferItems] = useState<OfferItem[]>([]);

  const [myApproachTitle, setMyApproachTitle] = useState("");
  const [myApproachItems, setMyApproachItems] = useState<ApproachItem[]>([]);

  const [whySub, setWhySub] = useState("");
  const [whyBody, setWhyBody] = useState("");

  const [deskTitle, setDeskTitle] = useState("");
  const [deskIntro, setDeskIntro] = useState("");

  const [testimonialsTitle, setTestimonialsTitle] = useState("");
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);

  const [ctaTitle, setCtaTitle] = useState("");
  const [ctaText, setCtaText] = useState("");

  const [footerTagline, setFooterTagline] = useState("");
  const [footerSubtagline, setFooterSubtagline] = useState("");

  // About Page Rich Sections Form State
  const [founderTitle, setFounderTitle] = useState("");
  const [founderSub, setFounderSub] = useState("");
  const [founderBioText, setFounderBioText] = useState("");
  const [founderImage, setFounderImage] = useState("");

  const [storyEyebrow, setStoryEyebrow] = useState("");
  const [storyTitle, setStoryTitle] = useState("");
  const [storyParagraphsText, setStoryParagraphsText] = useState("");

  const [approachEyebrow, setApproachEyebrow] = useState("");
  const [approachTitle, setApproachTitle] = useState("");
  const [approachIntro, setApproachIntro] = useState("");
  const [approachPoints, setApproachPoints] = useState<string[]>([]);
  const [approachOutro, setApproachOutro] = useState("");

  const [audienceEyebrow, setAudienceEyebrow] = useState("");
  const [audienceTitle, setAudienceTitle] = useState("");
  const [audienceCards, setAudienceCards] = useState<AudienceCard[]>([]);

  const [beyondEyebrow, setBeyondEyebrow] = useState("");
  const [beyondTitle, setBeyondTitle] = useState("");
  const [beyondParagraphsText, setBeyondParagraphsText] = useState("");

  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await fetch("/api/admin/pages");
      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }
      if (!response.ok) {
        throw new Error("Failed to fetch pages");
      }
      const data = await response.json();
      setPages(data);
      if (data.length > 0) {
        handleSelectPage(data[0]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectPage = (page: SitePage) => {
    setSelectedPage(page);
    setLabel(page.label || "");
    setEyebrow(page.eyebrow || "");
    setTitle(page.title || "");
    setIntro(page.intro || "");
    setImage(page.image || "");
    setImageAlt(page.imageAlt || "");
    setHighlights(page.highlights || []);
    setClosingTitle(page.closingTitle || "");
    setClosingText(page.closingText || "");

    // Home Page Sections State
    setStudioEyebrow(page.studioEyebrow || "About the Studio");
    setStudioTitle(page.studioTitle || "More Than Tutoring");
    setStudioParagraphsText(
      page.studioParagraphs && page.studioParagraphs.length > 0
        ? page.studioParagraphs.join("\n\n")
        : "Literature Edit was created with the belief that education should cultivate independent thinkers rather than simply prepare students for examinations.\n\nEvery lesson is designed to encourage close reading, thoughtful discussion, and purposeful writing. Beyond the classroom, the studio offers editorial support, university guidance, and research mentoring—helping learners become articulate readers, confident writers, and critical thinkers."
    );

    setOfferTitle(page.offerTitle || "What I Offer");
    setOfferItems(
      page.offerItems || [
        {
          title: "Cambridge & IB English",
          description:
            "Personalised support for IGCSE, IB, AS & A Level English Language and Literature, focused on analytical reading, structured writing, and examination success.",
          link: "/programmes",
          image: "/Cambridge IB English.webp",
        },
        {
          title: "Editorial Services",
          description:
            "Developmental editing, academic editing, proofreading, content review, and manuscript feedback for students, researchers, and writers.",
          link: "/editorial-services",
          image: "/Editorial Services.webp",
        },
        {
          title: "University Applications",
          description:
            "Personal statements, college essays, interview preparation, Extended Essays, Internal Assessments, and academic writing guidance.",
          link: "/university-mentorship",
          image: "/University Application (1).webp",
        },
        {
          title: "Research & Academic Writing",
          description:
            "Research mentoring, essay planning, source evaluation, and academic writing support for school and university learners.",
          link: "/academic-writing",
          image: "/Research.png from Squoosh.webp",
        },
      ]
    );

    setMyApproachTitle(page.myApproachTitle || "My Approach");
    setMyApproachItems(
      page.myApproachItems || [
        {
          title: "Personalised",
          description:
            "Every learner brings a different perspective, pace, and goal. Lessons are designed around individual strengths while building lasting confidence.",
          image: "/personalised-mentorship.webp",
        },
        {
          title: "Rigorous",
          description:
            "Academic excellence is achieved through consistency, careful feedback, and meaningful engagement—not memorisation.",
          image: "/academic-excellence.webp",
        },
        {
          title: "Thoughtful",
          description:
            "Students are encouraged to question, analyse, interpret, and communicate ideas with clarity.",
          image: "/critikal-thinking.webp",
        },
        {
          title: "Beyond the Classroom",
          description:
            "The aim isn't simply better grades—it's developing readers and writers who continue learning long after the examination ends.",
          image: "/editorial-precision.webp",
        },
      ]
    );

    setWhySub(page.whySub || "Because language shapes the way we understand the world.");
    setWhyBody(
      page.whyBody ||
        "Here, literature is explored not only as a subject, but as a way of thinking. Every lesson, editorial project, and mentoring session is guided by patience, precision, and an enduring appreciation for ideas."
    );

    setDeskTitle(page.deskTitle || "From the Literary Desk");
    setDeskIntro(
      page.deskIntro ||
        "A space for essays, reflections, reading recommendations, and conversations about literature, language, and culture."
    );

    setTestimonialsTitle(page.testimonialsTitle || "A Few Words from Students");
    setTestimonials(
      page.testimonials || [
        {
          quote:
            "Asma made literature feel less like an examination subject and more like something worth returning to.",
          author: "Student",
        },
      ]
    );

    setCtaTitle(page.ctaTitle || "Ready to Begin?");
    setCtaText(
      page.ctaText ||
        "Whether you're preparing for examinations, refining your writing, or seeking long-term academic mentorship, I'd be delighted to work with you."
    );

    setFooterTagline(page.footerTagline || "A Literary Studio for Readers, Writers & Thinkers.");
    setFooterSubtagline(
      page.footerSubtagline ||
        "IGCSE • IB • AS & A Level • University Mentorship • Editorial Services"
    );

    // About sections state population
    setFounderTitle(page.founderTitle || "Meet Asma Khan");
    setFounderSub(page.founderSub || "Founder & Lead Mentor");
    setFounderBioText(
      page.founderBio && page.founderBio.length > 0
        ? page.founderBio.join("\n\n")
        : "Literature Edit was founded by Asma Khan, an English Language and Literature educator, editor, and researcher with a passion for thoughtful learning and meaningful writing.\n\nWith experience spanning international curricula, academic mentoring, publishing, and editorial work, she has worked with students, researchers, and writers across different stages of their academic and creative journeys. Her teaching combines close reading, critical inquiry, and structured writing to help learners develop confidence, clarity, and intellectual independence.\n\nWhat began as a commitment to helping students move beyond memorisation has grown into a literary studio dedicated to nurturing readers, writers, and thinkers."
    );
    setFounderImage(page.founderImage || page.image || "/asma-khan.png");

    setStoryEyebrow(page.storyEyebrow || "The Story Behind Literature Edit");
    setStoryTitle(page.storyTitle || "Why Literature Edit?");
    setStoryParagraphsText(
      page.storyParagraphs && page.storyParagraphs.length > 0
        ? page.storyParagraphs.join("\n\n")
        : "Literature Edit was created from a simple belief: that literature is more than an academic subject—it is a way of understanding people, ideas, and the world around us.\n\nIn a learning environment often focused on examinations and model answers, Literature Edit offers a different approach. Here, students are encouraged to question, analyse, interpret, and write with originality. Every lesson is designed to cultivate curiosity, strengthen communication, and inspire a lifelong engagement with language and literature.\n\nAs the studio evolved, it expanded beyond teaching to include editorial services, academic research support, and writing mentorship, bringing together education and publishing under one roof."
    );

    setApproachEyebrow(page.approachEyebrow || "What Makes Us Different");
    setApproachTitle(page.approachTitle || "Our Approach");
    setApproachIntro(
      page.approachIntro ||
        "Every learner arrives with different strengths, challenges, and ambitions. Our teaching is designed around the individual rather than a fixed curriculum."
    );
    setApproachPoints(
      page.approachPoints || [
        "Close reading of literary and non-literary texts",
        "Guided discussions that develop analytical thinking",
        "Personalised writing workshops with detailed feedback",
        "Research-based learning beyond examination requirements",
        "Structured preparation for international curricula and university writing",
      ]
    );
    setApproachOutro(
      page.approachOutro ||
        "Our goal extends beyond examination success. We aim to help students become confident readers, articulate writers, and independent thinkers."
    );

    setAudienceEyebrow(page.audienceEyebrow || "Who We Work With");
    setAudienceTitle(page.audienceTitle || "Learners We Support");
    setAudienceCards(
      page.audienceCards || [
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
      ]
    );

    setBeyondEyebrow(page.beyondEyebrow || "Beyond Teaching");
    setBeyondTitle(page.beyondTitle || "More Than a Classroom");
    setBeyondParagraphsText(
      page.beyondParagraphs && page.beyondParagraphs.length > 0
        ? page.beyondParagraphs.join("\n\n")
        : "Literature Edit combines academic teaching with professional editorial experience.\n\nAlongside our educational programmes, we support writers, researchers, and institutions through editorial services including manuscript editing, academic proofreading, content development, and research guidance.\n\nThis integration of teaching and publishing allows students to learn from the perspective of both an educator and an editor—understanding not only how great writing is analysed, but how it is refined and brought to life.\n\nWhether you're preparing for international examinations, writing your first dissertation, editing a manuscript, or simply hoping to become a stronger reader and writer, Literature Edit is a place where thoughtful learning is valued above hurried achievement.\n\nWe invite you to join a community built on curiosity, precision, and a genuine love for language."
    );

    setQuote(
      page.quote ||
        "The purpose of literature is not merely to teach us what to think, but to help us discover how to think."
    );

    setSaveStatus(null);
  };

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    targetField: "main" | "founder" = "main"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setSaveStatus(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to upload image");
      }

      if (targetField === "founder") {
        setFounderImage(data.url);
      } else {
        setImage(data.url);
      }
      setSaveStatus({ type: "success", msg: "Image uploaded to Cloudinary successfully!" });
    } catch (err: any) {
      setSaveStatus({ type: "error", msg: err.message || "Upload failed" });
    } finally {
      setUploading(false);
    }
  };

  const handleHighlightChange = (index: number, key: keyof FeatureCard, value: string) => {
    const updated = [...highlights];
    updated[index] = { ...updated[index], [key]: value };
    setHighlights(updated);
  };

  const addHighlight = () => {
    setHighlights([...highlights, { title: "", eyebrow: "", description: "" }]);
  };

  const removeHighlight = (index: number) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  const handleOfferItemChange = (index: number, key: keyof OfferItem, value: string) => {
    const updated = [...offerItems];
    updated[index] = { ...updated[index], [key]: value };
    setOfferItems(updated);
  };

  const handleApproachItemChange = (index: number, key: keyof ApproachItem, value: string) => {
    const updated = [...myApproachItems];
    updated[index] = { ...updated[index], [key]: value };
    setMyApproachItems(updated);
  };

  const handleTestimonialChange = (index: number, key: keyof TestimonialItem, value: string) => {
    const updated = [...testimonials];
    updated[index] = { ...updated[index], [key]: value };
    setTestimonials(updated);
  };

  const addTestimonial = () => {
    setTestimonials([...testimonials, { quote: "", author: "Student" }]);
  };

  const removeTestimonial = (index: number) => {
    setTestimonials(testimonials.filter((_, i) => i !== index));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPage) return;

    setSaving(true);
    setSaveStatus(null);

    const payload: any = {
      slug: selectedPage.slug,
      label,
      eyebrow,
      title,
      intro,
      image,
      imageAlt,
      highlights,
      closingTitle,
      closingText,
    };

    if (selectedPage.slug === "home") {
      payload.studioTitle = studioTitle;
      payload.studioEyebrow = studioEyebrow;
      payload.studioParagraphs = studioParagraphsText
        .split("\n\n")
        .map((p) => p.trim())
        .filter(Boolean);

      payload.offerTitle = offerTitle;
      payload.offerItems = offerItems;

      payload.myApproachTitle = myApproachTitle;
      payload.myApproachItems = myApproachItems;

      payload.whySub = whySub;
      payload.whyBody = whyBody;

      payload.deskTitle = deskTitle;
      payload.deskIntro = deskIntro;

      payload.testimonialsTitle = testimonialsTitle;
      payload.testimonials = testimonials;

      payload.ctaTitle = ctaTitle;
      payload.ctaText = ctaText;

      payload.footerTagline = footerTagline;
      payload.footerSubtagline = footerSubtagline;
    }

    if (selectedPage.slug === "about") {
      payload.founderTitle = founderTitle;
      payload.founderSub = founderSub;
      payload.founderBio = founderBioText
        .split("\n\n")
        .map((p) => p.trim())
        .filter(Boolean);
      payload.founderImage = founderImage;

      payload.storyEyebrow = storyEyebrow;
      payload.storyTitle = storyTitle;
      payload.storyParagraphs = storyParagraphsText
        .split("\n\n")
        .map((p) => p.trim())
        .filter(Boolean);

      payload.approachEyebrow = approachEyebrow;
      payload.approachTitle = approachTitle;
      payload.approachIntro = approachIntro;
      payload.approachPoints = approachPoints.filter((p) => p.trim() !== "");
      payload.approachOutro = approachOutro;

      payload.audienceEyebrow = audienceEyebrow;
      payload.audienceTitle = audienceTitle;
      payload.audienceCards = audienceCards;

      payload.beyondEyebrow = beyondEyebrow;
      payload.beyondTitle = beyondTitle;
      payload.beyondParagraphs = beyondParagraphsText
        .split("\n\n")
        .map((p) => p.trim())
        .filter(Boolean);

      payload.quote = quote;
    }

    try {
      const res = await fetch("/api/admin/pages", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to save page");
      }

      setSaveStatus({ type: "success", msg: "Page content saved successfully!" });

      // Update local pages list
      setPages(
        pages.map((p) => (p.slug === selectedPage.slug ? { ...p, ...payload } : p))
      );
    } catch (err: any) {
      setSaveStatus({ type: "error", msg: err.message || "Save failed" });
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-[#FAF6F0] justify-center items-center font-display text-xl text-[#9E3E26]">
        Loading dashboard...
      </div>
    );
  }

  const isHomePage = selectedPage?.slug === "home";
  const isAboutPage = selectedPage?.slug === "about";

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FAF6F0] relative overflow-hidden">
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: "url('/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Sidebar - Pages list */}
      <aside className="w-full md:w-64 bg-[#FAF6F0]/90 backdrop-blur-sm border-r border-[#2E2522]/10 p-6 flex flex-col justify-between relative z-10">
        <div>
          {/* Brand */}
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-5 h-5 text-[#9E3E26]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
            <span className="font-sans font-black text-base tracking-[0.15em] text-[#9E3E26] uppercase">
              Edit Admin
            </span>
          </div>

          <h2 className="text-[10px] font-sans font-black text-[#2E2522]/60 mb-4">
            Pages
          </h2>
          <nav className="space-y-1">
            {pages.map((page) => (
              <button
                key={page.slug}
                onClick={() => handleSelectPage(page)}
                className={`w-full text-left px-4 py-2.5 rounded font-serif-body font-bold text-sm transition-colors ${
                  selectedPage?.slug === page.slug
                    ? "bg-[#9E3E26] text-[#FAF6F0]"
                    : "text-[#2E2522] hover:bg-[#2E2522]/5"
                }`}
              >
                {page.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#2E2522]/10 mt-6">
          <button
            onClick={handleLogout}
            className="w-full py-2 border border-[#9E3E26]/40 hover:bg-[#9E3E26] hover:text-[#FAF6F0] text-[#9E3E26] transition-colors rounded text-xs font-display font-bold tracking-[0.18em] uppercase"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content - Page form */}
      <main className="flex-1 p-6 md:p-10 max-w-4xl overflow-y-auto relative z-10">
        {selectedPage ? (
          <div>
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#2E2522]/10">
              <div>
                <h1 className="font-display text-3xl font-bold text-[#2E2522]">
                  Edit: {selectedPage.label}
                </h1>
                <p className="font-serif-body text-[#2E2522]/60 text-xs italic mt-1">
                  Slug: /{selectedPage.slug === "home" ? "" : selectedPage.slug}
                </p>
              </div>

              <Link
                href={selectedPage.slug === "home" ? "/" : `/${selectedPage.slug}`}
                target="_blank"
                className="px-4 py-2 border border-[#2E2522]/30 hover:border-[#2E2522] hover:bg-[#2E2522] hover:text-[#FAF6F0] text-xs font-sans font-black transition-all rounded"
              >
                View Live Page
              </Link>
            </div>

            {saveStatus && (
              <div
                className={`mb-6 p-4 rounded text-xs font-serif-body border-l-4 ${
                  saveStatus.type === "success"
                    ? "bg-green-50 border-green-500 text-green-700"
                    : "bg-red-50 border-red-500 text-red-700"
                }`}
              >
                {saveStatus.msg}
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-8">
              {/* Header & Hero Text Content */}
              <div className="bg-[#FAF6F0] border border-[#2E2522]/10 rounded-lg p-6 space-y-6">
                <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2">
                  Hero Section
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                      Navigation Label
                    </label>
                    <input
                      type="text"
                      required
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                      Eyebrow / Subtitle Accent
                    </label>
                    <input
                      type="text"
                      value={eyebrow}
                      onChange={(e) => setEyebrow(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                    Hero Title
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                    Hero Introductory / Overview Text
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={intro}
                    onChange={(e) => setIntro(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                  />
                </div>
              </div>

              {/* SPECIAL SECTIONS FOR HOME PAGE */}
              {isHomePage && (
                <>
                  {/* Section 2: More Than Tutoring */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2 uppercase tracking-wider">
                      Section 2 — More Than Tutoring
                    </h3>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Section Title
                      </label>
                      <input
                        type="text"
                        value={studioTitle}
                        onChange={(e) => setStudioTitle(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Paragraphs (Separate paragraphs with double newlines)
                      </label>
                      <textarea
                        rows={5}
                        value={studioParagraphsText}
                        onChange={(e) => setStudioParagraphsText(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>
                  </div>

                  {/* Section 3: What I Offer */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2 uppercase tracking-wider">
                      Section 3 — What I Offer
                    </h3>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Section Title
                      </label>
                      <input
                        type="text"
                        value={offerTitle}
                        onChange={(e) => setOfferTitle(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>

                    <div className="space-y-4">
                      {offerItems.map((item, idx) => (
                        <div key={idx} className="p-4 border border-[#2E2522]/15 rounded bg-white space-y-3">
                          <label className="block text-[9px] font-sans font-black text-[#9E3E26] uppercase">
                            Offer Card {idx + 1}
                          </label>
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => handleOfferItemChange(idx, "title", e.target.value)}
                            className="w-full px-3 py-1.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-xs rounded font-bold"
                            placeholder="Title"
                          />
                          <textarea
                            rows={2}
                            value={item.description}
                            onChange={(e) => handleOfferItemChange(idx, "description", e.target.value)}
                            className="w-full px-3 py-1.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-xs rounded"
                            placeholder="Description"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 4: My Approach */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2 uppercase tracking-wider">
                      Section 4 — My Approach
                    </h3>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Approach Section Title
                      </label>
                      <input
                        type="text"
                        value={myApproachTitle}
                        onChange={(e) => setMyApproachTitle(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>

                    <div className="space-y-4">
                      {myApproachItems.map((item, idx) => (
                        <div key={idx} className="p-4 border border-[#2E2522]/15 rounded bg-white space-y-3">
                          <label className="block text-[9px] font-sans font-black text-[#9E3E26] uppercase">
                            Approach Pillar {idx + 1}
                          </label>
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => handleApproachItemChange(idx, "title", e.target.value)}
                            className="w-full px-3 py-1.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-xs rounded font-bold"
                            placeholder="Title (e.g. Personalised)"
                          />
                          <textarea
                            rows={2}
                            value={item.description}
                            onChange={(e) => handleApproachItemChange(idx, "description", e.target.value)}
                            className="w-full px-3 py-1.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-xs rounded"
                            placeholder="Description"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 5: Why Literature Edit? */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2 uppercase tracking-wider">
                      Section 5 — Why Literature Edit?
                    </h3>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Subtitle / Tagline
                      </label>
                      <input
                        type="text"
                        value={whySub}
                        onChange={(e) => setWhySub(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Section 5 Body Text
                      </label>
                      <textarea
                        rows={3}
                        value={whyBody}
                        onChange={(e) => setWhyBody(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>
                  </div>

                  {/* Section 6: From the Literary Desk */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2 uppercase tracking-wider">
                      Section 6 — From the Literary Desk
                    </h3>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Section Title
                      </label>
                      <input
                        type="text"
                        value={deskTitle}
                        onChange={(e) => setDeskTitle(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Desk Overview Intro
                      </label>
                      <textarea
                        rows={2}
                        value={deskIntro}
                        onChange={(e) => setDeskIntro(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>
                  </div>

                  {/* Section 7: A Few Words from Students */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <div className="flex justify-between items-center border-b border-[#2E2522]/10 pb-2">
                      <h3 className="font-sans text-xs font-black text-[#9E3E26] uppercase tracking-wider">
                        Section 7 — A Few Words from Students (Testimonials)
                      </h3>
                      <button
                        type="button"
                        onClick={addTestimonial}
                        className="text-xs font-display font-bold text-[#9E3E26] uppercase"
                      >
                        + Add Testimonial
                      </button>
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Testimonials Section Title
                      </label>
                      <input
                        type="text"
                        value={testimonialsTitle}
                        onChange={(e) => setTestimonialsTitle(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>

                    <div className="space-y-4">
                      {testimonials.map((t, idx) => (
                        <div key={idx} className="relative p-4 border border-[#2E2522]/15 rounded bg-white space-y-3">
                          <button
                            type="button"
                            onClick={() => removeTestimonial(idx)}
                            className="absolute top-2 right-2 text-xs text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                          <div>
                            <label className="block text-[9px] font-sans font-black text-[#2E2522]/80 mb-1">
                              Student Quote
                            </label>
                            <textarea
                              rows={2}
                              value={t.quote}
                              onChange={(e) => handleTestimonialChange(idx, "quote", e.target.value)}
                              className="w-full px-3 py-1.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-xs rounded"
                            />
                          </div>
                          <div>
                            <label className="block text-[9px] font-sans font-black text-[#2E2522]/80 mb-1">
                              Author Credit / Role
                            </label>
                            <input
                              type="text"
                              value={t.author}
                              onChange={(e) => handleTestimonialChange(idx, "author", e.target.value)}
                              className="w-full px-3 py-1.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-xs rounded"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final CTA & Footer Tagline */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2 uppercase tracking-wider">
                      Final CTA &amp; Footer Branding
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                          Final CTA Title
                        </label>
                        <input
                          type="text"
                          value={ctaTitle}
                          onChange={(e) => setCtaTitle(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                          Footer Main Tagline
                        </label>
                        <input
                          type="text"
                          value={footerTagline}
                          onChange={(e) => setFooterTagline(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Final CTA Body Text
                      </label>
                      <textarea
                        rows={2}
                        value={ctaText}
                        onChange={(e) => setCtaText(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Footer Sub-tagline / Bullet List
                      </label>
                      <input
                        type="text"
                        value={footerSubtagline}
                        onChange={(e) => setFooterSubtagline(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* SPECIAL SECTIONS FOR ABOUT PAGE */}
              {isAboutPage && (
                <>
                  {/* Section 1: Meet the Founder */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2 uppercase tracking-wider">
                      Section 1 — Meet the Founder
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                          Founder Section Title
                        </label>
                        <input
                          type="text"
                          value={founderTitle}
                          onChange={(e) => setFounderTitle(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                          Founder Role / Subtitle
                        </label>
                        <input
                          type="text"
                          value={founderSub}
                          onChange={(e) => setFounderSub(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Founder Bio Paragraphs (Separate paragraphs with double newlines)
                      </label>
                      <textarea
                        rows={6}
                        value={founderBioText}
                        onChange={(e) => setFounderBioText(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Founder Image URL
                      </label>
                      <div className="flex gap-4 items-center">
                        <input
                          type="text"
                          value={founderImage}
                          onChange={(e) => setFounderImage(e.target.value)}
                          className="flex-1 px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, "founder")}
                          className="text-xs text-[#2E2522]/80 file:mr-2 file:py-2 file:px-3 file:rounded file:border-0 file:text-xs file:font-display file:font-bold file:bg-[#9E3E26] file:text-[#FAF6F0] cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: The Story Behind Literature Edit */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2 uppercase tracking-wider">
                      Section 2 — The Story Behind Literature Edit
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                          Story Eyebrow
                        </label>
                        <input
                          type="text"
                          value={storyEyebrow}
                          onChange={(e) => setStoryEyebrow(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                          Story Section Title
                        </label>
                        <input
                          type="text"
                          value={storyTitle}
                          onChange={(e) => setStoryTitle(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Story Paragraphs (Separate paragraphs with double newlines)
                      </label>
                      <textarea
                        rows={6}
                        value={storyParagraphsText}
                        onChange={(e) => setStoryParagraphsText(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>
                  </div>

                  {/* Section 3: What Makes Us Different */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2 uppercase tracking-wider">
                      Section 3 — What Makes Us Different
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                          Approach Eyebrow
                        </label>
                        <input
                          type="text"
                          value={approachEyebrow}
                          onChange={(e) => setApproachEyebrow(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                          Approach Title
                        </label>
                        <input
                          type="text"
                          value={approachTitle}
                          onChange={(e) => setApproachTitle(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Approach Intro Text
                      </label>
                      <textarea
                        rows={2}
                        value={approachIntro}
                        onChange={(e) => setApproachIntro(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Approach Outro Statement
                      </label>
                      <textarea
                        rows={2}
                        value={approachOutro}
                        onChange={(e) => setApproachOutro(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>
                  </div>

                  {/* Section 4: Who We Work With */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2 uppercase tracking-wider">
                      Section 4 — Who We Work With
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                          Audience Eyebrow
                        </label>
                        <input
                          type="text"
                          value={audienceEyebrow}
                          onChange={(e) => setAudienceEyebrow(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                          Audience Title
                        </label>
                        <input
                          type="text"
                          value={audienceTitle}
                          onChange={(e) => setAudienceTitle(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 5: Beyond Teaching */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2 uppercase tracking-wider">
                      Section 5 — Beyond Teaching
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                          Beyond Teaching Eyebrow
                        </label>
                        <input
                          type="text"
                          value={beyondEyebrow}
                          onChange={(e) => setBeyondEyebrow(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                          Beyond Teaching Title
                        </label>
                        <input
                          type="text"
                          value={beyondTitle}
                          onChange={(e) => setBeyondTitle(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Beyond Teaching Paragraphs (Separate paragraphs with double newlines)
                      </label>
                      <textarea
                        rows={6}
                        value={beyondParagraphsText}
                        onChange={(e) => setBeyondParagraphsText(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>
                  </div>

                  {/* Section 6: Quote at the End */}
                  <div className="bg-[#FCFAF7] border border-[#C5A880]/40 rounded-lg p-6 space-y-6">
                    <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2 uppercase tracking-wider">
                      Quote at the End
                    </h3>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Closing Quote Text
                      </label>
                      <textarea
                        rows={3}
                        value={quote}
                        onChange={(e) => setQuote(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Image & Asset Management via Cloudinary */}
              <div className="bg-[#FAF6F0] border border-[#2E2522]/10 rounded-lg p-6 space-y-6">
                <h3 className="font-sans text-xs font-black text-[#9E3E26] border-b border-[#2E2522]/10 pb-2">
                  Hero Image & Media (Cloudinary)
                </h3>

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  {image && (
                    <div className="relative w-48 h-32 overflow-hidden border border-[#2E2522]/10 rounded">
                      <img
                        src={image}
                        alt="Preview"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}

                  <div className="flex-1 space-y-4">
                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Image URL
                      </label>
                      <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        placeholder="Cloudinary secure URL"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Image Alternative Text (SEO & Accessibility)
                      </label>
                      <input
                        type="text"
                        value={imageAlt}
                        onChange={(e) => setImageAlt(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#2E2522]/15 text-[#2E2522] font-serif-body text-sm rounded focus:outline-none focus:border-[#9E3E26]"
                        placeholder="Describe the image"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-black text-[#2E2522]/90 mb-2">
                        Upload New Hero Image to Cloudinary
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "main")}
                        className="text-xs font-serif-body text-[#2E2522]/80 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-display file:font-bold file:tracking-wider file:bg-[#9E3E26] file:text-[#FAF6F0] file:hover:bg-[#85321E] cursor-pointer"
                        disabled={uploading}
                      />
                      {uploading && <span className="text-xs italic text-[#9E3E26] ml-2">Uploading to Cloudinary...</span>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="px-8 py-4 bg-[#9E3E26] text-[#FAF6F0] hover:bg-[#85321E] transition-colors rounded text-xs font-display font-bold tracking-[0.2em] uppercase disabled:bg-gray-400 cursor-pointer"
                >
                  {saving ? "Saving Changes..." : "Save Page Content"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center font-serif-body italic py-20 text-[#2E2522]/50">
            Select a page from the sidebar to edit its content.
          </div>
        )}
      </main>
    </div>
  );
}
