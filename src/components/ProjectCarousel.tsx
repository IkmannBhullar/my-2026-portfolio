'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CityCode.AI",
    category: "SaaS Platform",
    image: "/projects/citycode-cover.png", // Replace with your image
    link: "https://citycode.ai",
    year: "2026",
  },
  {
    id: 2,
    title: "Real Estate Engine",
    category: "Web Application",
    image: "/projects/estate-cover.png",
    link: "#",
    year: "2025",
  },
  {
    id: 3,
    title: "Portfolio V1",
    category: "Personal Website",
    image: "/projects/portfolio-cover.png",
    link: "#",
    year: "2024",
  },
  // Add more projects as needed
];

export function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust scroll distance
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-black dark:text-white">
            Recent Work
          </h2>
          <p className="text-gray-500 mt-2 text-lg">
            Building digital products from zero to one.
          </p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      {/* snap-x: Enables snapping behavior
         pb-10: Adds space for scrollbar (hidden by default in most browsers but safe to add)
      */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-10 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <Link 
            href={project.link} 
            key={project.id}
            className="snap-center shrink-0 first:pl-0 last:pr-6"
          >
            <div className="group relative w-[85vw] md:w-[600px] h-[400px] md:h-[500px] overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              
              {/* Image Container */}
              <div className="absolute inset-0">
                {/* Use a real Next.js Image component here for optimization.
                   If you don't have images yet, this div acts as a placeholder.
                */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 group-hover:scale-105 transition-transform duration-700 ease-out">
                   {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
                </div>
              </div>

              {/* Text Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-400 font-medium tracking-wide uppercase text-xs">
                      {project.category}
                    </span>
                    <span className="text-gray-400 text-xs border border-white/20 px-2 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-white/70 font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    View Project <FaArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}