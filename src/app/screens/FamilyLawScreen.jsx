import React from 'react'
import FamilyLawComp from '../Components/FamilyLawComp'
import Navbar from '../Components/Navbar'
import OtherHero from '../Components/OtherHero'
import OtherPracticeAreas from '../Components/OtherPracticeAreas'
import Footer from '../Components/Footer'

const FamilyLawScreen = () => {
  return (
     <div>
            <Navbar />
               <OtherHero   title = "Matrimonial / Family Law"
  subtitle ="Explore"/>
            <FamilyLawComp />
            <OtherPracticeAreas currentPractice="Family-law" />
            <Footer />
        </div>
  )
}

export default FamilyLawScreen
