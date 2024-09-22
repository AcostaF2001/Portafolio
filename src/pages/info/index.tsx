import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import cv1 from "../../assets/Documents/Resume Andres Felipe Acosta.pdf";
import cv2 from "../../assets/Documents/Hoja de Vida Andres Felipe Acosta.pdf";

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Función para descargar la hoja de vida
  const downloadCV = () => {
    if (i18n.language === "en") {
      window.open(cv1, "_blank");
    } else {
      window.open(cv2, "_blank");
    }
  };

  // Función para abrir el correo electrónico
  const openEmail = () => {
    window.open("mailto:a.felipeal@hotmail.com");
  };

  return (
    <div className="contact-container">
      <div className="left-section">
        <h1 className="contact-title">{t("contactTitle")}</h1>
        <h2>Email: a.felipeal@hotmail.com</h2>
        <h2>Phone: +57 3195122681</h2>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/andres-felipe-acosta-lozada-38bb78238/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" /> LinkedIn
          </a>
          <a href="https://github.com/AcostaF2001" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" /> GitHub
          </a>
        </div>
      </div>

      <div className="right-section">
        <div className="cv-download">
          <button onClick={downloadCV} className="cv-button">
            {t("downloadCV")}
          </button>
        </div>

        <div className="contact-options">
          <button onClick={openEmail} className="email-button">
            <FaEnvelope className="email-icon" /> {t("sendEmail")}
          </button>
        </div>
      </div>
    </div>
  );
};

export { Contact };
