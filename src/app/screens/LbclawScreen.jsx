import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import OtherHero from '../Components/OtherHero'
import Lbclawcomp from '../Components/Lbclawcomp'


const LbclawScreen = () => {
    return (
        <div>
            <Navbar />
            <OtherHero title="IBC Amendment Act"
                subtitle="Explore" />
            <Lbclawcomp
                title="IBC Amendment Act, 2026"
                description="A detailed overview of the proposed amendments to the Insolvency and Bankruptcy Code, 2016, focusing on faster resolution, enhanced creditor protection, and evolving insolvency frameworks in India."
                brochurePdfUrl="/images/IBCAmendmentAct.pdf"
                fileName="IBC-Amendment-Act-2026.pdf"
                whatsInside={[
                    "Overview of proposed IBC amendments",
                    "Key changes in CIRP and resolution timelines",
                    "Pre-pack insolvency and cross-border framework",
                    "Impact on creditors, debtors, and stakeholders"
                ]}
                moreInfoTitle="Need Expert Legal Guidance?"
                moreInfoDesc="Understand how the proposed IBC amendments may impact your business, insolvency proceedings, and compliance requirements."
                moreInfoButtonText="Get Legal Consultation"
                moreInfoButtonLink="/contactus"
            />

            <Lbclawcomp
                title="IBC Comparative Analysis 2026"
                description="A comparative analysis of the Insolvency and Bankruptcy Code, 2016 as amended by the IBC (Amendment) Act, 2026, highlighting key statutory changes including new definitions, revised CIRP timelines, strengthened creditor rights, enhanced liquidation framework, and introduction of new insolvency processes."
                brochurePdfUrl="/images/IBC_Comparative_Analysis_2026.pdf"
                fileName="IBC-Amendment-Act-2026.pdf"
                whatsInside={[
                    "New definitions introduced: Registered Valuer, Service Provider, Avoidance Transactions",
                    "Reforms in CIRP admission (Sections 7, 9, 10) with strict timelines and reduced discretion",
                    "Major changes in resolution plans, CoC powers, and voting structure (Sections 21, 30, 31)",
                    
                ]}
                moreInfoTitle="Advisory on IBC Amendments, 2026"
                moreInfoDesc="Get expert legal insights on how the latest IBC amendments impact insolvency proceedings, creditor strategies, resolution plans, and compliance under evolving regulatory frameworks."
                moreInfoButtonText="Consult Our Experts"
                moreInfoButtonLink="/contactus"
            />
            <Footer />
        </div>
    )
}

export default LbclawScreen
