"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Experience() {
  // const { ref } = useSectionInView("Experience",0.5);

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience"
    >
      <SectionHeading>Experience 💼</SectionHeading>
      <p className="mb-3">
        I currently work as a <span className="font-medium">Software Engineer(SWE)</span> at{" "}
        <Link target="_blank" href="https://www.geogo.in/"><span className="font-medium">Geogo Techsolutions</span></Link>. 
        I have worked at 3 projects as of now. I&apos;ve mostly worked with Node and React to build end to end features.
        Currently I&apos;m work alongside with the ML team on <Link target="_blank" href="https://www.kriyam.ai/"><span className="font-medium">Kriyam.ai</span></Link>, our own product.
      </p>
    </motion.section>
  );
}