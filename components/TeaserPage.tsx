import ExploreButton from "./ExploreButton.style";
import styled from "styled-components";
import { useEffect, useState } from "react";

const TeaserTitle = styled.h1`
  color: var(--blue-light);
  font-size: 3.5rem;
  margin: -100px 0 0;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;

    button {
      margin: 50px 0 0;
    }
  }
`;

const TeaserContainer = styled.div`
  position: relative;
  padding: 0 5% 0 40%;
  width: 100%;
  min-height: 70vh;
  display: grid;
  place-items: center;
  z-index: 2;
  text-align: center;

  &::before {
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    top: -50px;
    left: 0;
    background-color: var(--blue-light);
    opacity: 0.3;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    min-height: 80vh;

    &::before {
      top: 0;
    }
  }
`;

const TeaserPage = () => {
  const options = {
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const sliders = document.querySelectorAll(".slide");

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("slide-active");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    options);

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  }, [options]);

  return (
    <TeaserContainer>
      <TeaserTitle className="slide">
        Да ли сте довољно креативни за наш универзум?
      </TeaserTitle>
      <ExploreButton className="slide">
        <a href="https://forms.gle/cMMMAjbxwquomP178">Пријави се</a>
      </ExploreButton>
    </TeaserContainer>
  );
};

export default TeaserPage;
