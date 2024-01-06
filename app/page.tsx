"use client";

import AboutText from "@/components/aboutText";
import Bio from "@/components/bio";
import Divider from "@/components/divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Bio/>
      <Divider/>
      <AboutText/>
    </main>
  )
}
