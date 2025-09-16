import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import Hero from '../Components/Hero'
import BlogsPage from '../Components/BlogsPage'
import Bankinglaw from '../Components/Bankinglaw'
import OtherPracticeAreas from '../Components/OtherPracticeAreas'
import OtherHero from '../Components/OtherHero'


const BankruptcyandInsolvencyScreen = () => {
    return (
        <div>
            <Navbar />
               <OtherHero   title = "Banking Law"
  subtitle ="Explore"/>
            <Bankinglaw />
            <OtherPracticeAreas currentPractice="banking-law" />
            <Footer />
        </div>
    )
}

export default BankruptcyandInsolvencyScreen
