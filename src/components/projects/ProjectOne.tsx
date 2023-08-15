import Example from "@components/common/Gallery";
import { Text } from "@components/common/Text";
import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Gallery from "@components/common/Gallery";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const ProjectOne = (props) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  const x = useParallax(scrollYProgress, props.x);

  return (
    <motion.div
      className={`w-full flex flex-col justify-start items-center overflow-hidden bg-white shadow-md rounded relative transition-all duration-300 py-8"
      }`}
    >
      <div className="overflow-hidden w-5/6 mx-auto relative">
        <Gallery galleries={props.galleries} />
      </div>
      <div className="py-8 px-16 w-full">
        <Text
          variant="XL/bold/primary"
          className="font-bold font-serif text-black"
        >
          {props.title}
        </Text>
        <Text variant="lg/normal/ghost" className="my-3 ">
          {props.description}
        </Text>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="col-start-1 px-3">
            <div className="my-6 ">
              <div className="mb-4 flex gap-3 items-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-goal"
                >
                  <path d="M12 13V2l8 4-8 4" />
                  <path d="M20.55 10.23A9 9 0 1 1 8 4.94" />
                  <path d="M8 10a5 5 0 1 0 8.9 2.02" />
                </svg>
                <Text variant="xl/normal/black">My Goal</Text>
              </div>
              <Text
                variant="md/normal/black"
                className="w-full whitespace-nowrap"
              >
                {props.role}
              </Text>
            </div>
            <div className="my-6 mb-3">
              <div className="mb-4 flex gap-3 items-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-gantt-chart"
                >
                  <path d="M8 6h10" />
                  <path d="M6 12h9" />
                  <path d="M11 18h7" />
                </svg>
                <Text variant="xl/normal/black">Strategies</Text>
              </div>
              <Text
                variant="md/normal/black"
                className="w-full whitespace-nowrap mb-2"
              >
                {props.difficulties}
              </Text>
              <Text
                variant="md/normal/black"
                className="w-full whitespace-nowrap"
              >
                {props.solution}
              </Text>
            </div>
          </div>
          <div className="md:col-start-2 col-start-1 px-3 border-l pl-8">
            <div className="my-6">
              <div className="mb-4 flex gap-3 items-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layout-grid"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                <Text variant="xl/normal/black">Notable features</Text>
              </div>
              {props.features}
            </div>
            <div>
              <div className="mb-4 flex gap-3 items-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cpu"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <path d="M15 2v2" />
                  <path d="M15 20v2" />
                  <path d="M2 15h2" />
                  <path d="M2 9h2" />
                  <path d="M20 15h2" />
                  <path d="M20 9h2" />
                  <path d="M9 2v2" />
                  <path d="M9 20v2" />
                </svg>
                <Text variant="xl/normal/black">Technologies</Text>
              </div>
              {props.technologies}
            </div>
          </div>
        </div>
      </div>

      
    </motion.div>
  );
};

export default ProjectOne;
