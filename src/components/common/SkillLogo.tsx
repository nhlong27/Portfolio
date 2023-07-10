import React from "react";
import { logos } from "src/constants/urls";
import { Text } from "./Text";

const SkillLogo = ({ logo, children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-col justify-center items-center gap-4 relative w-1/5 max-w-[4.5rem]"
    >
      <img
        src={logo}
        alt={children}
        className="hover:scale-125 transition-all duration-300 w-full"
      />
      <Text
        variant="md/bold/neutral"
        className="absolute bottom-0 group-hover:-mb-[2rem] group-hover:max-h-[2rem] w-auto whitespace-nowrap group-hover:opacity-100 max-h-0 overflow-hidden transition-all opacity-0 ease-out duration-300"
      >
        {children}
      </Text>
    </a>
  );
};

export default SkillLogo;
