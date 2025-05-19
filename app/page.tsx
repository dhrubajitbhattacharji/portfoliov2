"use client";

import AboutText from "@/components/aboutText";
import Bio from "@/components/bio";
import Divider from "@/components/divider";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import ActiveSectionContextProvider from "@/context/active-section-context";

export default function Home() {
  return (
    <main className="absolute inset-0 h-full w-full bg-gray-100	 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1px)] [background-size:16px_16px] text-gray-950 relative pt-28 sm:pt-36 pb-1">
    <ActiveSectionContextProvider>
      <Header />  
      <div className="flex flex-col items-center px-4">
      <Bio/>
      <Divider/>
      <AboutText/>
      <Skills/>
      {/* <Experience /> */}
      </div>
      <Projects/>
      <Footer/>
      </ActiveSectionContextProvider>
    </main>
  )
}
