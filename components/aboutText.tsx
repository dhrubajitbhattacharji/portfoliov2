import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
// import { useSectionInView } from "@/lib/hooks";
// import Link from "next/link";

export default function AboutText() {
  return (
    <motion.section
      className="mb-28 max-w-[55rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* <SectionHeading>Before you scoll down👇</SectionHeading> */}
      <p className="mb-3 text-wrap text-center">
        I&apos;m a Software Engineer with a passion for building intelligent systems
        and scalable infrastructure. Currently part of the R&D team at GEOGO
        Techsolutions, I work at the intersection of Machine Learning and
        Software Engineering — designing applications, managing robust data
        pipelines, and handling end-to-end deployments for ML-driven solutions.
        With a strong foundation in backend development and a deep interest in
        data-centric systems. Actively looking for opportunities. 
      </p>

      <p>
        <span className="">
          If you have any queries, or want to hire me kindly drop a mail at
        </span>{" "}
        <span className="italic font-medium">
          dhrubajitbhattacharjee01@gmail.com.
        </span>{" "}
        <span>Also contact form coming soon :)</span>
        ✌️
      </p>
    </motion.section>
  );
}
