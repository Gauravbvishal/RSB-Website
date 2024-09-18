import React from 'react';

// Example data for the cards
const cardData = [
  {
    title: 'Annual Revenue Collection',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    image: '/assets/img/our-1.jpg'
  },
  {
    title: 'Increase in YOY Revenue',
    text: 'This card has supporting text below as a natural lead-in to additional content a natural lead-in to additional content.',
    image: '/assets/img/our-2.jpg'
  },
  {
    title: 'Clean Claim Submission Rate',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the .',
    image: '/assets/img/our-3.jpg'
  },
  {
    title: 'Revenue Collection Rate',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    image: '/assets/img/our-4.jpg'
  },
  {
    title: 'To Submit the Claim',
    text: 'This card has supporting text below as a natural lead-in to additional content a natural lead-in to additional content.',
    image: '/assets/img/our-5.jpg'
  },
  {
    title: 'Denial & Rejection Rate',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content .',
    image: '/assets/img/our-6.jpg'
  }
];

const OurMission: React.FC = () => {
  return (
    <div className="bg-black p-8">
       <h1 className='text-4xl md:text-5xl font-bold text-center mt-10 mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-text'>
            Our Mission
       </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img
              className="w-full h-48 object-cover"
              src={card.image}
              alt={card.title}
            />
            <div className="p-6">
              <h5 className="text-xl font-bold mb-4">{card.title}</h5>
              <p className="text-gray-300">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMission;
