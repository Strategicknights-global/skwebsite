
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-sk-primary">
                Strategic<span className="text-sk-green">Knights</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-gray-700 hover:text-sk-primary font-medium transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-sk-primary font-medium transition-colors duration-300">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-sk-primary font-medium transition-colors duration-300">Services</Link>
            <Link to="/team" className="text-gray-700 hover:text-sk-primary font-medium transition-colors duration-300">Team</Link>
            <Link to="/contact" className="text-gray-700 hover:text-sk-primary font-medium transition-colors duration-300">Contact</Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-sk-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4 px-2">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-sk-primary font-medium py-2 px-3 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-sk-primary font-medium py-2 px-3 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-sk-primary font-medium py-2 px-3 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/team" 
                className="text-gray-700 hover:text-sk-primary font-medium py-2 px-3 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-sk-primary font-medium py-2 px-3 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
