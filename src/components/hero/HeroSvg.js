import React from "react";
import styled from "styled-components";

import Zoom from "react-reveal/Zoom";
const HeroSvg = ({ photo, alt }) => {
  return (
    <>
      <Zoom>
        <Image src={photo} alt={alt} />
      </Zoom>
    </>
  );
};

export default HeroSvg;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
