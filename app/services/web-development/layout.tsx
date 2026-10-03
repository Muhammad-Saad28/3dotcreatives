import { Metadata } from "next";
import { createCanonical } from "@/lib/seo";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Web Development Agency in Lahore",
  description: "Custom web development services in Lahore. We build fast, responsive, and visually stunning websites.",
  alternates: {
    canonical: createCanonical("/services/web-development"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Web Development"
        description="Custom web development services in Lahore. We build fast, responsive, and visually stunning websites."
        slug="web-development"
      />
      {children}
    </>
  );
}
