import { NavBar } from "@/components/NavBar";
import { SectionWhyChooseUs } from "@/components/SectionWhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2f4f7] selection:bg-orange-100 selection:text-orange-900 font-sans">
      <NavBar />
      <SectionWhyChooseUs />
    </main>
  );
}
