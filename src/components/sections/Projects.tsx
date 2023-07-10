import React from "react";
import mobile from "public/assets/backgrounds/mobile.png";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import footer from "public/assets/backgrounds/mobile.png";
import { Example } from "@components/common/Example";
import { Text } from "@components/common/Text";
import ProjectOne from "@components/projects/ProjectOne";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const Projects = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  const x1 = useParallax(scrollYProgress, 20);
  const x2 = useParallax(scrollYProgress, -20);
  const x3 = useParallax(scrollYProgress, 20);
  return (
    <section
      id="projects"
      className="-mt-[10rem] md:mt-[5rem] mb-[10rem] relative grid grid-rows-3 bg-transparent py-16 px-0 md:p-16 gap-8 z-0"
    >
      <motion.div
        style={{ y, x: x1 }}
        className="min-h-[20rem] md:h-[25rem] w-full grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 overflow-hidden bg-white shadow-md rounded  "
      >
        <div className="row-span-3 md:row-span-2 md:col-span-3 py-4 px-8">
          <Text
            variant="XL/bold/black"
            className="text-primary/50 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
          >
            Title
          </Text>
          <ProjectOne />
        </div>
        <div className="row-start-1 row-span-2 md:row-span-2 md:col-span-2 overflow-hidden">
          <Example />
        </div>
      </motion.div>
      <motion.div
        style={{ y, x: x2 }}
        className="min-h-[20rem] md:h-[25rem] w-full grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 overflow-hidden bg-white shadow-md rounded"
      >
        <div className="row-span-2 md:row-span-2 md:col-span-2 overflow-hidden">
          <Example />
        </div>
        <div className="row-span-3 md:row-span-2 md:col-span-3 py-4 px-8">
          <Text
            variant="XL/bold/black"
            className="text-primary/50 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
          >
            Title
          </Text>
        </div>
      </motion.div>
      <motion.div
        style={{ y, x: x3 }}
        className="min-h-[20rem] md:h-[25rem] w-full grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 overflow-hidden bg-white shadow-md rounded"
      >
        <div className="row-span-3 md:row-span-2 md:col-span-3 py-4 px-8">
          <Text
            variant="XL/bold/black"
            className="text-primary/50 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
          >
            Title
          </Text>
        </div>
        <div className="row-start-1 row-span-2 md:row-span-2 md:col-span-2 overflow-hidden">
          <Example />
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
