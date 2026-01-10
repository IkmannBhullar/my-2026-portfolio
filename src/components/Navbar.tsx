"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  FolderGit2,
  Hammer,
  Mail,
  FileText
} from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

interface NavItem {
  id: number;
  name: string;
  designation: string;
  icon: React.ReactNode;
  target: string;
  isDownload?: boolean;
  href?: string;
}

const navItems: NavItem[] = [
  { id: 1, name: "Home", designation: "Top", icon: <Home className="w-5 h-5" />, target: "home" },
  { id: 2, name: "About", designation: "Bio", icon: <User className="w-5 h-5" />, target: "about" },
  { id: 3, name: "Work", designation: "Projects", icon: <FolderGit2 className="w-5 h-5" />, target: "work" },
  { id: 4, name: "Skills", designation: "Stack", icon: <Hammer className="w-5 h-5" />, target: "skills" },
  { id: 5, name: "Contact", designation: "Email", icon: <Mail className="w-5 h-5" />, target: "contact" },
  { id: 6, name: "Resume", designation: "PDF", icon: <FileText className="w-5 h-5" />, target: "resume", isDownload: true, href: "/resume.pdf" },
];

const Navbar = () => {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: 0.1 }
    );
    navItems.forEach((item) => {
      if (!item.isDownload) {
        const section = document.getElementById(item.target);
        if (section) observer.observe(section);
      }
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* --- DESKTOP: TOP PILL (Hidden on Mobile) --- */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[500] flex-row gap-4 bg-black/50 border border-white/10 px-6 py-3 rounded-full shadow-2xl backdrop-blur-xl transition-all duration-300">
        {navItems.map((item) => {
          const isActive = activeId === item.target;
          const IconWrapper = (
            <div className={`${isActive ? "text-white bg-white/10 rounded-full" : "text-white/50 hover:text-white"}`}>
               <AnimatedTooltip items={[{ id: item.id, name: item.name, designation: item.designation }]}>
                  <div className="w-5 h-5 flex items-center justify-center">{item.icon}</div>
               </AnimatedTooltip>
            </div>
          );
          return item.isDownload ? (
            <a key={item.id} href={item.href} download className="flex items-center justify-center">{IconWrapper}</a>
          ) : (
            <div key={item.id} onClick={() => scrollTo(item.target)} className="flex items-center justify-center cursor-pointer">{IconWrapper}</div>
          );
        })}
      </div>

      {/* --- MOBILE: BOTTOM DOCK (Visible only on Mobile) --- */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[500] flex flex-row gap-1 bg-neutral-900/90 border border-white/10 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl w-[90%] justify-between">
        {navItems.map((item) => {
          const isActive = activeId === item.target;
          // Mobile Icon: Simpler, no tooltip, larger touch target
          const MobileIcon = (
            <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? "bg-white/20 text-white scale-110" : "text-white/50 hover:text-white"}`}>
               {item.icon}
            </div>
          );

          return item.isDownload ? (
            <a key={item.id} href={item.href} download aria-label={item.name}>{MobileIcon}</a>
          ) : (
            <div key={item.id} onClick={() => scrollTo(item.target)}>{MobileIcon}</div>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;