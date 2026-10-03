import { Metadata } from "next";
import { createCanonical } from "@/lib/seo";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Content Creation Agency in Lahore",
  description: "Compelling content creation, video production, and photography in Lahore.",
  alternates: {
    canonical: createCanonical("/services/content-creation"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Content Creation"
        description="Compelling content creation, video production, and photography in Lahore."
        slug="content-creation"
      />
      {children}
    </>
  );
}
