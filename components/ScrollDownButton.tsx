import styled from "styled-components";
import Button from "./Button";
import { BsChevronDoubleDown } from "react-icons/bs";

const StyledSDB = styled(Button)`
  appearance: none;
  position: relative;
  display: block;
  padding: 0.8rem 0.7rem 0;
  font-size: 2.2rem;
  font-family: "Caveat", "Arsenal", serif;
  font-weight: 700;
  background-color: var(--blue-dark) 1;
  color: var(--blue-light);
  border: 2px solid transparent;
  border-radius: 50%;
  z-index: 2;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    transform: translateY(2rem) scale(1.3);
  }
`;

const ScrollDownButton = () => {
  return (
    <StyledSDB>
      <BsChevronDoubleDown></BsChevronDoubleDown>
    </StyledSDB>
  );
};

export default ScrollDownButton;
