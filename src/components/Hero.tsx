import React from "react";
import background_desktop from "public/assets/backgrounds/desktop.png";
import background_mobile from "public/assets/backgrounds/desktop.webp";

const Hero = () => {
  return (
    <picture className="w-full h-full">
      <source media="(max-width: 768px)" srcSet={background_mobile} />
      <img
        className={`absolute top-0 mx-auto z-0 w-full brightness-110 opacity-30 h-[50rem] object-cover`}
        src={background_desktop}
        alt="logo"
      />
    </picture>
  );
};

export default Hero;
