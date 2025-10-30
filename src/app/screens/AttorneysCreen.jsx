import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Attorneyscomp from '../Components/Attorneyscomp'
import OtherHero from '../Components/OtherHero'

const AttorneysCreen = () => {
  return (
    <div>
      <Navbar/>
       <OtherHero   title = "Our Attorney"
  subtitle ="Explore"/>
      <Attorneyscomp/>
      <Footer/>
    </div>
  )
}

export default AttorneysCreen
