import hero_desktop from "public/assets/backgrounds/desktop.png";
import hero_mobile from "public/assets/backgrounds/desktop.webp";

const Hero = () => {
  return (
    <picture className="h-full w-full">
      <source media="(max-width: 768px)" srcSet={hero_mobile} />
      <img
        className={`absolute top-0 z-0 mx-auto h-[50rem] w-full object-cover opacity-30 brightness-110`}
        src={hero_desktop}
        alt="logo"
      />
    </picture>
  );
};

export default Hero;
