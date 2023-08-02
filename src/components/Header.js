
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; 

const Header = () => {
  return (
    <header>
      <div className="logo">
     
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Receitas</Link>
          </li>
          <li>
            <Link to="/CepForm">CEP</Link>
          </li>
          <li>
            <Link to="/AboutPage">Sobre</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
