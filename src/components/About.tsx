// src/components/About.tsx
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Education & Academics",
    description:
      "I am a Software Engineering graduate (Jan 2026) from Western Governors University with a 3.79 GPA. My academic journey provided a strong foundation in data structures, algorithms, and backend systems, complemented by an AAS-T from Lake Washington Institute of Technology.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-bold text-xl">
        🎓 WGU Graduate '26
      </div>
    ),
  },
  {
    title: "The Tech Stack",
    description:
      "I specialize in the modern JavaScript ecosystem. My toolkit includes React, Next.js, and Node.js for web dev, backed by Java and SQL for robust data handling. I utilize Docker for containerization and GitHub Actions for CI/CD pipelines.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] font-bold text-xl">
        ⚡ React, Node, AWS
      </div>
    ),
  },
  {
    title: "Certifications",
    description:
      "Continuous learning is my core philosophy. I hold the AWS Certified Cloud Practitioner, ITIL 4 Foundation, and CompTIA Project+ certifications, ensuring I understand not just how to code, but how to deploy and manage enterprise-grade systems.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white font-bold text-xl">
        ☁️ AWS Certified
      </div>
    ),
  },
];

export function About() {
  return (
    <div className="py-20 bg-black/[0.96]">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
            About Me
        </h2>
      <StickyScroll content={content} />
    </div>
  );
}