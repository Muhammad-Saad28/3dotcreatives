import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesList from "@/components/services/ServicesList";

export const metadata: Metadata = {
  title: "Services — 3dotcreatives",
  description:
    "Web development, content creation, app development, digital marketing and more. 3dotcreatives delivers comprehensive creative solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="pt-20 pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] text-olive uppercase font-semibold mb-4">
              What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-olive leading-[1.05] tracking-tight">
              OUR SERVICES
            </h1>
            <p className="mt-6 text-base sm:text-lg text-dark-olive/60 max-w-2xl mx-auto leading-relaxed">
              Comprehensive creative solutions designed to elevate your brand
              and drive measurable results.
            </p>
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
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-dark-olive">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-beige/60 mb-10 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can help bring your vision to life.
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
