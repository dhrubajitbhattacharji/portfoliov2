"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ProjectCards from "./projectCard";
// import Divider from "./divider";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects 💎</SectionHeading>
      <div className="m-4 sm:flex justify-center sm:grid grid-rows-2 grid-flow-col gap-5">
        {projectsData.map((project, index) => (
          <>
            <ProjectCards key={index} {...project} />
          </>
        ))}
      </div>
    </section>
  );

}

