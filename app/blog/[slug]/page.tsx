import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import { createCanonical } from "@/lib/seo";

interface BlogPostProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  // In a real implementation, you would fetch the post data here
  return {
    title: `Blog Post | 3 Dot Creatives`,
    description: "Insights from 3 Dot Creatives.",
    alternates: {
      canonical: createCanonical(`/blog/${params.slug}`),
    },
  };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  // Placeholder logic
  if (!params.slug) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-cream text-dark-olive min-h-screen">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-6 capitalize">
              {params.slug.replace(/-/g, ' ')}
            </h1>
            <p className="text-olive font-medium">Coming soon...</p>
          </header>
          <div className="prose prose-lg text-dark-olive/80">
            <p>This blog post is currently being written. Please check back later.</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
