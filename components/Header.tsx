import Video from "./Video";
import { useRef } from "react";
import StyledButton from "./StyledButton.style";
import styled, { css } from "styled-components";
import { IButton } from "./Button";

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
      &:hover {
        background-color: var(--blue-medium);
      }
    `}
`;

const Header = () => {
  const btnRef = useRef() as React.MutableRefObject<IButton>;

  const slide = () => {};

  return (
    <header className="header">
      <div className="nav"></div>
      <Video vid={"/video.mp4"} />
      <h1 className="site-title">Креативни Универзум</h1>
      <StyledButton className="controls" ref={btnRef} onClick={slide}>
        <Span>Пусти</Span>
        <Span>Пауза</Span>
        <Span primary className="switch"></Span>
      </StyledButton>
    </header>
  );
};

export default Header;
