import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetailPage from './pages/RecipeDetailPage';
import NotFound from './components/NotFound';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import CepForm from './pages/Cep';



const App = () => {
  return (
       
    <BrowserRouter>
      
  
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetailPage />} />
          <Route path="/CepForm" element={<CepForm />} />
          <Route path="/AboutPage" element= {<AboutPage/>}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
