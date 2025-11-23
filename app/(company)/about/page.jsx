"use client";

import ContactParallax from "../../components/ContactParallax";
import OurSolutions from "../../components/OurSolutions";
import AboutHeroCode from "./AboutHeroCode";
import AboutOurClients from "./AboutOurClients";
import AlliancesPartnerships from "./AlliancesPartnerships";
import CompanyLocation from "./CompanyLocation";
import CompanyStats from "./CompanyStats";
import MissionVision from "./MissionVision";

export default function Contact() {
    return (
        <>
           <AboutHeroCode /> 
           <CompanyStats/>
           <MissionVision/>
           <AboutOurClients/>
           {/* one more left here  - Technology Excellence */}
           <AlliancesPartnerships/>
           <OurSolutions/>
           <ContactParallax title="Talk to Us"/>
           <CompanyLocation/>
        </>
     
    )
}
