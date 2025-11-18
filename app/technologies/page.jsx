import ClientCarousel from "../components/ClientCarousel";
import ContactParallax from "../components/ContactParallax";
import TechCentersSection from "./TechCentersSection";
import TechnologyHero from "./TechnologyHero";
import TechStackSection from "./TechStackSection";

const Technologies = () => {
    return (
        <>
        <TechnologyHero />
        <TechCentersSection />
        <TechStackSection/>
        <ClientCarousel/>
        <ContactParallax title="Contact Us for an IOT Assessment"/>
        </>
    )
}

export default Technologies;