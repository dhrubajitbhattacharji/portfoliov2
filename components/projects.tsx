"use client";
import SectionHeading from "./section-heading";
// import Image from "next/image";
// import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
// import pic2 from "@/public/arc.png";
import React from "react";
// import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-neutral-200 to-neutral-100">
//     <Image
//       src={pic2}
//       alt="Dhrubajit Bhattcharjee"
//       quality="95"
//       priority={true}
//       className=""
//     />
//   </div>
// );

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>Projects 💎</SectionHeading>
      <div className="text-center flex justify-center items-center flex-col gap-5">
        <a
          href="https://github.com/dhrubajitbhattacharji/book-recommendation-rag"
          target="blank"
        >
          <div className="max-w-xl bg-white rounded-2xl shadow-lg p-6 transition hover:scale-[1.02] hover:shadow-xl">
            <div className="text-center justify-center flex flex-row">
              <h2 className="text-xl font-semibold mb-2">
                Book Recommendation with RAG
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-square-arrow-up-right-icon lucide-square-arrow-up-right"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M8 8h8v8" />
                <path d="m8 16 8-8" />
              </svg>
            </div>
            <p className="text-sm">
              I built a Retrieval Augmented Generation RAG system from scratch
              using a custom dataset from Kaggle and created a Gradio dashboard
              for metrics visualization.
            </p>
            <p className="text-xs font-bold mt-2">
              [Python, Numpy, Pandas, Matplotlib]
            </p>
          </div>
        </a>

        <a
          href="https://github.com/dhrubajitbhattacharji/evo2-analysis"
          target="blank"
        >
          <div className="max-w-xl bg-white rounded-2xl shadow-lg p-6 transition hover:scale-[1.02] hover:shadow-xl">
            <div className="text-center justify-center flex flex-row">
              <h2 className="text-xl font-semibold mb-2">
                DNA Variant Pathogenicity Prediction with Evo2
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-square-arrow-up-right-icon lucide-square-arrow-up-right"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M8 8h8v8" />
                <path d="m8 16 8-8" />
              </svg>
            </div>
            <p className="text-sm">
              A full-stack web application that uses the Evo2 large
              language model to predict the pathogenicity of single nucleotide
              variants (SNVs) in human genes, allowing users to explore genome
              assemblies, search genes, input or select mutations, and compare
              AI predictions with ClinVar classifications. Actively working on it.
            </p>
            <p className="text-xs font-bold mt-2">
              [Python, Numpy, Pandas, Matplotlib]
            </p>
          </div>
        </a>
<div>I'm working on some more stuff I&apos;ll be adding soon!</div>
      </div>
    </section>
  );
}
