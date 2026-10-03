import { Metadata } from "next";
import { createCanonical } from "@/lib/seo";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Social Media Marketing in Lahore",
  description: "Strategic social media management that builds community and drives engagement.",
  alternates: {
    canonical: createCanonical("/services/social-media"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Social Media Management"
        description="Strategic social media management that builds community and drives engagement."
        slug="social-media"
      />
      {children}
    </>
  );
}
