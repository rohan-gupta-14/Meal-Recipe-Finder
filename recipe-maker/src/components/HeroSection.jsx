import React from 'react'
import '../css/herosection.css';

import heroImg from '../assets/Hero.jpg'; 
const HeroSection = () => {
  return (
    <div 
      className="hero-container" 
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-content">
        <h1>Find Your Perfect Recipe </h1>
        <button className="hero-btn">Search Recipes</button>
      </div>
    </div>
  );
};


export default HeroSection