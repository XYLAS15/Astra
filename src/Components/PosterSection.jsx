import React from 'react';

const PosterSection = () => {
  return (
    <div className='h-60 w-full bg-black flex gap-8 justify-around items-center px-4 flex-wrap overflow-hidden'>
      <img
        className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/5 xl:w-1/6 max-w-full"
        src="./Assets/Nike.png"
        alt="Nike-Logo"
      />
      <img
        className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/5 xl:w-1/6 max-w-full"
        src="./Assets/Adidas.png"
        alt="Adidas-Logo"
      />
      <img
        className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/5 xl:w-1/6 max-w-full"
        src="./Assets/Puma.png"
        alt="Puma-Logo"
      />
      <img
        className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/5 xl:w-1/6 max-w-full"
        src="./Assets/Jordan.png"
        alt="Jordan-Logo"
      />
    </div>
  );
};

export default PosterSection;
