import React from "react";
import styled from "styled-components";
import HeroDiss from "./hero/HeroDiss";
import HeroText from "./hero/HeroText";
import Button from "./Button";
import HeroSvg from "./hero/HeroSvg";

const Section = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <HeroText />
            <HeroDiss />
            <Button url='/work' value='about my work' />
          </Col>
          <Col2>
            <HeroSvg />
          </Col2>
        </Row>
      </Container>
    </>
  );
};

export default Section;

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
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Col = styled.div`
  width: 100%;
  display: flex;
  margin: 25px 0px;
  flex-direction: column;
  justify-content: flex-start;
`;

const Col2 = styled.div`
  width: 100%;
  display: flex;
  margin: 25px 0px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
