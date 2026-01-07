// src/components/Contact.tsx
"use client";
import React from "react";

export function Contact() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-black/[0.96] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Let's Connect
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          I am currently seeking Software Engineer roles for 2026. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 z-10 relative">
            <a 
                href="mailto:ikmannb12@gmail.com"
                className="px-8 py-3 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white font-bold shadow-lg hover:shadow-blue-500/50 transition duration-200"
            >
                Email Me
            </a>

            <a 
                href="/resume.pdf" 
                target="_blank"
                className="text-sm text-neutral-500 hover:text-blue-500 hover:underline mt-2 transition"
            >
                View Resume PDF
            </a>
            
            <div className="flex gap-6 mt-4">
                <a href="https://linkedin.com/in/ikmannbhullar" target="_blank" className="text-neutral-400 hover:text-white transition">LinkedIn</a>
                <a href="https://github.com/IkmannBhullar" target="_blank" className="text-neutral-400 hover:text-white transition">GitHub</a>
            </div>
        </div>
      </div>
      
      {/* Background Grid for aesthetics */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none" />
    </div>
  );
}