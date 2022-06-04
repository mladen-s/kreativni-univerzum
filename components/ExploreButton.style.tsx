import styled from "styled-components";
import Button from "./Button";

const ExploreButton = styled(Button)`
  position: relative;
  display: block;
  padding: 0.7rem;
  font-size: 2.2rem;
  font-family: "Caveat", "Arsenal", serif;
  font-weight: 700;
  background-color: var(--blue-dark) 1;
  color: var(--blue-light);
  border: 5px solid transparent;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s linear;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 0.1rem;
    width: 0;
    background-color: var(--blue-light);
    z-index: 3;
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover {
    &::before,
    &::after {
      width: 100%;

      transition: all 0.2s linear;
    }
  }
`;

export default ExploreButton;
