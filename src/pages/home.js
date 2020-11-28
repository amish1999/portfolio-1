import React from "react";
import styled from "styled-components";

import LandPage from "../components/LandPage";
import HomeReach from "../components/contactme/HomeReach";
import BackgroundSvg from "../components/assets/ascii-pattern-tall.svg";

const home = () => {
  return (
    <>
      <Container>
        <LandPage />
      </Container>
      <Container1>
        <HomeReach />
      </Container1>
    </>
  );
};

export default home;

const Container = styled.div`
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

const Container1 = styled.div`
  z-index: 0;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--bg);
`;

/* 

import { Controller, Scene } from "react-scrollmagic";

<Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
          <Scene pin>
            <Container>
              <LandPage />
            </Container>
          </Scene>
          <Scene pin>
            <Container1>hello</Container1>
          </Scene>
        </Controller>

*/
