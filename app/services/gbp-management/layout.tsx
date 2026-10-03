import { Metadata } from "next";
import { createCanonical } from "@/lib/seo";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Google Business Profile Management",
  description: "Optimize your Google Business Profile to attract local customers in Lahore.",
  alternates: {
    canonical: createCanonical("/services/gbp-management"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="GBP Management"
        description="Optimize your Google Business Profile to attract local customers in Lahore."
        slug="gbp-management"
      />
      {children}
    </>
  );
}
