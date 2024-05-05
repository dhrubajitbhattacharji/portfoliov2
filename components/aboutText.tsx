import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function AboutText() {

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Before you scoll down👇</SectionHeading>
      <p className="mb-3">
       I graduated in July, 2024 with a Bachelor&apos;s degree in Computer Science and Engineering. I love building and contributing to softwares that have a <span className="font-medium">mission/cause to improve the world and our lives</span>. 
      I have been writing code for development since 2021, a year later I joined a startup (where I currently work) as an Intern and got introduced to the art of shipping softwares. 
      </p>
      <p>
        My primary tech stack includes{" "}
        <span className="font-medium">TypeScript</span>,{" "}
        <span className="font-medium">Node</span>,{" "}
        <span className="font-medium">Express</span>,{" "}
        <span className="font-medium">React</span>,{" "}
        <span className="font-medium">Postgres</span>. 
        I&apos;m very familar with CI/CD and standard Deployments practices(eg. Docker).
        I&apos;m currently learning RAG and LLMs for a project. I&apos;ve some interest in Machine Learning as well but I&apos;m taking it slow right now as it is a hobby.{" "}
      </p>

      <p>
        <span className="">If you have any queries, or want to hire me kindly drop a mail at</span>{" "}
        <span className="italic font-medium">dhrubajitbhattacharji@gmail.com</span> ✌️ 
      </p>
    </motion.section>
  );
}
