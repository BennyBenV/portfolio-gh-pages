// src/components/Header.js
import React from 'react';
import '../style/header.css';

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <p className="hero-intro">Bonjour, je m'appelle</p>
        <h1 className="hero-title">Benjamin Vu.</h1>
        <h2 className="hero-subtitle">Développeur Web passionné</h2>
        <p className="hero-description">
          Je conçois des interfaces web modernes, performantes et accessibles. Mon objectif : créer des expériences utilisateurs uniques et impactantes.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-btn">Voir mes projets</a>
          <a href="#about" className="hero-btn secondary">En savoir plus</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
