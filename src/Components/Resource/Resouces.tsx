import React from 'react'

export default function Resouces() {
  return (
    <div className="p-4 md:p-4 lg:p-4 mt-20">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text">
      Industrial News
    </h1>
    <div className="flex flex-col md:flex-row h-auto md:h-screen">
    <div className="w-half md:w-1/2 flex items-top justify-center p-2 md:p-2">
        <div className="bg-dark-900 p-4 md:p-4 rounded-lg shadow-lg max-w-full md:max-w-2xl w-full ">
          <h1 className='text 5xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text'>Maternal Health Policy Reform 2025: HHS and CMS Unveil Sweeping Proposals</h1>
          <p className="text-base md:text-lg leading-relaxed mt-8">In a landmark move towards comprehensive Maternal Health Policy Reform 2025, the Department of Health and Human Services (HHS) 
            and the Centers for Medicare & Medicaid Services (CMS) have announced a far-reaching set of proposed policies. These proposed reforms are designed to tackle the urgent maternal health
            challenges and ongoing disparities in healthcare across the United States, representing a pivotal advancement in the development of maternal care policies The proposed changes, part of
            the Calendar Year 2025 Hospital Outpatient Prospective Payment System (OPPS) and Ambulatory Surgical Center (ASC) rule, represent a cornerstone of the Biden-Harris Administration’s commitment to 
            improving maternal health outcomes and advancing health equity. This 2025 maternal health reform package is poised to reshape the landscape of maternal care across the nation.</p>
        </div>
      </div>
      <div className="relative w-half md:w-1/2 h-50 md:h-1/2 flex items-center justify-center overflow-hidden mb-4 md:mb-0">
        <img
          src="/assets/img/resource.jpg"
          alt="Descriptive text"
          className="w-2/3 h-1/4 object-cover animate-zoom"
        />
      </div>
      
    </div>
  </div>
  )
}
