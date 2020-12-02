import React from "react";
import styled from "styled-components";

const Input = ({ tt, nn, ph }) => {
  return (
    <>
      <InputGroup>
        <EnterData required type={tt} name={nn} placeholder={ph} />
      </InputGroup>{" "}
    </>
  );
};

export default Input;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  margin: 25px 0px;
  align-items: center;
  justify-content: center;
`;
const EnterData = styled.input`
  width: 80%;
  outline: none;
  padding: 15px;
  background: none;
  color: var(--text);
  letter-spacing: 1px;
  text-transform: capitalize;
  border: 2px solid var(--text);
`;
