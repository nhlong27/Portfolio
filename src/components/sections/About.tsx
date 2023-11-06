import { Text } from "@components/common/Text";
import * as Scroll from "react-scroll";
let ScrollLink = Scroll.Link;
import axios from "axios";
import { z } from "zod";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@components/ui/button";
import { helper } from "@/lib/helper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ImageType, fetchImage } from "./Skills";

const ProfileSummarySchema = z.object({
  name: z.string(),
  title: z.string(),
  summary: z.string(),
});

type ProfileSummaryType = z.infer<typeof ProfileSummarySchema>;

const fetchProfileSummary = async () => {
  const response = z
    .object({
      data: z.object({
        attributes: ProfileSummarySchema,
      }),
    })
    .parse(
      (
        await axios.get(
          `${import.meta.env.PUBLIC_STRAPI_SERVER}/api/profile-summary`
        )
      ).data
    );
  return response.data.attributes;
};

const About = () => {
  const [profileSummary, setProfileSummary] =
    React.useState<ProfileSummaryType | null>();
  const [resume, setResume] = React.useState<ImageType | null>();
  React.useEffect(() => {
    fetchImage("5")
      .then((response) => setResume(response[0]))
      .catch((err) => console.log(err));
  });
  React.useEffect(() => {
    fetchProfileSummary()
      .then((response) => setProfileSummary(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className=" flex h-auto items-start justify-center pt-8 md:mt-0">
      <div className="flex h-full w-11/12 flex-col items-center justify-center md:w-3/4">
        {profileSummary ? (
          <>
            <Text
              variant="XL/bold/foreground"
              className="border-l-4 border-green-500 pb-4 pl-8 font-vina text-[1.8rem] font-semibold tracking-wide md:border-none md:pl-0 md:text-[2rem]"
            >
              {profileSummary.name}
            </Text>
            <Text
              variant="lg/light/surface-foreground"
              className="mb-4 rounded-lg bg-surface px-6 py-2 "
            >
              {profileSummary.title}
            </Text>
            <Text
              variant="md/light/foreground"
              className="my-4 w-3/4 text-left md:w-full md:text-center"
            >
              {profileSummary.summary}
            </Text>
          </>
        ) : (
          <>
            <Skeleton className="mb-8 h-12 w-[20rem]" />
            <Skeleton className="mb-8 h-12 w-[10rem]" />
            <div className="mb-8 w-3/4 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </>
        )}
        <div className="flex flex-col items-center justify-center gap-2 py-4 xs:flex-row xs:gap-8">
          <ScrollLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Button>View projects</Button>
          </ScrollLink>
          {resume ? (
            <a
              href={`${
                import.meta.env.PUBLIC_STRAPI_SERVER + resume.attributes.url
              }`}
              target="_blank"
              className="flex cursor-pointer items-center justify-center rounded-md bg-destructive-container px-3 py-2 text-destructive-container-foreground transition-all duration-200 hover:shadow-md"
            >
              Resume
            </a>
          ) : (
            <Skeleton className="flex h-10 w-20 items-center justify-center rounded-md bg-destructive-container" />
          )}
          <a
            href={helper.urls.linkedin}
            target="_blank"
            className="text-md hidden items-center justify-center gap-1 rounded-xl px-3 py-2 text-primary transition-all duration-200 hover:bg-tertiary-container hover:text-tertiary-container-foreground hover:shadow-md md:flex"
          >
            {helper.SVGs.plus("cursor-pointer h-4 w-4")}
            {helper.SVGs.linkedin("cursor-pointer h-6 w-6")}
            Linkedin
          </a>
          <a
            href={helper.urls.github}
            target="_blank"
            className="text-md hidden items-center  justify-center gap-1 rounded-xl px-3 py-2 text-primary transition-all duration-200 hover:bg-tertiary-container hover:text-tertiary-container-foreground hover:shadow-md md:flex"
          >
            {helper.SVGs.plus("cursor-pointer h-4 w-4")}
            {helper.SVGs.github("cursor-pointer h-6 w-6")}
            Github
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="block md:hidden">
              <Button variant="outline" size="icon">
                {helper.SVGs.plus("cursor-pointer h-4 w-4 ")}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background">
              <DropdownMenuItem>
                <a
                  href={helper.urls.linkedin}
                  target="_blank"
                  className="text-md flex items-center justify-center gap-1 rounded-xl px-3 py-2 text-primary transition-all duration-200 hover:bg-tertiary-container hover:text-tertiary-container-foreground hover:shadow-md"
                >
                  {helper.SVGs.plus("cursor-pointer h-4 w-4")}
                  {helper.SVGs.linkedin("cursor-pointer h-6 w-6")}
                  Linkedin
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a
                  href={helper.urls.github}
                  target="_blank"
                  className="text-md flex items-center justify-center gap-1 rounded-xl px-3 py-2 text-primary transition-all duration-200 hover:bg-tertiary-container hover:text-tertiary-container-foreground hover:shadow-md"
                >
                  {helper.SVGs.plus("cursor-pointer h-4 w-4")}
                  {helper.SVGs.github("cursor-pointer h-6 w-6")}
                  Github
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
};

export default About;
