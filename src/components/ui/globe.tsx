"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.25, // TILT: View from slightly above (0.25 radians) to see Seattle better
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1], // Darker gray base for better contrast
      markerColor: [0.1, 0.8, 1], // Default Cyan for other cities
      glowColor: [0.1, 0.1, 0.3], // Deep Purple/Blue glow to match your site
      markers: [
        // --- SEATTLE (Home Base) ---
        // We stack two markers to create a "glowing core" effect
        { location: [47.6062, -122.3321], size: 0.08 }, // Inner Core
        { location: [47.6062, -122.3321], size: 0.15 }, // Outer Glow

        // --- THE NETWORK (Other Tech Hubs) ---
        // Adding these makes the globe look "connected" and populated
        { location: [37.7749, -122.4194], size: 0.05 }, // San Francisco
        { location: [40.7128, -74.0060], size: 0.05 },  // New York
        { location: [51.5074, -0.1278], size: 0.05 },   // London
        { location: [35.6762, 139.6503], size: 0.05 },  // Tokyo
        { location: [1.3521, 103.8198], size: 0.05 },   // Singapore
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
      ],
      onRender: (state) => {
        // ROTATION SPEED
        // Reduced from 0.005 to 0.003 for a more majestic, slow spin
        state.phi = phi;
        phi += 0.003; 
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center w-full max-w-[600px] aspect-square ${className}`}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1",
        }}
      />
    </div>
  );
}