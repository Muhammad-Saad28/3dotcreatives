"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePageHero from "@/components/services/ServicePageHero";
import ServiceCards from "@/components/services/ServiceCards";
import ProcessSteps from "@/components/services/ProcessSteps";
import EditorialSection from "@/components/services/EditorialSection";
import RelatedServices from "@/components/services/RelatedServices";
import ServiceCTA from "@/components/services/ServiceCTA";
import RevealSection from "@/components/ui/RevealSection";

const services = [
  "Product Packaging",
  "Custom Boxes",
  "Shopping Bags",
  "Labels & Stickers",
  "Business Cards",
  "Brochures",
  "Flyers",
  "Menus",
  "Product Inserts",
  "Promotional Materials",
  "Custom Printed Assets",
];

const process = [
  {
    step: "01",
    title: "Concept",
    description:
      "We understand your product, brand identity, audience, and packaging requirements.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Our designs balance aesthetics, functionality, and brand consistency.",
  },
  {
    step: "03",
    title: "Prepare",
    description:
      "Artwork is carefully prepared according to the required printing specifications.",
  },
  {
    step: "04",
    title: "Produce",
    description:
      "The final designs are brought to life through professional printing and finishing.",
  },
];

const relatedServices = [
  { name: "Content Creation", href: "/services/content-creation" },
  { name: "Product Shoot", href: "/services/product-shoot" },
  { name: "Web Development", href: "/services/web-development" },
];

export default function PrintingPackagingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 bg-[#F4EBDD]">
        <RevealSection>
          <div className="reveal-item">
            <Link
              href="/"
              className="inline-block mb-8 px-4 py-2 text-olive hover:text-rust-gold transition-all duration-300 text-sm font-mono tracking-widest uppercase hover:bg-olive/5 rounded-full"
            >
              ← Back to Home
            </Link>
          </div>
        </RevealSection>

        <ServicePageHero
          label="Printing & Packaging"
          title="Turn Your Brand Into Something People Can Hold"
          description="A brand doesn't only exist on a screen. We create printed materials and packaging that bring your visual identity into the physical world—from the first impression of a package to the smallest detail of your printed materials."
        />

        {/* Divider */}
        <div className="px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <RevealSection>
              <div className="reveal-item w-12 h-px bg-gradient-to-r from-olive/40 to-transparent" />
            </RevealSection>
          </div>
        </div>

        <ServiceCards
          title="Physical materials that carry your brand with purpose"
          subtitle="What We Create"
          items={services}
        />

        <ProcessSteps
          title="From concept to the final printed piece"
          steps={process}
        />

        <EditorialSection
          label="Built Around Your Brand"
          title="From minimal and sophisticated to bold and expressive, your packaging should feel like an extension of your brand. The goal: create something people don't just receive — they remember."
          highlight="they remember."
        />

        <RelatedServices services={relatedServices} />

        <ServiceCTA buttonText="Let's Make Your Brand Tangible" />
      </main>
      <Footer />
    </>
  );
}
