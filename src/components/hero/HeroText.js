import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Fade from "react-reveal/Fade";

const theme = {
  primary: "#FF4136",
  secondary: "#a162e8"
};

const HeroText = ({ text }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Fade bottom>
          <TextGroup>
            <Text>{text}</Text>
          </TextGroup>{" "}
        </Fade>
      </ThemeProvider>
    </>
  );
};

export default HeroText;

const TextGroup = styled.div`
  display: flex;
  padding: 15px 0;
  max-width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

const Text = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
