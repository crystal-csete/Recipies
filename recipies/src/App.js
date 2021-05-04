import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";
import { Button, Input, Card } from 'antd';
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
    <Card className="app_container">
      <form onSubmit={getSearch} className="app_form">
        <Input
          type="text"
          placeholder="Search Recipes"
          value={search}
          onChange={updateSearch}
        />
        <Button type="submit">
          Search
        </Button>
      </form>
      <Card>
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
      </Card>
    </Card>
  );
};

export default App;
