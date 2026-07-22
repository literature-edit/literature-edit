import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StudioSection from "../components/StudioSection";
import FeaturedProgrammes from "../components/FeaturedProgrammes";
import WhyLiteratureEdit from "../components/WhyLiteratureEdit";
import FromDesk from "../components/FromDesk";
import TestimonialsSection from "../components/TestimonialsSection";
import QuoteSection from "../components/QuoteSection";
import Footer from "../components/Footer";
import { getPageData } from "../lib/db-pages";

export default async function Home() {
  const page = await getPageData("home");

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-grow">
        <Hero
          title={page?.title}
          eyebrow={page?.eyebrow}
          intro={page?.intro}
          image={page?.image}
          imageAlt={page?.imageAlt}
        />
        <StudioSection
          title={page?.studioTitle}
          eyebrow={page?.studioEyebrow}
          paragraphs={page?.studioParagraphs}
        />
        <FeaturedProgrammes
          title={page?.offerTitle}
          items={page?.offerItems}
        />
        <WhyLiteratureEdit
          title={page?.myApproachTitle}
          items={page?.myApproachItems}
          whySub={page?.whySub}
          whyBody={page?.whyBody}
        />
        <FromDesk
          title={page?.deskTitle}
          intro={page?.deskIntro}
          cards={page?.deskCards}
        />
        <TestimonialsSection
          title={page?.testimonialsTitle}
          testimonials={page?.testimonials}
        />
        <QuoteSection
          ctaTitle={page?.ctaTitle}
          ctaText={page?.ctaText}
        />
      </main>

      <Footer />
    </div>
  );
}
