import React from 'react';
import { Link } from 'react-router-dom';
import myVid from '../assets/mv-vid.mp4'

const Hero = () => {
  return (
    <div className="relative h-screen">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0  w-full h-full object-cover"
      >
        <source src={myVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-yellow-500">The Hacktivist DJ</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Spinning the best beats to make your night unforgettable
        </p>
        <Link 
          to="/downloads" 
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Download The Best Mixes Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
