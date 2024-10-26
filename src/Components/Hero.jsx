import React, { useState, useEffect } from "react";
import '../index.css'

const HeroCarousel = () => {
  const images = [
    "https://img.goodfon.com/original/1920x1080/2/cb/ganteli-trenazhernyy-zal.jpg",
    "https://img3.wallspic.com/crops/6/4/5/0/20546/20546-gymnastics-exercise_equipment-crossfit-snout-gym-1920x1080.jpg",
    "https://img1.wallspic.com/crops/9/8/9/5/3/135989/135989-physical_fitness-barbell-fitness_centre-dumbbell-bodybuilding-1920x1080.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true); // Control fade-in effect
  const [textInView, setTextInView] = useState(false); // Control text animation

  // Automatically change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fade-out effect

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFadeIn(true); // Fade-in new image
      }, 500); // Delay for image transition
    }, 3000); // Image stays for 3 seconds before switching

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  // Trigger text animation when component loads
  useEffect(() => {
    setTextInView(true); // Make text appear with animation
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Carousel Images */}
      <div
        className={`flex transition-transform duration-1000 ease-in-out w-full h-full`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 h-full transition-opacity duration-1000 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay text or any content */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
        <div
          className={`text-center transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1
            className={`text-7xl transition-all duration-1000 ease-in-out transform ${
              textInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            DRESS LIKE A CHAMP
          </h1>
          <h2
            className={`text-4xl mt-4 transition-all duration-1000 ease-in-out transform delay-200 ${
              textInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            SHOP LIKE A PRO
          </h2>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
