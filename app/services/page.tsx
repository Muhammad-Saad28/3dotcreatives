"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesList from "@/components/services/ServicesList";
import RevealSection from "@/components/ui/RevealSection";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 bg-[#FDF6E3]">
        {/* Hero */}
        <section className="pt-20 pb-16 px-6 lg:px-8">
          <div className="container-shell text-center">
            <RevealSection>
              <p className="section-label mb-4">
                What We Do
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-olive leading-[1.05] tracking-tight">
                Our Services
              </h1>
              <p className="mt-6 text-base sm:text-lg text-dark-olive/60 max-w-2xl mx-auto leading-relaxed">
                Comprehensive creative solutions designed to elevate your brand
                and drive measurable results.
              </p>
            </RevealSection>
          </div>
        </section>

        {/* Divider */}
        <div className="px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="w-12 h-px bg-olive/20 mx-auto md:mx-0" />
          </div>
        </div>

        {/* Services List */}
        <section className="py-12 md:py-20 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <ServicesList />
          </div>
        </section>

        {/* CTA */}
        <RevealSection className="py-24 md:py-32 px-6 lg:px-8 bg-dark-olive">
          <div className="container-shell text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-cream/60 mb-10 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-flex px-8 py-4 bg-cream text-dark-olive text-xs tracking-[0.18em] uppercase font-bold rounded-full transition-all duration-300 hover:bg-olive hover:text-cream hover:scale-105"
            >
              Start A Project
            </a>
          </div>
        </RevealSection>
      </main>
      <Footer />
    </>
  );
}
