import React from "react";
import { Text } from "./Text";

const SkillLogo = ({ logo, children, href }) => {
  return (
    <div className="flex flex-col items-center justify-start max-w-[3rem] sm:max-w-xs">
      <a
        href={href}
        target="_blank"
        className="flex flex-col justify-center items-center gap-4 relative max-w-[4.5rem]"
      >
        <img
          src={logo}
          alt={children}
          className="hover:scale-110 transition-all duration-300 w-full"
        />
      </a>
      <Text
        variant="md/bold/neutral"
        className="w-auto whitespace-nowrap overflow-hidden"
      >
        {children}
      </Text>
    </div>
  );
};

export default SkillLogo;
