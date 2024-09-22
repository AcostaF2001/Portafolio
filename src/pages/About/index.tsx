import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";
import perfil from '../../assets/images/Perfil.jpg';

const Aboutme: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='About-container'>
      <div className="row">
        <div className="col-4">
          {/* Envolver la imagen dentro de un div */}
          <div className="image-wrapper animated-image">
            <img className="Perfil" src={perfil} alt="" />
          </div>
        </div>
        <div className="col-6">
          <div className="text-container animated-text">
            <h1>{t("titleAboutme")}</h1>
            <p>{t("descriptionAboutme")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Aboutme };
