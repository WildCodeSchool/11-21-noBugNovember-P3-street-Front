/* eslint-disable no-restricted-globals */
import axios from "axios";
import avatar from "../assets/avatar.png";
import { useState } from "react";
import "../styles/UsersInGestion.css";
const UsersInGestion = ({
  user,
  getValidatedUsers,
  getBlockedUsers,
  blockedUsers,
  validatedUsers,
  setValidatedUsers,
  setBlockedUsers,
}) => {
  const [viewMore, setViewMore] = useState(false);

  const userStatus = () => {
    if (user.available === 1) {
      return "Disponible";
    } else {
      return "Non disponible";
    }
  };
  const handleClickViewMore = () => {
    setViewMore(!viewMore);
  };

  const majUsers = () => {
    getValidatedUsers();
    getBlockedUsers();
  };

  const searchUserStatut = (val) => {
    if (val === 0) {
      setValidatedUsers(
        ...validatedUsers,
        (blockedUsers.find((element) => element.id === user.id).blocked = 0)
      );
    } else if (val === 1) {
      setBlockedUsers(
        ...blockedUsers,
        (validatedUsers.find((element) => element.id === user.id).blocked = 1)
      );
    }
  };

  const blockUnblock = async (value) => {
    axios.put(`${process.env.REACT_APP_BACK}/admin/block_user/${user.id}`, {
      blocked: value,
    });
    await searchUserStatut(value);
    majUsers();
  };

  const deleteUser = (id) => {
    if (
      confirm(
        `Êtes-vous sûr de vouloir supprimer l'utilisateur ${user.firstname} ${user.lastname} ? ATTENTION : Toute suppression est définitive, si l'utilisateur est créateur d'un projet, celui-ci sera aussi supprimé`
      ) === true
    ) {
      axios.delete(
        `${process.env.REACT_APP_BACK}/admin/delete_user/${user.id}`
      );
      alert(`Utilisateur ${user.firstname} ${user.lastname} supprimé`);
      getBlockedUsers();
    } else {
    }
  };

  return (
    <div className={viewMore ? "usersInGestion active" : "usersInGestion"}>
      <div className="premiereligne">
        <div className="buttomreveal" onClick={handleClickViewMore}>
          <div className={viewMore ? "premierebarre active" : "premierebarre"}>
            <i class="fa-solid fa-bolt"></i>
          </div>
        </div>
        <div className="contentprojectadmin">
          <div className="entries">{user.lastname}</div>
          <div className="entries">{user.firstname}</div>
          <div className="entries">{user.art_name}</div>
          <div className="entries">{user.city}</div>
        </div>
      </div>

      <div className={viewMore ? "secondeligne active" : "secondeligne"}>
        <div className="cestlelogo">
          {user.avatar === null ? (
            <img src={avatar} alt={"avatar"} className="avatarUserGestion" />
          ) : (
            <img
              src={`${process.env.REACT_APP_BACK}/${user.avatar}`}
              alt={user.firstname}
              className="avatarUserGestion"
            />
          )}
        </div>
        <div className="descrip">{user.description_users}</div>
      </div>
      <div
        className={
          viewMore ? "troisiemeligneUser active" : "troisiemeligneUser"
        }
      >
        <div className="thephone">
          <i className="fa-solid fa-phone-flip" />
          {"  "}
          {user.phone}
        </div>
        <div className="themail">
          <i className="fa-solid fa-envelope" />
          {"  "}
          {user.email}
        </div>
        <div className="lieuregion">
          <i className="fa-solid fa-location-dot" />
          {"  "}
          {user.city}
        </div>
        <div className="elstatus">{userStatus()}</div>
        <div className="lesbouttonsUsers">
          <div
            className={user.blocked === 0 ? "onsupprime" : "onvalideUser"}
            onClick={() => (user.blocked ? blockUnblock(0) : blockUnblock(1))}
          >
            {user.blocked === 0 ? "Bloquer" : "Valider"}
          </div>
          <div
            onClick={deleteUser}
            className={user.blocked ? "onsupprimeUser" : "viewNone"}
          >
            <img
              src="https://img.icons8.com/windows/32/000000/remove-user-male--v1.png"
              alt="delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UsersInGestion;
