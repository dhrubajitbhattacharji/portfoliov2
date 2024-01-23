"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience",0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience"
    >
      <SectionHeading>Experience 💼</SectionHeading>
      <p className="mb-3">
        I currently(2022-June'24) work as a FullStack Developement Intern at{" "}
        <span className="font-medium underline">Geogo Techsolutions</span>. 
        I have mostly worked in <span className="italic font-medium">ReactJs</span>{" "}
        and have hands-on experience with backend Technologies like <span className="font-medium">NodeJs</span>{" "}
        , <span className="font-medium">Express</span>, <span className="font-medium">MongoDb</span> and <span className="font-medium">Postgres</span>{". "}
       Also currently(2020-June'24) a CS Engineering student at <span className="underline font-medium">Supreme Knowledge Foundation Group of Institutions</span>{" "}
      </p>
    </motion.section>
  );
}