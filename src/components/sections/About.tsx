import { Text } from "@components/common/Text";
import React from "react";
import {AiOutlineGithub} from "react-icons/ai";

import {BsLinkedin} from "react-icons/bs";
import * as Scroll from "react-scroll";
import { urls } from "src/constants/urls";
let ScrollLink = Scroll.Link;

const About = () => {
  return (
    <section className="mt-[5rem] md:mt-0 h-[45rem] flex justify-center items-start">
      <div className="md:w-3/4 w-11/12 h-5/6 flex flex-col justify-center items-center text-stone-900 font-sans">
        <Text
          variant="XL/bold/black"
          className="border-l-4 border-green-500 pl-8 md:border-none md:pl-0 text-[3.2rem] font-semibold tracking-wide pb-4"
        >
          Nguyễn Hoàng Long
        </Text>
        <Text variant="xl/normal/black" className="text-3xl pb-4">
          Software Engineer
        </Text>
        <ScrollLink
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="text-lg py-2 px-6 ring-2 ring-stone-900 rounded-sm my-8 bg-opacity-10 bg-stone-900 font-semibold text-stone-600 hover:bg-opacity-100 hover:text-white transition-full duration-200">
            View projects
          </button>
        </ScrollLink>
        <div className="py-4 flex gap-8 items-center justify-center">
          <a
            href={urls.github}
            target="_blank"
            className="opacity-100 hover:opacity-70 hover:shadow-xl rounded-full "
          >
            <AiOutlineGithub size={50} />
        </a>
          <a
            href={urls.linkedin}
            target="_blank"
            className="opacity-100 hover:opacity-70 hover:shadow-xl  "
          >
            <BsLinkedin size={40} />
          </a>
          <a
            href={urls.resume}
            target="_blank"
            className="opacity-100 hover:opacity-70 hover:shadow-xl  px-6 py-2 text-white grid place-items-center leading-4 bg-stone-900 rounded-sm tracking-wider shadow-lg h-[2.5rem]"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
