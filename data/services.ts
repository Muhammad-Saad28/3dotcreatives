export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    description:
      "We build fast, responsive, and visually stunning websites that convert visitors into customers. From landing pages to complex web applications.",
    features: [
      "Custom Website Design",
      "E-commerce Solutions",
      "CMS Integration",
      "Performance Optimization",
    ],
  },
  {
    id: "content-creation",
    number: "02",
    title: "Content Creation",
    description:
      "Compelling content that tells your brand story. We create visuals, copy, and multimedia that captivate your audience.",
    features: [
      "Video Production",
      "Photography",
      "Copywriting",
      "Brand Storytelling",
    ],
  },
  {
    id: "social-media",
    number: "03",
    title: "Social Media Handling",
    description:
      "Strategic social media management that builds community, drives engagement, and strengthens your brand presence across platforms.",
    features: [
      "Content Strategy",
      "Community Management",
      "Analytics & Reporting",
      "Campaign Planning",
    ],
  },
  {
    id: "app-development",
    number: "04",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications designed for performance and user experience. From concept to App Store.",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Development",
      "UI/UX Design",
      "App Store Optimization",
    ],
  },
  {
    id: "product-shoots",
    number: "05",
    title: "Product Shoots & Management",
    description:
      "Professional product photography and catalog management that showcases your products in the best possible light.",
    features: [
      "Studio Photography",
      "Lifestyle Shoots",
      "Catalog Management",
      "Image Post-Processing",
    ],
  },
  {
    id: "gbp-management",
    number: "06",
    title: "GBP Management",
    description:
      "Optimize your Google Business Profile to attract local customers and dominate local search results.",
    features: [
      "Profile Optimization",
      "Review Management",
      "Local SEO Strategy",
      "Post Scheduling",
    ],
  },
  {
    id: "printing-packaging",
    number: "07",
    title: "Printing & Packaging",
    description:
      "Premium print materials and packaging design that make your brand tangible and memorable.",
    features: [
      "Packaging Design",
      "Business Collateral",
      "Large Format Printing",
      "Sustainable Materials",
    ],
  },
  {
    id: "digital-marketing",
    number: "08",
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that maximize ROI. We reach your audience where they are with the right message.",
    features: [
      "PPC Advertising",
      "SEO Strategy",
      "Email Marketing",
      "Conversion Optimization",
    ],
  },
];
