import React from 'react'
import Header from '../components/Header'
import Client from '../components/Client'
import About from '../components/About'
import Services from '../components/Services'
import Works from '../components/Works'
import './home.css'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
     <Header /> 
     <Client />
     <About />
     <Services />
     <Works />
     <Testimonials />
     <CTA />
    <Footer />
    </main>
  )
}

export default Home
