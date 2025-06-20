// src/components/Footer.js
import React from 'react';
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/BennyBenV" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/benjamin-vu-45327b259/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <p>&copy; 2024 Benjamin Vu. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
