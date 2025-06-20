import React from 'react';
import '../style/about.css';
import pp from '../assets/pp.jpg'; // Assurez-vous que ce chemin est correct

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={pp} alt="photoDeProfil" />
        </div>
        <div className="about-content">
          <h2>À propos de moi</h2>
          <p>
            Développeur web passionné, récemment diplômé de la formation OpenClassrooms, j'aime concevoir des interfaces modernes et intuitives. Mon parcours m'a permis de développer une solide expertise en JavaScript, React, Node.js et MongoDB.
          </p>
          <p>
            Lors de mon alternance au Ministère des Armées, j'ai eu l'opportunité de travailler sur des projets d'envergure, d'approfondir mes compétences en développement web, et de découvrir l'écosystème Symfony/PHP côté back-end.
          </p>
          <p>
            J'accorde une grande importance à l'expérience utilisateur et à la qualité du code. Curieux et rigoureux, j'aime apprendre de nouvelles technologies et relever des défis techniques.
          </p>
          <p>
            En dehors du développement, je suis passionné par le basket et les voyages, deux univers qui m'inspirent à toujours repousser mes limites et à explorer de nouveaux horizons.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
