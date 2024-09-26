"use client"
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { SparklesCore } from "../ui/sparkles";
import { Vortex } from "../ui/vortex";

const words = [
  {
    text: "REVENUE",
    className:
      "font-bold text-center mt-4 mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text font-serif",
  },
  {
    text: "SERVICE",
    className:
      "font-bold text-center mt-4 mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text font-serif",
  },
  { text: "BOOSTER", className: "text-blue-500 dark:text-blue-500 font-serif" },
];

export const CombinedVortexComponent: React.FC = () => {
  return (
    <div className="relative w-full h-[40rem] overflow-hidden">
      <SparklesCore
        background="transparent"
        minSize={1}
        maxSize={5}
        particleDensity={200}
        className="absolute inset-0 z-0"
        particleColor="#ffffff"
      />

      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full relative z-10"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center mt-4">
          <TypewriterEffectSmooth words={words} />
        </h2>
        <p className="text-white text-sm md:text-sm max-w-xl mt-2 text-center text-gray-400 font-stylish4">
          At RSB Healthcare Consulting, we believe in the power of precision,
          dedication, and expertise. As you navigate the intricate world of
          healthcare, our team stands ready to assist.
          dedication, and expertise. As you navigate the intricate world of
          healthcare, our team stands ready to assist team stands ready to assist assist team stands ready to assist.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="relative w-24 h-12 text-sm bg-custom-black border-4 border-transparent rounded-full overflow-hidden transition-transform duration-300 ease-in-out hover:bg-transparent hover:scale-110 hover:border-none">
            <span className="absolute inset-0 border-4 border-transparent rounded-full animate-rainbowBorder"></span>
            <span className="relative z-10 font-serif">Explore ►</span>
          </button>
        </div>
      </Vortex>
    </div>
  );
};
