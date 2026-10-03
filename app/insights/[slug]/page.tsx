import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createCanonical } from "@/lib/seo";
import { insights } from "@/data/insights";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealSection from "@/components/ui/RevealSection";

export function generateStaticParams() {
  return insights.map((i) => ({
    slug: i.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const insight = insights.find((i) => i.slug === resolvedParams.slug);
  
  if (!insight) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${insight.title} | 3 Dot Creatives Insights`,
    description: insight.description,
    alternates: {
      canonical: createCanonical(`/insights/${resolvedParams.slug}`),
    },
    openGraph: {
      type: "article",
      publishedTime: insight.date,
      authors: [insight.author],
    }
  };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const insight = insights.find((i) => i.slug === resolvedParams.slug);

  if (!insight) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#FDF6E3]">
        
        {/* Back Link */}
        <div className="container-shell pt-32 pb-8">
          <Link 
            href="/insights" 
            className="inline-flex items-center gap-2 text-dark-olive/60 hover:text-dark-olive text-sm font-bold uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>
        </div>

        <article className="px-6 lg:px-8 mb-24">
          <div className="container-shell">
            <RevealSection>
              <header className="max-w-3xl mx-auto mb-16 text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-rust-gold">
                    {insight.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-dark-olive/20" />
                  <span className="text-xs text-dark-olive/50 font-mono">
                    {new Date(insight.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-dark-olive leading-[1.1] tracking-tight mb-8">
                  {insight.title}
                </h1>
                <p className="text-xl text-dark-olive/60 leading-relaxed font-medium">
                  {insight.description}
                </p>
              </header>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="max-w-3xl mx-auto">
                {/* Article Content */}
                <div 
                  className="prose prose-lg prose-olive text-dark-olive/80 leading-relaxed max-w-none text-justify
                  prose-headings:font-display prose-headings:font-bold prose-headings:text-dark-olive prose-headings:mt-12 prose-headings:mb-6
                  prose-h2:text-3xl prose-h3:text-2xl
                  prose-a:text-rust-gold prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-dark-olive
                  prose-ul:list-disc prose-ul:pl-6 prose-li:my-2
                  mb-24"
                  dangerouslySetInnerHTML={{ __html: insight.content }}
                />

                {/* Author Block */}
                <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-dark-olive/10">
                  <div className="w-16 h-16 rounded-full bg-dark-olive/5 flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-olive">3D</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-dark-olive mb-1">{insight.author}</h3>
                    <p className="text-dark-olive/60 text-sm">Strategic Design & Engineering at 3 Dot Creatives</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}
