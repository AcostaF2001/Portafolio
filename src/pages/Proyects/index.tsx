import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";
import imagen1 from '../../assets/images/caractula1.jpg';
import imagen2 from '../../assets/images/voraFood.png';
import imagen3 from '../../assets/images/Login.jpg';
import Modal from '../../components/modals'; 

const Proyects: React.FC = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const openModal = (projectId: string) => setModalOpen(projectId);
  const closeModal = () => setModalOpen(null);

  // IntersectionObserver para animaciones cuando el componente está en vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // Activa cuando el 20% del componente esté visible
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) observer.unobserve(projectRef.current);
    };
  }, []);

  return (
    <div className="project-container" ref={projectRef}>
      <h1 className="title">{t("titleProjects")}</h1>

      <div className={`project-item ${inView ? "animate" : ""}`}>
        <div className="image-container" onClick={() => openModal("project1")}>
          <img src={imagen1} alt="Fear" />
        </div>
        <div className={`text-container ${inView ? "animate" : ""}`}>
          <h2>Fear</h2>
          <p>{t("project1")}</p>
        </div>
      </div>

      <div className={`project-item ${inView ? "animate" : ""}`}>
        <div className="image-container" onClick={() => openModal("project2")}>
          <img src={imagen2} alt="VoraFood" />
        </div>
        <div className={`text-container ${inView ? "animate" : ""}`}>
          <h2 className="title-vora">VoraFood</h2>
          <p className="vora">{t("projetc2")}</p>
        </div>
      </div>

      <div className={`project-item ${inView ? "animate" : ""}`}>
        <div className="image-container" onClick={() => openModal("project3")}>
          <img src={imagen3} alt="La Resilencia de Irina" />
        </div>
        <div className={`text-container ${inView ? "animate" : ""}`}>
          <h2>La Resilencia de Irina</h2>
          <p>{t("projetc3")}</p>
        </div>
      </div>

      {/* Modales */}
      {modalOpen === "project1" && (
        <Modal
          closeModal={closeModal}
          projectId="project1"
          projectImage={imagen1}
          projectTitle="Fear"
          projectText={t("project1text")}
          projectLink="https://kastuku.itch.io/fear"
        />
      )}
      {modalOpen === "project2" && (
        <Modal
          closeModal={closeModal}
          projectId="project2"
          projectImage={imagen2}
          projectTitle="VoraFood"
          projectText={t("project2text")}
          projectLink="https://github.com/AcostaF2001/Proyecto"
        />
      )}
      {modalOpen === "project3" && (
        <Modal
          closeModal={closeModal}
          projectId="project3"
          projectImage={imagen3}
          projectTitle="La Resilencia de Irina"
          projectText={t("project3text")}
          projectLink="https://www.figma.com/design/Zeg9llmiAsLCdzVUKCYY3I/Resilencia-de-Irina"
        />
      )}
    </div>
  );
};

export { Proyects };
