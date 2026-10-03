export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: string;
  year: string;
  image: string;
  video?: string;
  link?: string;
  gallery?: string[];
  technologies?: string[];
  client?: string;
  industry?: string;
  problem?: string;
  solution?: string;
  results?: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "rigid-engineering",
    title: "Rigid Engineering",
    description: "A comprehensive digital transformation for a leading estimation agency, providing precise and reliable cost estimation and consulting services for complex engineering projects.",
    fullDescription: "Rigid Engineering operates in a highly specialized sector where trust, precision, and authority are paramount. Their previous digital presence failed to reflect their deep technical expertise or the scale of the projects they handled. They approached 3 Dot Creatives to architect a complete digital overhaul. We designed a corporate platform that immediately signals engineering excellence, making it frictionless for enterprise clients to understand their service offerings, review past successes, and initiate consultations.",
    category: "Web Development",
    year: "2024",
    image: "/images/rigidengg/12.png",
    link: "https://rigidengg.com",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
    client: "Rigid Engineering",
    industry: "Engineering & Construction",
    problem: "The client faced a significant credibility gap online. Their legacy website was slow, difficult to navigate, and lacked the structural hierarchy needed to explain complex estimation services to decision-makers in the construction industry.",
    solution: "We implemented a Next.js-driven architecture that prioritizes speed and technical SEO. The UI was completely redesigned using a stark, professional aesthetic that emphasizes data and clarity. We structured their service offerings into clear, scannable technical pages, supported by a robust CMS for future case study publishing.",
    results: [
      "Transformed a generic brochure site into a high-converting B2B lead generation tool.",
      "Achieved a 98/100 Lighthouse performance score, drastically reducing bounce rates.",
      "Established a professional digital footprint that aligns with their enterprise-level service quality."
    ],
    gallery: [
      "/images/rigidengg/2.png",
      "/images/rigidengg/3.png",
      "/images/rigidengg/4.png",
      "/images/rigidengg/5.png",
      "/images/rigidengg/6.png",
      "/images/rigidengg/7.png",
      "/images/rigidengg/8.png",
    ]
  },
  {
    id: "afghan-tappeti",
    title: "AfghanTappeti",
    description: "A premium headless eCommerce experience specializing in authentic Afghan rugs, engineered for seamless product discovery and high-conversion purchasing.",
    fullDescription: "AfghanTappeti imports and sells high-end, authentic Afghan rugs. Selling premium physical goods online requires a platform that can visually communicate texture, quality, and heritage without compromising on speed. We were tasked with building an eCommerce storefront that felt as luxurious as the products being sold, while utilizing modern web architecture to ensure instantaneous page loads and a frictionless checkout process.",
    category: "eCommerce Development",
    year: "2024",
    image: "/images/afghantappeti/11.png",
    link: "https://afghantapetti.netlify.app/",
    technologies: ["React", "Next.js", "TailwindCSS", "Stripe Integration", "Netlify"],
    client: "AfghanTappeti",
    industry: "Luxury Retail & eCommerce",
    problem: "Selling high-ticket items online requires immense visual trust. The client needed a platform that could handle high-resolution imagery and complex product filtering without slowing down the user experience on mobile devices.",
    solution: "We engineered a headless commerce solution using Next.js. This decoupled architecture allowed us to build a heavily customized, visually immersive frontend that pre-renders product pages for maximum speed and SEO visibility. We implemented advanced image optimization techniques and a streamlined checkout flow.",
    results: [
      "Created a highly tactile digital shopping experience that justifies premium pricing.",
      "Optimized mobile checkout flow, directly addressing cart abandonment issues.",
      "Built a scalable infrastructure capable of handling high-resolution media without performance penalties."
    ],
    gallery: [
      "/images/afghantappeti/2.png",
      "/images/afghantappeti/3.png",
    ]
  }
];
