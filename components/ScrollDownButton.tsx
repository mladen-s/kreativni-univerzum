import styled from "styled-components";
import Button from "./Button";
import { BsChevronDoubleDown } from "react-icons/bs";

const StyledSDB = styled(Button)`
  appearance: none;
  position: relative;
  margin: 35% auto 0;
  display: block;
  padding: 0.8rem 0.7rem 0;
  font-size: 4.2rem;
  background-color: var(--blue-dark) 1;
  color: var(--orange-medium);
  border: 2px solid transparent;
  border-radius: 50%;
  z-index: 2;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    transform: translateY(1rem) scale(1.3);
  }

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 250px;
  }
`;

const ScrollDownButton = () => {
  return (
    <StyledSDB>
      <a href="#main">
        <BsChevronDoubleDown></BsChevronDoubleDown>
      </a>
    </StyledSDB>
  );
};

export default ScrollDownButton;
