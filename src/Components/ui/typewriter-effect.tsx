"use client"
import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth: React.FC<{
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}> = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn("dark:text-white text-white", word.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div
          className={cn(
            "font-bold",
            "text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl", 
            {
              "text-xl sm:text-xl md:text-4xl lg:text-5xl": true, 
            }
          )}
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}{" "}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
