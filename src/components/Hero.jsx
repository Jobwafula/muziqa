// src/components/Hero.jsx

import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4"> <span className="text-yellow-500">The HacktivitistDj</span></h1>
        <p className="text-lg md:text-2xl mb-8">Spinning the best beats to make your night unforgettable</p>
        <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition duration-300">Download The best Mixes Now</a>
      </div>
    </div>
  );
};

export default Hero;
