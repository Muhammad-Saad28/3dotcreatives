import { Metadata } from "next";
import { createCanonical } from "@/lib/seo";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Lahore",
  description: "Data-driven digital marketing strategies in Lahore that maximize ROI.",
  alternates: {
    canonical: createCanonical("/services/digital-marketing"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="Digital Marketing"
        description="Data-driven digital marketing strategies in Lahore that maximize ROI."
        slug="digital-marketing"
      />
      {children}
    </>
  );
}
