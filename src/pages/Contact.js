import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <Container>
        <h1>Contact</h1>
      </Container>
    </>
  );
};

export default Contact;

const Container = styled.div`
  z-index: 0;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
