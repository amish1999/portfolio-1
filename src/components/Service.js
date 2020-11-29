import React from "react";
import styled from "styled-components";

import Card from "./cards/Card";
import CardHeader from "./cards/CardHeader";
import { CardService } from "./Context";

const Service = () => {
  return (
    <>
      <Container>
        <CardHeader header='my services' />
        <Row>
          {CardService.map((card, index) => {
            return (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                content={card.content}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Service;

const Container = styled.div`
  width: 70%;
  min-height: 100%;
  display: flex;
  margin: 75px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1366px) {
    width: 90%;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;
