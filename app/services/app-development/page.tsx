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
  "Android Applications",
  "iOS Applications",
  "Cross-platform Applications",
  "Business Applications",
  "E-commerce Apps",
  "Customer Portals",
  "Booking Applications",
  "Dashboard & Admin Systems",
  "API Integrations",
  "Authentication Systems",
];

const process = [
  {
    step: "01",
    title: "Define",
    description:
      "We turn your idea into clear features, user flows, and technical requirements.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We create intuitive interfaces designed around how people actually use your product.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Our team builds the application with scalable architecture and modern technologies.",
  },
  {
    step: "04",
    title: "Test",
    description:
      "We test functionality, responsiveness, usability, and performance.",
  },
  {
    step: "05",
    title: "Launch & Improve",
    description:
      "After launch, we use feedback and data to identify opportunities for continued improvement.",
  },
];

const relatedServices = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Content Creation", href: "/services/content-creation" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];

export default function AppDevelopmentPage() {
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
          label="App Development"
          title="Build Products People Love to Use"
          description="We design and develop mobile applications that combine intuitive experiences with reliable technology. Whether you're launching a new product or transforming an existing idea, we help turn concepts into functional digital experiences."
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
          title="Mobile experiences engineered for real-world use"
          subtitle="What We Build"
          items={services}
        />

        <ProcessSteps
          title="From idea to app, every step is intentional"
          steps={process}
          columns={5}
        />

        <EditorialSection
          label="From Idea to App"
          title="A successful application isn't just about code. It's about creating an experience that solves a real problem and makes the solution easy to use."
        />

        <RelatedServices services={relatedServices} />

        <ServiceCTA buttonText="Turn Your Idea Into an App" />
      </main>
      <Footer />
    </>
  );
}
