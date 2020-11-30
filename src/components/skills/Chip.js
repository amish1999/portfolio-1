import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Fade from "react-reveal/Fade";

const theme = {
  primary: "#FF4136",
  secondary: "#a162e8"
};

const Chip = ({ icon, title }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Fade bottom>
          <ChipBlock>
            <Icon>{icon}</Icon>
            <Title>{title}</Title>
          </ChipBlock>
        </Fade>
      </ThemeProvider>
    </>
  );
};

export default Chip;

const ChipBlock = styled.div`
  height: 56px;
  padding: 15px;
  margin: 15px 5px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  background-color: var(--text);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

  @media (max-width: 450px) {
    height: 42;
    width: 140px;
    padding: 10px;
    margin: 10px 5px;
  }
`;

const Icon = styled.div`
  font-size: 24px;
  color: ${props => props.theme.primary};
`;
const Title = styled.h3`
  margin: 0px 15px;
  font-weight: 600;
  color: var(--bg);
  font-size: 1.2rem;
  text-transform: uppercase;

  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;
