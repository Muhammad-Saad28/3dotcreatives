import { Metadata } from "next";
import { createCanonical } from "@/lib/seo";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Printing & Packaging Design",
  description: "Premium print materials and packaging design for your brand.",
  alternates: {
    canonical: createCanonical("/services/printing-packaging"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Printing & Packaging"
        description="Premium print materials and packaging design for your brand."
        slug="printing-packaging"
      />
      {children}
    </>
  );
}
