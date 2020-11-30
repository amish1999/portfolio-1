import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BiLinkAlt } from "react-icons/bi";

const theme = {
  primary: "#FF4136",
  secondary: "#a162e8"
};

const Card = ({ title, link, content }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CardBlock>
          <TextGroup>
            <Title>{title}</Title>
            <Link target={"_blank"} href={link}>
              <BiLinkAlt />
            </Link>
          </TextGroup>
          <Text>{content}</Text>
        </CardBlock>
      </ThemeProvider>
    </>
  );
};

export default Card;

const CardBlock = styled.div`
  width: 100%;
  padding: 25px;

  margin-top: 25px;
  margin-bottom: 25px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  background-color: var(--text);
`;

const TextGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Link = styled.a`
  font-size: 24px;
  margin: 0px 15px;
  color: ${props => props.theme.primary};
`;
const Title = styled.h1`
  font-weight: 600;
  color: var(--bg);
  padding: 10px 0px;
  font-size: 1.3rem;
  text-transform: uppercase;
`;
const Text = styled.h3`
  color: var(--bg);
  letter-spacing: 1px;
  line-height: 25px;
`;
