"use client";

import AboutOurClients from "../about/AboutOurClients";
import AlliancesPartnerships from "../about/AlliancesPartnerships";
import ClientHero from "./ClientHero";
import ClientProjects from "./ClientProjects";
import ClientTrustStats from "./ClientTrustStats";

export default function Clients() {
    return (
        <>
           <ClientHero />
           <ClientTrustStats/>
           <AboutOurClients/>
           <AlliancesPartnerships/>
           <ClientProjects/>
        </>
     
    )
}
