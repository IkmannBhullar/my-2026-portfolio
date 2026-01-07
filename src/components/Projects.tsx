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
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = ({ color }: { color: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${color}`} />
);

const items = [
  {
    title: "Swap Spot | E-Commerce",
    description: "Full-stack MERN platform with Redux state management and secure JWT authentication.",
    header: <Skeleton color="from-orange-500 to-red-500" />,
    icon: <span className="text-2xl">🛍️</span>,
  },
  {
    title: "GreenBite | Recipe Platform",
    description: "Responsive React app optimizing API latency by 60% and increasing user engagement.",
    header: <Skeleton color="from-green-500 to-emerald-500" />,
    icon: <span className="text-2xl">🥗</span>,
  },
  {
    title: "LiteMusic | Streaming App",
    description: "Spotify-inspired player using Vite, Framer Motion, and the Deezer API.",
    header: <Skeleton color="from-purple-500 to-indigo-500" />,
    icon: <span className="text-2xl">🎵</span>,
  },
  {
    title: "CityCode.AI (Coming Soon)",
    description: "My current founder project: An AI SaaS platform for contractors and builders.",
    header: <Skeleton color="from-blue-500 to-cyan-500" />,
    icon: <span className="text-2xl">🏗️</span>,
  },
];