import Container from "./Container";
import ExploreButton from "./ExploreButton.style";
import styled from "styled-components";
import { useEffect, useState } from "react";

const TeaserTitle = styled.h1`
  color: var(--blue-light);
  font-size: 3.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
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
    <Container className="teaser-container">
      <TeaserTitle className="slide">
        Да ли сте довољно креативни за наш универзум?
      </TeaserTitle>
      <ExploreButton className="slide">
        <a href="https://forms.gle/cMMMAjbxwquomP178">Пријави се</a>
      </ExploreButton>
    </Container>
  );
};

export default TeaserPage;
