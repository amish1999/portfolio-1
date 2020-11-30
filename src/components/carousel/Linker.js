import React from "react";
import useSound from "use-sound";
import styled from "styled-components";

import Fade from "react-reveal/Fade";
import BtnClick from "../assets/btn_click.wav";
const Linker = () => {
  const [clicks] = useSound(BtnClick);

  return (
    <>
      <Wrapper>
        <Fade bottom>
          <Btn
            onClick={clicks}
            target={"_blank"}
            href='https://instagram.com/wale_sebii'>
            See My Insatgram
          </Btn>
        </Fade>
      </Wrapper>
    </>
  );
};

export default Linker;

const Wrapper = styled.div`
  margin: 32px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Btn = styled.a`
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
