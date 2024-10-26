import React from 'react';
import { TiArrowRight } from "react-icons/ti";

const FootballSection = () => {
  return (
    <div className="relative h-screen md:h-5/6">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src="https://img3.wallspic.com/previews/9/4/9/5/3/135949/135949-joint-football_boot-grass-leg-football_player-x750.jpg"
        alt="Football zone"
      />

      {/* Text on Top-Left */}
      <h1 className="absolute top-8 left-4 md:top-16 md:left-16 text-white text-4xl md:text-7xl font-bold">
        The Football Zone
      </h1>

      {/* Box under the h1 tag */}
      <div className="absolute top-32 left-4 right-4 md:top-40 md:left-16 md:w-72 bg-white bg-opacity-0 p-4 md:p-6 shadow-lg rounded-md backdrop-blur-md">
        {/* Image inside the Box */}
        <img
          src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Product"
          className="w-full h-48 md:h-72 object-cover rounded-md"
        />

        {/* Details inside the Box */}
        <div className="mt-2 md:mt-4">
          <h3 className="text-lg md:text-xl font-bold text-white">Adidas Predator</h3>
          <p className="text-white text-base md:text-lg">Price: $200</p>
          {/* Button with icon */}
          <button className="mt-2 md:mt-4 text-white border p-2 md:p-3 rounded-md flex items-center space-x-2">
            <span>Buy Now</span>
            <TiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FootballSection;