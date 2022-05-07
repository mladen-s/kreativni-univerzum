import Inspiracija from "../assets/images/IMG-d99a317e332909a197cbabd1efde6016-V.jpg";
import Kreacija from "../assets/images/IMG-a5e2ecf720b2a16ed58ed4db33455b08-V.jpg";
import Inovacija from "../assets/images/IMG-0e9b37df826d9a0e0b4826ebb6d9f359-V.jpg";
import Motivacija from "../assets/images/IMG-bd81bf9fe66eb599e3ff69531e791141-V.jpg";
import Promena from "../assets/images/IMG-a0213c6f29fcc00ae7d37e8d0a542196-V.jpg";
import { StaticImageData } from "next/image";

interface IhItems {
  img: StaticImageData;
  alt: string;
  title: string;
  text: string;
}

const honeycombItems: IhItems[] = [
  {
    img: Inspiracija,
    alt: "",
    title: "Inspiracija",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error vero in ratione? Eius quod nesciunt odio modi assumenda fugit expedita omnis officia amet eaque, sunt, at a possimus maiores.",
  },
  {
    img: Kreacija,
    alt: "",
    title: "Kreacija",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error vero in ratione? Eius quod nesciunt odio modi assumenda fugit expedita omnis officia amet eaque, sunt, at a possimus maiores.",
  },
  {
    img: Inovacija,
    alt: "",
    title: "Inovacija",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error vero in ratione? Eius quod nesciunt odio modi assumenda fugit expedita omnis officia amet eaque, sunt, at a possimus maiores.",
  },
  {
    img: Motivacija,
    alt: "",
    title: "Motivacija",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error vero in ratione? Eius quod nesciunt odio modi assumenda fugit expedita omnis officia amet eaque, sunt, at a possimus maiores.",
  },
  {
    img: Promena,
    alt: "",
    title: "Promena",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error vero in ratione? Eius quod nesciunt odio modi assumenda fugit expedita omnis officia amet eaque, sunt, at a possimus maiores.",
  },
];

export default honeycombItems;
