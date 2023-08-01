// src/pages/Home.js

import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  text-align: center;
`;

const Description = styled.p`
  color: #666;
  font-size: 16px;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Bem-vindo ao Receitas em Geral</Title>
      <Description>
        Seja bem-vindo ao Receitas em Geral, o seu destino para descobrir e compartilhar as melhores receitas! Aqui você encontrará uma variedade incrível de receitas de diferentes culinárias, incluindo pratos salgados, sobremesas deliciosas, bebidas refrescantes e muito mais.

        Nossa plataforma foi criada para unir amantes da culinária e proporcionar uma experiência única na busca por receitas. Navegue pelas categorias e encontre inspirações para o café da manhã, almoço, jantar ou qualquer ocasião especial.

        Além disso, você também pode contribuir com a comunidade e compartilhar suas próprias receitas. Acreditamos que a culinária é uma arte compartilhada, e estamos ansiosos para ver suas criações e dicas úteis.

        Seja você um cozinheiro experiente ou um iniciante na cozinha, estamos aqui para ajudar e inspirar. Então, coloque o avental e vamos começar a explorar o mundo das receitas em geral!

        Aproveite a jornada culinária e desfrute dos momentos deliciosos que as receitas em geral têm para oferecer. Bom apetite!
      </Description>
    </HomeContainer>
  );
};

export default Home;
