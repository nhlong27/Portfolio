import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import * as Scroll from 'react-scroll';
let ScrollLink = Scroll.Link;

const Header = () => {
  const [shouldDropDownDisplay, setShouldDropDownDisplay] =
    React.useState(false);
  return (
    <nav className="flex w-11/12 flex-row mx-auto h-full items-center relative z-30">
      <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}
        className="flex justify-center items-center md:w-[15rem] w-full h-3/4 md:mr-auto text-[1.5rem] font-bold tracking-wider whitespace-nowrap text-stone-900 uppercase md:p-0 py-4"
      >
        NH <span className="text-emerald-700">Long</span>{" "}
      </ScrollLink>
      <button
        onClick={() => setShouldDropDownDisplay((prev) => !prev)}
        className={`visible md:hidden ml-auto transition-full duration-100 ${
          shouldDropDownDisplay ? "rotate-90" : ""
        }`}
      >
        <GiHamburgerMenu size={25} />
      </button>
      <div
        className={`flex w-1/2 absolute md:static md:max-h-full md:h-full bg-white z-20 flex-col h-[12rem] justify-center items-center md:flex-row visible text-xl md:text-[1.2rem] text-stone-900 overflow-hidden top-[4.3rem] right-0  md:shadow-none rounded-lg transition-full duration-300 md:divide-none md:opacity-100 ${
          shouldDropDownDisplay
            ? "max-h-[12rem] opacity-100 shadow-lg"
            : "max-h-0 opacity-0"
        }`}
      >
        <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}
          className="grid hover:text-green-600 hover:font-bold  transition-full duration-100 place-items-center md:w-[8rem] w-full h-3/4 py-2 md:ml-auto"
        >
          About me
        </ScrollLink>
        <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}
          className="grid hover:text-green-600 hover:font-bold  transition-full duration-100 place-items-center md:w-[8rem] w-full h-3/4 py-2"
        >
          Skills
        </ScrollLink>
        <ScrollLink activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}
          className="grid hover:text-green-600 hover:font-bold  transition-full duration-100 place-items-center md:w-[8rem] w-full h-3/4 py-2"
        >
          Projects
        </ScrollLink>
        <ScrollLink activeClass="active" to="contacts" spy={true} smooth={true} offset={50} duration={500}
          className="grid hover:text-green-600 hover:font-bold  transition-full duration-100 place-items-center leading-4 md:w-[8rem] w-full h-3/4 py-2"
        >
          Contacts
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Header;
