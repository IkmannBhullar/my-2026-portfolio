"use client";
import React from "react";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ArrowDown } from "lucide-react";

// Reusable Code Window Component
const CodeWindow = ({ code, language = "typescript" }: { code: string; language?: string }) => (
  <div className="h-full w-full bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10 shadow-2xl flex flex-col">
    <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/5">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <span className="ml-2 text-xs text-gray-400 font-mono">{language}</span>
    </div>
    <div className="p-4 font-mono text-sm text-gray-300 overflow-auto">
      <pre className="whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

const aboutContent = [
  {
    title: "The Engineer",
    description:
      "I’m a Software Engineering student graduating in January 2026, with a strong focus on backend and full-stack development. I enjoy building systems that are scalable, reliable, and actually useful — from REST APIs and databases to modern web interfaces.",
    content: (
      <CodeWindow 
        code={`// Backend Logic
app.get('/api/status', (req, res) => {
  const systemHealth = checkHealth();
  
  if (systemHealth.isStable) {
    res.status(200).json({ 
      status: 'Online', 
      uptime: process.uptime() 
    });
  } else {
    // Automated alerting
    alertAdmin(systemHealth.errors);
  }
});`} 
      />
    ),
  },
  {
    title: "The Builder",
    description:
      "Outside of coursework, I regularly build independent projects to explore real-world engineering challenges. I don't just write code; I build products that solve actual problems.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-neutral-900 rounded-xl border border-white/10 overflow-hidden relative">
        <img 
            src="/coding-setup.png" 
            alt="My Workspace" 
            className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity" 
        />

      </div>
    ),
  },
  {
    title: "The Craftsman",
    description:
      "I care about clean code, maintainability, and understanding why systems are built the way they are. For me, software isn't just about making it work—it's about making it work efficiently and sustainably.",
    content: (
        <img 
            src="/craftsman.png" 
            alt="My Workspace" 
            className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity" 
        />
    ),
  },
];

export function About() {
  
  const scrollToWork = () => {
    const nextSection = document.getElementById("work");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // REMOVED 'overflow-hidden' from here to fix scroll trap
    <section className="relative w-full bg-black text-white" id="about">
      
      {/* 1. Title Section */}
      <div className="pt-20 pb-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <ScrollFloat 
          animationDuration={1} 
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          containerClassName="mt-10 mb-10"
          textClassName="text-4xl md:text-6xl text-blue-500 font-bold"
        >
          About Me
        </ScrollFloat>
      </div>

      {/* 2. The Sticky Scroll Section */}
      {/* Added mb-20 to give space before the arrow */}
      <div className="w-full mb-20">
        <StickyScroll content={aboutContent} />
      </div>

      {/* 3. The Down Arrow */}
      <div className="w-full flex justify-center pb-10">
        <div 
          onClick={scrollToWork}
          className="cursor-pointer animate-bounce p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Scroll to Work section"
        >
          <ArrowDown className="w-8 h-8 text-white/50 hover:text-white transition-colors duration-300" />
        </div>
      </div>

    </section>
  );
}