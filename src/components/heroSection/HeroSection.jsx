import React from "react";

const HeroSection = () => {
  return (
    <div className="relative  w-full h-[550px] ">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/4440949/4440949-hd_1920_1080_25fps.mp4" />
      </video>
    </div>
  );
};

export default HeroSection;
