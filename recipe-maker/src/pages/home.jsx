import React from 'react'
import "../css/home.css"
import SearchBar from '../components/SearchBar'
import HeroSection from '../components/HeroSection'

const home = () => {
  return (
    <div>
      <SearchBar />
      <HeroSection/>
    </div>
  )
}

export default home