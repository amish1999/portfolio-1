import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Fade from "react-reveal/Fade";
import { slideShow } from "../Context";
import Linker from "./Linker";

const Carousel = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          {" "}
          {slideShow.map((slide, index) => {
            return <Image key={index} src={slide.img} alt={slide.alt} />;
          })}{" "}
        </Row>
      </Container>
      <Linker />
    </>
  );
};

export default Carousel;

const Container = styled.div`
  width: 70%;
  display: flex;
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
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 40%;
  height: 40%;
  margin: 25px;
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;
