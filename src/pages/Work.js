import React from "react";
import styled from "styled-components";

import Article from "../components/Article";
import WorkWrapper from "../components/work/WorkWrapper";

const Work = () => {
  return (
    <>
      <Wrapper>
        <Container1>
          <Article />
        </Container1>
        <Container2>
          <WorkWrapper />
        </Container2>
      </Wrapper>
    </>
  );
};

export default Work;

const Wrapper = styled.div`
  z-index: 0;
  max-width: 100%;
  min-height: 100vh;
`;

const Container1 = styled.div`
  z-index: 0;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Container2 = styled.div`
  z-index: 0;
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
