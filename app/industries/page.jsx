import ContactParallax from "../components/ContactParallax";
import OurSolutions from "../components/OurSolutions";
import IndustriesWeEmpower from "./IndustriesWeEmpower";
import IndustryChallenges from "./IndustryChallenges";
import IndustriesHero from "./IndutriesHero";
import ValueProposition from "./ValueProposition";
import WhyWeServe from "./WhyWeServe";


const Industries = () => {
    return (
        <>
        <IndustriesHero />
        <IndustriesWeEmpower />
        <WhyWeServe />
        <IndustryChallenges />
        <OurSolutions />
        {/* <ValueProposition /> */}
        <ContactParallax title="Contact Us for You Industry Problems"/>
        </>
    )
}

export default Industries;