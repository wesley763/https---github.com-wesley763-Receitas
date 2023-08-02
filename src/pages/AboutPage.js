import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles';

const AboutContent = styled.div`
  p {
    margin-bottom: 20px;
  
    text-align: justify;
  }
`;

const AboutPage = () => {
  return (
    <Container>
      <h2>Sobre</h2>
      <AboutContent>
        <p>
        Seja bem-vindo ao Receitas em Geral, o seu destino para descobrir e
         compartilhar as melhores receitas! Aqui você encontrará uma variedade
          incrível de receitas de diferentes culinárias, incluindo pratos salgados,
           sobremesas deliciosas, bebidas refrescantes e muito mais. Nossa plataforma 
           foi criada para unir amantes da culinária e proporcionar uma experiência única 
           na busca por receitas.
        </p>
        <p>
        Navegue pelas categorias e encontre inspirações para o café da manhã,
         almoço, jantar ou qualquer ocasião especial. Além disso, você também 
         pode contribuir com a comunidade e compartilhar suas próprias receitas. 
         Acreditamos que a culinária é uma arte compartilhada, e estamos ansiosos
          para ver suas criações e dicas úteis. 
        </p>
        <p>
        Seja você um cozinheiro experiente ou um iniciante na cozinha, 
        estamos aqui para ajudar e inspirar. Então, coloque o avental e vamos
         começar a explorar o mundo das receitas em geral! Aproveite a jornada
          culinária e desfrute dos momentos deliciosos que as receitas em geral
           têm para oferecer. Bom apetite!
        </p>
      </AboutContent>
    </Container>
  );
};

export default AboutPage;
