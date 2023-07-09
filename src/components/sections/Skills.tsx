import React from "react";
import skills from "public/assets/backgrounds/about_me.png";
import { Text } from "@components/common/Text";

const Skills = () => {
  return (
    <section
      id="skills"
      className="-mt-[15rem] md:min-h-[45rem] min-h-[90rem] flex justify-center items-start relative mx-8 overflow-hidden rounded z-10 "
    >
      {/* <div className="absolute inset-0 w-full h-1/2 bg-white -z-10"></div> */}
      <div className="absolute inset-0 w-full h-3/4 md:my-auto my-16 bg-white -z-10 -skew-y-6 overflow-hidden rounded grid md:grid-cols-5 grid-rows-5 md:grid-rows-1 grid-cols-1 shadow-md">
        <picture className="w-full h-full row-span-2 md:row-span-1 col-span-1 md:col-span-2 overflow-hidden">
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
        </div>
      </div>
      <div className="container w-full md:w-3/4 max-w-[1000px] mx-auto"></div>
    </section>
  );
};

export default Skills;
