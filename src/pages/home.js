import React from "react";
import styled from "styled-components";

import Made from "../components/Made";
import Section from "../components/Section";
import LandPage from "../components/LandPage";
import HomeReach from "../components/contactme/HomeReach";
import BackgroundSvg from "../components/assets/ascii-pattern-tall.svg";

const home = () => {
  return (
    <>
      <Container1>
        <LandPage />
      </Container1>
      {/*   */}
      <Container1>
        <Section />
      </Container1>
      {/*   */}
      <Container1>
        <HomeReach />
      </Container1>
      {/*   */}
      <Container2>
        <Made />
      </Container2>
    </>
  );
};

export default home;

const Container1 = styled.div`
  z-index: 0;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: url(${BackgroundSvg});
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  will-change: transform;
`;

const Container2 = styled.div`
  z-index: 0;
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: url(${BackgroundSvg});
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;
