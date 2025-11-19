// app/technology/iot/page.jsx
import React from "react";
import OurSolutions from "../../components/OurSolutions.jsx";
import ContactParallax from "../../components/ContactParallax";
import CloudHero from "./CloudHero.jsx";
import TransformBusinessSection from "./TransformBusinessSection.jsx";
import CloudSolutionSection from "./CloudSolutionSection.jsx";
import FAQSection from "./FAQSection.jsx";
// import OurSolutions from "./components/OurSolutions";

// ------------------------------
// 1. SEO Metadata
// ------------------------------
export const metadata = {
  title: "IoT Solutions | Smart Internet of Things Technology | Blute Technology",
  description:
    "Explore Blute Technology’s advanced IoT solutions for automation, connectivity, smart sensors, and real-time data monitoring. We build secure, scalable Internet of Things systems for industries.",
  keywords: [
    "IoT technology",
    "Internet of Things solutions",
    "IoT development company",
    "smart sensors",
    "IoT automation",
    "IoT devices",
    "Blute Technology IoT",
  ],
  alternates: {
    canonical: "https://yourwebsite.com/technology/iot",
  },
  openGraph: {
    title: "IoT Solutions | Smart Internet of Things Technology | Blute Technology",
    description:
      "Build intelligent IoT systems with Blute Technology. Improve automation, monitoring, and connectivity with next-gen IoT solutions.",
    url: "https://yourwebsite.com/technology/iot",
    siteName: "Blute Technology",
    images: [
      {
        url: "https://yourwebsite.com/og/technology-iot.jpg",
        width: 1200,
        height: 630,
        alt: "Blute Technology IoT Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Solutions by Blute Technology",
    description:
      "Secure, scalable, and smart IoT technology solutions for modern businesses.",
    images: ["https://yourwebsite.com/og/technology-iot.jpg"],
  },
};

// ------------------------------
// 2. Page Component
// ------------------------------
const Cloud = () => {
  return (
    <>
      <CloudHero/>
      <TransformBusinessSection/>
      <CloudSolutionSection/>
      <OurSolutions />
      <ContactParallax title="Contact Us for an Cloud Projects"/>
      <FAQSection />
   

      {/* ------------------------------------
          3. Structured Data (JSON-LD)
      -------------------------------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "IoT Solutions | Blute Technology",
            url: "https://yourwebsite.com/technology/iot",
            description:
              "Advanced IoT solutions for automation, smart devices, sensor connectivity, and intelligent systems by Blute Technology.",
            provider: {
              "@type": "Organization",
              name: "Blute Technology",
              url: "https://yourwebsite.com",
              logo: "https://yourwebsite.com/logo.png",
            },
          }),
        }}
      />
    </>
  );
};

export default Cloud;
