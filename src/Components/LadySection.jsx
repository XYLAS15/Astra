import React, { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const LadySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const images = [
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534367899781-0d696bebc1d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-screen relative">
      {/* Background Image */}
      <img
        src={images[currentImageIndex]}
        alt="Ladies Sport Tights"
        className="w-full h-full object-cover"
      />

      {/* Promotion Message (Center of the Image) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          ref={ref}
          className={`text-center text-4xl md:text-6xl font-bold text-white transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Start Your Sports Journey with Us
          <br />
          <span className="font-bold italic  text-white">Extra 50% off on First Buy</span>
        </h1>
      </div>

      {/* Header Overlay */}
      <div className="absolute top-0 left-0 w-full p-8">
        <h2
          ref={ref}
          className={`text-center font-extralight font-roboto-condensed text-3xl md:text-5xl text-white transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          BEST IN <span className="font-bold">LADIES SPORT TIGHTS</span>
        </h2>

        <div className="w-full flex justify-center md:justify-end mt-4">
          <button
            className={`flex items-center space-x-2 text-xl md:text-3xl font-semibold px-4 py-2 rounded text-white transition-opacity duration-1000 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            <span>View All</span>
            <MdArrowForwardIos size={42} />
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-10 text-white p-2 rounded-full hover:bg-opacity-50 transition-all duration-300"
      >
        <MdArrowBackIos size={40} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-50 transition-all duration-300"
      >
        <MdArrowForwardIos size={40} />
      </button>
    </div>
  );
};

export default LadySection;
