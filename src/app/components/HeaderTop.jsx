"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/image.png';
import { Montserrat } from 'next/font/google';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
const montserrat = Montserrat({ weight: '700', subsets: ['latin'] });

function HeaderTop() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="w-full bg-white shadow-sm px-4 sm:px-6 md:px-8 py-3 flex justify-center">
        <div className="flex flex-wrap justify-between items-center gap-y-4 gap-x-8 w-full max-w-7xl">
          {/* Logo */}
          <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] flex items-center justify-center">
            <Image src={logo} alt="Logo" width={70} height={70} />
          </div>

          {/* Navigation (Desktop) */}
          <div className="hidden sm:flex items-center gap-x-4 gap-y-2 flex-wrap justify-center sm:justify-start text-sm sm:text-[15px] font-semibold text-gray-700">
            <select className="px-3 py-3.5 border border-[var(--color-border)] text-[var(--color-border)] rounded-md bg-white text-[15px] font-medium focus:outline-none">
              <option>All Courses</option>
            </select>
            <div className="hover:text-purple-700 cursor-pointer">Online Courses</div>
            <div className="hover:text-purple-700 cursor-pointer">Personality Development</div>
            <div className="hover:text-purple-700 cursor-pointer">Interview Skills</div>
            <div className="hover:text-purple-700 cursor-pointer">About</div>
            <div className="hover:text-purple-700 cursor-pointer">Contact Us</div>
          </div>

          {/* Login/Register Button (Desktop) */}
          <button className="hidden sm:block bg-[var(--color-primary)] text-white px-4 sm:px-6 py-2.5 sm:py-3.5 text-base sm:text-lg font-black rounded-md hover:brightness-160 hover:blur-[0.5px] cursor-pointer transition-all duration-150">
            Login/Register
          </button>

          {/* Hamburger Menu (Mobile) */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar Drawer */}
      <div className="sm:hidden">
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
            <span className="text-lg font-bold text-gray-700">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-700">
              <HiOutlineX size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-4 p-4 text-gray-700 font-semibold text-sm">
            <select className="px-3 py-3.5 border border-[var(--color-border)] text-[var(--color-border)] rounded-md bg-white text-[15px] font-medium focus:outline-none">
              <option>All Courses</option>
            </select>
            <div className="hover:text-purple-700 cursor-pointer">Online Courses</div>
            <div className="hover:text-purple-700 cursor-pointer">Personality Development</div>
            <div className="hover:text-purple-700 cursor-pointer">Interview Skills</div>
            <div className="hover:text-purple-700 cursor-pointer">About</div>
            <div className="hover:text-purple-700 cursor-pointer">Contact Us</div>
            <button className="mt-2 bg-[var(--color-primary)] text-white px-4 py-2.5 text-base font-black rounded-md hover:brightness-160 hover:blur-[0.5px] cursor-pointer transition-all duration-150">
              Login/Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;