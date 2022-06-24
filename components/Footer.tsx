import styled from "styled-components";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import { ImFacebook2 } from "react-icons/im";

const StyledFooter = styled.footer`
  padding: 20px;
  min-height: 15vh;

  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  color: var(--orange-medium);

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
      background-color: var(--orange-medium);
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

  @media screen and (max-height: 650px) {
    padding: 0 20px 40px;
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
          <BsInstagram />
        </a>
        <a href="https://twitter.com/MilosJo86297144">
          <BsTwitter />
        </a>
        <a href="https://www.youtube.com/channel/UCCJk_XXzSuSAJ0452NkhilA">
          <BsYoutube />
        </a>
        <a href="https://www.facebook.com/creativeuniverseserbia/">
          <ImFacebook2 />
        </a>
      </div>
      <Copyright>
        <BiCopyright />
        2021-2022, Креативни Универзум
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
