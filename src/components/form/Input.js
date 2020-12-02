import React from "react";
import styled from "styled-components";

const Input = ({ tt, nn, ph }) => {
  return (
    <>
      <InputGroup>
        <EnterData required type={tt} name={nn} placeholder={ph} />
      </InputGroup>
    </>
  );
};

export default Input;

const InputGroup = styled.div``;
const EnterData = styled.input``;
