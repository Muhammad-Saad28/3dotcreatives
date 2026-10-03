import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream text-dark-olive text-center px-4">
      <h1 className="text-6xl md:text-8xl font-outfit font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-outfit font-semibold mb-6">This page doesn't exist.</h2>
      <p className="text-lg md:text-xl font-sans mb-8 max-w-md mx-auto text-beige">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/services" 
          className="px-6 py-3 bg-dark-olive text-cream rounded-full hover:bg-olive transition-colors font-medium"
        >
          Explore Services
        </Link>
        <Link 
          href="/" 
          className="px-6 py-3 bg-transparent border border-dark-olive text-dark-olive rounded-full hover:bg-dark-olive hover:text-cream transition-colors font-medium"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
