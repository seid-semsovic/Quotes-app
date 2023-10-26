import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  background-color: #f0f0f0; /* Postavite boju pozadine prema vašem izboru */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  background-color: #007bff; /* Postavite boju gumba prema vašem izboru */
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Title>DOBRODOŠLI NA STRANICU SA CITATIMA</Title>
      <Description>
        Ovdje možete pronaći inspirativne citate za svaki dan.
      </Description>
      <ButtonContainer>
        <Button to="/register">Registriraj se</Button>
        <Button to="/">Prijavi se</Button>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default HomePage;
