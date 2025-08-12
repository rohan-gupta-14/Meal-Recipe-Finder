import React from 'react'
import '../css/herosection.css';

import heroImg from '../assets/Hero.jpg'; 
const HeroSection = () => {
 return (
    <div className="hero-container">
      {/* Blurred background image */}
      <img src={heroImg} alt="Hero" className="hero-image" />

      {/* Text and button on top */}
      <div className="hero-content">
        <h1>From Kitchen to Heart-Discover Recipes You'll Love!</h1>
        <button className="hero-btn">Search Recipes</button>
      </div>
    </div>
  );
};


export default HeroSection