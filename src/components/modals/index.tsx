import React, { useState, useEffect } from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";

interface ModalProps {
  closeModal: () => void;
  projectId: string;
  projectImage: string;
  projectTitle: string;
  projectText: string;
  projectLink: string;
}

const Modal: React.FC<ModalProps> = ({
  closeModal,
  projectId,
  projectImage,
  projectTitle,
  projectText,
  projectLink
}) => {
  const [expand, setExpand] = useState(false);
  const { t } = useTranslation();

  // Activar la expansión después de que se abra el modal
  useEffect(() => {
    setTimeout(() => {
      setExpand(true);
    }, 100); // Retardo para empezar la animación
  }, []);

  // Manejar el cierre del modal con animación
  const handleClose = () => {
    setExpand(false); // Inicia la animación de cierre
    setTimeout(() => {
      closeModal(); // Cierra el modal después de la animación
    }, 700); // Duración de la animación de cierre
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-background">
        <div className={`modal-image-wrapper ${expand ? "expand" : ""}`}>
          <img
            src={projectImage}
            alt={projectTitle}
            className={`modal-image ${expand ? "colorize" : ""}`}
          />
        </div>
        <div className={`modal-text ${expand ? "fade-in" : ""}`}>
          <h2>{projectTitle}</h2>
          <p>{projectText}</p>
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="cta-link">
            {t("verproyecto")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
