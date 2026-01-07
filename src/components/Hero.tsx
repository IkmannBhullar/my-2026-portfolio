// src/components/Hero.tsx
"use client"; // Required for client-side interactivity
import React from "react";
import { Spotlight } from "./ui/Spotlight";

export function Hero() {
  return (
    // Main container with dark background
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
      {/* The Spotlight Effect: fills white from top-left */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Content Container */}
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Ikmann Bhullar <br /> building the future.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Full Stack Developer. Creative Designer.
          <br />
          Ready to build engaging digital experiences.
        </p>
        
        {/* Simple Button for testing */}
        <div className="mt-8 flex justify-center">
            <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                View My Work
            </button>

            {/* Resume Button - "download" attribute forces the file to download */}
            <a 
                href="/resume.pdf" 
                download="Ikmann_Bhullar_Resume.pdf"
                className="px-8 py-2 rounded-full border border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:text-white transition duration-200 text-center"
            >
                Download Resume
            </a>
        </div>
      </div>
    </div>
  );
}