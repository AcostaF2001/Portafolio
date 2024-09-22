import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './index.scss';
import video from '../../assets/Videos/Fondo.mp4';
import NavBar from '../../components/Navbar';
import { Aboutme } from '../About';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [videoOpacity, setVideoOpacity] = useState(1);

  // Crear referencias para las secciones
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Función para hacer scroll a la sección
  const scrollToSection = (section: string) => {
    if (section === 'home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para ajustar la opacidad en función del scroll
  const handleScroll = () => {
    const aboutSectionTop = aboutRef.current?.offsetTop || 0;
    const scrollPosition = window.scrollY;

    // Ajustar opacidad en función de la distancia al about-section
    if (scrollPosition < aboutSectionTop) {
      const opacity = 1 - scrollPosition / aboutSectionTop;
      setVideoOpacity(Math.max(opacity, 0)); // Opacidad mínima es 0
    } else {
      setVideoOpacity(0);
    }
  };

  useEffect(() => {
    // Añadir el listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Eliminar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      {/* Navbar */}
      <NavBar scrollToSection={scrollToSection} />

      {/* Sección Home */}
      <div className="home-container" ref={homeRef}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
          style={{ opacity: videoOpacity }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="content-text">
          <h1>{t('name')}</h1>
          <h2>{t('portfolioGreeting')}</h2>
          <p>{t('portfolioDescription')}</p>
        </div>
      </div>

      {/* Sección About */}
      <div ref={aboutRef} className="about-section">
        <Aboutme />
      </div>

      {/* Sección Projects */}
      <div ref={projectsRef} className="projects-section">
        <h2>{t('projectsTitle')}</h2>
        <p>{t('projectsDescription')}</p>
      </div>

      {/* Sección Contact */}
      <div ref={contactRef} className="contact-section">
        <h2>{t('contactTitle')}</h2>
        <p>{t('contactDescription')}</p>
      </div>
    </div>
  );
};

export { HomePage };
