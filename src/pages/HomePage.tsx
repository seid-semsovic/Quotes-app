import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  background-color: #f1f1f5; /* Postavite boju pozadine prema vašem izboru */
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
      <Title>WELCOME TO THE PAGE OF QUOTES</Title>
      <Description>
        Here you can find inspirative quotes for every day.
      </Description>
      <ButtonContainer>
        <Button to="/register">Regsiter</Button>
        <Button to="/">Log In</Button>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default HomePage;
