import React, { useState } from 'react';
import "../css/home.css";
import SearchBar from '../components/SearchBar';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <div>
      <SearchBar recipes={recipes} setRecipes={setRecipes} />
      {recipes.length === 0 && <HeroSection />}
    </div>
  );
};

export default Home;
