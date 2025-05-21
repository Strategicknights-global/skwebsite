
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../Image/logo.png'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const linkClasses = (path: string) =>
    `text-gray-700 hover:text-sk-primary font-medium transition-colors duration-300 ${
      isActive(path) ? 'text-sk-primary border-b-2 border-sk-primary' : ''
    }`;

  const mobileLinkClasses = (path: string) =>
    `text-gray-700 hover:text-sk-primary font-medium py-2 px-3 rounded-md hover:bg-gray-100 ${
      isActive(path) ? 'text-sk-primary bg-sk-blue/20' : ''
    }`;

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-sk-primary">
                <img src={Logo} alt="Strategic Knights" className="h-10 w-auto" />

              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className={linkClasses('/')}>Home</Link>
            <Link to="/about" className={linkClasses('/about')}>About</Link>
            <Link to="/services" className={linkClasses('/services')}>Services</Link>
            <Link to="/team" className={linkClasses('/team')}>Team</Link>
            <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
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
                className={mobileLinkClasses('/')}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={mobileLinkClasses('/about')}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={mobileLinkClasses('/services')}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/team" 
                className={mobileLinkClasses('/team')}
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className={mobileLinkClasses('/contact')}
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
