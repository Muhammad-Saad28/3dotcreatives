export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  video?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "aurora-brand",
    title: "Aurora Brand Identity",
    description:
      "Complete brand identity system for a luxury skincare line, including logo, packaging, and digital presence.",
    category: "Branding",
    year: "2024",
    image: "/portfolio/aurora.jpg",
  },
  {
    id: "nexgen-web",
    title: "NexGen Platform",
    description:
      "A next-generation SaaS platform with immersive 3D product visualization and seamless user experience.",
    category: "Web Development",
    year: "2024",
    image: "/portfolio/nexgen.jpg",
  },
  {
    id: "verde-app",
    title: "Verde Sustainability App",
    description:
      "Mobile application connecting eco-conscious consumers with sustainable local businesses and products.",
    category: "App Development",
    year: "2024",
    image: "/portfolio/verde.jpg",
  },
  {
    id: "pulse-campaign",
    title: "Pulse Digital Campaign",
    description:
      "Multi-channel digital marketing campaign that increased brand awareness by 340% in three months.",
    category: "Digital Marketing",
    year: "2023",
    image: "/portfolio/pulse.jpg",
  },
  {
    id: "zenith-content",
    title: "Zenith Content Series",
    description:
      "A cinematic content series showcasing architectural marvels, produced for a leading real estate brand.",
    category: "Content Creation",
    year: "2023",
    image: "/portfolio/zenith.jpg",
  },
  {
    id: "craft-packaging",
    title: "Craft Brewing Packaging",
    description:
      "Artisanal packaging design for a craft brewery, blending heritage aesthetics with modern design.",
    category: "Printing & Packaging",
    year: "2023",
    image: "/portfolio/craft.jpg",
  },
];
