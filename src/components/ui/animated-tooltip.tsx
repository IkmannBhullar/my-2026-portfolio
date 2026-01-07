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
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  
  // Rotate the tooltip slightly based on mouse position
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  
  // Translate the tooltip horizontally
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
          className="group relative flex flex-col items-center justify-center" // added justify-center
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.6 }} // Changed y to x for side tooltip
                animate={{
                  opacity: 1,
                  x: 0, // Changed y to x
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, x: 20, scale: 0.6 }} // Changed y to x
                style={{
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                }}
                // UPDATED CLASSNAME:
                // Moves tooltip to the RIGHT of the sidebar (left-14) instead of top (-top-16)
                // This prevents it from overlapping the icon above it in a vertical stack.
                className="absolute left-14 z-50 flex flex-col items-start justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl border border-white/10"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                <div className="text-xs text-white/70">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <div onMouseMove={handleMouseMove} className="p-2">
            {children}
          </div>
        </div>
      ))}
    </>
  );
};