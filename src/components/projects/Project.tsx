import { Text } from "@components/common/Text";
import { helper } from "@/lib/helper";
import React from "react";
import { ImageType, fetchImage } from "@components/sections/Skills";
import { Skeleton } from "@components/ui/skeleton";
interface ProjectComponentType {
  name: string;
  description: string;
  goal: string;
  approach: string;
  demo_link: string;
  repo_link: string;
  imageID: number;
  features: string[];
  technologies: string[];
}

const Project: React.FC<ProjectComponentType> = (props) => {
  const {
    name,
    description,
    goal,
    approach,
    demo_link,
    repo_link,
    imageID,
    features,
    technologies,
  } = props;
  const [image, setImage] = React.useState<ImageType["attributes"] | null>();
  React.useEffect(() => {
    if (imageID) {
      fetchImage(String(imageID)).then((response) =>
        setImage(response[0].attributes)
      );
    }
  }, [imageID]);
  return (
    <div className="z-0 flex flex-col items-center overflow-hidden rounded-xl bg-gradient-to-br from-background to-surface shadow-md transition-all duration-300 dark:bg-gradient-to-br dark:from-background dark:to-surface">
      <div className="z-10 w-full px-16 pb-16 pt-8">
        <div className=" inline-flex w-auto items-center rounded-xl bg-secondary-container py-0 pl-4 shadow-sm">
          <Text
            variant="xl/bold/foreground"
            className="mr-4 font-serif font-bold text-black text-primary"
          >
            {name}
          </Text>
          <a
            target="_blank"
            href={demo_link}
            className="flex items-center justify-center  rounded-sm bg-primary px-4 py-1 text-sm text-primary-foreground transition-all duration-200 hover:shadow-lg"
          >
            Demo
          </a>
          <a
            target="_blank"
            href={repo_link}
            className="text-md flex items-center justify-center gap-1 rounded-r-xl px-3 py-2 text-sm text-primary transition-all duration-200  hover:shadow-lg"
          >
            {helper.SVGs.repo()}
            Repo
          </a>
        </div>
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
                  <p className="py-2 text-base leading-7 text-pink-400">
                    Role: project manager
                  </p>
                  <h1 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {description}
                  </h1>
                  <p className="text-foreground/90 mt-6 text-base leading-8">
                    {goal}
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              {image ? (
                <img
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 object-contain shadow-xl ring-1 ring-gray-400/10 dark:brightness-75 sm:w-[57rem]"
                  src={`${import.meta.env.PUBLIC_STRAPI_SERVER + image.url}`}
                  alt={image.name}
                />
              ) : (
                <Skeleton className="ring-gray-40 w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1" />
              )}
            </div>
            <div className=" lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="rounded-tr-[50%] border-r-2 border-t-2 border-stone-100 dark:border-stone-800 lg:pr-4">
                <div className="text-foreground/90 max-w-xl text-base leading-7 lg:max-w-lg">
                  <h2 className="mt-16 text-xl font-bold tracking-tight text-foreground">
                    Solving the problem.
                  </h2>
                  <p className="mt-6 pr-4 text-sm leading-6">{approach}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="text-foreground/90 max-w-xl text-base leading-7 lg:max-w-lg">
                  <h2 className="mt-16 text-xl font-bold tracking-tight text-foreground">
                    Notable technologies.
                  </h2>
                  <ul
                    role="list"
                    className="text-secondary/90 mt-8 space-y-4 text-sm"
                  >
                    {technologies.map((technology, i) => (
                      <li className="flex gap-x-3" key={i}>
                        <span>
                          <strong className=" font-light text-foreground">
                            {technology}
                          </strong>{" "}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
