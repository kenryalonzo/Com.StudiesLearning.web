import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { SectionWhyChooseUs } from "@/components/SectionWhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900 font-sans">
      <NavBar />
      <Hero />
      <SectionWhyChooseUs />
    </main>
  );
}
