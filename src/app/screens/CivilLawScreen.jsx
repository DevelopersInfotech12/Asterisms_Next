import React from 'react'
import CivilLawComp from '../Components/CivilLawComp'
import Navbar from '../Components/Navbar'
import OtherHero from '../Components/OtherHero'
import OtherPracticeAreas from '../Components/OtherPracticeAreas'
import Footer from '../Components/Footer'

const CivilLawScreen = () => {
  return (
     <div>
            <Navbar />
               <OtherHero   title = "Civil Law"
  subtitle ="Explore"/>
            <CivilLawComp />
            <OtherPracticeAreas currentPractice="Civil-law" />
            <Footer />
        </div>
  )
}

export default CivilLawScreen
