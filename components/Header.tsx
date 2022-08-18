import styled, { css } from "styled-components";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
// components
import StyledButton from "./StyledButton.style";
import VideoRef from "./Video";
import Container from "./Container";
import ScrollDownButton from "./ScrollDownButton";
import StyledMute from "./MuteButton";
import { FaVolumeMute, FaPause, FaPlay } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";
interface ISpan {
  primary?: boolean;
}

const Span = styled.span<ISpan>`
  padding: 10px 10px 0;
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

interface IMute {
  mute: string;
  onClick: () => void;
}
const MuteButton = ({ mute, onClick }: IMute) => {
  if (mute === "true") {
    return (
      <StyledMute onClick={onClick}>
        <FaVolumeMute></FaVolumeMute>
      </StyledMute>
    );
  } else {
    return (
      <StyledMute onClick={onClick}>
        <GoUnmute></GoUnmute>
      </StyledMute>
    );
  }
};

const Header = () => {
  const [headerItems, setHeaderItems] = useState<JSX.Element>();
  const [mute, setMute] = useState("true");

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

  const toggleMute = () => {
    const vid: HTMLVideoElement | null = vidRef.current;
    if (vid !== null) {
      if (mute === "true") {
        setMute("false");
      } else {
        setMute("true");
      }
      vid.muted = !vid.muted;
    }
  };

  useEffect(() => {
    // check viewport size
    const vw = Math.max(window.innerWidth || 0);
    if (vw > 1250) {
      setHeaderItems(
        <Container>
          <MuteButton mute={mute} onClick={toggleMute} />
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
            <Span>
              <FaPlay />
            </Span>
            <Span>
              <FaPause />
            </Span>
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
  }, [toggleMute]);

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
