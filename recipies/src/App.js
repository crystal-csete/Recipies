import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";
import axios from 'axios';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

    useEffect(() => {
      axios
        .get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then((res) => {
          console.log(res.data)
          setRecipes(res.data.hits)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [query])

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipies">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            dishType={recipe.recipe.dishType}
            cuisineType={recipe.recipe.cuisineType}
            source={recipe.recipe.source}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
