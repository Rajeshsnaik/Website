import ClientCarousel from "../components/ClientCarousel";
import ContactParallax from "../components/ContactParallax";
import TechCentersSection from "./TechCentersSection";
import TechnologyHero from "./TechnologyHero";
import TechStackSection from "./TechStackSection";

/* SEO METADATA FOR TECHNOLOGIES */
export const metadata = {
  title: "Technologies We Use | IoT, AI & Cloud Stack – Blute Technology",
  description:
    "Explore the technologies used by Blute Technology Limited, including IoT platforms, AI-powered analytics, cloud infrastructure, and modern tech stacks that power scalable industrial solutions.",

  keywords: [
    "technologies we use",
    "IoT technology stack",
    "industrial IoT technologies",
    "AI powered analytics",
    "cloud IoT platforms",
    "edge computing",
    "smart automation technologies",
    "enterprise technology stack",
    "digital transformation technologies",
    "Blute Technology technologies"
  ],

  authors: [{ name: "Blute Technology Limited" }],
  creator: "Blute Technology Limited",
  publisher: "Blute Technology Limited",

  metadataBase: new URL("https://www.yourdomain.com"),

  alternates: {
    canonical: "/technologies",
  },

  openGraph: {
    title: "Technologies We Use – IoT, AI & Cloud | Blute Technology",
    description:
      "Discover the IoT, AI, cloud, and automation technologies that power Blute Technology’s scalable industrial solutions.",
    url: "https://www.yourdomain.com/technologies",
    siteName: "Blute Technology Limited",
    images: [
      {
        url: "/og-technologies.jpg", // Page-specific OG image
        width: 1200,
        height: 630,
        alt: "Technology Stack Used by Blute Technology Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Technologies We Use | Blute Technology Limited",
    description:
      "Modern IoT, AI, and cloud technologies powering smarter enterprises.",
    images: ["/og-technologies.jpg"],
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

/*  PAGE COMPONENT */
const Technologies = () => {
  return (
    <>
      <TechnologyHero />
      <TechCentersSection />
      <TechStackSection />
      <ClientCarousel />
      <ContactParallax title="Contact Us for an IoT Assessment" />
    </>
  );
};

export default Technologies;
