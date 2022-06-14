import styled from "styled-components";
import { BsInstagram } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const StyledFooter = styled.footer`
  padding: 20px;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--blue-light);

  .icons {
    margin: 0 0 20px 0;
    padding: 0 20px 0 0;
    display: flex;
    justify-content: center;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      height: 1px;
      width: 100%;
      bottom: 0;
      left: 0;
      background-color: var(--blue-light);
      opacity: 0.3;
    }
  }

  a {
    display: flex;
    align-items: center;

    svg {
      margin: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0 20px 20px;

    &::after {
      opacity: 0.4;
    }
  }
`;

const Copyright = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  text-align: center;

  svg {
    margin: 0 5px 0 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="icons">
        <a href="https://www.instagram.com/creative_universe_srbija/">
          <BsInstagram /> Instagram
        </a>
      </div>
      <Copyright>
        <BiCopyright />
        2021, Креативни Универзум
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
