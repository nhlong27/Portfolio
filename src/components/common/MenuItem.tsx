import React from "react";
import * as Scroll from "react-scroll";
import { Text } from "./Text";
import { cn } from "src/utils/cn";
export const ScrollLink = Scroll.Link;

const MenuItem = ({
  setShouldDropDownDisplay,
  children,
  className,
  href,
}: {
  setShouldDropDownDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  return (
    <ScrollLink
      activeClass="active"
      to={href}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      onClick={() => setShouldDropDownDisplay(false)}
      className={cn(
        "flex h-3/4 w-full cursor-pointer items-center justify-center whitespace-nowrap text-[1.5rem] font-bold  text-stone-900 md:mr-auto md:w-[15rem] md:p-0",
        className,
      )}
    >
      {children}
    </ScrollLink>
  );
};

export default MenuItem;
