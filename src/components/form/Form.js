import React from "react";
import styled from "styled-components";
import Contract from "./Contract";
import Reach from "./Reach";

const Form = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Reach />
          </Col>
          <Col2>
            <Contract />
          </Col2>
        </Row>
      </Container>
    </>
  );
};

export default Form;

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
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const Col = styled.div`
  width: 100%;
  display: flex;
  margin: 25px 0px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: red;
`;

const Col2 = styled.div`
  width: 100%;
  display: flex;
  margin: 25px 0px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: blueviolet;
`;
