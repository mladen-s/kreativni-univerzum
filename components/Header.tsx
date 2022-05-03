import Video from "./Video";

const Header = () => {
  return (
    <header className="header">
      <div className="nav"></div>
      <Video vid={"/video.mp4"} />
      <h1 className="site-title">Креативни Универзум</h1>
    </header>
  );
};

export default Header;
