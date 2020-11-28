import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const Button = ({ url, value }) => {
  return (
    <>
      <Wrapper>
        <Fade bottom>
          <Btn to={url}>{value}</Btn>
        </Fade>
      </Wrapper>
    </>
  );
};

export default Button;

const Wrapper = styled.div`
  margin: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Btn = styled(Link)`
  font-weight: 600;
  padding: 12px 42px;
  color: var(--text);
  text-transform: capitalize;
  transition: 0.35s ease-in-out;
  border: 2px solid var(--text);

  &:hover {
    color: var(--bg);
    border-radius: 50px;
    background-color: var(--text);
  }
`;
