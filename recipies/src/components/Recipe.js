import React from "react";
import "./Recipe.css";
import { Card } from "antd";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  dishType,
  cuisineType,
  source,
}) => {
  return (
    <div className="recipe_container">
      <Card className="card_container" title={title}>
        <Card>
          <div className="image">
            <img src={image} alt="food item" />

            <p>Type of Dish: {dishType}</p>
            <p>Type of Cuisine: {cuisineType}</p>
            <p>Source: {source}</p>
            <p>Calories: {calories}</p>
          </div>

          <ol>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
        </Card>
      </Card>
    </div>
  );
};

export default Recipe;

// make an onClick button to show the ingredient list called "get recipe"
