import React from "react";
import styled from "styled-components";

import HeroText from "./hero/HeroText";
import SkillCard from "./skills/SkillCard";

const Skills = () => {
  return (
    <>
      <Container>
        <Row>
          <HeroText text='my skills' />
          <SkillCard />
        </Row>
      </Container>
    </>
  );
};

export default Skills;

const Container = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1366px) {
    width: 90%;
  }
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 450px) {
    align-items: center;
    justify-content: center;
  }
`;
