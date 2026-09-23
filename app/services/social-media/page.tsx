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
  "Social Media Strategy",
  "Content Planning",
  "Instagram Management",
  "Facebook Management",
  "Creative Posts",
  "Reels & Short-form Video",
  "Captions & Copywriting",
  "Content Calendars",
  "Community Engagement",
  "Performance Monitoring",
];

const process = [
  {
    step: "01",
    title: "Strategy",
    description:
      "We identify your audience, goals, positioning, and content opportunities.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We build a structured content calendar designed around your brand.",
  },
  {
    step: "03",
    title: "Create",
    description:
      "We produce scroll-stopping visuals, videos, captions, and campaigns.",
  },
  {
    step: "04",
    title: "Manage",
    description:
      "We keep your platforms active, consistent, and aligned with your strategy.",
  },
  {
    step: "05",
    title: "Optimize",
    description:
      "We monitor performance and continuously improve the content direction.",
  },
];

const relatedServices = [
  { name: "Content Creation", href: "/services/content-creation" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Product Shoot", href: "/services/product-shoot" },
];

export default function SocialMediaPage() {
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
          label="Social Media"
          title="Your Brand Deserves More Than Just a Feed"
          description="We build social media managment experiences that make brands recognizable, relevant, and consistent. From strategy and content to publishing and optimization, we help turn your social presence into a real brand asset."
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
          title="Every detail of your social presence, managed with care"
          subtitle="What We Handle"
          items={services}
        />

        <ProcessSteps
          title="Strategy first, then creativity"
          steps={process}
          columns={5}
        />

        <EditorialSection
          label="What We Focus On"
          title="Consistency. Creativity. Community. Growth. Because social media managment isn't simply about posting regularly. It's about building a recognizable presence that people want to follow."
          highlight="Consistency. Creativity. Community. Growth."
        />

        <RelatedServices services={relatedServices} />

        <ServiceCTA buttonText="Let's Build Your Social Presence" />
      </main>
      <Footer />
    </>
  );
}
