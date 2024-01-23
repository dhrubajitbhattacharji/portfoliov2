"use client";

import AboutText from "@/components/aboutText";
import Bio from "@/components/bio";
import Divider from "@/components/divider";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Bio/>
      <Divider/>
      <AboutText/>
      <Skills/>
      <Experience />
      <Projects/>
      

      
    </main>
  )
}
