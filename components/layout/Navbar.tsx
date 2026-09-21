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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-dark-olive/90 backdrop-blur-md shadow-[0_1px_24px_rgba(48,53,34,0.3)]"
        : "bg-dark-olive/95 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center justify-between h-[82px] max-w-7xl mx-auto w-full px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          aria-label="3dotcreatives home"
          className="flex items-center gap-2 shrink-0 group"
        >
          <img
            src="/logo.jpeg"
            alt="3dotcreatives"
            className="h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-2xl"
          />
        </Link>

        {/* Center navigation links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 text-[11px] tracking-[0.15em] uppercase font-bold transition-all duration-300 rounded ${isActive
                  ? "text-dark-olive bg-cream"
                  : "text-cream/70 hover:text-cream hover:bg-cream/10"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* CTA Button */}
          <Link
            href="/contact"
            className="flex items-center px-8 py-2.5 bg-cream text-dark-olive text-[11px] tracking-[0.16em] uppercase font-bold hover:bg-olive hover:text-cream hover:scale-105 transition-all duration-300 active:scale-95 rounded-full"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-cream hover:bg-cream/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-dark-olive border-t border-cream/10 animate-fade-in-up">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-xs tracking-[0.14em] uppercase font-bold rounded-lg transition-colors ${isActive
                    ? "text-dark-olive bg-cream"
                    : "text-cream/70 hover:text-cream hover:bg-cream/10"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href="/contact"
                className="flex items-center justify-center py-3.5 bg-cream text-dark-olive text-xs tracking-[0.14em] uppercase font-bold hover:bg-olive hover:text-cream transition-all duration-300 rounded-full mt-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
