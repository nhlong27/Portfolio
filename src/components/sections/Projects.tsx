import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Text } from "@components/common/Text";
import ProjectOne from "@components/projects/ProjectOne";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const Projects = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  return (
    <section
      id="projects"
      className="-mt-[5rem] md:mt-[2.5rem] mb-[10rem] relative flex flex-col justify-start bg-transparent  px-0 gap-8 z-0 mx-8"
    >
      <motion.div
        style={{ y }}
        className="absolute h-auto w-11/12 top-12 border-b-2 border-primary/30 mx-auto text-right"
      >
        <Text
          variant="XL/bold/black"
          className="uppercase tracking-wider text-[32px] font-bold sm:text-[40px] lg:text-[36px] xl:text-[40px]"
        >
          Projects
        </Text>
      </motion.div>
      <ProjectOne
        title={"Fir Media"}
        description={
          <>
            A nature-inspired movie website. Both frontend and backend are
            hosted on{" "}
            <a
              href="https://render.com/"
              target="_blank"
              className="text-secondary hover:underline"
            >
              Render
            </a>{" "}
            and MongoDB database on{" "}
            <a
              href="https://railway.app/"
              target="_blank"
              className="text-secondary hover:underline"
            >
              Railway
            </a>
            .{" "}
          </>
        }
        role={
          "In this project, I took charge of the complete software development process, overseeing every stage from initiation to completion. This experience highlights my capacity to independently acquire new skills and effectively adapt to emerging technologies, allowing me to expand my knowledge to full-stack development."
        }
        difficulties={
          "The implementation of the backend according to industry best practices and security standards posed the greatest challenge in this project. I had to acquire some proficiency in backend technologies while also adopting a full TypeScript development approach"
        }
        solution={
          "I use Express.js and MongoDB to develop a robust RESTful API and ensure secure storage of JWT tokens for user authentication. As for the frontend, I ventured beyond traditional approaches like Redux and explored state management libraries like Jotai and Zustand. Additionally, I optimized API performance by implementing pagination through the utilization of React Query's infinite query feature. I also attempted to write some unit tests using Vitest with React Testing Library."
        }
        features={
          <ul>
            <li>Sign in/ Registration</li>
            <li>Token Authentication with JSON Web Tokens</li>
            <li>Lazy loading image with infinite scroll</li>
            <li>Custom swiper</li>
            <li>Save movies and categorized them</li>
            <li>Movies saved to history after watched</li>
            <li>Comment section for each movie</li>
          </ul>
        }
        technologies={
          <ul>
            <li>ReactJS</li>
            <li>Typescript</li>
            <li>Vite</li>
            <li>TailwindCSS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>Vitest</li>
          </ul>
        }
        x={20}
      />
      <ProjectOne
        title={"Fir Media"}
        description={
          <>
            A nature-inspired movie website. Both frontend and backend are
            hosted on{" "}
            <a
              href="https://render.com/"
              target="_blank"
              className="text-secondary hover:underline"
            >
              Render
            </a>{" "}
            and MongoDB database on{" "}
            <a
              href="https://railway.app/"
              target="_blank"
              className="text-secondary hover:underline"
            >
              Railway
            </a>
            .{" "}
          </>
        }
        role={
          "In this project, I took charge of the complete software development process, overseeing every stage from initiation to completion. This experience highlights my capacity to independently acquire new skills and effectively adapt to emerging technologies, allowing me to expand my knowledge to full-stack development."
        }
        difficulties={
          "The implementation of the backend according to industry best practices and security standards posed the greatest challenge in this project. I had to acquire some proficiency in backend technologies while also adopting a full TypeScript development approach"
        }
        solution={
          "I use Express.js and MongoDB to develop a robust RESTful API and ensure secure storage of JWT tokens for user authentication. As for the frontend, I ventured beyond traditional approaches like Redux and explored state management libraries like Jotai and Zustand. Additionally, I optimized API performance by implementing pagination through the utilization of React Query's infinite query feature. I also attempted to write some unit tests using Vitest with React Testing Library."
        }
        features={
          <ul>
            <li>Sign in/ Registration</li>
            <li>Token Authentication with JSON Web Tokens</li>
            <li>Lazy loading image with infinite scroll</li>
            <li>Custom swiper</li>
            <li>Save movies and categorized them</li>
            <li>Movies saved to history after watched</li>
            <li>Comment section for each movie</li>
          </ul>
        }
        technologies={
          <ul>
            <li>ReactJS</li>
            <li>Typescript</li>
            <li>Vite</li>
            <li>TailwindCSS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>Vitest</li>
          </ul>
        }
        x={-20}
      />
      <ProjectOne
        title={"Fir Media"}
        description={
          <>
            A nature-inspired movie website. Both frontend and backend are
            hosted on{" "}
            <a
              href="https://render.com/"
              target="_blank"
              className="text-secondary hover:underline"
            >
              Render
            </a>{" "}
            and MongoDB database on{" "}
            <a
              href="https://railway.app/"
              target="_blank"
              className="text-secondary hover:underline"
            >
              Railway
            </a>
            .{" "}
          </>
        }
        role={
          "In this project, I took charge of the complete software development process, overseeing every stage from initiation to completion. This experience highlights my capacity to independently acquire new skills and effectively adapt to emerging technologies, allowing me to expand my knowledge to full-stack development."
        }
        difficulties={
          "The implementation of the backend according to industry best practices and security standards posed the greatest challenge in this project. I had to acquire some proficiency in backend technologies while also adopting a full TypeScript development approach"
        }
        solution={
          "I use Express.js and MongoDB to develop a robust RESTful API and ensure secure storage of JWT tokens for user authentication. As for the frontend, I ventured beyond traditional approaches like Redux and explored state management libraries like Jotai and Zustand. Additionally, I optimized API performance by implementing pagination through the utilization of React Query's infinite query feature. I also attempted to write some unit tests using Vitest with React Testing Library."
        }
        features={
          <ul>
            <li>Sign in/ Registration</li>
            <li>Token Authentication with JSON Web Tokens</li>
            <li>Lazy loading image with infinite scroll</li>
            <li>Custom swiper</li>
            <li>Save movies and categorized them</li>
            <li>Movies saved to history after watched</li>
            <li>Comment section for each movie</li>
          </ul>
        }
        technologies={
          <ul>
            <li>ReactJS</li>
            <li>Typescript</li>
            <li>Vite</li>
            <li>TailwindCSS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>Vitest</li>
          </ul>
        }
        x={20}
      />
    </section>
  );
};

export default Projects;
