import React from "react";

interface IVideo {
  vid: string;
}

const Video = ({ vid }: IVideo, ref: any) => {
  return (
    <video className="video-container" ref={ref} muted autoPlay loop>
      <source src={vid} type="video/mp4" />
    </video>
  );
};

const VideoRef = React.forwardRef(Video);

export default VideoRef;
