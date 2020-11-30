import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useMenuContext } from "../../state";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";
import { useScroll } from "../../hooks";
import useSound from "use-sound";
import BtnClick from "../assets/btn_click.wav";

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isScrolled } = useScroll();
  const [clicks] = useSound(BtnClick);

  return (
    <DesktopNav isScrolled={isScrolled}>
      <Link onClick={clicks} to='/' className='logo'>
        walees
      </Link>
      <NavLinks />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0} />
    </DesktopNav>
  );
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background: var(--bg);
  color: var(--text);
  transition: all 150ms linear;

  ${props =>
    props.isScrolled &&
    css`
      background: var(--headerBg);
      box-shadow: var(--headerBoxShadow);
    `}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 60px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
    z-index: 10;
  }

  .logo {
    flex: 2;
    color: #ff4136;
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .hamburger-react {
    display: none;
    & > div > div {
      background: var(--text) !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
      z-index: 1000;
    }
  }
`;
