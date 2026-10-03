import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealSection from "@/components/ui/RevealSection";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights & Strategy | 3 Dot Creatives",
  description: "Expert insights on web development, digital marketing, and design strategy from Lahore's leading creative agency.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#FDF6E3] pt-32 pb-24 min-h-screen">
        <div className="container-shell">
          <RevealSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-olive/40" />
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-olive">
                Our Thinking
              </p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-dark-olive mb-6">
              Insights & Strategy
            </h1>
            <p className="text-dark-olive/70 text-lg md:text-xl max-w-2xl mb-20">
              Deep dives into technology, design, and digital marketing strategy to help ambitious brands navigate the digital landscape.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <RevealSection key={insight.id} delay={index * 0.1}>
                <Link href={`/insights/${insight.slug}`} className="group block bg-white rounded-3xl p-8 border border-dark-olive/10 hover:border-olive transition-colors h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-rust-gold">
                      {insight.category}
                    </span>
                    <span className="text-xs text-dark-olive/40 font-mono">
                      {new Date(insight.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-dark-olive mb-4 group-hover:text-olive transition-colors">
                    {insight.title}
                  </h2>
                  <p className="text-dark-olive/60 leading-relaxed text-sm mb-8 flex-1">
                    {insight.description}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-olive/10 flex items-center justify-center">
                      <span className="text-olive text-xs font-bold">3D</span>
                    </div>
                    <span className="text-sm font-bold text-dark-olive">3 Dot Creatives</span>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
