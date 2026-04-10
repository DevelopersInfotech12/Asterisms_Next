import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import OtherHero from '../Components/OtherHero'
import CareerComp from '../Components/CareerComp'

const CareerScreen = () => {
  return (
    <div>
      <Navbar/>
       <OtherHero   title = "Careers"
  subtitle ="Explore"/>
     <CareerComp/>
      <Footer/>
    </div>
  )
}

export default CareerScreen
