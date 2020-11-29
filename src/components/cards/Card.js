import React from "react";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  primary: "#FF4136",
  secondary: "#a162e8"
};

const Card = ({ icon, title, content }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CardBlock>
          <Icon>{icon}</Icon>
          <Title>{title}</Title>
          <Text>{content}</Text>
        </CardBlock>
      </ThemeProvider>
    </>
  );
};

export default Card;

const CardBlock = styled.div`
  width: 400px;
  height: 200px;
  padding: 15px;
  margin: 15px 5px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  background-color: var(--text);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  font-size: 24px;
  color: ${props => props.theme.primary};
`;
const Title = styled.h1`
  font-weight: 600;
  color: var(--bg);
  padding: 10px 0px;
  font-size: 1.3rem;
  text-transform: uppercase;
`;
const Text = styled.h3`
  color: var(--bg);
  letter-spacing: 1px;
  line-height: 25px;
`;
