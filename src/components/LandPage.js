import React from "react";
import styled from "styled-components";

import Plx from "react-plx";
import Name from "./hero/Name";
import Button from "./Button";
import { heroInfo } from "./Context";
import { textData } from "./parallax/TextData";

const LandPage = () => {
  return (
    <>
      <Container>
        <Plx className='StickyText' parallaxData={textData}>
          <Name
            name={heroInfo.name}
            text1={heroInfo.hero1}
            text2={heroInfo.hero2}
          />
          <BtnBox>
            <Button url='/about' value='see my approche' />
          </BtnBox>
        </Plx>
      </Container>
    </>
  );
};

export default LandPage;

const Container = styled.div`
  width: 90%;
  height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 100vh;
  }
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
