import React from "react";

const VideoCard = () => {
  return (
    <div className="video-card">
      <div className="video-content">
        <iframe
          width="400"
          height="350"
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAcharyaMukeshBhardwajji%2Fvideos%2F637762840830997%2F&show_text=false&width=476&t=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCard;