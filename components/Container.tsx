import { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

interface IContainer {
  children: JSX.Element | JSX.Element[] | undefined;
  className?: string;
}

const Container = ({ children, className }: IContainer) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
