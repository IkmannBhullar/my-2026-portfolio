"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import ProfileCard from "./ui/ProfileCard";
import { ArrowDown } from "lucide-react"; // Import the icon

export function Hero() {
  
  // Function to handle the smooth scroll
  const scrollToNext = () => {
    // This targets the specific "about" ID we set up in your page.tsx
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="container mx-auto px-6 py-20 md:py-0 flex flex-col md:flex-row items-center justify-between z-10 relative">
        
        {/* LEFT SIDE: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Ikmann Bhullar <br />
            <span className="text-2xl md:text-5xl">building the future.</span>
          </h1>
          
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg">
            Full Stack Developer. Creative Designer.
            <br />
            Ready to build engaging digital experiences.
          </p>

          <div className="mt-8">
            <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              View My Work
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Profile Card */}
        <div className="w-full md:w-1/2 flex items-center justify-center h-[500px]">
          <ProfileCard 
            name="Ikmann Bhullar"
            title="Full Stack Developer"
            handle="ikmann"
            status="Open for work"
            avatarUrl="/profile-cutout.png" 
            miniAvatarUrl="/profile.png"     
            enableTilt={true}
            behindGlowColor="#3b82f6"       
            showUserInfo={true}
          />
        </div>

      </div>

      {/* FLOATING ARROW: Placed absolutely at the bottom center */}
      <div 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-8 h-8 text-white/50 hover:text-white transition-colors duration-300" />
      </div>

    </div>
  );
}