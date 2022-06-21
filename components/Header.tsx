import styled, { css } from "styled-components";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
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
      background: var(--gray-darkest);
      color: white;
      border-radius: 10px;
      transition: all 0.3s linear;
      &:hover {
        background: var(--gray-dark);
      }

      @media screen and (max-width: 768px) {
        &:hover {
          background: var(--gray-dark);
        }
      }
    `}
`;

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
    if (vw > 1250) {
      setHeaderItems(
        <Container>
          <VideoRef
            vid={"/Kreativni_Univerzum_v1_Compressed.mp4"}
            controls={false}
            autoplay={true}
            muted={true}
            ref={vidRef}
          />
          <div className="logo">
            <Image
              src="/logo-inverted.png"
              alt="logo"
              width={50}
              height={60}
            ></Image>
          </div>
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
      const vid: HTMLVideoElement | null = vidRef.current;
      vid?.play();
    } else {
      setHeaderItems(
        <Container>
          <div className="logo">
            <Image
              src="/logo-inverted.png"
              alt="logo"
              width={50}
              height={60}
            ></Image>
          </div>
          <h1 className="site-title">Креативни Универзум</h1>
          <VideoRef
            vid={"/Kreativni_Univerzum_v1_Compressed.mp4"}
            controls={true}
            muted={false}
            autoplay={false}
            ref={vidRef}
          />
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
