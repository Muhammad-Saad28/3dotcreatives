"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import RevealSection from "../ui/RevealSection";

const footerServices = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/content-creation", label: "Content Creation" },
  { href: "/services/social-media", label: "Social Media Handling" },
  { href: "/services/app-development", label: "App Development" },
  { href: "/services/product-shoots", label: "Product Shoots & Mgmt" },
  { href: "/services/gbp-management", label: "GBP Management" },
  { href: "/services/printing-packaging", label: "Printing & Packaging" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
];

const footerCompany = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
);

const socialLinks = [
  { href: "https://facebook.com", icon: FacebookIcon, label: "Facebook" },
  { href: "https://www.instagram.com/3dotcreativesagency", icon: InstagramIcon, label: "Instagram" },
  { href: "https://linkedin.com", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://wa.me/923052288882", icon: WhatsappIcon, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-olive text-cream relative z-20" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Column 1: Brand */}
          <RevealSection delay={0}>
            <div className="lg:col-span-1">
              <div className="reveal-item flex gap-1.5 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-rust-gold animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
              <h2 className="reveal-item text-sm font-bold tracking-[0.24em] text-cream mb-4">
                3DOTCREATIVES
              </h2>
              <p className="reveal-item text-beige/60 text-sm leading-relaxed mb-6 max-w-xs">
                Digital experiences, content and brands built to move people. Serving clients globally.
              </p>

              <div className="reveal-item grid grid-cols-2 md:grid-cols-1 gap-2.5 text-sm text-beige/75 mb-6">
                <a href="mailto:3dotcreativesagency@gmail.com" className="flex items-center gap-2.5 hover:text-cream transition-colors duration-300 group">
                  <Mail size={14} className="text-rust-gold shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>3dotcreativesagency@gmail.com</span>
                </a>
                <a href="https://wa.me/923052288882" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-cream transition-colors duration-300 group">
                  <Phone size={14} className="text-rust-gold shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>+92 305 228 8882</span>
                </a>
              </div>

              <div className="reveal-item flex gap-2">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-cream/5 border border-beige/10 text-beige/60 hover:border-rust-gold/50 hover:text-cream hover:bg-cream/10 hover:scale-110 transition-all duration-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Column 2: Services */}
          <RevealSection delay={0.1}>
            <div className="reveal-item">
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-beige/50 mb-6">
                Services
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
                {footerServices.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-beige/60 hover:text-cream hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>

          {/* Column 3: Company */}
          <RevealSection delay={0.2}>
            <div className="reveal-item">
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-beige/50 mb-6">
                Company
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
                {footerCompany.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-beige/60 hover:text-cream hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>

          {/* Column 4: Contact */}
          <RevealSection delay={0.3}>
            <div className="reveal-item">
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-beige/50 mb-6">
                Get in Touch
              </h3>
              <ul className="space-y-4 text-sm text-beige/60">
                <li className="flex items-start gap-2.5 group">
                  <MapPin size={14} className="text-rust-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <span className="text-cream block">Lahore, PK</span>
                    <span>Gullberg-III, Lahore</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 group">
                  <MapPin size={14} className="text-rust-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <span className="text-cream block">Remote Operations</span>
                    <span>Serving clients worldwide</span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-beige/10">
                <p className="text-[10px] font-mono text-rust-gold/70 tracking-[0.18em] uppercase">
                  Idea · Design · Execution
                </p>
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-beige/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-beige/35">
          <span>&copy; {new Date().getFullYear()} 3dotcreatives. All rights reserved.</span>

          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/privacy" className="hover:text-cream transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cream transition-colors duration-300">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-cream transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
