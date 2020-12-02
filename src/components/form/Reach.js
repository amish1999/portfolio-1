import React from "react";
import styled from "styled-components";

import Fade from "react-reveal/Fade";
import { BsPhone } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { GiPositionMarker } from "react-icons/gi";

const Reach = () => {
  return (
    <>
      <Wrapper>
        <TextGroup>
          <Fade bottom>
            <Ddat>
              <GiPositionMarker /> &nbsp; Tunis, Tunisia
            </Ddat>
          </Fade>
          <Fade bottom>
            <Ddat>
              <BsPhone /> &nbsp; +216 58-061-835
            </Ddat>
          </Fade>
          <Fade bottom>
            <Ddat>
              <SiMinutemailer /> &nbsp; waleesebiiy@gmail.com
            </Ddat>
          </Fade>
        </TextGroup>
      </Wrapper>
    </>
  );
};

export default Reach;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    height: 20vh;
  }
`;

const Text = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

const TextGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 25px 0px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Ddat = styled.p`
  widows: 100%;
  display: flex;
  padding: 5px;
  margin: 5px 0px;
  font-size: 1.3rem;
  color: var(--text);

  justify-content: flex-start;
`;
