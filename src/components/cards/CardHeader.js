import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
const CardHeader = ({ header }) => {
  return (
    <>
      <TextGroup>
        <Fade bottom>
          <Text>{header}</Text>
        </Fade>
      </TextGroup>
    </>
  );
};

export default CardHeader;

const TextGroup = styled.div`
  width: 100%;
  margin: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
