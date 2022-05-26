import styled from "styled-components";
import Button from "./Button";

const ExploreButton = styled(Button)`
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

  &:hover {
    border: 5px solid black;
    border-radius: 45%;
    background-color: var(--blue-dark);
  }
`;

export default ExploreButton;
