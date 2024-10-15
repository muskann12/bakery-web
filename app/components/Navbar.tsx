
'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-200 p-4 py-10">
      <div className="container mx-auto flex justify-between items-center text-xl">
        <Link href="/" className="text-black hover:text-white text-xl font-mono">
        Sprinkle & Dash
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-pink-600 hover:text-gray-500 font-sans underline">SHOP</Link>
          <Link href="/about" className="text-pink-600 hover:text-gray-500 font-sans underline">ABOUT</Link>
          
          <Link href="/contact" className="text-pink-600 hover:text-gray-500 font-sans underline">CONTACT</Link>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-pink-600">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4">
          <Link href="/" className="text-pink-600 hover:text-gray-300 font-bold mb-2">SHOP</Link>
          <Link href="/about" className="text-pink-600 hover:text-gray-300 font-bold mb-2">ABOUT</Link>
          
          <Link href="/contact" className="text-pink-600 hover:text-gray-300 font-bold">CONTACT</Link>
        </div>
      )}

       {/* Horizontal line below the navbar */}
       <div className="border-t-2 border-pink-600 mt-4" />
    </nav>
  );
};

export default Navbar;

