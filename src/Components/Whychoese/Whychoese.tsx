"use client";
import React, { useState, useEffect } from 'react';
import './whychoese.css';

// Sample data
export const whytochoese = [
  { id: 1, card_description: "Digital Health Integration: The rise of telemedicine, mobile health apps, and electronic health records (EHRs) is revolutionizing patient care. Consultants are crucial in guiding healthcare organizations through the integration and optimization of these technologies.Data Analytics and AI: Predictive analytics and artificial intelligence are enhancing decision-making and operational efficiency. Consultants help healthcare providers leverage these tools to improve patient outcomes and streamline processes." },
  { id: 2, card_description: "Value-Based Care: Shifting from fee-for-service to value-based care models requires a strategic approach. Consultants assist organizations in transitioning to value-based care by redesigning payment structures and improving care coordination.Regulatory Compliance: With ever-changing regulations, healthcare organizations need expert advice to remain compliant. Consultants provide insights into regulatory requirements and help implement necessary changes." },
  { id: 3, card_description: "Integration Complexity: Integrating new technologies and systems can be complex. Consultants offer strategies for seamless integration and minimize disruption.Data Security: Protecting patient data is paramount. Consultants advise on best practices for data security and compliance with regulations like HIPAA.Conclusion: As healthcare continues to evolve, consulting firms play a vital role in guiding" },
  { id: 4, card_description: "Process Improvement: Implementing Lean and Six Sigma methodologies can help identify and eliminate inefficiencies. Consultants work with healthcare facilities to map out processes and implement improvements.Resource Management: Effective management of resources, including staff, equipment, and facilities, is essential. Consultants analyze resource utilization and recommend strategies for optimization." },
  { id: 5, card_description: "Regular Audits: Conducting regular audits helps identify compliance gaps and address them proactively. Consultants design and perform audits to ensure adherence to regulations.Training and Education: Continuous education for staff on regulatory requirements is crucial. Consultants develop training programs to keep staff informed and compliant." },
  { id: 6, card_description: "Patient-Centered Care: Emphasizing patient engagement and personalized care is central to value-based models. Consultants help organizations develop patient-centered strategies and programs.Care Coordination: Effective coordination among providers enhances care quality and efficiency. Consultants assist in creating integrated care teams and improving communication." },
];

const WhyChoose = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex(prevIndex => (prevIndex + 1) % whytochoese.length);
    }, 2000); 

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentCard = whytochoese[currentCardIndex];

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text">
        Why To Choose Us
      </h1>
      <div className="flex flex-col md:flex-row h-auto md:h-screen">
        
        <div className="relative w-full md:w-1/2 h-72 md:h-2/3 flex items-center justify-center overflow-hidden mb-4 md:mb-0">
          <img
            src="/assets/img/whytochoese.png"
            alt="Descriptive text"
            className="w-full h-full object-cover animate-zoom"
          />
        </div>
        
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
          <div className="bg-gray-900 p-4 md:p-4 rounded-lg shadow-lg max-w-full md:max-w-2xl w-full">
            <p className="text-base md:text-lg leading-relaxed">{currentCard.card_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
