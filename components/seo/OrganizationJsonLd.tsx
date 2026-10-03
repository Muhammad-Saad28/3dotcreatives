import { siteConfig } from "@/lib/seo";

export default function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`, // Assuming logo exists in public
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.linkedin,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92 305 228 8882",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: "en",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
