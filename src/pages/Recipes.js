import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos para o container principal
const RecipesContainer = styled.div`
  text-align: center;
`;

// Estilos para o título da página
const RecipesTitle = styled.h1`
  font-size: 32px;
  color: #333333;
  margin-bottom: 20px;
`;

// Estilos para a lista de receitas
const RecipesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// Estilos para cada item de receita
const RecipeItem = styled.li`
  background-color: #cae0c3;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

// Estilos para o título da receita
const RecipeTitle = styled.h2`
  font-size: 24px;
  color: #333333;
  margin-bottom: 10px;
`;

// Estilos para a descrição da receita
const RecipeSummary = styled.p`
  color: #666666;
  margin-bottom: 20px;
`;

// Estilos para a imagem da receita
const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin-bottom: 20px;
`;

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // API key for Spoonacular
        const spoonacularApiKey = '47012111a835468194b94aab3ee11d34';
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?query=bolo&apiKey=${spoonacularApiKey}`
        );
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar receitas do Spoonacular:', error);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    const fetchMoreRecipes = async () => {
      try {
        // API key for Food2Fork
        const food2forkApiKey = 'c99e72f413msh6d0e8ca6aee8f51p1b5f3bjsnfca74b46e024';
        const response = await axios.get(
          `https://www.food2fork.com/api/search?key=${food2forkApiKey}&q=bolo`
        );
        setRecipes((prevRecipes) => [...prevRecipes, ...response.data.recipes]);
      } catch (error) {
        console.error('Erro ao buscar receitas do Food2Fork:', error);
      }
    };

    fetchMoreRecipes();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <RecipesContainer>
      <RecipesTitle>Receitas</RecipesTitle>
      <SearchInput
        type="text"
        placeholder="Digite o nome da receita..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <RecipesList>
        {filteredRecipes.map((recipe) => (
          <RecipeItem key={recipe.id}>
            <RecipeTitle>{recipe.title}</RecipeTitle>
            <RecipeSummary>{recipe.summary}</RecipeSummary>
            <Link to={`/recipes/${recipe.id}`}>
              <RecipeImage src={recipe.image} alt={recipe.title} />
            </Link>
          </RecipeItem>
        ))}
      </RecipesList>
    </RecipesContainer>
  );
};

export default Recipes;
