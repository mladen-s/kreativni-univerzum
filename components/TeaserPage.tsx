import Container from "./Container";
import ExploreButton from "./ExploreButton.style";
import styled from "styled-components";

const TeaserTitle = styled.h1`
  color: var(--blue-light);
  font-size: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TeaserPage = () => {
  return (
    <Container className="teaser-container">
      <TeaserTitle>Да ли сте довољно креативни за наш универзум?</TeaserTitle>
      <ExploreButton>
        <a href="https://forms.gle/cMMMAjbxwquomP178">Пријави се</a>
      </ExploreButton>
    </Container>
  );
};

export default TeaserPage;
