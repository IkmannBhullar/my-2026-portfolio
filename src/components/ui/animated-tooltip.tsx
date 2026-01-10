"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
  children,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
  }[];
  children: React.ReactNode;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Spring config for the mouse follow effect
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  
  // Rotate the tooltip slightly based on mouse position
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  
  // Translate the tooltip horizontally (subtle movement)
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative flex flex-col items-center justify-center"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                // ANIMATION: Slide DOWN from the top (-20y to 0y)
                initial={{ opacity: 0, y: -20, scale: 0.6 }} 
                animate={{
                  opacity: 1,
                  y: 0, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: -20, scale: 0.6 }}
                style={{
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                }}
                // POSITIONING: 
                // 1. absolute -bottom-16: Pushes it BELOW the icon
                // 2. left-1/2 -translate-x-1/2: Centers it horizontally
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center justify-center rounded-md bg-black/90 px-4 py-2 text-xs shadow-xl border border-white/10 backdrop-blur-md"
              >
                {/* Decorative gradients */}
                <div className="absolute inset-x-10 -top-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -top-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                <div className="text-xs text-white/70">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <div onMouseMove={handleMouseMove} className="p-2 cursor-pointer transition-colors duration-300">
            {children}
          </div>
        </div>
      ))}
    </>
  );
};