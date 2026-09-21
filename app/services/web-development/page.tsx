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
  "Custom Website Development",
  "Business & Corporate Websites",
  "Landing Pages",
  "E-commerce Websites",
  "Portfolio & Agency Websites",
  "Custom Web Applications",
  "REST API Integration",
  "Authentication & User Systems",
  "Admin Dashboards",
  "Website Optimization",
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals, and competitors before writing a single line of code.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We create a visual direction that represents your brand while keeping usability at the center.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Our developers transform the design into a responsive, high-performance website using modern technologies.",
  },
  {
    step: "04",
    title: "Refine",
    description:
      "We test, optimize, and polish every interaction across desktop, tablet, and mobile.",
  },
];

const relatedServices = [
  { name: "App Development", href: "/services/app-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Content Creation", href: "/services/content-creation" },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 bg-[#F4EBDD]">
        <ServicePageHero
          label="Web Development"
          title="Websites That Turn Ideas Into Experiences"
          description="We design and develop fast, responsive, and scalable websites that combine strong visual design with reliable technology. From business websites to custom web platforms, we build digital experiences that look exceptional and work seamlessly."
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
          title="Everything your website needs, built with precision"
          subtitle="What We Do"
          items={services}
        />

        <ProcessSteps
          title="From concept to launch, every step is intentional"
          steps={process}
        />

        <EditorialSection
          label="Why It Matters"
          title="Your website is often the first interaction someone has with your business. We make sure that interaction is memorable, intuitive, and built to convert."
        />

        <RelatedServices services={relatedServices} />

        <ServiceCTA buttonText="Let's Build Your Website" />
      </main>
      <Footer />
    </>
  );
}
