"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polyline points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

const socialLinks = [
  { href: "https://instagram.com", icon: InstagramIcon, label: "Instagram" },
  { href: "https://facebook.com", icon: FacebookIcon, label: "Facebook" },
  { href: "https://linkedin.com", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://youtube.com", icon: YoutubeIcon, label: "YouTube" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_24px_rgba(48,53,34,0.08)]"
          : "bg-cream/95 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between h-[64px] max-w-7xl mx-auto w-full px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          aria-label="3dotcreatives home"
          className="flex items-center gap-2 shrink-0 group"
        >
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-dark-olive transition-transform hover:scale-125 duration-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-rust-gold transition-transform hover:scale-125 duration-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-olive transition-transform hover:scale-125 duration-200" />
          </div>
          <span className="text-[11px] font-extrabold tracking-[0.24em] text-dark-olive leading-none">
            3DOTCREATIVES
          </span>
        </Link>

        {/* Center navigation links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 text-[11px] tracking-[0.15em] uppercase font-bold transition-all duration-300 rounded ${
                  isActive
                    ? "text-cream bg-dark-olive"
                    : "text-dark-olive/50 hover:text-dark-olive hover:bg-dark-olive/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Social icons */}
          <div className="hidden lg:flex items-center gap-1">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-8 h-8 rounded-full text-dark-olive/35 hover:text-rust-gold hover:bg-dark-olive/5 transition-all duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 bg-olive/15" />

          {/* CTA Button */}
          <Link
            href="/contact"
            className="flex items-center px-6 py-2 bg-dark-olive text-cream text-[11px] tracking-[0.16em] uppercase font-bold hover:bg-rust-gold transition-all duration-300 active:scale-95"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-dark-olive hover:bg-dark-olive/5 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-olive/10 animate-fade-in-up">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-xs tracking-[0.14em] uppercase font-bold rounded-lg transition-colors ${
                    isActive
                      ? "text-rust-gold bg-dark-olive/5"
                      : "text-dark-olive/60 hover:text-dark-olive hover:bg-dark-olive/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href="/contact"
                className="flex items-center justify-center py-3.5 bg-dark-olive text-cream text-xs tracking-[0.14em] uppercase font-bold hover:bg-rust-gold transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
