import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = (
    <>
      <a href="#hero" className="hover:text-white" onClick={() => setMenuOpen(false)}>Home</a>
      <a href="#projects" className="hover:text-white" onClick={() => setMenuOpen(false)}>Projects</a>
      <a href="#tech" className="hover:text-white" onClick={() => setMenuOpen(false)}>TechStack</a>
      <a href="#testimonials" className="hover:text-white" onClick={() => setMenuOpen(false)}>Testimonials</a>
      <a href="#contact" className="hover:text-white" onClick={() => setMenuOpen(false)}>Contact</a>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Joyous Tech</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-300">{navLinks}</div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-white cursor-pointer z-50" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-6 py-8 text-gray-300 transition-transform ${
            menuOpen ? 'translate-y-0' : '-translate-y-[200%]'
          }`}
        >
          {navLinks}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
