"use client";

import RevealSection from "@/components/ui/RevealSection";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-[#FDF6E3]">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark-olive mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-dark-olive/60 text-lg">
              Everything you need to know about this service.
            </p>
          </div>
        </RevealSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <RevealSection key={index} delay={index * 0.1}>
              <div 
                className={`border border-dark-olive/10 rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "bg-white shadow-md border-dark-olive/20" : "bg-transparent hover:border-dark-olive/30"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-display text-lg md:text-xl font-bold text-dark-olive pr-8">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-dark-olive/20 transition-transform duration-500 ${
                    openIndex === index ? "rotate-180 bg-olive text-cream border-olive" : "text-dark-olive"
                  }`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L6 9L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 text-dark-olive/70 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
