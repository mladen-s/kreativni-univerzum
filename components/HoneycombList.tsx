import HoneycombItem from "./HoneycombItem";
import styled from "styled-components";
// images
import honeycombItems from "../consts/honeycombItems";

const HoneycombItemStyled = styled(HoneycombItem)`
  padding: 20px;

  & .honey-text {
    text-align: center;
    font-size: 0.7rem;
    padding: 20px;
  }
  & p {
    text-align: center;
    font-size: 0.5rem;
    padding: 10px;
  }
`;

const HoneycombList = () => {
  return (
    <div className="honeycomb-list">
      {honeycombItems.map(({ title, text, alt, img }) => {
        return (
          <HoneycombItemStyled
            title={title}
            alt={alt}
            img={img}
            text={text}
            key={title}
          />
        );
      })}
    </div>
  );
};

export default HoneycombList;
