"use client";
import React from "react";
import ScrollFloat from "@/components/ui/ScrollFloat";

export function About() {
  return (
    <section className="relative w-full py-20 bg-black text-white overflow-hidden">
      
      {/* Background Grid Pattern (Optional subtle texture) */}
      <div className="absolute inset-0 h-full w-full bg-grid-white/[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* 1. The Scroll Float Headline */}
        <div className="mb-16">
          <ScrollFloat 
            animationDuration={1} 
            ease="back.inOut(2)"
            scrollStart="top bottom"
            scrollEnd="bottom center"
            stagger={0.03}
          >
            About Me
          </ScrollFloat>
        </div>

        {/* 2. Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Column 1: The Narrative */}
          <div className="space-y-6 text-lg text-neutral-300 leading-relaxed font-light">
            <p>
              I am a <span className="text-white font-semibold">Software Engineer</span> with a passion for building full-stack applications that solve real-world problems. 
            </p>
            <p>
              Currently, I am the founder of <span className="text-blue-400 font-semibold">CityCode.AI</span>, a SaaS platform leveraging AI to help contractors and builders navigate complex zoning regulations instantly.
            </p>
            <p>
              My coding philosophy is simple: write clean code, design intuitive interfaces, and never stop learning. When I&apos;m not shipping features, you can find me exploring new tech stacks or refining my design skills.
            </p>
          </div>

          {/* Column 2: Quick Stats / Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">3+</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-4xl font-bold text-purple-500 mb-2">10+</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Projects Shipped</p>
            </div>
            <div className="col-span-2 p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Current Focus</h3>
              <p className="text-gray-400">
                Scaling AI-driven SaaS applications and mastering Next.js 14 architecture.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}