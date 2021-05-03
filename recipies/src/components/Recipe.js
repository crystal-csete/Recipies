import React from "react";
import "./Recipe.css";

const Recipe = ({ title, calories, image, ingredients, dishType, cuisineType, source }) => {
  return (
    <div className="recipe_container">
      <h1>{title}</h1>
      <p>{dishType}</p>
      <p>{cuisineType}</p>
      <p>Source: {source}</p>
      <p>Calories: {calories}</p>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;


// make an onClick button to show the ingredient list called "get recipe"