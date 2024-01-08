import React from "react";
import SectionHeading from "./sectionHeading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
// import Divider from "./divider";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects 💎</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <>
            <ProjectCards {...project} />
          </>
        ))}
      </div>
    </section>
  );
}

type projectProps = (typeof projectsData)[number];

function ProjectCards({ title, description, tags, imageUrl }: projectProps) {
  return (
    <section className="rounded-lg relative bg-white md:bg-gradient-to-r from-white via-gray-200 to-gray-200 max-w-[40rem] overflow-hidden sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 transition">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">

      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
      <ul className="flex flex-wrap mt-4 gap-2">
        {tags.map((tag, index) => (
          <li className="bg-gray-500 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>{tag}</li>
        ))}
      </ul>

      </div>
      
      <Image className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
        hover:scale-[1.04]
        hover:-translate-x-3
        hover:translate-y-3
        hover:-rotate-2" 
        alt="my projects" src={imageUrl} quality={100} />
    </section>
  );
}
