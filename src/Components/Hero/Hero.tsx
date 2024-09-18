'use client'

import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import './hero.css';

const Hero: React.FC = () => {
  return (
    <div className="container-fluid px-4 py-10 hero-section"> 
      <div className="row">
        <div className="col-md-5 px-30 py-50 d-flex align-items-center">
          <div className="content">
            <h1 className=" text-4xl md:text-5xl lg:text-5xl font-bold  mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text">
              <Typewriter
                words={['Revenue Service Booster']}
                loop={true}
                cursor
                cursorStyle=""
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={5000}
              />
            </h1>
            <p className="lead">
              Here we Empowering Healthcare Providers 
            </p>
            <p>
              Add more content here as needed. This could be additional details, links, or any other relevant information.
            </p>
            <button className="relative w-24 h-12 text-sm bg-custom-black border-4 border-transparent rounded-full overflow-hidden transition-transform duration-300 ease-in-out hover:bg-transparent hover:scale-110 hover:border-none">
            <span className="absolute inset-0 border-4 border-transparent rounded-full animate-rainbowBorder"></span>
            <span className="relative z-10">Explore ►</span>
            </button>


          </div>
        </div>

        <div className="col-md-7 d-none d-md-block">
          <div className="zoom-container">
            <img
              src="assets/img/hero.png"
              alt="doctorimg"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
