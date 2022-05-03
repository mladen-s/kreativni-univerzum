interface IVideo {
  vid: string;
}

const Video = ({ vid }: IVideo) => {
  return (
    <video className="video-container" muted autoPlay loop>
      <source src={vid} type="video/mp4" />
    </video>
  );
};

export default Video;
