import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
  z-index: 2;
`;

interface IContainer {
  children: JSX.Element | JSX.Element[] | undefined;
  className?: string;
}

const Container = ({ children, className }: IContainer) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
