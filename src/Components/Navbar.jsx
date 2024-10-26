import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiMenu, FiX } from "react-icons/fi";
import { MdBookmarkBorder } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-20 w-full bg-black text-white relative z-10">
      <header className="flex justify-between items-center h-full px-6">
        {/* Center Section - Logo */}
        <section className="h-full">
          <a href="#">
            <img
              className="h-full object-contain"
              src="./Assets/LOGO.png"
              alt="Logo"
            />
          </a>
        </section>

        {/* Right Section - Icons */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6 items-center">
            <li>
              <a href="#" className="hover:text-gray-400">
                <IoSearchOutline size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                <FaRegUser size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                <MdBookmarkBorder size={24} />
              </a>
            </li>
            <li>
              <button className="flex items-center bg-white text-black text-lg gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-black hover:text-white duration-300 hover:gap-2 hover:translate-x-3">
                Shop Now <LiaShoppingBagSolid size={24} />
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-900 text-white py-4 px-6">
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-gray-400 block">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 block">
                Popular
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 block">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 block">
                <IoSearchOutline size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 block">
                <FaRegUser size={24} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 block">
                <MdBookmarkBorder size={24} />
              </a>
            </li>
            <li>
              <button className="flex items-center bg-white text-black text-lg gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-black hover:text-white duration-300 hover:gap-2 hover:translate-x-3">
                Shop Now <LiaShoppingBagSolid size={24} />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
