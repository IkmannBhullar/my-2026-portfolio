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
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1], // Cyan markers
      glowColor: [0.1, 0.1, 0.1], // Subtle glow
      markers: [
        // SEATTLE (Lat: 47.6062, Lon: -122.3321)
        { location: [47.6062, -122.3321], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005; // Speed of rotation
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