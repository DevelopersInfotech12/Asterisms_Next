import React from 'react'
import Navbar from '../Components/Navbar'
import OtherHero from '../Components/OtherHero'
import OtherPracticeAreas from '../Components/OtherPracticeAreas'
import Footer from '../Components/Footer'
import CriminalLawComp from '../Components/CriminalLawComp'

const CriminalLawScreen = () => {
  return (
     <div>
            <Navbar />
               <OtherHero   title = "Criminal Law"
  subtitle ="Explore"/>
            <CriminalLawComp />
            <OtherPracticeAreas currentPractice="Criminal-law" />
            <Footer />
        </div>
  )
}

export default CriminalLawScreen
