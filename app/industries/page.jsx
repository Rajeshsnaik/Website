import ContactParallax from "../components/ContactParallax";
import OurSolutions from "../components/OurSolutions";
import IndustriesWeEmpower from "./IndustriesWeEmpower";
import IndustryChallenges from "./IndustryChallenges";
import IndustriesHero from "./IndutriesHero";
import ValueProposition from "./ValueProposition";
import WhyWeServe from "./WhyWeServe";

/* SEO METADATA FOR INDUSTRIES */
export const metadata = {
  title: "Industries We Serve | Smart IoT Solutions – Blute Technology Limited",
  description:
    "Explore industries served by Blute Technology Limited. We deliver smart IoT solutions, predictive analytics, automation, and real-time monitoring tailored for manufacturing, energy, utilities, and enterprises.",

  keywords: [
    "industries we serve",
    "industrial IoT solutions",
    "manufacturing IoT",
    "energy IoT solutions",
    "smart industry automation",
    "predictive maintenance",
    "enterprise IoT platforms",
    "real time monitoring systems",
    "AI powered industrial solutions",
    "Blute Technology industries"
  ],

  authors: [{ name: "Blute Technology Limited" }],
  creator: "Blute Technology Limited",
  publisher: "Blute Technology Limited",

  metadataBase: new URL("https://www.yourdomain.com"),

  alternates: {
    canonical: "/industries",
  },

  openGraph: {
    title: "Industries We Serve – Smart IoT & Automation | Blute Technology",
    description:
      "Discover how Blute Technology empowers industries with IoT-driven automation, predictive intelligence, and real-time monitoring solutions.",
    url: "https://www.yourdomain.com/industries",
    siteName: "Blute Technology Limited",
    images: [
      {
        url: "/og-industries.jpg", // create a page-specific OG image
        width: 1200,
        height: 630,
        alt: "Industries Served by Blute Technology Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Blute Technology Limited",
    description:
      "Smart IoT & predictive intelligence solutions designed for modern industries.",
    images: ["/og-industries.jpg"],
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
const Industries = () => {
  return (
    <>
      <IndustriesHero />
      <IndustriesWeEmpower />
      <WhyWeServe />
      <IndustryChallenges />
      <OurSolutions />
      {/* <ValueProposition /> */}
      <ContactParallax title="Contact Us for Your Industry Problems" />
    </>
  );
};

export default Industries;
