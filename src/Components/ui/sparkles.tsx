"use client";
import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/utils/cn"; // Ensure this utility function is correctly imported

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore: React.FC<ParticlesProps> = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const controls = useAnimation();

  const particlesLoaded = async (container?: any) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useId();

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "#000000", // Ensure background is black
              },
            },
            particles: {
              number: {
                value: particleDensity || 200, // Increase particle density
              },
              color: {
                value: [
                  "#FF0000", // Red
                  "#FF7F00", // Orange
                  "#FFFF00", // Yellow
                  "#00FF00", // Green
                  "#0000FF", // Blue
                  "#4B0082", // Indigo
                  "#9400D3", // Violet
                ],
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 5,
                },
              },
              opacity: {
                value: {
                  min: 0.5,
                  max: 1,
                },
              },
              move: {
                speed: speed || 3,
                direction: "none",
                random: true,
                straight: false,
              },
              shape: {
                type: "circle", // Ensures round particles
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
