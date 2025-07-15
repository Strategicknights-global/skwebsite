import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import Logo from '@/Image/Logo.png'; 
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-card">
        {/* The navbar content uses a grid for perfect centering */}
        <div className="navbar-content">
          
          <Link to="/" className="brand-logo">
            <img src={Logo} alt="Strategic Knights Logo" />
            {/* Brand name has been removed as requested */}
          </Link>

          <nav className="desktop-nav">
            <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
            <Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link>
            <Link to="/team" className={isActive('/team') ? 'active' : ''}>Team</Link>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav-wrapper ${isOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <nav className="mobile-nav-menu">
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
          <Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link>
          <Link to="/team" className={isActive('/team') ? 'active' : ''}>Team</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;