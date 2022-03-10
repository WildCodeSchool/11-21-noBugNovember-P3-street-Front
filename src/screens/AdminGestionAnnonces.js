import { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import "../styles/AdminGestionAnnonces.css";

const AdminGestionAnnonces = () => {
  const [isFilter, setIsFilter] = useState(false); //c'est filtré ou bien ?

  const handleFilterFalse = () => {
    setIsFilter(false);
    // setSearchTerm(undefined);
  };

  const handleFilterTrue = () => {
    setIsFilter(true);
    // setSearchTerm(undefined);
  };
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
          Utilisateurs
        </div>
        <div
          className={isFilter ? "isUser activ" : "isUser"}
          onClick={handleFilterTrue}
        >
          En attente de validation
        </div>
      </div>
    </div>
  );
};

export default AdminGestionAnnonces;
