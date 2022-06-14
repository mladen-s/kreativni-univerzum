import styled from "styled-components";

const StyledMain = styled.main`
  background-color: black;
  background-image: url("/IMG-78f5e7b2341131cef9e3a2e20309af9e-V.jpg");
  background-position: 0% 0%;
  background-size: 50%;
  background-repeat: no-repeat;

  z-index: 1;
  height: 100vh;

  padding: 7% 10% 0;
  display: flex;
  flex-direction: column;
  justify-content: right;

  @media screen and (max-width: 768px) {
    padding: 10% 10% 0;
    justify-content: center;
    background-size: 100%;
    background-position: 50% 35%;
  }
`;
interface IMain {
  children: JSX.Element | JSX.Element[];
}

const Main = ({ children }: IMain) => {
  return (
    <StyledMain className="main" id="main">
      {children}
    </StyledMain>
  );
};

export default Main;
