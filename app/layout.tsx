import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Outfit } from "next/font/google";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://3dotcreatives.agency"),
  title: {
    default: "3 Dot Creatives | Creative Digital Agency in Lahore",
    template: "%s | 3 Dot Creatives",
  },
  description: "3 Dot Creatives is a creative digital agency in Lahore, Pakistan offering web development, app development, digital marketing, social media, content creation and creative solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://3dotcreatives.agency",
    siteName: "3 Dot Creatives",
    title: "3 Dot Creatives | Creative Digital Agency in Lahore",
    description: "3 Dot Creatives is a creative digital agency in Lahore, Pakistan offering web development, app development, digital marketing, social media, content creation and creative solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Dot Creatives | Creative Digital Agency in Lahore",
    description: "3 Dot Creatives is a creative digital agency in Lahore, Pakistan.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-dark-olive font-sans">
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
