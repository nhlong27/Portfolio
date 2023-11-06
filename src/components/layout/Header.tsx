import React from "react";
import { Text } from "../common/Text";
import MenuItem from "../common/MenuItem";
import { Button } from "../ui/button";
import { helper } from "@/lib/helper";
import { ModeToggle } from "@components/ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as Scroll from "react-scroll";
export const ScrollLink = Scroll.Link;

const Header = () => {
  return (
    <nav className="relative z-30 flex h-full items-center justify-center gap-8">
      <ScrollLink
        activeClass="active"
        to={"about"}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <Text variant="xl/semibold/foreground">
          NH
          <span className="cursor-pointer uppercase tracking-wider text-primary">
            Long
          </span>
        </Text>
      </ScrollLink>

      <div className="ml-16 flex h-full items-center gap-4 md:hidden">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon">
              {helper.SVGs.verticalDots()}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background">
            <DropdownMenuLabel>My Portfolio</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["About", "Skills", "Projects", "Contacts"].map((menuItem, i) => (
              <DropdownMenuItem>
                <MenuItem key={i} href={menuItem.toLowerCase()}>
                  {menuItem}
                </MenuItem>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="hidden items-center gap-3 px-4 md:flex">
        {["About", "Skills", "Projects", "Contacts"].map((menuItem, i) => (
          <MenuItem key={i} href={menuItem.toLowerCase()}>
            {menuItem}
          </MenuItem>
        ))}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Header;
