import React from 'react'
import '../css/searchBar.css';
const SearchBar = () => {
    return (
        <div>

            <nav class="navbar">
                <div class="navbar-left">
                    <i class="fa-solid fa-utensils logo"></i>
                    <span class="brand">Recipe Finder</span>
                </div>

                <ul class="navbar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Recipe List</a></li>
                    <li><a href="#">Saved Recipes</a></li>
                </ul>

                <div class="navbar-search">
                    <input type="text" placeholder="Search recipes..." />
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </nav>

        </div>
    )
}

export default SearchBar