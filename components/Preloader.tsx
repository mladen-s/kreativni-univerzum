import styled from "styled-components";

const Preloader = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: #ffffff;
  background-image: url("/logo.jpg");
  background-repeat: no-repeat;
  background-size: 10%;
  background-position: 50% 50%;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Preloader;
