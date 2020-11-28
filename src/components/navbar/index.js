import React from "react";
import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNavbar";

const Navbar = () => {
  return (
    <Nav>
      <DesktopNav />
      <MobileNav />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  z-index: 99;
  display: flex;
  flex-flow: column nowrap;
`;
