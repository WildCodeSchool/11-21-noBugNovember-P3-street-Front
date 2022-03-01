import "../styles/GestionUsers.css";
import { useEffect, useState } from "react";
import axios from "axios";

import UsersInGestion from "../components/UsersInGestion";

const GestionUsers = () => {
  const [validatedUsers, setValidatedUsers] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [isFilter, setIsFilter] = useState(false); //c'est filtré ou bien ?
  console.log(blockedUsers);
  console.log(validatedUsers);

  const getValidatedUsers = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/admin/validated_users`)
      .then((response) => response.data)
      .then((data) => setValidatedUsers(data));
  };
  const getBlockedUsers = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/admin/blocked_users`)
      .then((response) => response.data)
      .then((data) => setBlockedUsers(data));
  };

  useEffect(() => {
    getValidatedUsers();
    getBlockedUsers();
  }, []);

  return (
    <div className="gestionUsersContainer">
      <div className="adminTitle">
        <h1>Gestion des utilisateurs</h1>
      </div>
      <div className="filtreGestionUsers">
        <div className="activ" onClick={() => setIsFilter(false)}>
          Utilisateurs
        </div>
        <div className="activ" onClick={() => setIsFilter(true)}>
          En attente de validation
        </div>
      </div>
      <div className="tableauContainer">
        {isFilter
          ? blockedUsers.map((el) => <UsersInGestion user={el} />)
          : validatedUsers.map((el) => <UsersInGestion user={el} />)}
      </div>
    </div>
  );
};
export default GestionUsers;
