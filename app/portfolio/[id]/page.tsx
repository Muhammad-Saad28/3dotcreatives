import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealSection from "@/components/ui/RevealSection";
import ProjectGallerySlider from "@/components/portfolio/ProjectGallerySlider";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: item.id,
  }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = portfolioItems.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const allImages = project.gallery ? [...project.gallery] : [];
  if (!allImages.includes(project.image)) {
    allImages.unshift(project.image);
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#FDF6E3]">
        
        {/* Back Link */}
        <div className="container-shell pt-32 pb-8">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-dark-olive/60 hover:text-dark-olive text-sm font-bold uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <section className="px-6 lg:px-8 mb-16 lg:mb-24">
          <div className="container-shell">
            <RevealSection>
              <div className="max-w-4xl mx-auto flex flex-col justify-center mb-24">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rust-gold mb-4">
                  {project.category} · {project.year}
                </p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-dark-olive leading-[1.05] tracking-tight mb-8">
                  {project.title}
                </h1>
                
                <div className="prose prose-lg prose-olive text-dark-olive/70 leading-relaxed max-w-none mb-10 text-justify">
                  <h2 className="font-display text-2xl font-bold text-dark-olive mb-4 text-left">
                    About The Project
                  </h2>
                  <p>{project.fullDescription || project.description}</p>
                </div>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-12">
                    <h3 className="font-display text-lg font-bold text-dark-olive mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}                            className="px-4 py-2 bg-dark-olive/5 border border-dark-olive/10 text-dark-olive text-xs font-bold tracking-wider rounded-full hover:bg-dark-olive hover:text-cream hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.link && (
                  <div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-3 px-8 py-4 bg-dark-olive text-cream text-xs font-bold uppercase tracking-widest hover:bg-olive transition-all duration-300 rounded-full w-fit hover:scale-105 active:scale-95 group"
                    >
                      Visit Live Site
                      <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </RevealSection>

            {/* Image Gallery */}
            <RevealSection>
              <div className="mb-8 text-center">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark-olive">
                  Project Gallery
                </h2>
              </div>
              <ProjectGallerySlider images={allImages} title={project.title} />
            </RevealSection>
          </div>
        </section>

        {/* CTA */}
        <RevealSection className="py-24 md:py-32 px-6 lg:px-8 bg-dark-olive mt-24">
          <div className="container-shell text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 tracking-tight">
              Ready to start your project?
            </h2>
            <p className="text-cream/60 mb-10 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Let&apos;s build something extraordinary together using the latest technologies.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-cream text-dark-olive text-xs tracking-[0.18em] uppercase font-bold rounded-full transition-all duration-300 hover:bg-olive hover:text-cream hover:scale-105"
            >
              Start A Project
            </Link>
          </div>
        </RevealSection>

      </main>
      <Footer />
    </>
  );
}
