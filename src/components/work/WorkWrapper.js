import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { works } from "../Context";
import Fade from "react-reveal/Fade";

const WorkWrapper = () => {
  return (
    <>
      <Container>
        <Row>
          <Fade bottom>
            {" "}
            {works.map((work, index) => {
              return (
                <Card
                  key={index}
                  link={work.link}
                  title={work.name}
                  content={work.branch}
                />
              );
            })}
          </Fade>
        </Row>
      </Container>
    </>
  );
};

export default WorkWrapper;

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
  flex-wrap: wrap;
  margin: 42px 0px;
  flex-direction: column;

  @media (max-width: 450px) {
    justify-content: space-around;
  }
`;
