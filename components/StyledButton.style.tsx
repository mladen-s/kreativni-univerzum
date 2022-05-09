import styled from "styled-components";
import Button from "./Button";

const StyledButton = styled(Button)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  font-family: "Caveat", "Arsenal", serif;
  font-weight: 700;
  top: 95%;
  left: 3%;
  height: 1.5rem;
  background-color: var(--blue-dark);
  color: var(--blue-light);
  border: 1px solid black;
  border-radius: 10px;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s linear;
`;

export default StyledButton;
