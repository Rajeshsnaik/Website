// app/page.js
import ClientCarousel from "./components/ClientCarousel";
import ContactForm from "./components/ConatctForm";
import HeroSection from "./components/HeroSection";
import OfferingsSection from "./components/OfferingsSection";
import OurSolutions from "./components/OurSolutions";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import FeedbackCode from "./components/Feedback";
import "./globals.css"; // Ensure Tailwind styles are imported

export default function Home() {
    return (
        // Replaced inline styles with Tailwind classes
        <main >
            <HeroSection />
            <ClientCarousel />
            <OfferingsSection />
            <OurSolutions />
            <WhyChooseUsSection />
            <FeedbackCode/>
            <ContactForm />
        </main>
     
    )
}