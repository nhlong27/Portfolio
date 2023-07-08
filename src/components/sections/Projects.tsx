import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="w-full grid grid-rows-3">
      <div className="min-h-[20rem] md:h-[25rem] w-full grid grid-rows-5 md:grid-rows-1 md:grid-cols-5">
        <div className="row-span-2 md:row-span-2 md:col-span-2">image</div>
        <div className="row-span-3 md:row-span-2 md:col-span-3">
          description
        </div>
      </div>
      <div className="min-h-[20rem] md:h-[25rem] w-full grid grid-rows-5 md:grid-rows-1 md:grid-cols-5">
        <div className="row-span-3 md:row-span-2 md:col-span-3">
          description
        </div>
        <div className="row-span-2 md:row-span-2 md:col-span-2">image</div>
      </div>
      <div className="min-h-[20rem] md:h-[25rem] w-full grid grid-rows-5 md:grid-rows-1 md:grid-cols-5">
        <div className="row-span-2 md:row-span-2 md:col-span-2">image</div>
        <div className="row-span-3 md:row-span-2 md:col-span-3">
          description
        </div>
      </div>
    </section>
  );
};

export default Projects;
