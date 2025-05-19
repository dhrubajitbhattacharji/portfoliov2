"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import pfp from "@/public/image.png"
import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";


export default function Bio() {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section id="home" ref={ref}
    className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex flex-col items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={pfp}
            alt="Dhrubajit Bhattcharjee"
            width="225"
            height="225"
            quality="95"
            priority={true}
            className="h-32 w-32 p-1 ring-2 ring-[#1d327e] rounded-full object-cover shadow-xl"
          />

{/* <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar"> */}

        </motion.div>
        <div className="flex flex-col">
        <motion.h1 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl">
          <span className="font-bold">Dhrubajit Bhattacharya</span>{" "}(he/him)
        </motion.h1>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-l font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi there 👋 I&apos;m a{" "}
        <span className="font-bold">Software Engineer</span> working{" "}
        across Machine Learning and Data Engineering.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
        href="/CV.pdf"
        download
        >
          <span className="focus:scale-110 hover:scale-110 relative inline-block overflow-hidden rounded-full p-[2px] mt-1">
              <span className="absolute inset-[-1000%] bg-[#1d327e]" />
                    <div className="flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-7 py-4 text-sm font-medium leading-5 text-slate-600 backdrop-blur-xl">
                      Download My CV
                    </div>
            </span>
            </a>
        <div className="sm:flex  sm:flex-row gap-3 flex flex-row">
        <a
          className="!bg-white p-4 text-gray-700 flex items-center border-2 border-[#1d327e] gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack "
          href="https://github.com/dhrubajitbhattacharji"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="!bg-white p-4 text-gray-700 flex items-center border-2 border-[#1d327e] gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack "
          href="https://twitter.com/dhruxv1"
          target="_blank"
        >
          <FaTwitterSquare />
        </a>
        <a
          className="bg-white p-4 text-gray-700 border-2 border-[#1d327e] hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack "
          href="https://www.linkedin.com/in/dhrubajitbhattacharjee/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        </div>
        
      </motion.div>
    </section>
  );
}
