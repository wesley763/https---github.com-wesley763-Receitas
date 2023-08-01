import React from 'react';

const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instruções:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
