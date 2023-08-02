import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333333;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 300px;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Novo componente DataContainer com largura máxima de 500px e cor única
const DataContainer = styled.div`
  background-color: #00FF7F;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

`;

const CepForm = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
      setError(null);
    } catch (error) {
      setAddress(null);
      setError('CEP não encontrado. Verifique o número digitado.');
    }
  };

  return (
    <Container>
      <Title>Consultar Endereço por CEP</Title>
      <Form onSubmit={handleSubmit}>
        <Label><h3>Digite o CEP:</h3></Label>
        <Input type="text" value={cep} onChange={handleCepChange} />
        <Button type="submit">Buscar</Button>
      </Form>

      {address && (
        <DataContainer>
          <Title>Dados do Endereço</Title>
          <p>CEP: {address.cep}</p>
          <p>Logradouro: {address.logradouro}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Cidade: {address.localidade}</p>
          <p>Estado: {address.uf}</p>
        </DataContainer>
      )}

      {error && <p>{error}</p>}
    </Container>
  );
};

export default CepForm;
