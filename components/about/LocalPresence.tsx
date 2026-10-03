import RevealSection from "@/components/ui/RevealSection";
import Image from "next/image";

export default function LocalPresence() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-dark-olive text-cream overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-olive/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <RevealSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-cream/40" />
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-cream/70">
                Our Base
              </p>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Rooted in Lahore, <br />
              <span className="text-olive">Operating Globally.</span>
            </h2>
            
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed mb-8">
              While our digital products serve audiences worldwide, our creative heartbeat is located in Gulberg-III, Lahore. We combine global design standards with local market intelligence to build digital experiences that resonate across borders.
            </p>
            
            <div className="bg-cream/5 border border-cream/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-display text-xl font-bold text-cream mb-4">Visit Our Studio</h3>
              <address className="not-italic text-cream/70 space-y-2">
                <p>3 Dot Creatives</p>
                <p>Gulberg-III</p>
                <p>Lahore, 54000, Pakistan</p>
              </address>
              <div className="mt-6 pt-6 border-t border-cream/10 flex items-center gap-4">
                <a href="mailto:hello@3dotcreatives.agency" className="text-sm font-bold tracking-wider hover:text-olive transition-colors">
                  hello@3dotcreatives.agency
                </a>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={0.2}>
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden bg-cream/5 border border-cream/10">
              {/* Placeholder for an actual office photo or local Lahore architectural shot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-cream/30 text-sm font-bold tracking-widest uppercase">Office / Studio Image</p>
              </div>
            </div>
          </RevealSection>
          
        </div>
      </div>
    </section>
  );
}
