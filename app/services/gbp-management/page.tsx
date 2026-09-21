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
  "Google Business Profile Optimization",
  "Business Information",
  "Categories & Services",
  "Business Descriptions",
  "Photos & Visual Updates",
  "Google Posts",
  "Review Management",
  "Local SEO Optimization",
  "Profile Monitoring",
  "Performance Insights",
];

const process = [
  {
    step: "01",
    title: "Optimize",
    description:
      "We review your profile and improve the information that matters most for local discovery.",
  },
  {
    step: "02",
    title: "Maintain",
    description:
      "Business information, services, photos, and updates are kept current.",
  },
  {
    step: "03",
    title: "Engage",
    description:
      "We help maintain an active presence through posts and customer interactions.",
  },
  {
    step: "04",
    title: "Monitor",
    description:
      "We track profile performance and identify opportunities for improvement.",
  },
];

const relatedServices = [
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Content Creation", href: "/services/content-creation" },
  { name: "Social Media", href: "/services/social-media" },
];

export default function GbpManagementPage() {
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
          label="GBP Management"
          title="Be Found Where Your Customers Are Looking"
          description="Your Google Business Profile is often the first impression customers get when searching for your business. We help keep your profile accurate, active, optimized, and ready to turn local searches into real customers."
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
          title="Every detail of your local search presence"
          subtitle="What We Manage"
          items={services}
        />

        <ProcessSteps
          title="Keep your profile working as hard as you do"
          steps={process}
        />

        <EditorialSection
          label="Why GBP Matters"
          title="When someone searches for a business near them, your Google profile can become the bridge between discovery and a visit. We make sure your business is represented accurately and professionally when that moment happens."
          highlight="discovery and a visit."
        />

        <RelatedServices services={relatedServices} />

        <ServiceCTA buttonText="Get Found Locally" />
      </main>
      <Footer />
    </>
  );
}
