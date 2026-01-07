import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SkillsLoop } from '@/components/SkillsLoop';
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import CircularText from "@/components/ui/CircularText";
import LeftSidebar from "@/components/LeftSidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased relative">
      
      {/* 1. The Navigation Sidebar */}
      <LeftSidebar />

      {/* Top Left Circular Text */}
      <div className="fixed top-5 left-5 z-50 hidden md:block opacity-90 hover:opacity-100 transition-opacity">
        <CircularText 
            text="IKMANN BHULLAR * SOFTWARE ENGINEER * " 
            spinDuration={15} 
            onHover="slowDown"
            className="text-white/80"
            imageUrl="/profile.png" 
        />
      </div>

      {/* 2. Page Sections with IDs matching the Sidebar targets */}
      
      <div id="home">
        <Hero />
      </div>

      {/* If your sidebar has an 'About' link, ensure the ID matches */}
      <div id="about">
        <About />
      </div>

      {/* Matches target: 'work' in the LeftSidebar code I gave you */}
      <div id="work">
        <Projects />
      </div>

      <div id="skills">
        <SkillsLoop />
      </div>

      <div id="contact">
        <Contact />
      </div>

    </main> 
  );
}