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
  {
    id: 1,
    name: "Home",
    designation: "Go to top",
    icon: <Home className="w-5 h-5 lg:w-6 lg:h-6" />,
    target: "home",
  },
  {
    id: 2,
    name: "About",
    designation: "About Me",
    icon: <User className="w-5 h-5 lg:w-6 lg:h-6" />,
    target: "about",
  },
  {
    id: 3,
    name: "Work",
    designation: "Recent Projects",
    icon: <FolderGit2 className="w-5 h-5 lg:w-6 lg:h-6" />,
    target: "work",
  },
  {
    id: 4,
    name: "Skills",
    designation: "My Stack",
    icon: <Hammer className="w-5 h-5 lg:w-6 lg:h-6" />,
    target: "skills",
  },
  {
    id: 5,
    name: "Contact",
    designation: "Get in touch",
    icon: <Mail className="w-5 h-5 lg:w-6 lg:h-6" />,
    target: "contact",
  },
  {
    id: 6,
    name: "Resume",
    designation: "Download CV",
    icon: <FileText className="w-5 h-5 lg:w-6 lg:h-6" />,
    target: "resume",
    isDownload: true,
    href: "/resume.pdf",
  },
];

const LeftSidebar = () => {
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
      { 
        rootMargin: "-20% 0px -50% 0px", 
        threshold: 0.1 
      }
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // UPDATED POSITIONING:
    // Changed 'left-4' to 'right-4'
    // Changed 'lg:left-6' to 'lg:right-6'
    <div className="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-[500] hidden md:flex flex-col gap-3 lg:gap-6 bg-black/50 border border-white/10 p-2 lg:p-4 rounded-full shadow-2xl backdrop-blur-xl transition-all duration-300">
      {navItems.map((item) => {
        const content = (
          <AnimatedTooltip
            items={[
              {
                id: item.id,
                name: item.name,
                designation: item.designation,
              },
            ]}
          >
            {item.icon}
          </AnimatedTooltip>
        );

        if (item.isDownload) {
          return (
            <a
              key={item.id}
              href={item.href}
              download
              className="cursor-pointer text-white/50 hover:text-white transition-colors duration-300"
              aria-label="Download Resume"
            >
              {content}
            </a>
          );
        }

        return (
          <div
            key={item.id}
            onClick={() => scrollTo(item.target)}
            className={`cursor-pointer transition-colors duration-300 ${
              activeId === item.target ? "text-purple-500" : "text-white/50 hover:text-white"
            }`}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default LeftSidebar;