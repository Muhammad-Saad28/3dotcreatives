import { Metadata } from "next";
import { siteConfig, createCanonical } from "@/lib/seo";

import ClientHomeWrapper from "@/components/home/ClientHomeWrapper";
import HeroSection from "@/components/home/HeroSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import PortfolioPreviewSection from "@/components/home/PortfolioPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "3 Dot Creatives | Digital Agency in Lahore",
  description: "3 Dot Creatives is a premium digital agency in Lahore specializing in high-performance web development, mobile apps, digital marketing, and content creation.",
  alternates: {
    canonical: createCanonical(""),
  }
};

export default function Home() {
  return (
    <ClientHomeWrapper>
      {/* 
        This is a hidden semantic H1 for strict SEO. 
        The visual design in HeroSection remains intact without forcing an ugly visible H1 if it doesn't fit.
      */}
      <div className="sr-only">
        <h1>Creative Digital Agency in Lahore — Web Development & Marketing</h1>
      </div>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <AboutSection />
      <PortfolioPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </ClientHomeWrapper>
  );
}
