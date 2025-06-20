import React, { useState } from 'react';
import '../style/projet.css';

const Projet = ({ title, description, technologies, image, link }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleModalClick = (e) => {
    if (e.target.className === 'modal open') {
      closeModal();
    }
  };

  return (
    <div className="project">
      <img src={image} alt="" className="project-image" onClick={openModal} />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            Voir le projet
          </a>
        )}
      </div>

      {isModalOpen && (
        <div className="modal open" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={image} alt={title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projet;
