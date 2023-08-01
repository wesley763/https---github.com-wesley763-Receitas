import React from 'react';
import { Container, RecipeItem } from '../styles';
import recipesData from '../data/recipes.json';


const RecipeList = () => {
  return (
    <Container>
      <h3>Lista de Receitas de Bolos</h3>
      {recipesData.recipes.map((recipe) => (
        <RecipeItem key={recipe.id}>
          <h4>{recipe.name}</h4>
          <p>{recipe.description}</p>
        </RecipeItem>
      ))}
    </Container>
  );
};

export default RecipeList;
