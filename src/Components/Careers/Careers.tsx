import React from 'react';

export default function Careers() {
  return (
    <div className='mt-20'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mt-10 mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text'>
        Careers
      </h1>
      <h2 className='m-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text'>Careers At RSB</h2>
      <p className='m-5'>At RSB Healthcare Consulting, we’re on a mission to revolutionize healthcare delivery through innovative consulting solutions. We’re always looking for talented, passionate individuals to join our team and make a real difference in the healthcare industry. RSB Healthcare Consulting is a leading healthcare consulting firm dedicated to improving patient care, optimizing operational efficiency, and driving innovation in healthcare organizations. With our team of experienced consultants, we provide tailored solutions to hospitals, clinics, and healthcare systems across the country.</p>
      <h3 className='text-m px-5'>At RSB, we believe in:</h3>
      <ul className='text-m ml-5'>
        <li>Collaboration and teamwork</li>
        <li>Continuous learning and growth</li>
        <li>Innovation and creative problem-solving</li>
        <li>Integrity and ethical practice</li>
        <li>Commitment to excellence in healthcare</li>
      </ul>

      <div className="p-4 md:p-8 lg:p-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text">
          What We are Looking for
        </h1>
        <div className="flex flex-col md:flex-row h-auto md:h-screen">

          <div className="relative w-full m-2 md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
            <img
              src="/assets/img/looking.jpg"
              alt="Descriptive text"
              className="w-full h-auto max-h-72 object-cover animate-zoom"  //transition-transform duration-300 ease-in-out transform hover:scale-105
            />
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
            <div className="bg-dark-900 p-4 md:p-4 rounded-lg shadow-lg max-w-full md:max-w-2xl w-full">
              <h4 className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text'>An Excellent Fit Today</h4>
              <p>RSB is a growing firm: every position has a big opportunity to shape what we become getting the peoples right to get the work.</p>
              <h4 className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text'>The potential to grow into an excellent tomorrow</h4>
              <p>RSB is a growing firm: every position has a big opportunity to shape what we become getting the peoples right to get the work.</p>
              <h4 className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text'>The right skill set</h4>
              <p>RSB is a growing firm: every position has a big opportunity to shape what we become getting the peoples right to get the work.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
