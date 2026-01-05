import React, { useState, useEffect } from 'react';
import '../style/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#hero">BV</a>
        </div>

        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#about" onClick={() => setMenuOpen(false)}>À propos</a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a>
          </li>
          {/* Add more links here if needed, e.g. Contact */}
          <li className="nav-button">
            <a href={process.env.PUBLIC_URL + "/cv.pdf"} target="_blank" rel="noopener noreferrer">CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
