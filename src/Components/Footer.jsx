import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="space-y-4 ">
            <img  className="w-1/2" src="./Assets/ASTRA11.jpeg" alt="" />
            <h3 className="text-lg">Sportswear & shoes</h3>
            <p className="text-gray-300 text-sm">
              Explore a diverse collection of top-tier <span className="font-medium">sportswear</span> and{' '}
              <span className="font-medium">athletic footwear</span>, featuring an extensive range of world-class brands and beyond.
            </p>
          </div>

          {/* Policy Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Policy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Return, Shipping & Cancellation</a></li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Sportwear</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Sport shoes</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>+ 111-000-29032</span>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <span>Support.celebrare.in</span>
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-white hover:text-blue-500">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-pink-500">
                  <FaInstagram size={24} />
                </a>
              </div>

              {/* Google Play Badge */}
              <div className="mt-4">
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© Astra 2024, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;