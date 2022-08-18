import styled from "styled-components";
import Button from "./Button";

const StyledMute = styled(Button)`
  appearance: none;
  position: absolute;
  top: 5%;
  right: 5%;
  display: block;
  background: transparent;
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--orange-medium);
  border: none;
  z-index: 2;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.3);
  }

  @media screen and (max-width: 768px) {
  }
`;

export default StyledMute;
