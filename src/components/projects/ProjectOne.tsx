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
  const [shouldComponentDisplay, setShouldComponentDisplay] =
    React.useState(true);

  return (
    <motion.div
      className={`w-full flex flex-col justify-start items-center overflow-hidden bg-white shadow-md rounded relative transition-all duration-300 py-8 ${
        shouldComponentDisplay ? "min-h-[31rem]" : "max-h-[30rem]"
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
                  width="24"
                  height="24"
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
                  width="24"
                  height="24"
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
                  width="24"
                  height="24"
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
                  width="24"
                  height="24"
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

      <button
        onClick={() => setShouldComponentDisplay((prev) => !prev)}
        className="absolute bottom-8 right-8 text-black/30 hover:text-black/100 transition-all duration-300"
      >
        {shouldComponentDisplay ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1464 6.85355C11.3417 7.04882 11.6583 7.04882 11.8536 6.85355C12.0488 6.65829 12.0488 6.34171 11.8536 6.14645L7.85355 2.14645C7.65829 1.95118 7.34171 1.95118 7.14645 2.14645L3.14645 6.14645C2.95118 6.34171 2.95118 6.65829 3.14645 6.85355C3.34171 7.04882 3.65829 7.04882 3.85355 6.85355L7.5 3.20711L11.1464 6.85355ZM11.1464 12.8536C11.3417 13.0488 11.6583 13.0488 11.8536 12.8536C12.0488 12.6583 12.0488 12.3417 11.8536 12.1464L7.85355 8.14645C7.65829 7.95118 7.34171 7.95118 7.14645 8.14645L3.14645 12.1464C2.95118 12.3417 2.95118 12.6583 3.14645 12.8536C3.34171 13.0488 3.65829 13.0488 3.85355 12.8536L7.5 9.20711L11.1464 12.8536Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </button>
    </motion.div>
  );
};

export default ProjectOne;
