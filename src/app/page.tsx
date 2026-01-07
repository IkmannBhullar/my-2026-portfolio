import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
       {/* We will stack our sections here */}
        <Hero />
        <Projects />
       {/* Next step: Add About, Projects, etc. */}
    </main>
  );
}