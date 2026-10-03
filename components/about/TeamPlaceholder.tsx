import RevealSection from "@/components/ui/RevealSection";

export default function TeamPlaceholder() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-[#F4EBDD]">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-olive/40" />
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-olive">
                Leadership
              </p>
              <div className="h-px w-12 bg-olive/40" />
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-olive mb-6">
              The Minds Behind the Work
            </h2>
            <p className="text-dark-olive/70 text-lg md:text-xl max-w-2xl">
              We are a collective of strategists, designers, and engineers dedicated to elevating your digital presence.
            </p>
          </div>
        </RevealSection>

        {/* Elegant placeholder for team members */}
        <RevealSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="aspect-[3/4] rounded-2xl bg-dark-olive/5 border border-dark-olive/10 mb-6 flex items-center justify-center overflow-hidden relative">
                  <p className="text-dark-olive/30 text-sm font-bold tracking-widest uppercase">Team Photo</p>
                </div>
                <h3 className="font-display text-2xl font-bold text-dark-olive mb-2">Founder / Director Name</h3>
                <p className="text-olive font-medium text-sm tracking-wide uppercase mb-4">Position Title</p>
                <p className="text-dark-olive/70 text-sm leading-relaxed">
                  Brief biography highlighting expertise, industry experience, and strategic vision for the agency and its clients.
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
