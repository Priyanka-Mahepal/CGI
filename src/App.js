import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Contact from './components/Contacts/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Services from './components/Services/Services'
import Testomonial from './components/Testimonials/Testomonial'
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Header/>
    <Services/>
    <Testomonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App