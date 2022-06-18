import ExploreButton from "./ExploreButton.style";
import styled from "styled-components";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const TeaserTitle = styled.h1`
  color: var(--orange-medium);
  font-size: 3.5rem;
  margin: -100px 0 0;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin: -50px 0 0;
  }

  @media screen and (max-height: 650px) and (min-width: 800px) {
    font-size: 2.5rem;
    margin-top: 0;
  }
`;

const TeaserContainer = styled.div`
  position: relative;
  padding: 0 5% 0 40%;
  width: 100%;

  flex: 2 0 auto;
  display: grid;
  place-items: center;
  z-index: 2;
  text-align: center;

  &::before {
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    top: -30px;
    left: 0;
    background-color: var(--orange-medium);
    opacity: 0.4;
  }

  @media screen and (max-width: 768px) {
    padding: 0;

    &::before {
      top: -25px;
    }
  }

  @media screen and (max-height: 650px) {
    min-height: 70vh;

    &::before {
      top: -25px;
    }
  }
`;

const TeaserPage = () => {
  // const [elements, setElements] = useState<Element[]>([]);
  const { ref, inView, entry } = useInView({
    threshold: 1,
    rootMargin: "0px",
    root: null,
    triggerOnce: true,
  });

  // const headline = useRef() as React.MutableRefObject<HTMLHeadingElement>;
  // const button = useRef() as React.MutableRefObject<HTMLButtonElement>;

  const headline = useRef<HTMLHeadingElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  // const options = useMemo(() => {
  //   return {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 1.0,
  //   };
  // }, []);

  // const slideOnScroll = (
  //   entries: IntersectionObserverEntry[],
  //   observer: IntersectionObserver
  // ) => {
  //   const [entry] = entries;
  //   setElements((prevState: any) => [...prevState, entry.target]);

  //   if (entry.isIntersecting) {
  //     entry.target.classList.add("slide-active");
  //     observer.unobserve(entry.target);
  //   }
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(slideOnScroll, options);

  // console.log(elements);

  // observer.observe(headline.current);
  // observer.observe(button.current);
  // }, [elements, options]);

  return (
    <TeaserContainer>
      <TeaserTitle
        className={`slide ${inView ? "slide-active" : ""}`}
        ref={ref}
      >
        Да ли сте довољно креативни за наш универзум?
      </TeaserTitle>
      <ExploreButton
        className={`slide ${inView ? "slide-active" : ""}`}
        ref={ref}
      >
        <a href="https://forms.gle/cMMMAjbxwquomP178">Пријави се</a>
      </ExploreButton>
    </TeaserContainer>
  );
};

export default TeaserPage;
