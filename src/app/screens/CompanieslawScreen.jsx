import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import Hero from '../Components/Hero'
import BlogsPage from '../Components/BlogsPage'
import Companieslaw from '../Components/Companieslaw'
import OtherPracticeAreas from '../Components/OtherPracticeAreas'
import OtherHero from '../Components/OtherHero'


const CompanieslawScreen = () => {
    return (
        <div>
            <Navbar />
               <OtherHero   title = "Companies law"
  subtitle ="Explore"/>
            <Companieslaw />
            <OtherPracticeAreas currentPractice="companies-law" />
            <Footer />
        </div>
    )
}

export default CompanieslawScreen
