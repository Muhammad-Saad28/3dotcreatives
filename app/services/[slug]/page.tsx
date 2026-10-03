import { notFound } from "next/navigation";
import { Metadata } from "next";
import { createCanonical } from "@/lib/seo";
import { services } from "@/data/services";
import { portfolioItems } from "@/data/portfolio";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePageHero from "@/components/services/ServicePageHero";
import ServiceCards from "@/components/services/ServiceCards";
import ProcessSteps from "@/components/services/ProcessSteps";
import EditorialSection from "@/components/services/EditorialSection";
import RelatedServices from "@/components/services/RelatedServices";
import ServiceCTA from "@/components/services/ServiceCTA";
import RevealSection from "@/components/ui/RevealSection";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

export function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} Agency in Lahore | 3 Dot Creatives`,
    description: service.introduction.substring(0, 160) + "...",
    alternates: {
      canonical: createCanonical(`/services/${resolvedParams.slug}`),
    },
  };
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Get related services (excluding current one)
  const relatedServices = services
    .filter(s => s.id !== service.id)
    .slice(0, 3)
    .map(s => ({ name: s.title, href: `/services/${s.slug}` }));

  // Get relevant portfolio projects for this service
  const relevantPortfolio = portfolioItems
    .filter(p => p.category.toLowerCase().includes(service.title.toLowerCase()) || service.title.toLowerCase().includes(p.category.toLowerCase()))
    .slice(0, 2);

  return (
    <>
      <ServiceJsonLd 
        name={service.title} 
        description={service.introduction} 
        slug={service.slug}
      />
      <Navbar />
      <main className="flex-1 pt-24 bg-[#F4EBDD]">
        
        {/* We use a visually hidden H1 for strict SEO, and the ServicePageHero for the visual H2 presentation. 
            However, we can just let ServicePageHero render the H1 properly to avoid hidden text. */}
        <div className="sr-only">
          <h1>{service.title} Services in Lahore</h1>
        </div>

        <ServicePageHero
          label={service.title}
          title={`${service.title} That Drives Results`}
          description={service.introduction}
        />

        {/* Divider */}
        <div className="px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <RevealSection>
              <div className="reveal-item w-12 h-px bg-gradient-to-r from-olive/40 to-transparent" />
            </RevealSection>
          </div>
        </div>

        <ServiceCards
          title="Everything your business needs, built with precision"
          subtitle="Our Capabilities"
          items={service.capabilities}
        />

        <ProcessSteps
          title="From concept to launch, every step is intentional"
          steps={service.process}
        />

        <EditorialSection
          label="Why It Matters"
          title={service.businessValue}
        />

        {relevantPortfolio.length > 0 && (
          <section className="py-20 px-6 lg:px-8 bg-dark-olive text-cream">
            <div className="container-shell">
              <RevealSection>
                <div className="flex items-center gap-4 mb-16">
                  <div className="h-px w-12 bg-cream/20" />
                  <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-cream/50">
                    Proven Results
                  </p>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">Relevant Work</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relevantPortfolio.map(project => (
                    <a key={project.id} href={`/portfolio/${project.id}`} className="group block">
                      <div className="aspect-[4/3] bg-dark-olive/50 rounded-2xl overflow-hidden mb-6 relative">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-olive transition-colors">{project.title}</h3>
                      <p className="text-cream/60">{project.description}</p>
                    </a>
                  ))}
                </div>
              </RevealSection>
            </div>
          </section>
        )}

        {service.faq && service.faq.length > 0 && (
          <ServiceFAQ faqs={service.faq} />
        )}

        <RelatedServices services={relatedServices} />

        <ServiceCTA buttonText="Let's Start Your Project" />
      </main>
      <Footer />
    </>
  );
}
