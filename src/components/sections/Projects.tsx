import { Text } from "@components/common/Text";
import Project from "@components/projects/Project";
import { Skeleton } from "@components/ui/skeleton";
import axios from "axios";
import React from "react";
import { z } from "zod";

const ProjectSchema = z.object({
  attributes: z.object({
    name: z.string(),
    description: z.string(),
    goal: z.string(),
    approach: z.string(),
    features: z.object({
      data: z.array(
        z.object({
          attributes: z.object({
            feature: z.string(),
          }),
        })
      ),
    }),
    technologies: z.object({
      data: z.array(
        z.object({
          attributes: z.object({
            technology: z.string(),
          }),
        })
      ),
    }),
    links: z.object({
      data: z.array(
        z.object({
          attributes: z.object({
            link: z.string(),
          }),
        })
      ),
    }),
    images: z.object({
      data: z.array(
        z.object({
          id: z.number(),
        })
      ),
    }),
  }),
});

type ProjectType = z.infer<typeof ProjectSchema>;

const fetchProjects = async () => {
  const response = z
    .object({
      data: z.array(ProjectSchema),
    })
    .parse(
      (
        await axios.get(
          `${import.meta.env.PUBLIC_STRAPI_SERVER}/api/projects?populate=*`
        )
      ).data
    );
  return response.data;
};

const Projects = () => {
  const [projects, setProjects] = React.useState<ProjectType[] | null>();

  React.useEffect(() => {
    fetchProjects()
      .then((response) => setProjects(response))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section
      id="projects"
      className="relative z-0 mx-auto mb-[5rem] mt-[5rem] flex w-full max-w-[70rem] flex-col items-center justify-center gap-8 px-0"
    >
      <Text
        variant="xl/bold/foreground"
        className="ml-8 self-start font-bold uppercase tracking-wider"
      >
        Projects
      </Text>
      {projects ? (
        projects
          .reverse()
          .map((project, i) => (
            <Project
              demo_link={project.attributes.links.data[0].attributes.link}
              repo_link={project.attributes.links.data[1].attributes.link}
              imageID={project.attributes.images.data[0].id}
              name={project.attributes.name}
              description={project.attributes.description}
              goal={project.attributes.goal}
              approach={project.attributes.approach}
              features={project.attributes.features.data.map(
                (obj) => obj.attributes.feature
              )}
              technologies={project.attributes.technologies.data.map(
                (obj) => obj.attributes.technology
              )}
            />
          ))
      ) : (
        <div className="relative isolate -z-10 overflow-hidden bg-transparent px-6 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-gray-600"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg
                x="50%"
                y={-1}
                className="overflow-visible fill-gray-50 dark:fill-gray-800"
              >
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <Skeleton className="h-4 w-[10rem]" />
                  <Skeleton className="h-12 w-[20rem]" />
                  <div className="w-full space-y-3">
                    <Skeleton className="h-4 w-[20rem]" />
                    <Skeleton className="h-4 w-[20rem]" />
                    <Skeleton className="h-4 w-[20rem]" />
                    <Skeleton className="h-4 w-[20rem]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <Skeleton className="h-[48rem] w-[48rem]" />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="text-foreground/90 max-w-xl text-base leading-7 lg:max-w-lg">
                  <Skeleton className="h-12 w-[10rem]" />
                  <div className="w-full space-y-3">
                    <Skeleton className="h-4 w-[20rem]" />
                    <Skeleton className="h-4 w-[20rem]" />
                    <Skeleton className="h-4 w-[20rem]" />
                    <Skeleton className="h-4 w-[20rem]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
