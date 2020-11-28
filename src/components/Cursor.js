import React, { useState, useEffect } from "react";
import styled from "styled-components";
import classNames from "classnames";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  });

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered
  });

  if (typeof navigator !== "undefined" && isMobile()) return null;

  return (
    <>
      <Container>
        <Div
          className={cursorClasses}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        />
      </Container>
    </>
  );
};

export default Cursor;

const Container = styled.div`
  .cursor {
    width: 15px;
    height: 15px;
    z-index: 9999;
    position: fixed;
    border-radius: 100%;
    pointer-events: none;
    border: none;
    background-color: #fff;
    mix-blend-mode: difference;
    transition: all 150ms ease;
    transform: translate(-50%, -50%);
    transition-property: opacity, background-color, transform, mix-blend-mode;
  }

  .cursor--hidden {
    opacity: 0;
  }

  .cursor--clicked {
    transform: translate(-50%, -50%) scale(0.9);
    background-color: gray;
  }

  .cursor--link-hovered {
    transform: translate(-50%, -50%) scale(4);
    background-color: #fff;
  }
`;

const Div = styled.div``;
