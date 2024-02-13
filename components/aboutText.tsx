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
        I am a Computer Science and Engineering undergrad(2020-24) student, I
        started development in 2021 to make a{" "}
        <span className="font-medium">Javascript </span>game for a hackathon in
        my college. I liked it and quickly picked up React. Slowly teaching
        myself backend with <span className="font-medium">NodeJs</span> and{" "}
        <span className="font-medium">Express</span>{" "}
        <span className="font-medium"></span>. My
        <span className="italic"> favorite part of programming</span> is the
        problem-solving aspect. I 💚love the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with{" "}
        <span className="font-medium">TypeScript</span>,{" "}
        <span className="font-medium">Graphql</span>,{" "}
        <span className="font-medium">Postgres</span>,{" "}
        <span className="font-medium">Redis</span> and{" "}
        <span className="font-medium">Containers</span>. Learning Technologies and building stuff with it
        always excites me. I am currently working as a{" "}
        <span className="font-medium">FullStack Development Intern</span> at a{" "}
        <Link href="#experience"> <span className="font-medium underline">Startup.</span></Link>
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Machine Learning </span>and{" "}
        <span className="font-medium">AI.</span> Check out my projects below
        that I enjoyed building very much.
      </p>

      <p>
        <span className="">If you have any queries, or want to hire me kindly drop a mail at</span>{" "}
        <span className="italic font-medium">dhrubajitbhattacharji@gmail.com</span> ✌️ 
      </p>
    </motion.section>
  );
}
