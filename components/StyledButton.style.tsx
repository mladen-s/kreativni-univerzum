import styled from "styled-components";
import Button from "./Button";

const StyledButton = styled(Button)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 2rem;
  font-family: "Caveat", "Arsenal", serif;
  font-weight: 700;
  bottom: 5%;
  left: 4%;
  background-color: var(--gray-darkest);
  color: var(--orange-medium);
  border: 1px solid black;
  border-radius: 10px;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s linear;
`;

export default StyledButton;
