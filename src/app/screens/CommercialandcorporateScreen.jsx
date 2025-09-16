import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import Hero from '../Components/Hero'
import BlogsPage from '../Components/BlogsPage'
import CommercialandCorporate from '../Components/CommercialandCorporate'
import OtherPracticeAreas from '../Components/OtherPracticeAreas'
import OtherHero from '../Components/OtherHero'


const CommercialandcorporateScreen = () => {
    return (
        <div>
            <Navbar />
               <OtherHero   title = "Commercial and Corporate Law"
  subtitle ="Explore"/>
            <CommercialandCorporate />
            <OtherPracticeAreas currentPractice="commercial-corporate" />
            <Footer />
        </div>
    )
}

export default CommercialandcorporateScreen
