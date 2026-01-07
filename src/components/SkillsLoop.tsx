'use client';

import React from 'react';
import LogoLoop from '@/components/ui/LogoLoop'; 
// Make sure to install: npm install react-icons
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiFigma
} from 'react-icons/si';

// The stack you "know to use"
const myTechStack = [
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
];

export function SkillsLoop() {
  return (
    <div className="w-full py-12 border-b border-gray-100 dark:border-gray-800">
      {/* Optional: Tiny label above the loop */}
      <div className="text-center mb-6">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em]">
          Current Tech Stack
        </span>
      </div>

      <div className="relative h-16 w-full max-w-5xl mx-auto overflow-hidden text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-500">
        <LogoLoop
          logos={myTechStack}
          speed={60}              // Slower speed looks more elegant for portfolios
          direction="left"
          logoHeight={32}         // 32px is standard for "trust bars"
          gap={80}                // Wide gap for a clean look
          pauseOnHover={true}     // Allows users to hover and see the tooltips
          hoverSpeed={0}          // Stops completely on hover
          fadeOut={true}          // Smooth edges
          fadeOutColor="var(--background)" // Matches your theme background
          ariaLabel="My Tech Stack"
        />
      </div>
    </div>
  );
}