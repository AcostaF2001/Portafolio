// NavBar.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.scss';

interface NavBarProps {
  scrollToSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection }) => {
  const { t, i18n } = useTranslation();

  // Función para alternar el idioma
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  // Determina la bandera a mostrar
  const flag = i18n.language === 'en' ? 'https://i.ibb.co/z8VVDK0/usa.png' : 'https://i.ibb.co/WPYDwqR/colombia.png';

  return (
    <nav className="navbar-custom">
      <div className="container">
        <a className="navbar-brand" onClick={() => scrollToSection('home')}>
          {t('welcome')}
        </a>
        <div className="navbar-right">
          <div className="navbar-links">
            <a className="nav-link" onClick={() => scrollToSection('about')}>
              {t('aboutMe')}
            </a>
            <a className="nav-link" onClick={() => scrollToSection('projects')}>
              {t('projects')}
            </a>
            <a className="nav-link" onClick={() => scrollToSection('contact')}>
              {t('contact')}
            </a>
          </div>
          {/* Switch de idioma con bandera */}
          <div className="language-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="languageSwitch"
              onChange={toggleLanguage}
              checked={i18n.language === 'es'}
            />
            <label className="form-check-label" htmlFor="languageSwitch">
              <img src={flag} alt="flag" width="30" height="20" className="me-2" />
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
