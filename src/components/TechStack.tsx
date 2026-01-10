"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Code2, Database, Cloud, Wrench, Layout, Terminal, Palette } from "lucide-react";

// 1. Corrected Imports
import { 
  // Languages
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss3, 
  // Frameworks
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiSpringboot, SiAngular,
  // Databases
  SiMysql, SiPostgresql, SiMongodb, SiFirebase,
  // Tools
  SiDocker, SiGithubactions, SiGit, SiPostman, SiFigma, 
  SiTailwindcss, 
  // Corrected Names
  SiFramer,   
  SiAmazon,   
} from "react-icons/si";

import { FaJava } from "react-icons/fa"; 
import { TbApi } from "react-icons/tb";

// 2. The Missing Helper Component (Must be here!)
const SkillIcon = ({ icon, name, color }: { icon: React.ReactNode; name: string; color: string }) => (
  <div className="relative group flex items-center justify-center p-2 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300">
    {/* The Icon */}
    <div className={`text-2xl ${color} group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    
    {/* The Tooltip */}
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none z-50">
      {name}
    </span>
  </div>
);

// 3. Main Component
export function TechStack() {
  
  const skills = [
    {
      title: "Languages",
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      description: (
        <div className="flex flex-wrap gap-3 mt-2">
          <SkillIcon name="Java" color="text-red-500" icon={<FaJava />} /> 
          <SkillIcon name="JavaScript" color="text-yellow-400" icon={<SiJavascript />} />
          <SkillIcon name="TypeScript" color="text-blue-400" icon={<SiTypescript />} />
          <SkillIcon name="Python" color="text-yellow-300" icon={<SiPython />} />
          <SkillIcon name="HTML5" color="text-orange-500" icon={<SiHtml5 />} />
          <SkillIcon name="CSS3" color="text-blue-500" icon={<SiCss3 />} />
        </div>
      ),
    },
    {
      title: "Frameworks",
      icon: <Layout className="w-8 h-8 text-purple-500" />,
      description: (
        <div className="flex flex-wrap gap-3 mt-2">
          <SkillIcon name="React" color="text-cyan-400" icon={<SiReact />} />
          <SkillIcon name="Next.js" color="text-white" icon={<SiNextdotjs />} />
          <SkillIcon name="Node.js" color="text-green-500" icon={<SiNodedotjs />} />
          <SkillIcon name="Express" color="text-gray-400" icon={<SiExpress />} />
          <SkillIcon name="Spring Boot" color="text-green-400" icon={<SiSpringboot />} />
          <SkillIcon name="Angular" color="text-red-600" icon={<SiAngular />} />
        </div>
      ),
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-emerald-500" />,
      description: (
        <div className="flex flex-wrap gap-3 mt-2">
          <SkillIcon name="MySQL" color="text-blue-600" icon={<SiMysql />} />
          <SkillIcon name="PostgreSQL" color="text-blue-300" icon={<SiPostgresql />} />
          <SkillIcon name="MongoDB" color="text-green-500" icon={<SiMongodb />} />
          <SkillIcon name="Firebase" color="text-yellow-500" icon={<SiFirebase />} />
        </div>
      ),
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      description: (
        <div className="flex flex-wrap gap-3 mt-2">
          <SkillIcon name="AWS" color="text-orange-400" icon={<SiAmazon />} />
          <SkillIcon name="Docker" color="text-blue-500" icon={<SiDocker />} />
          <SkillIcon name="GitHub Actions" color="text-white" icon={<SiGithubactions />} />
        </div>
      ),
    },
    {
      title: "Tools & Practices",
      icon: <Terminal className="w-8 h-8 text-yellow-500" />,
      description: (
        <div className="flex flex-wrap gap-3 mt-2">
          <SkillIcon name="Git" color="text-orange-600" icon={<SiGit />} />
          <SkillIcon name="REST APIs" color="text-green-400" icon={<TbApi />} />
          <SkillIcon name="Postman" color="text-orange-500" icon={<SiPostman />} />
        </div>
      ),
    },
    {
      title: "Design & UI",
      icon: <Palette className="w-8 h-8 text-pink-500" />,
      description: (
        <div className="flex flex-wrap gap-3 mt-2">
          <SkillIcon name="Figma" color="text-purple-400" icon={<SiFigma />} />
          <SkillIcon name="Tailwind" color="text-cyan-400" icon={<SiTailwindcss />} />
          <SkillIcon name="Framer Motion" color="text-pink-500" icon={<SiFramer />} />
        </div>
      ),
    },
  ];

  return (
    <section id="skills" className="w-full bg-black text-white py-20 relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
            Technical Arsenal
          </h2>
          <p className="text-neutral-400 mt-4">
            The languages, tools, and frameworks I use to build systems.
          </p>
        </div>

        <HoverEffect items={skills} />

        {/* Contact CTA */}
        <div className="mt-16 text-center">
            <p className="text-neutral-500 text-sm mb-4">Ready to put these skills to work?</p>
             <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors"
             >
                Let&apos;s Talk
             </button>
        </div>
      </div>
    </section>
  );
}