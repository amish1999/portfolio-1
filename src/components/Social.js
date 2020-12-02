import React from "react";
import styled from "styled-components";
import { socialIcon } from "./Context";
import Fade from "react-reveal/Fade";

const Social = () => {
  return (
    <>
      <Fade bottom cascade>
        <List>
          {socialIcon.map((item, index) => {
            return (
              <Item key={index}>
                <Linker target={"_blank"} href={item.link}>
                  {item.name}
                </Linker>
              </Item>
            );
          })}
        </List>
      </Fade>
    </>
  );
};

export default Social;

const List = styled.ul`
  width: 250px;
  display: flex;
  list-style: none;
  margin: 15px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Item = styled.li``;
const Linker = styled.a`
  font-size: 2rem;
  color: var(--text);
`;
