"use client";

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
           <AlliancesPartnerships/>
           <OurSolutions/>
           <CompanyLocation/>
        </>
     
    )
}
