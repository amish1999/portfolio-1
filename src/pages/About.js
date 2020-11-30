import React from "react";
import styled from "styled-components";

import Aside from "../components/Aside";
import Skills from "../components/Skills";
import Made from "../components/Made";

const About = () => {
  return (
    <>
      <Container1>
        <Aside />
      </Container1>
      <Container2>
        <Skills />
      </Container2>
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
