import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import { createCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Insights & Blog",
  description: "Read the latest insights on web development, digital marketing, and SEO from 3 Dot Creatives in Lahore.",
  alternates: {
    canonical: createCanonical("/blog"),
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-cream text-dark-olive min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <header className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-outfit font-bold mb-6">Insights & Articles</h1>
            <p className="text-xl text-dark-olive/70 max-w-2xl mx-auto">
              Our thoughts, strategies, and deep dives into the digital landscape.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for future blog posts */}
            <div className="p-8 border border-dark-olive/10 rounded-2xl bg-white/50">
              <p className="text-sm font-bold tracking-widest uppercase text-olive mb-4">Coming Soon</p>
              <h2 className="text-2xl font-bold font-outfit mb-4">New Content is on the way</h2>
              <p className="text-dark-olive/70">We are currently preparing some amazing insights. Stay tuned!</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
