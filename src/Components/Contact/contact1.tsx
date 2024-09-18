import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

export default function Contact1() {
  return (
    <div className="p-4 md:p-8 lg:p-12 mt-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row h-auto md:h-screen">
        
        <div className="relative w-full md:w-1/2 h-72 mt-6 md:h-full flex items-center justify-center overflow-hidden mb-4 md:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9534291052137!2d77.57693257356759!3d12.910714787399064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153d4a389c57%3A0xfe12315f87900fc5!2sRSB%20Medtech%20Solution%20Private%20Limited!5e0!3m2!1sen!2sus!4v1726569881863!5m2!1sen!2sus&theme=dark"
            width="500"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
        
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
          <div className="bg-dark-900 p-4 md:p-6 rounded-lg shadow-lg max-w-full md:max-w-2xl w-full text-gray-200">
            <h2 className="text-xl font-semibold mb-4">Office Information</h2>
            <p className="mb-4">
              <strong>Address:</strong><br />
              First Floor, No.48, 49, Sarakki Main Rd, above Reliance Smart, Jeewan Sathi Colony, 1st Phase, J. P. Nagar, Bengaluru, Karnataka 560078, India
            </p>
            <p className="mb-4 flex items-center">
              <a href="tel:+918987657890" className="flex items-center text-gray-200">
                <FaPhoneAlt className="mr-2 text-lg" />
                +91-8987657890
              </a>
            </p>
            <p className="mb-4 flex items-center">
              <a href="mailto:contact@rsbcompany.com" className="flex items-center text-gray-200">
                <FaEnvelope className="mr-2 text-lg" />
                contact@rsbcompany.com
              </a>
            </p>
            <p className="mb-4">
              <strong>Office Hours:</strong><br />
              Mon - Fri: 2:00 AM - 11:00 PM<br />
              Sat - Sun: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
