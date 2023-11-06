import React from "react";
import skills from "public/assets/backgrounds/about_me.png";
import { Text } from "@components/common/Text";
import { logos } from "src/constants/urls";
import SkillLogo from "@components/common/SkillLogo";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative z-10 -mt-[10rem] flex h-[70rem] items-start justify-center rounded sm:mx-8 lg:h-[35rem]"
    >
      <div className="absolute inset-0 -z-10 my-16 grid h-auto w-full -skew-y-3 grid-cols-1 grid-rows-5 overflow-hidden rounded bg-white shadow-md lg:my-auto lg:grid-cols-5 lg:grid-rows-1">
        <picture className="col-span-1 row-span-2 overflow-hidden lg:col-span-2 lg:row-span-1">
          <source media="(max-width: 768px)" srcSet={skills} />
          <img
            className={`z-0 mx-auto h-[50rem] w-full object-cover opacity-70 brightness-110`}
            src={skills}
            alt="skills"
          />
        </picture>
        <div className="col-span-1 row-span-3 my-auto skew-y-3 px-8 lg:col-span-3 lg:row-span-1 xl:px-16">
          <Text
            variant="XL/bold/black"
            className="mb-6 border-b-2 border-primary/30 font-vina text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
          >
            SKILLS
          </Text>
          <div className="flex flex-wrap items-baseline justify-center gap-x-8 gap-y-12">
            <SkillLogo
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              logo={logos.html}
            >
              HTML
            </SkillLogo>
            <SkillLogo
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              logo={logos.css}
            >
              CSS
            </SkillLogo>
            <SkillLogo
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              logo={logos.javascript}
            >
              Javascript
            </SkillLogo>
            <SkillLogo
              href="https://www.typescriptlang.org/"
              logo={logos.typescript}
            >
              Typescript
            </SkillLogo>
            <SkillLogo href="https://react.dev/" logo={logos.react}>
              React
            </SkillLogo>
            <SkillLogo href="https://nextjs.org/" logo={logos.nextjs}>
              Nextjs
            </SkillLogo>
            <SkillLogo href="https://tailwindcss.com/" logo={logos.tailwind}>
              Tailwind
            </SkillLogo>
            <SkillLogo href="https://vitejs.dev/" logo={logos.vite}>
              Vite
            </SkillLogo>
            <SkillLogo
              href="https://redux-toolkit.js.org/"
              logo={logos.redux_toolkit}
            >
              Redux{" "}
            </SkillLogo>
            <SkillLogo href="https://nodejs.org/en" logo={logos.nodejs}>
              Nodejs
            </SkillLogo>
            <SkillLogo href="https://expressjs.com/" logo={logos.express}>
              Express
            </SkillLogo>
            <SkillLogo href="https://graphql.org/" logo={logos.graphql}>
              Graphql
            </SkillLogo>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full max-w-[1000px] lg:w-3/4"></div>
    </section>
  );
};

export default Skills;
