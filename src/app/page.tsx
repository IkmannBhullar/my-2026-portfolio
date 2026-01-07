import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SkillsLoop } from '@/components/SkillsLoop';
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import CircularText from "@/components/ui/CircularText";
import { ProjectCarousel } from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">


    <div className="fixed top-5 left-5 z-50 hidden md:block opacity-90 hover:opacity-100 transition-opacity">
            <CircularText 
                text="IKMANN BHULLAR * SOFTWARE ENGINEER * " 
                spinDuration={15} 
                onHover="slowDown"
                className="text-white/80"
                imageUrl="/profile.png" 
        />
    </div>
       {/* We will stack our sections here */}
        <Hero />
        <About />
        <Projects />
        <SkillsLoop />
        <Contact />
    </main> 
  );
}