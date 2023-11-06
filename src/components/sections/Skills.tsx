import skill_image from "public/assets/backgrounds/about_me.png";
import { Text } from "@components/common/Text";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { z } from "zod";
import axios from "axios";
import React from "react";
import { Skeleton } from "@components/ui/skeleton";

const ImageSchema = z.object({
  attributes: z.object({
    name: z.string(),
    url: z.string(),
  }),
});
export type ImageType = z.infer<typeof ImageSchema>;

export const fetchImage = async (id?: string) => {
  const response = z
    .object({
      data: z.object({
        attributes: z.object({
          image: z.object({
            data: z.array(ImageSchema),
          }),
        }),
      }),
    })
    .parse(
      (
        await axios.get(
          `${import.meta.env.PUBLIC_STRAPI_SERVER}/api/images/${id}?populate=*`
        )
      ).data
    );
  return response.data.attributes.image.data;
};

const Skills = () => {
  const [skills, setSkills] = React.useState<ImageType[] | null>();

  React.useEffect(() => {
    fetchImage("4")
      .then((response) => setSkills(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section
      id="skills"
      className="mx-8 my-8 flex h-auto min-h-[10rem] justify-center rounded"
    >
      <div className="inset-0 mx-auto flex flex-col rounded-md bg-gradient-to-tr from-background to-surface p-3 shadow-md dark:bg-gradient-to-tr dark:from-stone-900 dark:to-surface md:flex-row">
        <picture className="max-h-[20rem] max-w-none overflow-hidden rounded-lg md:max-h-none md:min-w-[15rem] md:max-w-[20rem]">
          <source media="(max-width: 768px)" srcSet={skill_image} />
          {skill_image ? (
            <img
              className={`z-0 h-full w-full object-cover opacity-70 brightness-110 dark:brightness-75`}
              src={skill_image}
              alt="skills"
            />
          ) : (
            <Skeleton className="h-full w-full" />
          )}
        </picture>
        <div className="max-w-[50rem] grow px-6 py-2 xl:px-6">
          <Text
            variant="xl/semibold/primary-container-foreground"
            className="tracking-wider"
          >
            SKILLS
          </Text>
          <div className="flex h-full flex-wrap content-around justify-between gap-x-4 gap-y-4 bg-transparent px-4 py-8 md:px-16">
            {skills
              ? skills.map((skill, i) => (
                  <Alert
                    key={i}
                    className="flex h-auto w-auto cursor-pointer items-center justify-center gap-2 bg-gradient-to-bl from-stone-100 to-surface px-2 py-1 text-foreground shadow-sm  transition-all duration-300 hover:from-white hover:to-surface dark:bg-gradient-to-bl dark:from-stone-900 dark:to-surface dark:hover:from-black"
                  >
                    <AlertTitle>
                      <img
                        src={`${
                          import.meta.env.PUBLIC_STRAPI_SERVER +
                          skill.attributes.url
                        }`}
                        alt={skill.attributes.name}
                        className="h-6 w-6 object-contain"
                      />
                    </AlertTitle>
                    <AlertDescription className="text-base capitalize">
                      {skill.attributes.name.match(/[^.]*/i)[0]}
                    </AlertDescription>
                  </Alert>
                ))
              : Array(12)
                  .fill(null)
                  .map((_, i) => (
                    <Alert
                      key={i}
                      className="flex h-auto w-auto items-center justify-center gap-2 bg-gradient-to-bl from-stone-100 to-surface px-2 py-1  text-stone-700 shadow-sm"
                    >
                      <AlertTitle>
                        <Skeleton className="h-6 w-6" />
                      </AlertTitle>
                      <AlertDescription>
                        <Skeleton className="h-4 w-12" />
                      </AlertDescription>
                    </Alert>
                  ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
