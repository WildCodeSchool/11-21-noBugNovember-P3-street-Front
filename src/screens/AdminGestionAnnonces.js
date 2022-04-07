import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnnonceInGestion from "../components/AnnonceInGestion";
import NavbarAdmin from "../components/NavbarAdmin";
import "../styles/AdminGestionAnnonces.css";

const AdminGestionAnnonces = () => {
  const [isFilter, setIsFilter] = useState(false); //c'est filtré ou bien ?
  const [isValidated, setIsValidated] = useState(true);
  const [validatedAnnonceProjet, setValidatedAnnonceProjet] = useState([]);
  const [validatedAnnonceUser, setValidatedAnnonceUser] = useState([]);
  const [nonValidatedAnnonceUser, setNonValidatedAnnonceUser] = useState([]);
  const [nonValidatedAnnonceProjet, setNonValidatedAnnonceProjet] = useState(
    []
  );
  const [update, setUpdate] = useState(false);

  const getValidatedAnnoncesProjet = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/annonces_all_projects`)
      .then((res) => res.data)
      .then((data) => setValidatedAnnonceProjet(data));
  };

  const getNonValidatedAnnoncesProjet = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/annonces_projects_blocked`)
      .then((res) => res.data)
      .then((data) => setNonValidatedAnnonceProjet(data));
  };

  const getValidatedAnnoncesUser = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/annonces_all_users`)
      .then((res) => res.data)
      .then((data) => setValidatedAnnonceUser(data));
  };

  const getNonValidatedAnnoncesUser = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/annonces_users_blocked`)
      .then((res) => res.data)
      .then((data) => setNonValidatedAnnonceUser(data));
  };

  const handleProjectFilter = () => {
    setIsFilter(true);
    setIsValidated(true);
    getValidatedAnnoncesProjet();
  };

  const handleUserFilter = () => {
    setIsFilter(false);
    setIsValidated(true);
    getValidatedAnnoncesUser();
  };

  useEffect(() => {
    getValidatedAnnoncesProjet();
    getValidatedAnnoncesUser();
    getNonValidatedAnnoncesProjet();
    getNonValidatedAnnoncesUser();
  }, [update]);

  return (
    <div className="gestionAnnonceContainer">
      <div className="adminnavbar">
        <NavbarAdmin />
      </div>
      <div className="adminTitle">
        <h2>Gestion des annonces</h2>
      </div>
      <div className="filtreGestionAnnonce">
        <div
          className={isFilter ? "isAnnonceUser" : "isAnnonceUser activ"}
          onClick={handleUserFilter}
        >
          Annonces utilisateurs
        </div>
        <div
          className={isFilter ? "isAnnonceProject activ" : "isAnnonceProject"}
          onClick={handleProjectFilter}
        >
          Annonces projets
        </div>
      </div>
      <div className="filtreValidate">
        <div
          className={isValidated ? "validated activ" : "validated"}
          onClick={() => setIsValidated(true)}
        >
          Validées
        </div>
        <div
          className={isValidated ? "nonValidated" : "nonValidated activ"}
          onClick={() => setIsValidated(false)}
        >
          En attente
        </div>
      </div>
      <div className="tableauContainer">
        {isFilter
          ? isValidated
            ? validatedAnnonceProjet.map((el) => (
                <AnnonceInGestion
                  key={el.id}
                  annonce={el}
                  isFilter={isFilter}
                  update={update}
                  setUpdate={setUpdate}
                  isValidated={isValidated}
                />
              ))
            : nonValidatedAnnonceProjet.map((el) => (
                <AnnonceInGestion
                  key={el.id}
                  annonce={el}
                  isFilter={isFilter}
                  update={update}
                  setUpdate={setUpdate}
                  isValidated={isValidated}
                />
              ))
          : isValidated
          ? validatedAnnonceUser.map((el) => (
              <AnnonceInGestion
                key={el.id}
                annonce={el}
                isFilter={isFilter}
                update={update}
                setUpdate={setUpdate}
                isValidated={isValidated}
              />
            ))
          : nonValidatedAnnonceUser.map((el) => (
              <AnnonceInGestion
                key={el.id}
                annonce={el}
                isFilter={isFilter}
                update={update}
                setUpdate={setUpdate}
                isValidated={isValidated}
              />
            ))}
      </div>
    </div>
  );
};

export default AdminGestionAnnonces;
