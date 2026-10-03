export const siteConfig = {
  name: "3 Dot Creatives",
  url: "https://3dotcreatives.agency",
  description: "3 Dot Creatives is a digital agency in Lahore offering web development, app development, digital marketing and creative services.",
  location: "Lahore, Pakistan",
  socials: {
    instagram: "https://instagram.com/3dotcreatives",
    facebook: "https://facebook.com/3dotcreatives",
    linkedin: "https://linkedin.com/company/3dotcreatives",
  }
};

export function createCanonical(path: string) {
  return new URL(path, siteConfig.url).toString();
}
