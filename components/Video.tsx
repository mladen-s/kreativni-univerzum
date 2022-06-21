import React from "react";

interface IVideo {
  vid: string;
  controls: boolean;
  autoplay: boolean;
}

const Video = ({ vid, controls, autoplay }: IVideo, ref: any) => {
  return (
    <video
      className="video-container"
      ref={ref}
      autoPlay={autoplay}
      loop
      controls={controls}
    >
      <source src={vid} type="video/mp4" />
    </video>
  );
};

const VideoRef = React.forwardRef(Video);

export default VideoRef;
