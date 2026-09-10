import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Cookie Policy | 3DOTCREATIVES",
  description: "How we use cookies and tracking technologies.",
};

export default function CookiePolicy() {
  return (
    <div className="bg-cream min-h-screen text-dark-olive">
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Cookie Policy
        </h1>
        <p className="text-lg text-olive">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="prose prose-olive max-w-none space-y-6 text-dark-olive/80">
          <p>
            This Cookie Policy explains how 3DOTCREATIVES uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them.
          </p>
          <h2 className="text-2xl font-bold text-dark-olive mt-8">What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <h2 className="text-2xl font-bold text-dark-olive mt-8">Why do we use cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
