import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Recipes.css';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const apiKey = '47012111a835468194b94aab3ee11d34';
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?query=bolo&apiKey=${apiKey}`
        );
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar receitas:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="recipes-container">
      <h1>Receitas</h1>
      <ul className="recipes-list">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="recipes-list-item">
            <h2>{recipe.title}</h2>
            <p>{recipe.summary}</p>
            <Link to={`/recipes/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;