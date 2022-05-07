import Image, { StaticImageData } from "next/image";

interface IHoneycombItem {
  title: string;
  text: string;
  alt: string;
  img: StaticImageData;
}

const HoneycombItem = ({ title, text, img, alt }: IHoneycombItem) => {
  return (
    <div className="honeycomb-item">
      <Image
        className="honeycomb-item_img"
        src={img}
        alt={alt}
        layout="fill"
      ></Image>
      <h2 className="honey-title">{title}</h2>
      <p className="honey-text">{text}</p>
    </div>
  );
};

export default HoneycombItem;
