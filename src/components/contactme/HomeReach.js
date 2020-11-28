import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Plx from "react-plx";
import Phone from "./Phone";

import "../parallax/docs.css";
import { contentData } from "../parallax/ContentData";
import { phoneData } from "../parallax/PhoneData";

const HomeReach = () => {
  return (
    <>
      <Plx className='Phone' parallaxData={phoneData}>
        <Phone tag='Phone-svg' color='var(--text)' />
        <div className='Phone-content'>
          <Plx className='Phone-contentPlx' parallaxData={contentData}>
            <div className='Phone-contentSection'>
              <Linker to='/contact'>Say Hi!</Linker>
            </div>
          </Plx>
        </div>
      </Plx>
    </>
  );
};

export default HomeReach;

const Linker = styled(Link)`
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
