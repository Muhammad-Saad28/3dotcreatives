import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "3dotcreatives — Creative Digital Agency",
  description:
    "3dotcreatives creates digital experiences, content, applications, marketing and creative solutions for ambitious brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-dark-olive font-sans">
        {children}
      </body>
    </html>
  );
}
