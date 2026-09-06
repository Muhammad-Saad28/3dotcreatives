import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio — 3dotcreatives",
  description:
    "Explore our selected projects — branding, web development, app development, digital marketing and creative campaigns by 3dotcreatives.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="pt-20 pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] text-olive uppercase font-semibold mb-4">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-olive leading-[1.05] tracking-tight">
              PORTFOLIO
            </h1>
            <p className="mt-6 text-base sm:text-lg text-dark-olive/60 max-w-2xl mx-auto leading-relaxed">
              A curated selection of projects that showcase our approach to
              creative digital experiences.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="w-12 h-px bg-olive/20 mx-auto md:mx-0" />
          </div>
        </div>

        {/* Portfolio Grid */}
        <section className="py-12 md:py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <PortfolioGrid />
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-dark-olive">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6 tracking-tight">
              Like what you see?
            </h2>
            <p className="text-beige/60 mb-10 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Let&apos;s create something extraordinary together.
            </p>
            <a
              href="/contact"
              className="inline-flex px-8 py-4 bg-cream text-dark-olive text-xs tracking-[0.18em] uppercase font-bold rounded-full transition-all duration-300 hover:bg-rust-gold hover:text-cream hover:scale-105"
            >
              START A PROJECT
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
