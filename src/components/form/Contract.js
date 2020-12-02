import React from "react";
import styled from "styled-components";

import useSound from "use-sound";
import Fade from "react-reveal/Fade";
import BtnClick from "../assets/btn_click.wav";
import Input from "./Input";

const Contract = () => {
  const [clicks] = useSound(BtnClick);

  return (
    <>
      <Wrapper>
        <Fade bottom>
          <Text>for business</Text>
        </Fade>
        <FormGroup>
          <Form
            name='contact'
            action='/contact'
            method='POST'
            data-netlify='true'>
            <input type='hidden' name='form-name' value='contact' />
            <Input tt='text' nn='name' ph='your name' />
            <Input tt='email' nn='email' ph='your email' />
            <Button onClick={clicks} type='submit'>
              for hiring
            </Button>
          </Form>
        </FormGroup>
      </Wrapper>
    </>
  );
};

export default Contract;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

const FormGroup = styled.div`
  width: 100%;
  height: 100%;
  margin: 25px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Button = styled.button`
  outline: none;
  font-weight: 600;
  margin: 25px 0px;
  padding: 12px 42px;
  color: var(--text);
  background: none;
  text-transform: capitalize;
  transition: 0.35s ease-in-out;
  border: 2px solid var(--text);

  &:hover {
    color: var(--bg);
    border-radius: 50px;
    background-color: var(--text);
  }
`;
