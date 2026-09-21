import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import RevealSection from "@/components/ui/RevealSection";

export const metadata: Metadata = {
  title: "Contact — 3dotcreatives",
  description:
    "Get in touch with 3dotcreatives. Start your next project with a creative digital agency that delivers results.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 bg-[#FDF6E3]">
        <section className="py-20 md:py-28 px-6 lg:px-8">
          <div className="container-shell max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Left column */}
              <RevealSection>
                <div>
                  <p className="section-label mb-4">
                    Get In Touch
                  </p>
                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-dark-olive leading-[1.05] tracking-tight">
                    Start a Project
                  </h1>
                  <p className="mt-6 text-lg text-dark-olive/70 font-medium leading-relaxed max-w-lg">
                    Tell us about your project. We&apos;ll get back to you within
                    24 hours with ideas and a timeline.
                  </p>

                  <div className="mt-16 space-y-10">
                    <div className="group border-l-2 border-olive/20 pl-6 hover:border-olive transition-colors duration-300">
                      <p className="text-[11px] tracking-[0.2em] text-dark-olive/50 uppercase font-bold mb-2">
                        Email Us
                      </p>
                      <a href="mailto:3dotcreativesagency@gmail.com" className="font-display text-xl sm:text-2xl font-bold text-dark-olive group-hover:text-olive transition-colors duration-300">
                        3dotcreativesagency@gmail.com
                      </a>
                    </div>
                    <div className="group border-l-2 border-olive/20 pl-6 hover:border-olive transition-colors duration-300">
                      <p className="text-[11px] tracking-[0.2em] text-dark-olive/50 uppercase font-bold mb-2">
                        Call Us
                      </p>
                      <a href="https://wa.me/923052288882" target="_blank" rel="noopener noreferrer" className="font-display text-xl sm:text-2xl font-bold text-dark-olive group-hover:text-olive transition-colors duration-300">
                        +92 305 228 8882
                      </a>
                    </div>
                    <div className="group border-l-2 border-olive/20 pl-6 hover:border-olive transition-colors duration-300">
                      <p className="text-[11px] tracking-[0.2em] text-dark-olive/50 uppercase font-bold mb-2">
                        Our Studio
                      </p>
                      <p className="font-display text-xl sm:text-2xl font-bold text-dark-olive group-hover:text-olive transition-colors duration-300">
                        Gullberg-III, Lahore, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-16">
                    <div className="w-2.5 h-2.5 rounded-full bg-olive animate-pulse" />
                    <div className="w-2.5 h-2.5 rounded-full bg-rust-gold animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-olive animate-pulse" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              </RevealSection>

              {/* Right column - Form */}
              <RevealSection delay={0.2}>
                <div className="bg-dark-olive p-8 md:p-12 rounded-2xl border border-dark-olive/5 shadow-sm">
                  <ContactForm />
                </div>
              </RevealSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
