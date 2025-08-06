import React from 'react'
import '../css/herosection.css';

import heroImg from '../assets/Hero.jpg'; 
const HeroSection = () => {
  return (
    <div className='hero-container'>
        <img src={heroImg} alt="Hero" className="hero-image" />
    </div>
  )
}

export default HeroSection