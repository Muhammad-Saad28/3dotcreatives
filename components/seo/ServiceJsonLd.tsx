import { siteConfig } from "@/lib/seo";

interface ServiceJsonLdProps {
  name: string;
  description: string;
  slug: string;
}

export default function ServiceJsonLd({ name, description, slug }: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: "Lahore",
    },
    url: `${siteConfig.url}/services/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
