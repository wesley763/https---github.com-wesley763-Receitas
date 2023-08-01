// src/components/Menu.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Importe o arquivo de estilos Menu.css

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Página Inicial</Link>
        </li>
        <li>
          <Link to="/recipes">Receitas de Bolos</Link>
        </li>
        <li>
          {/* Adicione a classe "login" para aplicar estilo específico */}
          <Link to="/login" className="login">
            Entrar
          </Link>
        </li>
        <li>
          {/* Adicione a classe "cadastro" para aplicar estilo específico */}
          <Link to="/cadastro" className="cadastro">
            Cadastre-se
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
