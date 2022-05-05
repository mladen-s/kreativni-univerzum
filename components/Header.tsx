import VideoRef from "./Video";
import React, { useRef } from "react";
import StyledButton from "./StyledButton.style";
import styled, { css } from "styled-components";

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
        background-color: var(--blue-medium);
      }
    `}
`;

const Header = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const vidRef = React.createRef<HTMLVideoElement>();

  const toggle = () => {
    const btn: HTMLButtonElement | null = btnRef.current;
    const vid: HTMLVideoElement | null = vidRef.current;
    console.log(vid);

    btn !== null && btn.classList.toggle("toggle");
    if (btn?.classList.contains("toggle")) {
      vid?.pause();
    } else {
      vid?.play();
    }
  };

  return (
    <header className="header">
      <div className="nav"></div>
      <VideoRef vid={"/video.mp4"} ref={vidRef} />
      <h1 className="site-title">Креативни Универзум</h1>
      <StyledButton className="controls" onClick={toggle}>
        <Span>Пусти</Span>
        <Span>Пауза</Span>
        <Span primary className="switch" ref={btnRef ? btnRef : null}></Span>
      </StyledButton>
    </header>
  );
};

export default Header;
