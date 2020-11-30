import React from "react";
import styled from "styled-components";

import Aside from "../components/Aside";
import Skills from "../components/Skills";
import Made from "../components/Made";
import Carousel from "../components/carousel/Carousel";

const About = () => {
  return (
    <>
      <Container1>
        <Aside />
      </Container1>
      <Container2>
        <Skills />
      </Container2>
      <Container1>
        <Carousel />
      </Container1>
      <Container3>
        <Made />
      </Container3>
    </>
  );
};

export default About;

const Container1 = styled.div`
  z-index: 0;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Container2 = styled.div`
  z-index: 0;
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Container3 = styled.div`
  z-index: 0;
  display: flex;
  max-width: 100%;
  min-height: 50vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
