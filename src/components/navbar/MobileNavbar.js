import React from "react";
import styled from "styled-components";
import { useMenuContext } from "../../state";
import { useScrollFreeze } from "../../hooks";
import NavLinks from "./NavLinks";
import Flip from "react-reveal/Flip";

const MobileNavbar = () => {
  const { isMenuOpen } = useMenuContext();
  useScrollFreeze(isMenuOpen);
  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <Flip>
            <NavLinks />
          </Flip>
        </MobileNav>
      )}
    </>
  );
};

export default MobileNavbar;

const MobileNav = styled.nav`
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: var(--bg);
`;
