import React from "react";
import skills from "public/assets/backgrounds/about_me.png";
import { Text } from "@components/common/Text";
import { logos } from "src/constants/urls";
import SkillLogo from "@components/common/SkillLogo";

const Skills = () => {
  return (
    <section
      id="skills"
      className="-mt-[15rem] md:h-[40rem] h-[80rem] flex justify-center items-start relative mx-8 overflow-hidden rounded z-10 "
    >
      <div className="absolute inset-0 w-full h-3/4 md:my-auto my-16 bg-white -z-10 -skew-y-6 overflow-hidden rounded grid md:grid-cols-5 grid-rows-5 md:grid-rows-1 grid-cols-1 shadow-md">
        <picture className="row-span-2 md:row-span-1 col-span-1 md:col-span-2 overflow-hidden">
          <source media="(max-width: 768px)" srcSet={skills} />
          <img
            className={`mx-auto z-0 w-full brightness-110 opacity-70 h-[50rem] object-cover`}
            src={skills}
            alt="skills"
          />
        </picture>
        <div className="col-span-1 md:col-span-3 row-span-3 md:row-span-1 skew-y-6 my-16 px-8">
          <Text variant="XL/bold/black" className="text-primary/50 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
            SKILLS
          </Text>
          <div className="flex group justify-center items-baseline flex-wrap gap-x-8 gap-y-12">
            <SkillLogo href='https://developer.mozilla.org/en-US/docs/Web/HTML' logo={logos.html}>HTML</SkillLogo>
            <SkillLogo href='https://developer.mozilla.org/en-US/docs/Web/CSS' logo={logos.css}>CSS</SkillLogo>
            <SkillLogo href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' logo={logos.javascript}>Javascript</SkillLogo>
            <SkillLogo href='https://www.typescriptlang.org/' logo={logos.typescript}>Typescript</SkillLogo>
            <SkillLogo href='https://react.dev/' logo={logos.react}>React</SkillLogo>
            <SkillLogo href='https://nextjs.org/' logo={logos.nextjs}>Nextjs</SkillLogo>
            <SkillLogo href='https://tailwindcss.com/' logo={logos.tailwind}>Tailwind</SkillLogo>
            <SkillLogo href='https://vitejs.dev/' logo={logos.vite}>Vite</SkillLogo>
            <SkillLogo href='https://redux-toolkit.js.org/' logo={logos.redux_toolkit}>Redux </SkillLogo>
            <SkillLogo href='https://nodejs.org/en' logo={logos.nodejs}>Nodejs</SkillLogo>
            <SkillLogo href='https://expressjs.com/' logo={logos.express}>Express</SkillLogo>
            <SkillLogo href='https://graphql.org/' logo={logos.graphql}>Graphql</SkillLogo>
          </div>
        </div>
      </div>
      <div className="container w-full md:w-3/4 max-w-[1000px] mx-auto"></div>
    </section>
  );
};

export default Skills;
