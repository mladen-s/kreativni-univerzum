import ExploreButton from "./ExploreButton.style";
import styled from "styled-components";
import React from "react";

const TeaserTitle = styled.h1`
  color: var(--orange-medium);
  font-size: 3.5rem;
  margin: -100px 0 0;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0;
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
  return (
    <TeaserContainer data-aos="fade-down">
      <TeaserTitle>Да ли сте довољно креативни за наш универзум?</TeaserTitle>
      <ExploreButton>
        <a href="https://forms.gle/cMMMAjbxwquomP178">Пријави се</a>
      </ExploreButton>
    </TeaserContainer>
  );
};

export default TeaserPage;
