// app/page.js
import ClientCarousel from "./components/ClientCarousel";
import ContactForm from "./components/ConatctForm";
import OfferingsSection from "./components/OfferingsSection";
import "./globals.css"; // Ensure Tailwind styles are imported

export default function Home() {
    return (
        // Replaced inline styles with Tailwind classes
        <main className="min-h-screen flex flex-col items-center justify-center p-10 bg-gray-50">
            <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
                👋 Hello Tailwind World!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
                This page is now styled with Tailwind CSS utility classes.
            </p>
            
            <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Start Building
            </button>
            <ClientCarousel />
            <OfferingsSection />
   <ContactForm />
        </main>
     
    )
}