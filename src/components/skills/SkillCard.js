import React from "react";
import styled from "styled-components";
import Chip from "./Chip";

import { skillsSet } from "../Context";

const SkillCard = () => {
  return (
    <>
      <Container>
        <Row>
          {skillsSet.map((set, index) => {
            return <Chip key={index} icon={set.poly} title={set.tool} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default SkillCard;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 42px 0px;

  @media (max-width: 450px) {
    justify-content: space-around;
  }
`;
