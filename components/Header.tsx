import styled, { css } from "styled-components";
import React, { useRef, useState, useEffect } from "react";
// components
import StyledButton from "./StyledButton.style";
import VideoRef from "./Video";
import Container from "./Container";
import ScrollDownButton from "./ScrollDownButton";

interface ISpan {
  primary?: boolean;
}

const Span = styled.span<ISpan>`
  padding: 10px;
  text-align: center;

  ${(props) =>
    props.primary &&
    css`
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
      left: 0;
      margin: 0;
      background: var(--blue-darkest);
      color: white;
      border-radius: 10px;
      transition: all 0.3s linear;
      &:hover {
        background: var(--blue-medium);
      }

      @media screen and (max-width: 768px) {
        &:hover {
          background: var(--blue-darkest);
        }
      }
    `}
`;

// interface IHeader {
//   explored: boolean;
//   setExplored: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Header = () => {
  const [headerItems, setHeaderItems] = useState<JSX.Element>();

  const btnRef = useRef<HTMLButtonElement>(null);
  const vidRef = React.createRef<HTMLVideoElement>();

  const toggle = () => {
    const btn: HTMLButtonElement | null = btnRef.current;
    const vid: HTMLVideoElement | null = vidRef.current;

    btn !== null && btn.classList.toggle("toggle");
    if (btn?.classList.contains("toggle")) {
      vid?.pause();
    } else {
      vid?.play();
    }
  };

  useEffect(() => {
    // check viewport size
    const vw = Math.max(window.innerWidth || 0);
    if (vw > 768) {
      setHeaderItems(
        <Container>
          <VideoRef vid={"/video.mp4"} ref={vidRef} />
          <h1 className="site-title">Креативни Универзум</h1>
          <ScrollDownButton></ScrollDownButton>
          <StyledButton className="controls" onClick={toggle}>
            <Span>Пусти</Span>
            <Span>Пауза</Span>
            <Span
              primary
              className="switch"
              ref={btnRef ? btnRef : null}
            ></Span>
          </StyledButton>
        </Container>
      );
    } else {
      setHeaderItems(
        <Container>
          <h1 className="site-title">Креативни Универзум</h1>
          <ScrollDownButton></ScrollDownButton>
        </Container>
      );
    }
  }, []);

  return (
    <header className="header">
      <div className="nav"></div>
      {headerItems}
    </header>
  );
};

const StyledHeader = styled(Header)`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgb(0, 0, 0, 0.3);
  }
`;

export default StyledHeader;
