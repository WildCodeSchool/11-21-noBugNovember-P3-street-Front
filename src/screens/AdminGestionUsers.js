import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/AdminGestionUsers.css";
import UsersInGestion from "../components/UsersInGestion";
import NavbarAdmin from "../components/NavbarAdmin";

const AdminGestionUsers = () => {
  //STATES
  const [validatedUsers, setValidatedUsers] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [isFilter, setIsFilter] = useState(false); //c'est filtré ou bien ?
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [validatedUsersToFilter, setValidatedUsersToFilter] = useState([]);
  const [blockedUsersToFilter, setBlockedUsersToFilter] = useState([]);

  //FUNCTIONS
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

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    if (isFilter === false) {
      const filterResult = validatedUsers.filter((e) =>
        e.lastname.includes(searchTerm)
      );
      setValidatedUsersToFilter(filterResult);
    }
  }, [searchTerm, validatedUsers]);

  useEffect(() => {
    if (isFilter === true) {
      const filterResult = blockedUsers.filter((e) =>
        e.lastname.includes(searchTerm)
      );
      setBlockedUsersToFilter(filterResult);
    }
  }, [searchTerm, blockedUsers]);

  const handleFilterFalse = () => {
    setIsFilter(false);
    setSearchTerm(undefined);
  };

  const handleFilterTrue = () => {
    setIsFilter(true);
    setSearchTerm(undefined);
  };

  useEffect(() => {
    getValidatedUsers();
    getBlockedUsers();
  }, []);

  return (
    <div className="gestionUsersContainer">
      <div className="adminnavbar">
        <NavbarAdmin />
      </div>
      <div className="adminTitle">
        <h2>Gestion des utilisateurs</h2>
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
        <div className="isFilter">
          <input
            className="searchBar"
            type="text"
            onChange={handleSearchTerm}
            value={searchTerm}
            placeholder="Recherche par nom"
          />
        </div>
      </div>
      <div className="tableauContainer">
        {isFilter
          ? searchTerm === undefined
            ? blockedUsers.map((el) => (
                <UsersInGestion
                  key={el.id}
                  user={el}
                  setValidatedUsers={setValidatedUsers}
                  getBlockedUsers={getBlockedUsers}
                  getValidatedUsers={getValidatedUsers}
                  validatedUsers={validatedUsers}
                  validatedUsersToFilter={validatedUsersToFilter}
                  blockedUsers={blockedUsers}
                  setBlockedUsers={setBlockedUsers}
                />
              ))
            : blockedUsersToFilter.map((el) => (
                <UsersInGestion
                  key={el.id}
                  user={el}
                  getBlockedUsers={getBlockedUsers}
                  getValidatedUsers={getValidatedUsers}
                  validatedUsers={validatedUsers}
                  validatedUsersToFilter={validatedUsersToFilter}
                  blockedUsers={blockedUsers}
                  setValidatedUsers={setValidatedUsers}
                  setBlockedUsers={setBlockedUsers}
                />
              ))
          : searchTerm === undefined
          ? validatedUsers.map((el) => (
              <UsersInGestion
                key={el.id}
                user={el}
                validatedUsersToFilter={validatedUsersToFilter}
                getBlockedUsers={getBlockedUsers}
                getValidatedUsers={getValidatedUsers}
                validatedUsers={validatedUsers}
                blockedUsers={blockedUsers}
                setValidatedUsers={setValidatedUsers}
                setBlockedUsers={setBlockedUsers}
              />
            ))
          : validatedUsersToFilter.map((el) => (
              <UsersInGestion
                key={el.id}
                validatedUsersToFilter={validatedUsersToFilter}
                user={el}
                getBlockedUsers={getBlockedUsers}
                getValidatedUsers={getValidatedUsers}
                validatedUsers={validatedUsers}
                blockedUsers={blockedUsers}
                setValidatedUsers={setValidatedUsers}
                setBlockedUsers={setBlockedUsers}
              />
            ))}
      </div>
    </div>
  );
};
export default AdminGestionUsers;
