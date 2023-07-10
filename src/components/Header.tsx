import React from "react";
import gi from "react-icons/gi";
const {GiHamburgerMenu} = gi

import { Text } from "./common/Text";
import MenuItem from "./common/MenuItem";

interface HeaderProps {
  shouldDropDownDisplay: boolean;
  setShouldDropDownDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<HeaderProps> = ({
  shouldDropDownDisplay,
  setShouldDropDownDisplay,
}) => {
  return (
    <nav className="flex w-11/12 flex-row mx-auto h-full items-center relative z-30">
      <MenuItem
        href="about"
        className="uppercase tracking-widest"
        setShouldDropDownDisplay={setShouldDropDownDisplay}
      >
        <Text variant="XL/bold/black" className="font-mono tracking-widest">
          NH<span className="text-primary">Long</span>
        </Text>
      </MenuItem>
      <button
        onClick={() => setShouldDropDownDisplay((prev) => !prev)}
        className={`visible md:hidden ml-auto transition-full duration-100 ${
          shouldDropDownDisplay ? "rotate-90" : ""
        }`}
      >
        <GiHamburgerMenu size={25} />
      </button>
      <div
        className={`flex w-2/5 min-w-[10rem] pl-6 md:pl-0 absolute md:static md:max-h-full md:h-full bg-white z-20 flex-col h-[12rem] justify-center items-center md:flex-row visible text-xl md:text-[1.2rem] text-stone-900 overflow-hidden top-[4.3rem] right-0  md:shadow-none md:w-1/2 rounded-lg transition-full duration-300 md:divide-none md:opacity-100 ${
          shouldDropDownDisplay
            ? "max-h-[12rem] opacity-100 shadow-lg"
            : "max-h-0 opacity-0"
        }`}
      >
        <MenuItem
          href="about"
          className="tracking-wider "
          setShouldDropDownDisplay={setShouldDropDownDisplay}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 15 15"
            className="md:hidden"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <Text
            variant="lg/bold/neutral"
            className="hover:text-primary flex w-full md:justify-center"
          >
            About me
          </Text>
        </MenuItem>
        <MenuItem
          href="skills"
          className="tracking-wider"
          setShouldDropDownDisplay={setShouldDropDownDisplay}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 15 15"
            className="md:hidden"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <Text variant="lg/bold/neutral"             className="hover:text-primary flex w-full md:justify-center">
            Skills
          </Text>
        </MenuItem>
        <MenuItem
          href="projects"
          className="tracking-wider"
          setShouldDropDownDisplay={setShouldDropDownDisplay}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 15 15"
            className="md:hidden"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <Text variant="lg/bold/neutral"             className="hover:text-primary flex w-full md:justify-center"
>
            Projects
          </Text>
        </MenuItem>
        <MenuItem
          href="contacts"
          className="tracking-wider"
          setShouldDropDownDisplay={setShouldDropDownDisplay}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 15 15"
            className="md:hidden"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <Text
            variant="lg/bold/neutral"
            className="hover:text-primary flex w-full md:justify-center"
          >
            Contacts
          </Text>
        </MenuItem>
      </div>
    </nav>
  );
};

export default Header;
