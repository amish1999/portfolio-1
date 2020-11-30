import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useMenuContext } from "../../state";
import { useTheme } from "../../hooks";
import Icon from "../Icon";

import useSound from "use-sound";
import BtnLight from "../assets/light.wav";
import BtnClick from "../assets/btn_click.wav";

export const links = ["about", "contact", "work"];

const DesktopNavLinks = () => {
  const { closeMenu } = useMenuContext();
  const [theme, toggleTheme] = useTheme();

  const [lights] = useSound(BtnLight);
  const [clicks] = useSound(BtnClick);

  return (
    <NavLinksWrapper className='nav-links'>
      {links.map(link => (
        <li key={link} onClick={clicks}>
          <Linker
            activeStyle={{
              color: "#FF4136"
            }}
            to={`/${link}`}
            className='link'
            onClick={closeMenu}>
            {link}
          </Linker>
        </li>
      ))}
      <li onClick={lights}>
        <button onClick={toggleTheme}>
          <Icon name={theme === "dark" ? "day" : "night"} />
        </button>
      </li>
    </NavLinksWrapper>
  );
};

export default DesktopNavLinks;

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  li:not(:last-child) {
    margin-right: 26px;
  }

  li:last-child {
    margin-left: auto;
  }

  button {
    background: transparent;
    outline: none;
    border: none;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      z-index: 99;
      padding: 30px 12px;
      margin: 0 !important;
    }
  }
`;

export const Linker = styled(NavLink)`
  position: relative;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--text);
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: var(--text);
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;
