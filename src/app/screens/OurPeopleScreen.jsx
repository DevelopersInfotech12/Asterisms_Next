import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutusSection from '../Components/AboutusSection'
import Hero from '../Components/Hero'
import AboutIntro from '../Components/AboutIntro'
import ExpertAttorneys from '../Components/ExpertAttornery'
import OtherHero from '../Components/OtherHero'

const AboutScreen = () => {
    return (
        <div>
            <Navbar />
            <OtherHero title="Our Expert Attorneys"
                subtitle="Explore" />
            <ExpertAttorneys />
            <Footer />
        </div>
    )
}

export default AboutScreen
