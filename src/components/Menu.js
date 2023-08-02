import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

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
          {}
          <Link to="/login" className="login">
            Entrar
          </Link>
        </li>
        <li>
          {}
          <Link to="/cadastro" className="cadastro">
            Cadastre-se
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
