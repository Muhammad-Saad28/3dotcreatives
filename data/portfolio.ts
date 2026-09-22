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
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "rigid-engineering",
    title: "Rigid Engineering",
    description: "A professional estimation agency providing precise and reliable cost estimation and consulting services for engineering and construction projects.",
    fullDescription: "Rigid Engineering required a modern, highly professional digital presence to reflect their precision and reliability in the cost estimation and consulting industry. We designed and developed a lightning-fast, SEO-optimized corporate website that clearly communicates their engineering expertise, services, and past project successes. The platform was built to instill trust and facilitate easy client onboarding.",
    category: "Web Development",
    year: "2024",
    image: "/images/rigidengg/12.png",
    link: "https://rigidengg.com",
    technologies: ["React", "Next.js", "HTML", "CSS", "TailwindCSS"],
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
    description: "A beautiful eCommerce platform specializing in authentic Afghan rugs, featuring seamless product browsing, high-quality imagery, and an optimized purchasing experience.",
    fullDescription: "AfghanTappeti is a premium eCommerce brand specializing in the finest authentic Afghan rugs. They needed a digital storefront that not only facilitated smooth transactions but also highlighted the rich, intricate details and heritage of their products. We delivered a bespoke eCommerce experience with high-performance image galleries, intuitive filtering, and a seamless checkout flow, all wrapped in a culturally rich aesthetic.",
    category: "eCommerce Development",
    year: "2024",
    image: "/images/afghantappeti/11.png",
    link: "https://afghantapetti.netlify.app/",
    technologies: ["React", "Next.js", "HTML", "CSS", "TailwindCSS"],
    gallery: [
      "/images/afghantappeti/2.png",
      "/images/afghantappeti/3.png",
    ]
  }
];
