// src/pages/RecipeDetailsPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// Importe o arquivo de estilos RecipeDetailsPage.css

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const apiKey = '47012111a835468194b94aab3ee11d34';
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes da receita:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <h2 className="recipe-title">{recipe.title}</h2>
      <p className="recipe-summary">{recipe.summary}</p>
      <h3>Ingredientes:</h3>
      <ul className="ingredient-list">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id} className="ingredient-item">
            {ingredient.original}
          </li>
        ))}
      </ul>
      <h3>Instruções:</h3>
      <div
        className="recipe-instructions"
        dangerouslySetInnerHTML={{ __html: recipe.instructions }}
      ></div>
      <div className="back-link">
        <a href="/recipes">Voltar para a lista de receitas</a>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
