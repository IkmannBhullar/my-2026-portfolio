"use client";
import React, { useState } from "react";
import ChromaGrid, { ChromaItem } from "@/components/ui/ChromaGrid";
import { ArrowDown, X, Github, ExternalLink, CheckCircle2 } from "lucide-react"; 
import { AnimatePresence, motion } from "framer-motion";

const projects: ChromaItem[] = [
    {
    id: "swapspot",
    image: "/SS-main.png",
    title: "SwapSpot",
    subtitle: "Full Stack E-Commerce Platform",
    description: "A fully functional e-commerce application built from scratch using the MERN stack. It features a robust shopping cart, secure user authentication via JWT, and a complete admin dashboard for product management. The platform handles real-world e-commerce needs including payment processing with PayPal and cloud image storage via Cloudinary.  (Give it a minute or so to wake up!)",
    features: [
      "🛒 Full Stack Shopping Cart with Redux",
      "🔐 Secure Authentication (JWT)",
      "💳 PayPal Payment Integration",
      "☁️ Cloudinary Image Uploads",
      "🛠️ Admin Dashboard (CRUD Products)",
      "📱 Mobile-First Responsive Design"
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "PayPal API", "Cloudinary"],
    github: "https://github.com/IkmannBhullar/my_shop",
    demo: "https://swap-spot.onrender.com/",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    id: "greenbite",
    image: "/gb-main.png",
    title: "GreenBite",
    subtitle: "Smart Recipe Finder",
    description: "A smart, ingredient-based recipe web app powered by the Spoonacular API. Users can enter available ingredients to find matching recipes, helping reduce food waste. It includes a local cookbook feature to save favorites and automatically generates shopping lists exportable to PDF.",
    features: [
      "🔍 Search Recipes by Ingredient",
      "📚 Local Storage Cookbook",
      "🛒 Smart Grocery List Generation",
      "📄 Export Lists to PDF/TXT",
      "⚡ Zero-Latency Vanilla JS Performance"
    ],
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Spoonacular API", "jsPDF", "LocalStorage"],
    github: "https://github.com/IkmannBhullar/greenbite",
    demo: "https://greenbite0.netlify.app/",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
  },
  {
    id: "litemusic",
    image: "/LM-main.png",
    title: "LiteMusic",
    subtitle: "Spotify-Inspired Streaming",
    description: "A sleek, responsive music search and playback app powered by the Deezer API. Designed with a focus on UI/UX, it mimics the fluid experience of Spotify using Framer Motion for animations. Features a custom theme switcher with memory and an interactive 'Now Playing' visualizer.",
    features: [
      "🎧 Live Search via Deezer API",
      "🌗 Persisted Light/Dark Mode",
      "🎼 Audio Preview with Visualizer",
      "⚡ Framer Motion Transitions",
      "📱 Fully Responsive Layout"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Deezer API", "Lucide Icons"],
    github: "https://github.com/IkmannBhullar/Lite-Music", 
    demo: "https://lite-music.netlify.app/",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ChromaItem | null>(null);

  const scrollToSkills = () => {
    const nextSection = document.getElementById("skills");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="work" className="relative min-h-screen w-full bg-black text-white py-20 overflow-hidden">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
          Recent Work
        </h2>
        <p className="text-neutral-400 mt-4 max-w-lg mx-auto">
           A selection of projects that showcase my passion for building scalable and user-centric applications.
        </p>
      </div>

      {/* The Chroma Grid */}
      <div className="container mx-auto px-4 h-[800px] relative z-10 flex justify-center">
        <ChromaGrid 
            items={projects} 
            radius={300} 
            onItemClick={(item) => setSelectedProject(item)}
        />
      </div>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 rounded-full transition-colors z-20 border border-white/10"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                {/* Left Side: Image */}
                <div className="w-full md:w-2/5 h-64 md:h-auto bg-neutral-900 relative">
                    <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90 md:opacity-40" />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
                    
                    {/* Title & Subtitle */}
                    <div className="mb-6">
                        <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                        <p className="text-blue-400 font-mono text-sm border-b border-white/10 pb-4 inline-block">
                            {selectedProject.subtitle}
                        </p>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                         <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-3 font-semibold">Overview</h4>
                        <p className="text-neutral-300 leading-relaxed text-sm">
                            {selectedProject.description}
                        </p>
                    </div>

                    {/* Features List (New Section) */}
                    <div className="mb-6 bg-white/5 p-4 rounded-xl border border-white/5">
                        <h4 className="text-xs uppercase tracking-wider text-neutral-400 mb-3 font-semibold">Key Features</h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {selectedProject.features?.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                        <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-3 font-semibold">Built With</h4>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tech?.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-[#1a1a1a] border border-white/10 rounded-lg text-xs text-neutral-400 font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Spacer to push buttons down */}
                    <div className="flex-grow" />

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4 border-t border-white/10">
                        {selectedProject.github && (
                        <a 
                            href={selectedProject.github} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors text-white font-medium text-sm group"
                        >
                            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> GitHub Repo
                        </a>
                        )}
                        {selectedProject.demo && (
                        <a 
                            href={selectedProject.demo} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-white font-medium text-sm group shadow-lg shadow-blue-900/20"
                        >
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> Live Demo
                        </a>
                        )}
                    </div>

                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div 
          onClick={scrollToSkills}
          className="cursor-pointer animate-bounce p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <ArrowDown className="w-8 h-8 text-white/50 hover:text-white transition-colors duration-300" />
        </div>
      </div>

    </section>
  );
}