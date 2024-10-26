import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const shoesData = [
  {
    Name: "Adidas Ultraboost",
    Image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/db11d1380e944ce2b1b504403d3ffbb1_9366/Switch_Run_Running_Shoes_White_IF5732_01_standard.jpg",
    Price: 4555.00,
    OldPrice: 14495.00,
    Colors: "3 Colours",
  },
  {
    Name: "Nike Air Zoom",
    Image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5df9a673-2191-4148-8a17-b4b57a241827/W+AIR+ZM+ALPHAFLY+NEXT%25+3+OLY.png",
    Price: 23495.00,
    OldPrice: 50000.00,
    Colors: "4 Colours",
  },
  {
    Name: "Jordan Max Aura 5",
    Image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5b1e83ef-4b32-4da2-a2bf-5de4f899bc18/JORDAN+TATUM+3+%28GS%29.png",
    Price: 5685.00,
    OldPrice: 8055.00,
    Colors: "2 Colours",
  }
];

const Shoes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-full h-screen relative">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/103520/pexels-photo-103520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Trending Running Shoes"
          className="w-full h-full object-cover opacity-70"
        />

        {/* Positioned H1 at the top center */}
        <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-4xl md:text-6xl text-white font-bold z-10 drop-shadow-md text-center">
          Trending Running Shoes
        </h1>

        {/* Shoe Cards Carousel */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-20 w-11/12 max-w-lg rounded-md">
          <Slider {...settings}>
            {shoesData.map((shoe, index) => (
              <div key={index} className="bg-white bg-opacity-30 backdrop-blur-md p-4 md:p-6 rounded-lg shadow-xl border border-gray-200 transition-transform duration-200">
                {/* Shoe Image */}
                <img
                  src={shoe.Image}
                  alt={shoe.Name}
                  className="h-48 md:h-64 w-full object-cover rounded-lg mb-4"
                />

                {/* Shoe Details */}
                <div className="text-center">
                  <p className="text-gray-500 line-through text-sm md:text-lg">₹{shoe.OldPrice}</p>
                  <p className="text-black text-xl md:text-3xl font-bold">₹{shoe.Price}</p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-2">
                    {shoe.Name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">{shoe.Colors}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Positioned H2 at the bottom center */}
        <h2 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl text-white font-bold drop-shadow-md text-center">
          Latest Drops
        </h2>
      </div>
    </>
  );
};

export default Shoes;
