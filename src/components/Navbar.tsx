import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@/Image/Logo.png';
import '../styles/Navbar.css'; // Make sure this is imported

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
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        <Link to="/" className="brand-logo">
          <img src={Logo} alt="Strategic Knights Logo" />
          <span className="brand-name">
            <span className="strategic">Strategic</span>
            <span className="knights"> Knights</span>
          </span>
        </Link>

        <nav className="desktop-nav">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Services</Link>
          <Link to="/team" className={`nav-link ${isActive('/team') ? 'active' : ''}`}>Team</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      <div className={`mobile-nav-wrapper ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-menu">
          <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/services" className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`}>Services</Link>
          <Link to="/team" className={`mobile-nav-link ${isActive('/team') ? 'active' : ''}`}>Team</Link>
          <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;