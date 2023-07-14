import Example from "@components/common/Example";
import { Text } from "@components/common/Text";
import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
  const [animateParent] = useAutoAnimate();

  return (
    <motion.div
      className={`w-full flex flex-col justify-start items-center overflow-hidden bg-white shadow-md rounded relative transition-all duration-300 ${
        shouldComponentDisplay ? "min-h-[31rem]" : "max-h-[30rem]"
      }`}
    >
      <div className="overflow-hidden w-full min-h-[50rem] relative">
        <Example />
      </div>
      <div className="py-8 px-16 w-full">
        <Text variant="XL/bold/primary" className="font-bold font-serif">
          {props.title}
        </Text>
        <Text variant="lg/normal/black" className="my-3 ">
          {props.description}
        </Text>
        <div ref={animateParent} className="w-full grid md:grid-cols-2 grid-cols-1">
          {shouldComponentDisplay ? (
            <div className="col-start-1 px-3">
              <div className="my-6">
                <Text variant="xl/bold/black">My Role</Text>
                <Text
                  variant="lg/normal/black"
                  className="w-full whitespace-nowrap"
                >
                  {props.role}
                </Text>
              </div>
              <div className="my-6">
                <Text variant="xl/bold/black">Project Difficulties</Text>
                <Text
                  variant="lg/normal/black"
                  className="w-full whitespace-nowrap"
                >
                  {props.difficulties}
                </Text>
              </div>
              <div className="my-6">
                <Text variant="xl/bold/black">My Solution</Text>
                <Text
                  variant="lg/normal/black"
                  className="w-full whitespace-nowrap"
                >
                  {props.solution}
                </Text>
              </div>
            </div>
          ) : null}
          <div className="md:col-start-2 col-start-1 px-3">
            <div className="my-6">
              <Text variant="xl/bold/black">Notable Features</Text>
              {props.features}
            </div>
            <div>
              <Text variant="xl/bold/black">Technologies Used</Text>
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
