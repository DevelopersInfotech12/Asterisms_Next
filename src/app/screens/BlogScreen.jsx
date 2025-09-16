import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import Hero from '../Components/Hero'
import BlogsPage from '../Components/BlogsPage'
import OtherHero from '../Components/OtherHero'


const AboutScreen = () => {
    return (
        <div>
            <Navbar />
             <OtherHero   title = "Our Blogs"
  subtitle ="Explore"/>
            <BlogsPage />
            <Footer />
        </div>
    )
}

export default AboutScreen
