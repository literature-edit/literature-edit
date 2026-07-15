import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StudioSection from "../components/StudioSection";
import FeaturedProgrammes from "../components/FeaturedProgrammes";
import WhyLiteratureEdit from "../components/WhyLiteratureEdit";
import FromDesk from "../components/FromDesk";
import QuoteSection from "../components/QuoteSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <StudioSection />
        <FeaturedProgrammes />
        <WhyLiteratureEdit />
        <FromDesk />
        <QuoteSection />
      </main>

      <Footer />
    </div>
  );
}
