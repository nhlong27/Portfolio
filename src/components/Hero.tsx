import React from "react";
import hero_desktop from "public/assets/backgrounds/desktop.png";
import hero_mobile from "public/assets/backgrounds/desktop.webp";
import footer from "public/assets/backgrounds/mobile.png";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const Hero = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);
  return (
    <>
      <picture className="h-full w-full">
        <source media="(max-width: 768px)" srcSet={hero_mobile} />
        <img
          className={`absolute top-0 z-0 mx-auto h-[50rem] w-full object-cover opacity-30 brightness-110`}
          src={hero_desktop}
          alt="logo"
        />
      </picture>
      {/* <motion.div style={{y}} className="w-full h-full"> */}
      <img
        className={`absolute bottom-0 z-0 mx-auto h-[50rem] w-full object-cover opacity-30 brightness-110`}
        src={footer}
        alt="logo"
      />
      {/* </motion.div> */}
    </>
  );
};

export default Hero;
