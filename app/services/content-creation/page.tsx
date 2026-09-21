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
  "Social Media Content",
  "Brand Photography",
  "Product Photography",
  "Short-form Videos",
  "Reels & Social Videos",
  "Promotional Content",
  "Creative Campaigns",
  "Graphic Design",
  "Visual Storytelling",
  "Branded Content",
];

const process = [
  {
    step: "01",
    title: "Understand",
    description:
      "We learn your brand, audience, personality, and communication style.",
  },
  {
    step: "02",
    title: "Concept",
    description:
      "We turn ideas into creative concepts with a clear visual direction.",
  },
  {
    step: "03",
    title: "Create",
    description:
      "From photography and video to graphics and copy, we produce content built around your goals.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "You receive polished, platform-ready content that keeps your brand consistent.",
  },
];

const relatedServices = [
  { name: "Social Media", href: "/services/social-media" },
  { name: "Product Shoot", href: "/services/product-shoot" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];

export default function ContentCreationPage() {
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
          label="Content Creation"
          title="Content That Gives Your Brand Something to Say"
          description="Great content doesn't just fill a feed. It captures attention, communicates your identity, and gives people a reason to remember your brand. We create visual and written content designed around your brand and audience."
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
          title="Content crafted with purpose and personality"
          subtitle="What We Create"
          items={services}
        />

        <ProcessSteps
          title="From brief to final delivery, every step is intentional"
          steps={process}
        />

        <EditorialSection
          label="The Goal"
          title="Not more content. Better content. Every visual should have a purpose, whether that's building awareness, generating engagement, showcasing a product, or strengthening your brand identity."
          highlight="Better content."
        />

        <RelatedServices services={relatedServices} />

        <ServiceCTA buttonText="Create Something Worth Seeing" />
      </main>
      <Footer />
    </>
  );
}
