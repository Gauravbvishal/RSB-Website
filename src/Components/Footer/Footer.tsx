import React from 'react';

export default function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-gray-800">
        <div className="relative w-full md:w-2/3 h-72 md:h-1/4 flex items-center justify-center overflow-hidden p">
          <img
            src="/assets/img/rsb-logo.png"
            alt="Descriptive text"
            className="w-3/4 md:w-1/2 h-auto object-cover animate-zoom"
          />
        </div>
        <div className="w-full md:w-1/4 flex items-center justify-center p-4">
          <div className=" rounded-lg max-w-full md:max-w-xs w-full">
            <h2 className="text-lg font-semibold p-2">Services</h2>
            <ul className="text-sm md:text-base leading-relaxed p-2">
              <li>Provide services</li>
              <li>Customer response</li>
              <li>Feedback</li>
              <li>Association</li>
              <li>24/7 customer support</li>
              <li>Insurance</li>
            </ul>
          </div>
        </div>
        
       
        <div className="w-full md:w-1/4 flex items-center justify-center p-4">
          <div className=" rounded-lg max-w-full md:max-w-xs w-full">
            <h2 className="text-lg font-semibold p-2">Provides</h2>
            <ul className="text-sm md:text-base leading-relaxed p-2">
              <li>Insurance</li>
              <li>Health</li>
              <li>Fitness</li>
              <li>Association</li>
              <li>Contact us</li>
              <li>Customer feedback</li>
            </ul>
          </div>
        </div>
        
        <div className="w-full md:w-1/4 flex items-center justify-center p-4">
          <div className=" rounded-lg max-w-full md:max-w-xs w-full">
            <h2 className="text-lg font-semibold p-2 mb-4">Contact</h2>
            <ul className="text-sm md:text-base leading-relaxed p-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>website</li>
            </ul>
          </div>
        </div>
      </div>
      
      <p className="bg-gray-800 text-right text-sm md:text-base py-4">
        © 2024 Developed by RSB-Medtech
      </p>
    </>
  );
}
