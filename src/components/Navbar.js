import "../styles/Navbar.css";
import axios from "axios";
import Logo from "../assets/Logo.png";
import Protected from "../components/Protected";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import exitwhite from "../assets/exitwhite.png";

const Navbar = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isNavBarAccueilBtnActive, setIsNavBarAccueilBtnActive] =
    useState(false);
  const [isNavBarProjetsBtnActive, setIsNavBarProjetsBtnActive] =
    useState(false);
  const [isNavBarTalentsBtnActive, setIsNavBarTalentsBtnActive] =
    useState(false);
  const [isNavBarConnexionBtnActive, setIsNavBarConnexionBtnActive] =
    useState(false);
  const [isNavBarAdminBtnActive, setIsNavBarAdminBtnActive] = useState(false);

  let navigate = useNavigate();

  const handleToggleAccueil = () => {
    setIsNavBarAccueilBtnActive(true);
    setIsNavBarProjetsBtnActive(false);
    setIsNavBarTalentsBtnActive(false);
    setIsNavBarConnexionBtnActive(false);
    setIsNavBarAdminBtnActive(false);
  };

  const handleToggleProjets = () => {
    setIsNavBarAccueilBtnActive(false);
    setIsNavBarProjetsBtnActive(true);
    setIsNavBarTalentsBtnActive(false);
    setIsNavBarConnexionBtnActive(false);
    setIsNavBarAdminBtnActive(false);
  };

  const handleToggleAdmin = () => {
    setIsNavBarAccueilBtnActive(false);
    setIsNavBarProjetsBtnActive(false);
    setIsNavBarTalentsBtnActive(false);
    setIsNavBarConnexionBtnActive(false);
    setIsNavBarAdminBtnActive(true);
  };

  const handleToggleTalents = () => {
    setIsNavBarAccueilBtnActive(false);
    setIsNavBarProjetsBtnActive(false);
    setIsNavBarTalentsBtnActive(true);
    setIsNavBarConnexionBtnActive(false);
    setIsNavBarAdminBtnActive(false);
  };

  const handleToggleConnexion = () => {
    setIsNavBarAccueilBtnActive(false);
    setIsNavBarProjetsBtnActive(false);
    setIsNavBarTalentsBtnActive(false);
    setIsNavBarConnexionBtnActive(true);
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
  const disconnect = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
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
          <div className="containerSpacerNavBar">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <div className="containerConnexion">
            {props.isConnect ? (
              <Link to="/profil">
                <div
                  className={
                    isNavBarConnexionBtnActive
                      ? "navbarBtn holderLink navbarBtnActive"
                      : "navbarBtn holderLink "
                  }
                  onClick={handleToggleConnexion}
                >
                  {props.name}
                </div>
              </Link>
            ) : (
              <Link to="/connexion">
                <div
                  className={
                    isNavBarConnexionBtnActive
                      ? "navbarBtn holderLink navbarBtnActive"
                      : "navbarBtn holderLink "
                  }
                >
                  Connexion
                </div>
              </Link>
            )}
          </div>
          {props.isConnect ? (
            <div className="disconnectButton" onClick={disconnect}>
              {/* <i class="fa-solid fa-arrow-right-from-bracket fa-lg"></i> */}
              <img src={exitwhite} className="exitwhite" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
