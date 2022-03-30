import "../styles/Navbar.css";
import axios from "axios";
import Logo from "../assets/Logo.png";
import Protected from "../components/Protected";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isNavBarAccueilBtnActive, setIsNavBarAccueilBtnActive] =
    useState(false);
  const [isNavBarProjetsBtnActive, setIsNavBarProjetsBtnActive] =
    useState(false);
  const [isNavBarTalentsBtnActive, setIsNavBarTalentsBtnActive] =
    useState(false);
  const [isNavBarAdminBtnActive, setIsNavBarAdminBtnActive] = useState(false);

  const handleToggleAccueil = () => {
    setIsNavBarAccueilBtnActive(true);
    setIsNavBarProjetsBtnActive(false);
    setIsNavBarTalentsBtnActive(false);
    setIsNavBarAdminBtnActive(false);
  };

  const handleToggleProjets = () => {
    setIsNavBarAccueilBtnActive(false);
    setIsNavBarProjetsBtnActive(true);
    setIsNavBarTalentsBtnActive(false);
    setIsNavBarAdminBtnActive(false);
  };

  const handleToggleTalents = () => {
    setIsNavBarAccueilBtnActive(false);
    setIsNavBarProjetsBtnActive(false);
    setIsNavBarTalentsBtnActive(true);
    setIsNavBarAdminBtnActive(false);
  };

  const handleToggleAdmin = () => {
    setIsNavBarAccueilBtnActive(false);
    setIsNavBarProjetsBtnActive(false);
    setIsNavBarTalentsBtnActive(false);
    setIsNavBarAdminBtnActive(true);
  };

  const handleToggleConnexion = () => {
    setIsNavBarAccueilBtnActive(false);
    setIsNavBarProjetsBtnActive(false);
    setIsNavBarTalentsBtnActive(false);
    setIsNavBarAdminBtnActive(false);
  };

  const verify = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BACK}/auth/protected_admin`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setIsAdmin(true);
      })
      .catch((err) => {
        setIsAdmin(false);
      });
  };

  useEffect(() => {
    verify();
  }, [props.isConnect]);

  return (
    <>
      <div className="navbar_container">
        <Link to="/">
          <div className="containerLogo">
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

          {isAdmin ? (
            <Link to="/admin">
              <div
                className={
                  isNavBarAdminBtnActive
                    ? "navbarBtn holderLink navbarBtnActive"
                    : "navbarBtn holderLink "
                }
                onClick={handleToggleAdmin}
              >
                Administration
              </div>
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="containerConnexion">
          {props.isConnect ? (
            <div className="navbarBtn connexion">{props.name}</div>
          ) : (
            <Link to="/connexion">
              <div className="navbarBtn connexion">Connexion</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
