import ClientCarousel from "./components/ClientCarousel";
import ContactForm from "./components/ConatctForm";
import HeroSection from "./components/HeroSection";
import OfferingsSection from "./components/OfferingsSection";
import OurSolutions from "./components/OurSolutions";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import FeedbackCode from "./components/Feedback";
import "./globals.css"; // Ensure Tailwind styles are imported
import Hero from "./components/Hero";


export const metadata = {
  title: "Blute Technology Limited | Smart IoT Solutions for Predictive Intelligence",
  description:
    "Transform your enterprise with intelligent IoT systems, predictive analytics, real-time monitoring, and next-gen automation solutions designed for modern industries.",
  
  keywords: [
    "IoT solutions",
    "predictive analytics",
    "smart automation",
    "industrial IoT",
    "real time monitoring",
    "asset management",
    "enterprise automation",
    "AI powered IoT",
    "cloud IoT",
  ],

  authors: [{ name: "Blute Technology Limited" }],
  creator: "Blute Technology Limited",
  publisher: "Blute Technology Limited",

  metadataBase: new URL("https://www.yourdomain.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Blute Technology Limited – Smart IoT & Predictive Intelligence",
    description:
      "Accelerate your business with next-gen IoT, automation, and predictive monitoring solutions.",
    url: "https://www.yourdomain.com",
    siteName: "Blute Technology Limited",
    images: [
      {
        url: "/og-image.jpg", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Your Company – IoT & Predictive Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blute Technology Limited – IoT & Predictive Intelligence",
    description:
      "Modern IoT + Predictive Analytics powering smarter enterprises.",
    images: ["/og-image.jpg"], // Replace with your image
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  category: "technology",
};

export default function Home() {
    return (
        // Replaced inline styles with Tailwind classes
        <main >
            <Hero />
            <ClientCarousel />
            <OfferingsSection />
            <OurSolutions />
            <WhyChooseUsSection />
            <FeedbackCode/>
            <ContactForm />
        </main>
     
    )
}

