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
  "Product Photography",
  "E-commerce Photography",
  "Lifestyle Product Shoots",
  "Creative Product Photography",
  "Product Videos",
  "Social Media Product Content",
  "Campaign Photography",
  "Retouching & Post-production",
  "Product Styling",
  "Catalog Images",
];

const process = [
  {
    step: "01",
    title: "Concept",
    description:
      "We develop a visual direction based on your product and brand identity.",
  },
  {
    step: "02",
    title: "Setup",
    description:
      "Lighting, backgrounds, props, composition, and styling are carefully prepared.",
  },
  {
    step: "03",
    title: "Shoot",
    description:
      "We capture your products from the angles and perspectives that showcase them best.",
  },
  {
    step: "04",
    title: "Refine",
    description:
      "Professional editing and retouching bring the final images together.",
  },
];

const platforms = [
  "E-commerce",
  "Social Media",
  "Advertising",
  "Catalogs",
  "Websites",
  "Campaigns",
];

const relatedServices = [
  { name: "Content Creation", href: "/services/content-creation" },
  { name: "Social Media", href: "/services/social-media" },
  { name: "Printing & Packaging", href: "/services/printing-packaging" },
];

export default function ProductShootPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
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
          label="Product Shoot"
          title="Make Your Product Impossible to Ignore"
          description="Your product deserves more than an ordinary photograph. We create professional product visuals that highlight details, communicate quality, and make your products look ready to be experienced."
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
          title="Every product tells a story. We make sure it's a compelling one."
          subtitle="What We Offer"
          items={services}
        />

        <ProcessSteps
          title="Careful preparation, precise execution"
          steps={process}
        />

        {/* Designed For - Animated platform tags */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <RevealSection>
              <p className="reveal-item section-label">Designed For</p>
              <div className="reveal-item flex flex-wrap gap-3 mt-6">
                {platforms.map((platform, index) => (
                  <span
                    key={platform}
                    className="pill-hover px-5 py-2.5 rounded-full bg-olive/5 border border-olive/10 text-dark-olive text-sm font-medium cursor-default"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        <EditorialSection
          label="Why It Matters"
          title="Customers can't physically experience your product through a screen. High-quality visuals bridge that gap by showing texture, detail, quality, and personality."
        />

        <RelatedServices services={relatedServices} />

        <ServiceCTA buttonText="Put Your Product in the Spotlight" />
      </main>
      <Footer />
    </>
  );
}
