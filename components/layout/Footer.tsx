import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerServices = [
  { href: "/services#web-development", label: "Web Development" },
  { href: "/services#content-creation", label: "Content Creation" },
  { href: "/services#social-media", label: "Social Media Handling" },
  { href: "/services#app-development", label: "App Development" },
  { href: "/services#product-shoots", label: "Product Shoots & Mgmt" },
  { href: "/services#gbp-management", label: "GBP Management" },
  { href: "/services#printing-packaging", label: "Printing & Packaging" },
  { href: "/services#digital-marketing", label: "Digital Marketing" },
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

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polyline points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

const socialLinks = [
  { href: "https://facebook.com", icon: FacebookIcon, label: "Facebook" },
  { href: "https://instagram.com", icon: InstagramIcon, label: "Instagram" },
  { href: "https://linkedin.com", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://youtube.com", icon: YoutubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-olive text-cream relative z-20" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex gap-1.5 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-olive" />
              <div className="w-1.5 h-1.5 rounded-full bg-rust-gold" />
              <div className="w-1.5 h-1.5 rounded-full bg-olive" />
            </div>
            <h2 className="text-sm font-bold tracking-[0.24em] text-cream mb-4">
              3DOTCREATIVES
            </h2>
            <p className="text-beige/60 text-sm leading-relaxed mb-6 max-w-xs">
              Digital experiences, content and brands built to move people. Serving clients globally.
            </p>

            <div className="flex flex-col gap-2.5 text-sm text-beige/75 mb-6">
              <a href="mailto:hello@3dotcreatives.com" className="flex items-center gap-2.5 hover:text-cream transition-colors">
                <Mail size={14} className="text-rust-gold shrink-0" />
                <span>hello@3dotcreatives.com</span>
              </a>
              <a href="tel:+923001234567" className="flex items-center gap-2.5 hover:text-cream transition-colors">
                <Phone size={14} className="text-rust-gold shrink-0" />
                <span>+92 300 123 4567</span>
              </a>
            </div>

            <div className="flex gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-cream/5 border border-beige/10 text-beige/60 hover:border-rust-gold/50 hover:text-cream hover:bg-cream/10 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-beige/50 mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-beige/60 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-beige/50 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-beige/60 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-beige/50 mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-beige/60">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-rust-gold mt-0.5 shrink-0" />
                <div>
                  <span className="text-cream block">Karachi, PK</span>
                  <span>Phase 6, DHA, Karachi</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-rust-gold mt-0.5 shrink-0" />
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-beige/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-beige/35">
          <span>&copy; {new Date().getFullYear()} 3dotcreatives. All rights reserved.</span>

          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cream transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-cream transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
