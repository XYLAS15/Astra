import React from 'react'
import Navbar from './Components/Navbar'
import HeroCarousel from './Components/Hero'
import PosterSection from './Components/PosterSection'
import FootballSection from './Components/FootballSection'
import LadySection from './Components/LadySection'
import Shoes from './Components/Shoes'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <HeroCarousel />
    <PosterSection />
    <FootballSection />
    <LadySection />
    <Shoes />
    <Footer />
    </>
  )
}

export default App