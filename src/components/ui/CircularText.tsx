// src/components/ui/CircularText.tsx
"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useAnimation,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
  imageUrl?: string; // Add optional imageUrl prop
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  imageUrl, // Destructure imageUrl
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  // Continuous rotation loop
  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: spinDuration,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [spinDuration, controls]);

  // Handle hover speeds
  useEffect(() => {
    if (onHover === "pause" && isHovered) {
      controls.stop();
    } else {
        if(isHovered && onHover === "speedUp") {
            controls.start({
                rotate: 360,
                transition: { duration: spinDuration / 4, repeat: Infinity, ease: "linear" }
            })
        } else if (isHovered && onHover === "slowDown") {
            controls.start({
                rotate: 360,
                transition: { duration: spinDuration * 2, repeat: Infinity, ease: "linear" }
            })
        } else if (!isHovered) {
             controls.start({
                rotate: 360,
                transition: { duration: spinDuration, repeat: Infinity, ease: "linear" }
            })
        }
    }
  }, [isHovered, onHover, spinDuration, controls]);

  return (
    <div className="relative" style={{ width: "200px", height: "200px" }}>
      {/* Image in the center, static */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Profile"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full object-cover z-0"
        />
      )}

      {/* Spinning Text Container */}
      <motion.div
        className={cn(
          "absolute inset-0 flex items-center justify-center rounded-full font-bold text-white cursor-pointer z-10",
          className
        )}
        animate={controls}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          return (
            <motion.span
              key={i}
              className="absolute text-sm md:text-base"
              style={{
                // Rotate the span to the correct angle, then push it out by 80px (radius)
                transform: `rotate(${rotationDeg}deg) translateY(-80px)`,
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularText;