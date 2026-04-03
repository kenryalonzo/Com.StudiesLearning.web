import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { SectionWhyChooseUs } from "@/components/SectionWhyChooseUs";
import { SectionSwitchModes } from "@/components/SectionSwitchModes";
import { SectionReview } from "@/components/SectionReview";
import { SectionCTA } from "@/components/SectionCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900 font-sans">
      <NavBar />
      <Hero />
      <SectionWhyChooseUs />
      <SectionSwitchModes />
      <SectionReview />
      <SectionCTA />
    </main>
  );
}
