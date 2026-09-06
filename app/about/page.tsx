import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import Philosophy from "@/components/about/Philosophy";

export const metadata: Metadata = {
  title: "About — 3dotcreatives",
  description:
    "Learn about 3dotcreatives — a creative digital agency building immersive experiences for ambitious brands. IDEA. DESIGN. EXECUTION.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <div className="py-12 md:py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="w-12 h-px bg-olive/20" />
          </div>
        </div>
        <Philosophy />
      </main>
      <Footer />
    </>
  );
}
