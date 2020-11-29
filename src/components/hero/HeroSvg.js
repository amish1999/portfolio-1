import React from "react";
import styled from "styled-components";
import Photo from "../assets/version_control.svg";
import Zoom from "react-reveal/Zoom";
const HeroSvg = () => {
  return (
    <>
      <Zoom>
        <Image src={Photo} alt='Coder' />
      </Zoom>
    </>
  );
};

export default HeroSvg;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
