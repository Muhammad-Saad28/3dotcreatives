import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | 3DOTCREATIVES",
  description: "Privacy policy and data handling practices.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-cream min-h-screen text-dark-olive">
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-lg text-olive">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="prose prose-olive max-w-none space-y-6 text-dark-olive/80">
          <p>
            At 3DOTCREATIVES, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your data when you interact with our website and services.
          </p>
          <h2 className="text-2xl font-bold text-dark-olive mt-8">Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and company details when you voluntarily submit them through our contact forms or project inquiries. We also automatically collect standard web analytics data to improve our site experience.
          </p>
          <h2 className="text-2xl font-bold text-dark-olive mt-8">How We Use Your Information</h2>
          <p>
            The information we collect is used solely to provide and improve our services, respond to your inquiries, and communicate with you about your projects. We do not sell or rent your personal information to third parties.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
