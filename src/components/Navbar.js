import "../styles/Navbar.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isNavBarAccueilBtnActive, setIsNavBarAccueilBtnActive] =
    useState(false);
  const [isNavBarProjetsBtnActive, setIsNavBarProjetsBtnActive] =
    useState(false);
  const [isNavBarTalentsBtnActive, setIsNavBarTalentsBtnActive] =
    useState(false);

  const handleToggleAccueil = () => {
    setIsNavBarAccueilBtnActive(true);
    setIsNavBarProjetsBtnActive(false);
    setIsNavBarTalentsBtnActive(false);
  };

  const handleToggleProjets = () => {
    setIsNavBarAccueilBtnActive(false);
    setIsNavBarProjetsBtnActive(true);
    setIsNavBarTalentsBtnActive(false);
  };

  const handleToggleTalents = () => {
    setIsNavBarAccueilBtnActive(false);
    setIsNavBarProjetsBtnActive(false);
    setIsNavBarTalentsBtnActive(true);
  };

  const handleToggleConnexion = () => {
    setIsNavBarAccueilBtnActive(false);
    setIsNavBarProjetsBtnActive(false);
    setIsNavBarTalentsBtnActive(false);
  };

  return (
    <>
      <div className="navbar_container">
        <Link to="/">
          <div className="containerLogo" onClick={handleToggleAccueil}>
            <img className="holderLogo" src={Logo} alt="Logo" />
          </div>
        </Link>

        <div className="Link">
          <Link to="/">
            <div
              className={
                isNavBarAccueilBtnActive
                  ? "navbarBtn holderLink navbarBtnActive"
                  : "navbarBtn holderLink "
              }
              onClick={handleToggleAccueil}
            >
              Accueil
            </div>
          </Link>
          <Link to="/projets">
            <div
              className={
                isNavBarProjetsBtnActive
                  ? "navbarBtn holderLink navbarBtnActive"
                  : "navbarBtn holderLink "
              }
              onClick={handleToggleProjets}
            >
              Projets
            </div>
          </Link>
          <Link to="/talents">
            <div
              className={
                isNavBarTalentsBtnActive
                  ? "navbarBtn holderLink navbarBtnActive"
                  : "navbarBtn holderLink "
              }
              onClick={handleToggleTalents}
            >
              Talents
            </div>
          </Link>
        </div>
        <div className="containerConnexion">
          <Link to="/connexion">
            <div
              className="navbarBtn connexion"
              onClick={handleToggleConnexion}
            >
              Connexion
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
