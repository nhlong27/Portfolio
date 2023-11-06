import React from "react";
import { Text } from "./Text";

const SkillLogo = ({ logo, children, href }) => {
  return (
    <div className="flex max-w-[3rem] flex-col items-center justify-start sm:max-w-xs">
      <a
        href={href}
        target="_blank"
        className="relative flex max-w-[4.5rem] flex-col items-center justify-center gap-4"
      >
        <img
          src={logo}
          alt={children}
          className="w-full transition-all duration-300 hover:scale-110"
        />
      </a>
      <Text
        variant="md/bold/neutral"
        className="w-auto overflow-hidden whitespace-nowrap"
      >
        {children}
      </Text>
    </div>
  );
};

export default SkillLogo;
