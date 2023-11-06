import { Button } from "@components/ui/button";
import React from "react";
import * as Scroll from "react-scroll";
export const ScrollLink = Scroll.Link;

const MenuItem = ({
  children,
  href,
}: {
  children?: React.ReactNode;
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
    >
      <Button variant="ghost" size="sm">
        {children}
      </Button>
    </ScrollLink>
  );
};

export default MenuItem;
