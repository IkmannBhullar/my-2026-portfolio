"use client";
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black text-neutral-400 py-8 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Copyright */}
        <div className="text-sm font-mono">
          © {new Date().getFullYear()} Ikmann Bhullar. All rights reserved.
        </div>

        {/* Center: Tech Badge */}
        <div className="text-xs bg-white/5 px-3 py-1 rounded-full border border-white/5">
          Built with Next.js, Tailwind & Framer Motion
        </div>

        {/* Right Side: Socials */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/IkmannBhullar" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://linkedin.com/in/ikmannbhullar" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          {/* Add more if needed */}
        </div>

      </div>
    </footer>
  );
}