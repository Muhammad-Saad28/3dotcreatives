export const siteConfig = {
  name: "3 Dot Creatives",
  url: "https://3dotcreatives.agency",
  description: "Creative digital agency in Lahore, Pakistan offering web development, app development, digital marketing, social media, content creation and creative solutions.",
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
