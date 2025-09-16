import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import ContactUs from '../Components/ContactUs'
import OtherHero from '../Components/OtherHero'


const ContactusScreen = () => {
    return (
        <div>
            <Navbar />
              <OtherHero   title = "Contact Us"
  subtitle ="Explore"/>
            <ContactUs/>
            <Footer />
        </div>
    )
}

export default ContactusScreen
