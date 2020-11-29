import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Fade from "react-reveal/Fade";
import { SiElixir } from "react-icons/si";
import { ItemArray } from "./Context";

const theme = {
  primary: "#FF4136",
  secondary: "#a162e8"
};

const Made = () => {
  const header = "porject was made possible with: ";

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Content>
            <Fade>
              <Row>
                <Code>
                  {" "}
                  <Potion /> {header}
                </Code>
                <List>
                  {ItemArray.map((item, index) => {
                    return (
                      <Item key={index}>
                        <Code>{item.list}</Code>
                      </Item>
                    );
                  })}
                </List>
              </Row>
            </Fade>
          </Content>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Made;

const Container = styled.div`
  width: 70%;
  height: 30vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    min-height: 50vh;
  }
`;

const Content = styled.div`
  min-width: 100%;
`;

const Row = styled.div`
  min-width: 100%;
  padding: 15px;
  color: var(--bg);
  border-radius: 10px;
  background: var(--text);
`;

const List = styled.ul`
  margin: 5px 10px;
`;
const Item = styled.li`
  padding: 2px;
`;
const Code = styled.code`
  font-family: consolas;
`;

const Potion = styled(SiElixir)`
  color: ${props => props.theme.primary};
`;
