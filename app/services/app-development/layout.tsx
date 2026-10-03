import { Metadata } from "next";
import { createCanonical } from "@/lib/seo";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "App Development Company in Lahore",
  description: "Native and cross-platform mobile application development company in Lahore.",
  alternates: {
    canonical: createCanonical("/services/app-development"),
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceJsonLd
        name="App Development"
        description="Native and cross-platform mobile application development company in Lahore."
        slug="app-development"
      />
      {children}
    </>
  );
}
