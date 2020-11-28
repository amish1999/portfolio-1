import React from "react";
import Zoom from "react-reveal/Zoom";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  primary: "#FF4136",
  secondary: "#a162e8"
};

const Name = ({ name, text1, text2 }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeroGroup>
          <Zoom>
            <HeroTitle>{name}</HeroTitle>
          </Zoom>
          <Zoom>
            <HeroUnder>
              {text1}
              {text2}
            </HeroUnder>
          </Zoom>
        </HeroGroup>
      </ThemeProvider>
    </>
  );
};

export default Name;

const HeroGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeroTitle = styled.h1`
  font-size: 6vw;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 9vw;
  }

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  background-image: linear-gradient(
    271deg,
    ${props => props.theme.primary},
    ${props => props.theme.secondary}
  );
`;

const HeroUnder = styled.p`
  font-size: 150%;
  font-weight: 500;
  margin: 15px 0px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;
  @media (max-width: 768px) {
    font-size: 110%;
    font-weight: 400;
  }
`;
