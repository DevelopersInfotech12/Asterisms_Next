import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import Hero from '../Components/Hero'
import BlogsPage from '../Components/BlogsPage'
import BankruptcyandInsolvency from '../Components/BankruptcyandInsolvency'
import OtherPracticeAreas from '../Components/OtherPracticeAreas'
import OtherHero from '../Components/OtherHero'


const BankruptcyandInsolvencyScreen = () => {
    return (
        <div>
            <Navbar />
               <OtherHero   title = "Bankruptcy and Insolvency Law"
  subtitle ="Explore"/>
            <BankruptcyandInsolvency />
            <OtherPracticeAreas currentPractice="bankruptcy-insolvency" />
            <Footer />
        </div>
    )
}

export default BankruptcyandInsolvencyScreen
