const axios = require('axios');

const apiKey = '47012111a835468194b94aab3ee11d34';

const fetchRecipesFromSpoonacular = async () => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=bolo&apiKey=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar receitas da Spoonacular:', error);
    return [];
  }
};

module.exports = { fetchRecipesFromSpoonacular };
