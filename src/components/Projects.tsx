// src/components/Projects.tsx
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export function Projects() {
  return (
    <div className="py-20 bg-black/[0.96] antialiased">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        My Recent Work
      </h2>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            // This logic makes the larger items span 2 columns for that "Bento" look
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// Placeholder Data - You can replace this with your real projects later!
// "header" is currently a colored box, but we can swap it for <img> tags later.
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />
);

const items = [
  {
    title: "AI SaaS Platform",
    description: "A full-stack AI platform for contractors using Next.js and OpenAI.",
    header: <Skeleton />,
    icon: <span className="text-2xl">🤖</span>, // Simple emoji icon for now
  },
  {
    title: "Real Estate Dashboard",
    description: "Interactive dashboard for tracking property values and trends.",
    header: <Skeleton />,
    icon: <span className="text-2xl">🏠</span>,
  },
  {
    title: "E-Commerce API",
    description: "A robust backend built with Node.js and PostgreSQL.",
    header: <Skeleton />,
    icon: <span className="text-2xl">🛒</span>,
  },
  {
    title: "Portfolio 2026",
    description: "The website you are looking at right now! Built with Aceternity UI.",
    header: <Skeleton />,
    icon: <span className="text-2xl">🎨</span>,
  },
];