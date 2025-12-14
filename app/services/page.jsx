import ContactParallax from "../components/ContactParallax";
import OurSolutions from "../components/OurSolutions";
import HowWeWork from "./HowWeWork";
import ServicesHero from "./ServicesHero";
import ServicesWeProvide from "./ServicesWeProvide";
import WhyChooseUs from "./WhyChooseUs";

/* SEO METADATA FOR SERVICES */
export const metadata = {
  title: "Our Services | IoT, Automation & Predictive Analytics – Blute Technology",
  description:
    "Blute Technology Limited offers end-to-end IoT services including system integration, predictive analytics, automation, cloud IoT platforms, and real-time monitoring for modern enterprises.",

  keywords: [
    "IoT services",
    "industrial IoT services",
    "predictive analytics services",
    "automation solutions",
    "cloud IoT services",
    "real time monitoring services",
    "IoT system integration",
    "AI powered automation",
    "enterprise technology services",
    "Blute Technology services"
  ],

  authors: [{ name: "Blute Technology Limited" }],
  creator: "Blute Technology Limited",
  publisher: "Blute Technology Limited",

  metadataBase: new URL("https://www.yourdomain.com"),

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Our Services – Smart IoT & Automation | Blute Technology",
    description:
      "Explore Blute Technology’s IoT, automation, and predictive analytics services designed to optimize operations and drive business growth.",
    url: "https://www.yourdomain.com/services",
    siteName: "Blute Technology Limited",
    images: [
      {
        url: "/og-services.jpg", // Create a services-specific OG image
        width: 1200,
        height: 630,
        alt: "IoT & Automation Services by Blute Technology Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Services | Blute Technology Limited",
    description:
      "End-to-end IoT, automation, and predictive intelligence services.",
    images: ["/og-services.jpg"],
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

/* PAGE COMPONENT */
const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesWeProvide />
      <WhyChooseUs />
      <HowWeWork />
      <OurSolutions />
      <ContactParallax title="Contact Us" />
    </>
  );
};

export default Services;
