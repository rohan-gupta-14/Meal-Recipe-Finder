import React, { useState } from 'react';
import '../css/searchBar.css';

const SearchBar = ({ recipes, setRecipes }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        if (!query.trim()) return;
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const data = await res.json();
            setRecipes(data.meals || []);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    <i className="fa-solid fa-utensils logo"></i>
                    <span className="brand">Recipe Finder</span>
                </div>

                <ul className="navbar-links">
                    <li>
                        <a href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setQuery('');
                                setRecipes([]);
                            }}>
                            Home
                        </a>
                    </li>

                </ul>

                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </nav>

            {/* Recipe Results */}
            {recipes.length > 0 && (
                <div className="recipe-results">
                    {recipes.map((recipe) => (
                        <div key={recipe.idMeal} className="recipe-card">
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-img" />
                            <div className="recipe-info">
                                <h3>{recipe.strMeal}</h3>
                                <div className="recipe-text">
                                    {recipe.strInstructions}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
