"use client";
import React from 'react';
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  { id: 1, name: "Mr. Sambit Biswal", designation: "Founder and CEO", image: "/assets/img/team-1.jpeg" },
  { id: 2, name: "Mr. Soumya Mohanty", designation: "Chief Technology Officer", image: "/assets/img/team-2.jpg" },
  { id: 3, name: "Mr. Bobby Garcia", designation: "Chief Advisory Consultant", image: "/assets/img/team-3.png" },
  { id: 4, name: "Ms. Sruthi Vijayaraghavan", designation: "Chief Strategy Officer", image: "/assets/img/team-4.jpg" },
  { id: 5, name: "Mr. Anzin Saifuddin", designation: "Director Coding and Compliances", image: "/assets/img/team-5.png" },
  { id: 6, name: "Mr. Rajeev Kukade", designation: "Business Strategy and Control", image: "/assets/img/team-6.png" },
];

export function AnimatedTooltipPreview() {
  return (
    <>
      <div className='bg-black text-white min-h-screen mt-12 px-4 md:px-8'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text'>
            Welcome to RSB MedTech
          </h1>
          <p className='text-lg md:text-xl text-gray-300 leading-relaxed mb-10 px-2 md:px-6'>
            A diverse group of professionals passionate about healthcare and committed to excellence. 
            Our team comprises certified medical coders, billing experts, financial analysts, and healthcare
            consultants, each bringing a wealth of experience and expertise to the table. Together,
            we work cohesively, driven by a shared goal: to deliver unparalleled services that make a tangible difference 
            in the lives of our clients. we work cohesively, driven by a shared goal: to deliver unparalleled services that make a tangible difference 
            in the lives of our clients.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full mt-12">
          <AnimatedTooltip items={people} />
        </div>
        <div className='max-w-4xl mx-auto px-2 md:px-6'>
          <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
            A diverse group of professionals passionate about healthcare and committed to excellence. 
            Our team comprises certified medical coders, billing experts, financial analysts, and healthcare
            consultants, each bringing a wealth of experience and expertise to the table.
          </p>
        </div>
      </div>
    </>
  );
}
