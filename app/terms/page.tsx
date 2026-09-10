import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service | 3DOTCREATIVES",
  description: "Terms and conditions of using our services.",
};

export default function TermsOfService() {
  return (
    <div className="bg-cream min-h-screen text-dark-olive">
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Terms of Service
        </h1>
        <p className="text-lg text-olive">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="prose prose-olive max-w-none space-y-6 text-dark-olive/80">
          <p>
            Welcome to 3DOTCREATIVES. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully before engaging with our creative agency.
          </p>
          <h2 className="text-2xl font-bold text-dark-olive mt-8">Intellectual Property</h2>
          <p>
            All content, designs, concepts, and materials produced by 3DOTCREATIVES remain the intellectual property of our agency until final payment is received and specific usage rights are transferred in writing.
          </p>
          <h2 className="text-2xl font-bold text-dark-olive mt-8">Client Responsibilities</h2>
          <p>
            Clients are expected to provide timely feedback, necessary assets, and clear communication to ensure project timelines are met. Delays on the client's end may result in timeline adjustments.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
