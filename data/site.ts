export type SiteLink = {
  label: string;
  href: string;
};

export type FeatureCard = {
  title: string;
  eyebrow: string;
  description: string;
};

export type AudienceCard = {
  title: string;
  subtitle: string;
  description: string;
};

export type SitePage = {
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
  offerItems?: { title: string; description: string; link?: string; image?: string }[];

  myApproachTitle?: string;
  myApproachItems?: { title: string; description: string; image?: string }[];

  whySub?: string;
  whyBody?: string;

  deskTitle?: string;
  deskIntro?: string;
  deskCards?: { label: string; title: string; excerpt: string; image?: string; link?: string }[];

  testimonialsTitle?: string;
  testimonials?: { quote: string; author?: string }[];

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

export const mainNavLinks: SiteLink[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "LITERARY STUDIO", href: "/programmes" },
  { label: "EDITORIAL SERVICES", href: "/editorial-services" },
  { label: "RESOURCES", href: "/resources" },
  { label: "JOURNAL", href: "/journal" },
  { label: "CONTACT", href: "/contact" },
];

export const quickFooterLinks: SiteLink[] = [
  { label: "About", href: "/about" },
  { label: "Literary Studio", href: "/programmes" },
  { label: "Editorial Services", href: "/editorial-services" },
  { label: "Resources", href: "/resources" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const programmeFooterLinks: SiteLink[] = [
  { label: "IGCSE English", href: "/igcse-english" },
  { label: "IB English", href: "/ib-english" },
  { label: "Literature in English", href: "/literature-in-english" },
  { label: "Academic Writing", href: "/academic-writing" },
  { label: "University Mentorship", href: "/university-mentorship" },
];

export const legalFooterLinks: SiteLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export const pages: SitePage[] = [
  {
    slug: "home",
    label: "Home",
    eyebrow: "A Literary Studio for Readers, Writers & Thinkers",
    title: "Literature Edit",
    intro:
      "Literature Edit is where language becomes a means of inquiry, literature becomes a conversation, and learning extends beyond examinations. Founded by Asma Khan, the studio brings together academic mentorship, editorial expertise, and a lifelong engagement with the written word.\n\nWhether you're preparing for IGCSE, IB, university applications, or refining your writing, every session is built around curiosity, clarity, and confidence.",
    image: "/hero-books.png",
    imageAlt: "Open books and writing materials on a wooden table",
    highlights: [],
    closingTitle: "Ready to Begin?",
    closingText:
      "Whether you're preparing for examinations, refining your writing, or seeking long-term academic mentorship, I'd be delighted to work with you.",

    // Section 2: More Than Tutoring
    studioEyebrow: "About the Studio",
    studioTitle: "More Than Tutoring",
    studioParagraphs: [
      "Literature Edit was created with the belief that education should cultivate independent thinkers rather than simply prepare students for examinations.",
      "Every lesson is designed to encourage close reading, thoughtful discussion, and purposeful writing. Beyond the classroom, the studio offers editorial support, university guidance, and research mentoring—helping learners become articulate readers, confident writers, and critical thinkers."
    ],

    // Section 3: What I Offer
    offerTitle: "What I Offer",
    offerItems: [
      {
        title: "Cambridge & IB English",
        description:
          "Personalised support for IGCSE, IB, AS & A Level English Language and Literature, focused on analytical reading, structured writing, and examination success.",
        link: "/programmes",
        image: "/Cambridge IB English.webp"
      },
      {
        title: "Editorial Services",
        description:
          "Developmental editing, academic editing, proofreading, content review, and manuscript feedback for students, researchers, and writers.",
        link: "/editorial-services",
        image: "/Editorial Services.webp"
      },
      {
        title: "University Applications",
        description:
          "Personal statements, college essays, interview preparation, Extended Essays, Internal Assessments, and academic writing guidance.",
        link: "/university-mentorship",
        image: "/University Application (1).webp"
      },
      {
        title: "Research & Academic Writing",
        description:
          "Research mentoring, essay planning, source evaluation, and academic writing support for school and university learners.",
        link: "/academic-writing",
        image: "/Research.png from Squoosh.webp"
      }
    ],

    // Section 4: My Approach
    myApproachTitle: "My Approach",
    myApproachItems: [
      {
        title: "Personalised",
        description:
          "Every learner brings a different perspective, pace, and goal. Lessons are designed around individual strengths while building lasting confidence.",
        image: "/personalised-mentorship.webp"
      },
      {
        title: "Rigorous",
        description:
          "Academic excellence is achieved through consistency, careful feedback, and meaningful engagement—not memorisation.",
        image: "/academic-excellence.webp"
      },
      {
        title: "Thoughtful",
        description:
          "Students are encouraged to question, analyse, interpret, and communicate ideas with clarity.",
        image: "/critikal-thinking.webp"
      },
      {
        title: "Beyond the Classroom",
        description:
          "The aim isn't simply better grades—it's developing readers and writers who continue learning long after the examination ends.",
        image: "/editorial-precision.webp"
      }
    ],

    // Section 5: Why Literature Edit?
    whySub: "Because language shapes the way we understand the world.",
    whyBody:
      "Here, literature is explored not only as a subject, but as a way of thinking. Every lesson, editorial project, and mentoring session is guided by patience, precision, and an enduring appreciation for ideas.",

    // Section 6: From the Literary Desk
    deskTitle: "From the Literary Desk",
    deskIntro:
      "A space for essays, reflections, reading recommendations, and conversations about literature, language, and culture.",
    deskCards: [
      {
        label: "ESSAYS",
        title: "Thoughtful Explorations",
        excerpt:
          "Thoughtful explorations of literary works, contemporary issues, and the craft of writing.",
        image: "/desk-essay.png",
        link: "/journal"
      },
      {
        label: "READING LISTS",
        title: "Curated Recommendations",
        excerpt:
          "Curated recommendations for readers at every stage—from classics to contemporary voices.",
        image: "/desk-books.png",
        link: "/resources"
      },
      {
        label: "STUDIO NOTES",
        title: "Teaching & Research Reflections",
        excerpt:
          "Observations from teaching, editing, and research, alongside reflections on books and learning.",
        image: "/desk-studio.png",
        link: "/journal"
      }
    ],

    // Section 7: A Few Words from Students
    testimonialsTitle: "A Few Words from Students",
    testimonials: [
      {
        quote:
          "Asma made literature feel less like an examination subject and more like something worth returning to.",
        author: "Student"
      }
    ],

    // Final CTA
    ctaTitle: "Ready to Begin?",
    ctaText:
      "Whether you're preparing for examinations, refining your writing, or seeking long-term academic mentorship, I'd be delighted to work with you.",

    // Footer
    footerTagline: "A Literary Studio for Readers, Writers & Thinkers.",
    footerSubtagline: "IGCSE • IB • AS & A Level • University Mentorship • Editorial Services"
  },
  {
    slug: "about",
    label: "About",
    eyebrow: "Meet Asma Khan",
    title: "Meet Asma Khan",
    intro:
      "Literature Edit was founded by Asma Khan, an English Language and Literature educator, editor, and researcher with a passion for thoughtful learning and meaningful writing.",
    image: "/asma-khan.png",
    imageAlt: "Asma Khan - Founder of Literature Edit",
    highlights: [
      {
        eyebrow: "Founder-Led",
        title: "Mentorship with an editor's eye",
        description:
          "Every class, edit, and consultation is shaped by close attention to language, structure, and intellectual growth.",
      },
      {
        eyebrow: "Thoughtful Pace",
        title: "Depth over shortcuts",
        description:
          "Students learn to build arguments, notice nuance, and write with a voice that can stand on its own.",
      },
      {
        eyebrow: "Literary Culture",
        title: "Reading as a practice",
        description:
          "The studio treats literature as a living conversation, not a checklist of techniques.",
      },
    ],
    closingTitle: "For readers, writers, learners.",
    closingText:
      "The work is rigorous, warm, and precise: the kind of guidance that helps ideas become clearer without flattening their originality.",

    // Section 1: Meet the Founder
    founderName: "Asma Khan",
    founderTitle: "Meet Asma Khan",
    founderSub: "Founder & Lead Mentor",
    founderBio: [
      "Literature Edit was founded by Asma Khan, an English Language and Literature educator, editor, and researcher with a passion for thoughtful learning and meaningful writing.",
      "With experience spanning international curricula, academic mentoring, publishing, and editorial work, she has worked with students, researchers, and writers across different stages of their academic and creative journeys. Her teaching combines close reading, critical inquiry, and structured writing to help learners develop confidence, clarity, and intellectual independence.",
      "What began as a commitment to helping students move beyond memorisation has grown into a literary studio dedicated to nurturing readers, writers, and thinkers."
    ],
    founderImage: "/asma-khan.png",

    // Section 2: The Story Behind Literature Edit
    storyEyebrow: "The Story Behind Literature Edit",
    storyTitle: "Why Literature Edit?",
    storyParagraphs: [
      "Literature Edit was created from a simple belief: that literature is more than an academic subject—it is a way of understanding people, ideas, and the world around us.",
      "In a learning environment often focused on examinations and model answers, Literature Edit offers a different approach. Here, students are encouraged to question, analyse, interpret, and write with originality. Every lesson is designed to cultivate curiosity, strengthen communication, and inspire a lifelong engagement with language and literature.",
      "As the studio evolved, it expanded beyond teaching to include editorial services, academic research support, and writing mentorship, bringing together education and publishing under one roof."
    ],

    // Section 3: What Makes Us Different
    approachEyebrow: "What Makes Us Different",
    approachTitle: "Our Approach",
    approachIntro: "Every learner arrives with different strengths, challenges, and ambitions. Our teaching is designed around the individual rather than a fixed curriculum.",
    approachPoints: [
      "Close reading of literary and non-literary texts",
      "Guided discussions that develop analytical thinking",
      "Personalised writing workshops with detailed feedback",
      "Research-based learning beyond examination requirements",
      "Structured preparation for international curricula and university writing"
    ],
    approachOutro: "Our goal extends beyond examination success. We aim to help students become confident readers, articulate writers, and independent thinkers.",

    // Section 4: Who We Work With
    audienceEyebrow: "Who We Work With",
    audienceTitle: "Learners We Support",
    audienceCards: [
      {
        title: "School Students",
        subtitle: "IGCSE • IB • AS & A Level • ICSE • CBSE",
        description: "Structured preparation and textual analysis across international curricula."
      },
      {
        title: "University Students",
        subtitle: "Academic Writing & Research",
        description: "Academic writing, dissertations, literary research, presentations."
      },
      {
        title: "Researchers",
        subtitle: "Publication & Scholarly Support",
        description: "Editing, publication support, literature reviews, scholarly writing."
      },
      {
        title: "Writers",
        subtitle: "Editorial & Manuscript Review",
        description: "Developmental editing, proofreading, manuscript feedback."
      }
    ],

    // Section 5: Beyond Teaching
    beyondEyebrow: "Beyond Teaching",
    beyondTitle: "More Than a Classroom",
    beyondParagraphs: [
      "Literature Edit combines academic teaching with professional editorial experience.",
      "Alongside our educational programmes, we support writers, researchers, and institutions through editorial services including manuscript editing, academic proofreading, content development, and research guidance.",
      "This integration of teaching and publishing allows students to learn from the perspective of both an educator and an editor—understanding not only how great writing is analysed, but how it is refined and brought to life.",
      "Whether you're preparing for international examinations, writing your first dissertation, editing a manuscript, or simply hoping to become a stronger reader and writer, Literature Edit is a place where thoughtful learning is valued above hurried achievement.",
      "We invite you to join a community built on curiosity, precision, and a genuine love for language."
    ],

    // Quote
    quote: "The purpose of literature is not merely to teach us what to think, but to help us discover how to think."
  },
  {
    slug: "programmes",
    label: "Programmes",
    eyebrow: "Learning Pathways",
    title: "Structured programmes for English, literature, and academic confidence.",
    intro:
      "From IGCSE and IB English to application essays and research writing, each programme is built around close reading, clear thinking, and expressive control.",
    image: "/hero-books.png",
    imageAlt: "Open books and writing materials on a wooden table",
    highlights: [
      {
        eyebrow: "School English",
        title: "IGCSE, Cambridge, and IB support",
        description:
          "Textual analysis, essay structure, unseen practice, oral preparation, and exam confidence.",
      },
      {
        eyebrow: "University Readiness",
        title: "Applications with real voice",
        description:
          "Personal statements, academic essays, interviews, and portfolio thinking with strategic editorial guidance.",
      },
      {
        eyebrow: "Ongoing Mentorship",
        title: "Weekly or intensive formats",
        description:
          "Choose a rhythm that fits the learner, from long-form development to focused revision sprints.",
      },
    ],
    closingTitle: "A programme should feel alive.",
    closingText:
      "The goal is not only higher marks. It is a better relationship with language, ideas, and the confidence to participate in serious conversation.",
  },
  {
    slug: "editorial-services",
    label: "Editorial Services",
    eyebrow: "For Writers",
    title: "Editorial support that respects the mind behind the manuscript.",
    intro:
      "Developmental editing, line editing, proofreading, and content review for writers, publishers, academics, and organisations.",
    image: "/desk-studio.png",
    imageAlt: "Editorial studio desk with notes, books, and writing tools",
    highlights: [
      {
        eyebrow: "Development",
        title: "Shape the architecture",
        description:
          "Clarify structure, argument, pacing, audience, and the central promise of the work.",
      },
      {
        eyebrow: "Language",
        title: "Refine sentence-level craft",
        description:
          "Improve flow, rhythm, precision, grammar, and consistency without erasing the author's voice.",
      },
      {
        eyebrow: "Review",
        title: "A readerly diagnostic",
        description:
          "Receive a clear editorial note on strengths, risks, revisions, and next steps.",
      },
    ],
    closingTitle: "Good editing protects originality.",
    closingText:
      "The best editorial work does not make everything sound the same. It reveals what the work is trying to become.",
  },
  {
    slug: "resources",
    label: "Resources",
    eyebrow: "Library",
    title: "Practical tools for sharper reading and stronger writing.",
    intro:
      "A growing collection of reading lists, essay frameworks, revision prompts, application notes, and classroom-friendly guides.",
    image: "/desk-books.png",
    imageAlt: "Books and reading notes arranged on a literary desk",
    highlights: [
      {
        eyebrow: "Reading",
        title: "Lists with purpose",
        description:
          "Curated books and extracts grouped by theme, skill, level, and literary tradition.",
      },
      {
        eyebrow: "Writing",
        title: "Frameworks that do not flatten",
        description:
          "Guides for building arguments, planning essays, annotating texts, and revising drafts.",
      },
      {
        eyebrow: "Applications",
        title: "Personal statement prompts",
        description:
          "Exercises that help students move from generic achievements to specific intellectual identity.",
      },
    ],
    closingTitle: "Resources should invite practice.",
    closingText:
      "These materials are designed to be used, marked up, returned to, and made personal.",
  },
  {
    slug: "journal",
    label: "Journal",
    eyebrow: "From the Desk",
    title: "Essays, notes, and reading reflections from the studio.",
    intro:
      "The journal gathers short essays on literature, teaching, writing, applications, and the habits that make intellectual life richer.",
    image: "/desk-essay.png",
    imageAlt: "Essay notes and open books on a writing desk",
    highlights: [
      {
        eyebrow: "Essay",
        title: "Why we still read literature",
        description:
          "A note on why stories remain one of the deepest ways we learn attention.",
      },
      {
        eyebrow: "Reading List",
        title: "Books that stay with you",
        description:
          "A considered set of books for students, teachers, and returning readers.",
      },
      {
        eyebrow: "Studio Note",
        title: "On writing with honesty",
        description:
          "How voice, vulnerability, and clarity meet on the page.",
      },
    ],
    closingTitle: "A journal is a thinking room.",
    closingText:
      "Expect reflections that are practical enough for students and expansive enough for readers who simply love language.",
  },
  {
    slug: "contact",
    label: "Contact",
    eyebrow: "Start a Conversation",
    title: "Tell us what you are reading, writing, or preparing for.",
    intro:
      "Reach out for programme enquiries, editorial projects, university application support, or a focused consultation.",
    image: "/vintage-studio.png",
    imageAlt: "Warm writing studio prepared for a consultation",
    highlights: [
      {
        eyebrow: "Email",
        title: "asmakhan7783@gmail.com",
        description:
          "Share the project, deadline, learner level, or text you would like to work on.",
      },
      {
        eyebrow: "Location",
        title: "Mumbai, India",
        description:
          "Remote sessions and editorial work are available for students and writers elsewhere.",
      },
      {
        eyebrow: "Consultation",
        title: "A clear first step",
        description:
          "Initial conversations help match the right format, timeline, and depth of support.",
      },
    ],
    closingTitle: "Begin with the question in front of you.",
    closingText:
      "Whether it is a difficult text, a draft that needs direction, or an application that has to sound human, the studio can help you find the next sentence.",
  },
  {
    slug: "igcse-english",
    label: "IGCSE English",
    eyebrow: "Programme",
    title: "IGCSE English support with close reading at the centre.",
    intro:
      "Focused guidance for language analysis, literature essays, unseen texts, coursework confidence, and exam preparation.",
    image: "/hero-books.png",
    imageAlt: "Open literature books prepared for English study",
    highlights: [
      {
        eyebrow: "Skills",
        title: "Analysis that earns marks",
        description:
          "Students learn how to move from observation to interpretation with specific textual evidence.",
      },
      {
        eyebrow: "Writing",
        title: "Clear essay control",
        description:
          "Planning, paragraphing, transitions, thesis development, and revision routines.",
      },
      {
        eyebrow: "Practice",
        title: "Exam-ready confidence",
        description:
          "Timed work, feedback cycles, past-paper strategy, and calmer performance under pressure.",
      },
    ],
    closingTitle: "Preparation can still feel literary.",
    closingText:
      "The programme balances examination precision with a genuine love of reading and interpretation.",
  },
  {
    slug: "ib-english",
    label: "IB English",
    eyebrow: "Programme",
    title: "IB English mentorship for nuanced argument and confident assessment.",
    intro:
      "Support for Language and Literature, Literature, individual oral work, HL essays, Paper 1, Paper 2, and portfolio thinking.",
    image: "/desk-books.png",
    imageAlt: "Books and annotations arranged for literature study",
    highlights: [
      {
        eyebrow: "Analysis",
        title: "Global issues and textual detail",
        description:
          "Students connect close reading to concepts, contexts, forms, and larger conversations.",
      },
      {
        eyebrow: "Assessment",
        title: "Stronger HL and oral work",
        description:
          "Guidance on topic choice, evidence, structure, delivery, and reflection.",
      },
      {
        eyebrow: "Writing",
        title: "A voice with discipline",
        description:
          "Academic style, interpretive risk, and precise argument built through feedback.",
      },
    ],
    closingTitle: "IB English rewards attention.",
    closingText:
      "This work helps students become more agile readers and more persuasive writers.",
  },
  {
    slug: "literature-in-english",
    label: "Literature in English",
    eyebrow: "Programme",
    title: "Literature study that makes texts vivid, exact, and discussable.",
    intro:
      "Mentorship for poetry, drama, prose, comparative work, literary movements, and interpretive essays.",
    image: "/desk-essay.png",
    imageAlt: "Literature notes beside open books",
    highlights: [
      {
        eyebrow: "Texts",
        title: "Read beyond plot",
        description:
          "Form, imagery, voice, rhythm, genre, and context become usable tools for interpretation.",
      },
      {
        eyebrow: "Conversation",
        title: "Think aloud with confidence",
        description:
          "Discussion-led sessions help students test ideas before committing them to the page.",
      },
      {
        eyebrow: "Essays",
        title: "Arguments with texture",
        description:
          "Students build essays that are structured, specific, and alive to ambiguity.",
      },
    ],
    closingTitle: "Literature asks for patience.",
    closingText:
      "With the right guidance, that patience becomes one of a student's strongest academic habits.",
  },
  {
    slug: "academic-writing",
    label: "Academic Writing",
    eyebrow: "Programme",
    title: "Academic writing support for essays, research, and clearer thought.",
    intro:
      "A practical studio for planning, drafting, revising, citing, and sharpening academic prose across school and university contexts.",
    image: "/vintage-studio.png",
    imageAlt: "Writing desk with books and research materials",
    highlights: [
      {
        eyebrow: "Research",
        title: "From topic to question",
        description:
          "Students learn to narrow subjects, frame research questions, and organise evidence.",
      },
      {
        eyebrow: "Structure",
        title: "Make the argument visible",
        description:
          "Thesis, sequence, paragraph logic, transitions, and revision plans become concrete.",
      },
      {
        eyebrow: "Style",
        title: "Precise, readable prose",
        description:
          "Sentence clarity, citation habits, tone, and flow are refined through feedback.",
      },
    ],
    closingTitle: "Writing is thinking made legible.",
    closingText:
      "The programme helps students build a repeatable process, not just rescue a single deadline.",
  },
  {
    slug: "university-mentorship",
    label: "University Mentorship",
    eyebrow: "Applications",
    title: "University mentorship for applications with intellectual identity.",
    intro:
      "Strategic and editorial support for personal statements, essays, interviews, reading plans, and application narratives.",
    image: "/hero-books.png",
    imageAlt: "Books and notes arranged for university application preparation",
    highlights: [
      {
        eyebrow: "Narrative",
        title: "Find the real through-line",
        description:
          "Move beyond achievements into curiosity, choices, commitments, and academic direction.",
      },
      {
        eyebrow: "Drafting",
        title: "Specific, polished essays",
        description:
          "Shape structure, voice, evidence, and revision across multiple application pieces.",
      },
      {
        eyebrow: "Interview",
        title: "Speak with clarity",
        description:
          "Practice thoughtful answers, subject discussion, and grounded confidence.",
      },
    ],
    closingTitle: "Applications should sound like a mind at work.",
    closingText:
      "The strongest essays are not merely impressive. They are specific, honest, and intellectually alive.",
  },
  {
    slug: "privacy-policy",
    label: "Privacy Policy",
    eyebrow: "Policy",
    title: "Privacy Policy",
    intro:
      "Literature Edit treats enquiries, student information, manuscripts, drafts, and correspondence with care and discretion.",
    image: "/desk-studio.png",
    imageAlt: "Private editorial notes on a studio desk",
    highlights: [
      {
        eyebrow: "Information",
        title: "What may be collected",
        description:
          "Contact details, learning needs, project information, deadlines, and documents shared voluntarily for consultation or work.",
      },
      {
        eyebrow: "Use",
        title: "Why it is used",
        description:
          "Information is used to respond to enquiries, plan sessions, provide editorial support, and maintain service records.",
      },
      {
        eyebrow: "Care",
        title: "How it is handled",
        description:
          "Private materials are not sold or shared for unrelated marketing purposes.",
      },
    ],
    closingTitle: "A simple promise of discretion.",
    closingText:
      "For specific privacy questions, contact hello@literatureedit.com before sharing sensitive documents.",
  },
  {
    slug: "terms-of-service",
    label: "Terms of Service",
    eyebrow: "Policy",
    title: "Terms of Service",
    intro:
      "These terms outline the spirit of working with Literature Edit: clear expectations, respectful collaboration, and responsible use of guidance.",
    image: "/desk-essay.png",
    imageAlt: "Terms and writing notes arranged on a desk",
    highlights: [
      {
        eyebrow: "Scope",
        title: "Educational and editorial support",
        description:
          "Services include teaching, mentoring, editing, review, and consultation as agreed for each project or learner.",
      },
      {
        eyebrow: "Responsibility",
        title: "Original work remains yours",
        description:
          "Students and writers are responsible for final submissions, academic integrity, and institutional requirements.",
      },
      {
        eyebrow: "Scheduling",
        title: "Clear communication matters",
        description:
          "Timelines, fees, cancellations, and deliverables should be confirmed before work begins.",
      },
    ],
    closingTitle: "The work is collaborative.",
    closingText:
      "These terms are intended as a clear foundation for careful teaching and editorial practice.",
  },
];

export const pageMap = new Map(pages.map((page) => [page.slug, page]));
