import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: justify;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;

const Summary = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

const IngredientItem = styled.li`
  font-size: 16px;
  color: #444;
  margin-bottom: 8px;
`;

const Instructions = styled.div`
  font-size: 16px;
  color: #222;
  line-height: 1.6;
  margin-bottom: 20px;

  p {
    margin-bottom: 10px;
  }
`;

const BackLink = styled.div`
  a {
    font-size: 16px;
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

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
    <Container>
      <Title>{recipe.title}</Title>
      <Summary>{recipe.summary}</Summary>
      <h3>Ingredientes:</h3>
      <IngredientsList>
        {recipe.extendedIngredients.map((ingredient) => (
          <IngredientItem key={ingredient.id}>{ingredient.original}</IngredientItem>
        ))}
      </IngredientsList>
      <h3>Instruções:</h3>
      <Instructions
        dangerouslySetInnerHTML={{ __html: recipe.instructions }}
      ></Instructions>
      <BackLink>
        <a href="/recipes">Voltar para a lista de receitas</a>
      </BackLink>
    </Container>
  );
};

export default RecipeDetailsPage;
