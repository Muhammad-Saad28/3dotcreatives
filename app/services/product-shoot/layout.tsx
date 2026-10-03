import { Metadata } from "next";
import { createCanonical } from "@/lib/seo";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Product Photography & Content",
  description: "Professional product photography and catalog management.",
  alternates: {
    canonical: createCanonical("/services/product-shoot"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Product Shoots & Management"
        description="Professional product photography and catalog management."
        slug="product-shoot"
      />
      {children}
    </>
  );
}
