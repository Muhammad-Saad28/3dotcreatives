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
  "Digital Marketing Strategy",
  "Search Engine Optimization",
  "Paid Advertising",
  "Social Media Advertising",
  "Google Ads",
  "Campaign Management",
  "Lead Generation",
  "Conversion Optimization",
  "Marketing Analytics",
  "Retargeting Campaigns",
];

const process = [
  {
    step: "01",
    title: "Research",
    description:
      "We study your audience, market, competitors, and current digital presence.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We create a marketing roadmap based on your business objectives.",
  },
  {
    step: "03",
    title: "Launch",
    description:
      "Campaigns and creative assets are developed and deployed across relevant channels.",
  },
  {
    step: "04",
    title: "Measure",
    description:
      "We track meaningful metrics to understand what is working.",
  },
  {
    step: "05",
    title: "Optimize",
    description:
      "We continuously refine campaigns based on performance and insights.",
  },
];

const relatedServices = [
  { name: "Social Media", href: "/services/social-media" },
  { name: "GBP Management", href: "/services/gbp-management" },
  { name: "Content Creation", href: "/services/content-creation" },
];

export default function DigitalMarketingPage() {
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
          label="Digital Marketing"
          title="Turn Attention Into Growth"
          description="Digital marketing connects your brand with the people actively looking for what you offer. We combine strategy, creative, content, and digital channels to help businesses reach the right audience and create measurable opportunities."
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
          title="Strategic marketing that drives real results"
          subtitle="What We Do"
          items={services}
        />

        <ProcessSteps
          title="Data-driven decisions, creative execution"
          steps={process}
          columns={5}
        />

        <EditorialSection
          label="The Difference"
          title="We don't believe in marketing for the sake of numbers. We focus on the right audience, the right message, and the right moment."
          highlight="the right audience, the right message, and the right moment."
        />

        <RelatedServices services={relatedServices} />

        <ServiceCTA buttonText="Let's Grow Your Brand" />
      </main>
      <Footer />
    </>
  );
}
