import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  const boxImages = [
    '/assets/img/doctor.jpg',
    '/assets/img/p3.jpg',
    '/assets/img/p4.jpg',
    '/assets/img/p5.jpg',
    '/assets/img/p6.jpg',
    '/assets/img/p7.jpg',
  ];

  return (
    <div className="bg-black text-white p-5 mt-20">
         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text">
          About Us 
       </h1>
      
      <section className="mb-8 text-center">
        <p className="text-xl leading-relaxed text-gray-300 max-w-2xl mx-auto">
          Welcome to Revenue Service Booster Our mission is to [describe your mission]. 
          We strive to [mention key goals or objectives], ensuring that our clients receive 
          the best [products/services] tailored to their needs.
        </p>
        <div className="mt-5">
          <img
          src="/assets/img/photos.jpg"
          alt="Descriptive text"
          className="w-full h-1/4 object-cover animate-zoom rounded-3xl"
        />
        </div>
      </section>

      <section className="flex flex-wrap justify-between mt-10 mb-8">
        <div className="w-full md:w-1/2 mb-5">
          <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Our mission is to drive innovation and deliver exceptional results for our clients. 
            We focus on providing top-notch services and products that cater to the evolving 
            needs of the market. By harnessing the latest technologies and leveraging our expertise, 
            we aim to create value and ensure customer satisfaction.
          </p>
        </div>
        <div className="w-full md:w-1/2 mb-5">
          <h2 className="text-4xl font-bold text-white mb-4">More About Us</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Our company was founded on the principles of integrity, innovation, and customer-centricity. 
            With a rich history of success, we have established ourselves as a leader in our industry. 
            We continuously strive to enhance our offerings and adapt to the changing landscape.
          </p>
        </div>
      </section>

      <section className="mt-10 mb-8">
        <h2 className="text-4xl font-bold text-center text-white mb-5">Our Gallery</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {boxImages.map((image, index) => (
            <div key={index} className="relative w-1/3 h-64 overflow-hidden">
              <Image src={image} alt={`Gallery Item ${index + 1}`} className="w-full h-full object-cover" layout="fill" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl">Heading {index + 1}</h3>
                <p>Some text about this image.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
