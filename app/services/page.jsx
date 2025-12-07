import ContactParallax from "../components/ContactParallax";
import OurSolutions from "../components/OurSolutions";
import HowWeWork from "./HowWeWork";
import ServicesHero from "./ServicesHero";
import ServicesWeProvide from "./ServicesWeProvide";
import WhyChooseUs from "./WhyChooseUs";


const Technologies = () => {
    return (
        <>
        <ServicesHero />
        <ServicesWeProvide />
        <WhyChooseUs/>
        <HowWeWork />
        <OurSolutions />
        <ContactParallax title="Contact Us"/>
        </>
    )
}

export default Technologies;