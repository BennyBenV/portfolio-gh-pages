import React, { useEffect, useState } from 'react';
import Projet from './Projet';
import '../style/projetList.css';
import data from '../data.json';

const ProjetList = () => {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    setProjets(data);
  }, []);

  return (
    <section id="projects" className="project-list">
      <h2 className="section-title">Mes Projets</h2>
      <div className="projects-grid">
        {projets.map(projet => (
          <Projet key={projet.id} {...projet} />
        ))}
      </div>
    </section>
  );
};

export default ProjetList;
