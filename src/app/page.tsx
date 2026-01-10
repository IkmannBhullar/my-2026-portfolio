import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
// import { SkillsLoop } from '@/components/SkillsLoop'; // <--- Remove this
import { TechStack } from "@/components/TechStack";       // <--- Add this
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import CircularText from "@/components/ui/CircularText";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased relative">
      
      <Navbar />

      <div className="fixed top-5 left-5 z-50 hidden md:block opacity-90 hover:opacity-100 transition-opacity">
        <CircularText 
            text="IKMANN BHULLAR * SOFTWARE ENGINEER * " 
            spinDuration={15} 
            onHover="slowDown"
            className="text-white/80"
            imageUrl="/profile.png" 
        />
      </div>

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="work">
        <Projects />
      </div>

      <div id="skills">
        {/* <SkillsLoop />  <-- Replaced */}
        <TechStack />
      </div>

      <div id="contact">
        <Contact />
      </div>  

      <Footer /> {/* <--- Add here */}

    </main> 
  );
}