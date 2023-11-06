import { Text } from "../common/Text";
import MenuItem from "../common/MenuItem";
import { helper } from "@/lib/helper";
import { ImageType, fetchImage } from "@components/sections/Skills";
import React from "react";
import { Skeleton } from "@components/ui/skeleton";

const Footer = () => {
  const [resume, setResume] = React.useState<ImageType | null>();
  React.useEffect(() => {
    fetchImage("5")
      .then((response) => setResume(response[0]))
      .catch((err) => console.log(err));
  });
  return (
    <footer className="z-10 flex min-h-[10rem] w-full flex-col items-center justify-center border-t-2 border-stone-100 bg-background dark:border-stone-800">
      <div className="my-auto mt-0 flex h-auto w-full max-w-[1920px] flex-row items-center justify-center gap-8 pt-16 md:w-11/12 md:flex-col">
        <div className="flex max-w-[500px] flex-col items-center gap-4 md:w-2/5 md:flex-row md:justify-evenly">
          <a
            href={helper.urls.linkedin}
            target="_blank"
            className="hover:opacity-70"
          >
            {helper.SVGs.linkedin("cursor-pointer text-[#0b63bd] h-8 w-8")}
          </a>
          <a
            href={helper.urls.github}
            target="_blank"
            className="hover:opacity-70"
          >
            {helper.SVGs.github("cursor-pointer h-8 w-8")}
          </a>
          {resume ? (
            <a
              href={`${
                import.meta.env.PUBLIC_STRAPI_SERVER + resume.attributes.url
              }`}
              target="_blank"
              className="flex h-8 cursor-pointer items-center justify-center rounded-md bg-destructive-container px-3 py-2 text-destructive-container-foreground transition-all duration-200 hover:shadow-md"
            >
              Resume
            </a>
          ) : (
            <Skeleton className="flex h-8 w-20 items-center justify-center rounded-md bg-destructive-container" />
          )}
        </div>
        <div className="flex flex-col items-center md:w-3/5 md:max-w-[500px]  md:flex-row md:justify-evenly">
          {["About", "Skills", "Projects", "Contacts"].map((menuItem, i) => (
            <MenuItem key={i} href={menuItem.toLowerCase()}>
              {menuItem}
            </MenuItem>
          ))}
        </div>
      </div>
      <div className="w-full pb-8 pt-3 text-center">
        <Text
          variant="md/light/neutral"
          className="text-foreground/50 font-mono tracking-widest"
        >
          Copyright @2023; Designed by NHLong
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
