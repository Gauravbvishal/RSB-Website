import React from 'react'

export default function Resources1() {
  return (
    <div className="p-4 md:p-8 lg:p-12 mt-12">
      
      <div className="flex flex-col md:flex-row h-auto md:h-screen">
        <div className="w-full md:w-1/2 flex items-start justify-center p-2 md:p-4">
          <div className="bg-dark-900 p-4 md:p-6 rounded-lg shadow-lg max-w-full md:max-w-2xl w-full">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text">
              Key Components of the Maternal Health Policy Reform 2025:
            </h1>
            <ul className="text-base md:text-lg leading-relaxed text-gray-300 list-disc pl-4">
              <li>Maternal Care Standards: CMS is introducing new baseline health and safety requirements for obstetrical services in hospitals and critical access hospitals for the first time. These standards, a core element of the 2025 maternal health reforms, will set guidelines for staffing, care delivery, and emergency preparedness.</li>
              <li>Health Equity Measures: As part of the policy changes for maternal care, the proposal aims to expand quality program measure sets for hospital outpatient, ASC, and rural emergency hospital programs to include equity-focused metrics.</li>
              <li>Support for Tribal Health: The Maternal Health Policy Reform 2025 includes an add-on payment to the All-Inclusive Rate (AIR) for certain Indian Health Services (IHS) and tribal facilities. This aims to increase access to high-cost drugs, particularly benefiting cancer care services in these communities.</li>
              <li>Medicaid Flexibility: Exceptions to the Medicaid clinic services “four walls” requirement are proposed, potentially increasing access to care in tribal, rural, and behavioral health settings – a crucial aspect of the 2025 maternal health reforms.</li>
              <li>Post-Incarceration Coverage: The policy reform addresses a critical gap in care continuity by seeking to eliminate barriers for formerly incarcerated individuals to enroll in and maintain Medicare coverage.</li>
              <li>Payment Updates: As part of the overall Maternal Health Policy Reform 2025, OPPS and ASC payment rates for CY 2025 are proposed to increase by 2.6% for facilities meeting quality reporting requirements.</li>
            </ul>
          </div>
        </div>
        <div className="relative hidden md:block w-full md:w-1/2 h-80 md:h-full flex items-center justify-center overflow-hidden mb-4 md:mb-0">
          <img
            src="/assets/img/resourse1.jpg"
            alt="Descriptive text"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
