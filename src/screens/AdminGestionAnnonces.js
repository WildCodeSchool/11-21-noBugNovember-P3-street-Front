import axios from "axios";
import { useEffect, useState } from "react";
import AnnonceInGestion from "../components/AnnonceInGestion";
import NavbarAdmin from "../components/NavbarAdmin";
import "../styles/AdminGestionAnnonces.css";

const AdminGestionAnnonces = () => {
  const [isFilter, setIsFilter] = useState(false); //c'est filtré ou bien ?
  const [annonceProjet, setAnnonceProjet] = useState([]);
  const [annonceUser, setAnnonceUser] = useState([]);
  console.log("PROJET", annonceProjet);
  console.log("USER", annonceUser);

  const getAnnoncesProjet = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/annonces_all_projects`)
      .then((res) => res.data)
      .then((data) => setAnnonceProjet(data));
  };
  const getAnnoncesUser = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/annonces_all_users`)
      .then((res) => res.data)
      .then((data) => setAnnonceUser(data));
  };

  const handleFilterFalse = () => {
    setIsFilter(false);
    // setSearchTerm(undefined);
  };

  const handleFilterTrue = () => {
    setIsFilter(true);
    // setSearchTerm(undefined);
  };

  useEffect(() => {
    getAnnoncesProjet();
    getAnnoncesUser();
  }, []);

  return (
    <div className="gestionUsersContainer">
      <div className="adminnavbar">
        <NavbarAdmin />
      </div>
      <div className="adminTitle">
        <h1>Gestion des annonces</h1>
      </div>
      <div className="filtreGestionUsers">
        <div
          className={isFilter ? "isvalidatedUser" : "isvalidatedUser activ"}
          onClick={handleFilterFalse}
        >
          Annonces utilisateurs
        </div>
        <div
          className={isFilter ? "isUser activ" : "isUser"}
          onClick={handleFilterTrue}
        >
          Annonces projets
        </div>
      </div>
      <div className="tableauContainer">
        {annonceProjet.map((el) => (
          <AnnonceInGestion annonce={el} />
        ))}
      </div>
    </div>
  );
};

export default AdminGestionAnnonces;
