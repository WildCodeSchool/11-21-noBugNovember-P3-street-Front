import axios from "axios";
import { useState } from "react";
import "../styles/UsersInGestion.css";
const UsersInGestion = ({ user, getValidatedUsers, getBlockedUsers }) => {
  const [viewMore, setViewMore] = useState(false);

  const handleClickViewMore = () => {
    setViewMore(!viewMore);
  };
  const BlockUnblock = (value) => {
    getValidatedUsers();
    getBlockedUsers();
    axios
      .put(`${process.env.REACT_APP_BACK}/admin/block_user/${user.id}`, {
        blocked: value,
      })
      .then(getValidatedUsers())
      .then(getBlockedUsers());
  };

  return (
    <>
      <div className={viewMore ? "usersInGestionViewMore" : "usersInGestion"}>
        <div className="entryViewMore" onClick={handleClickViewMore}>
          {viewMore ? "-" : "+"}
        </div>
        <div className="entries">{user.lastname}</div>
        <div className="entries">{user.firstname}</div>
        <div className="entries">{user.art_name}</div>
        <div className="entries">{user.city}</div>
        <div
          className={
            user.blocked === 0 ? "boutonGestionBloquer" : "boutonGestionValider"
          }
          onClick={() => (user.blocked ? BlockUnblock(0) : BlockUnblock(1))}
        >
          {user.blocked === 0 ? "Bloquer" : "Valider"}
        </div>
      </div>
      <div className={viewMore ? "viewMore" : "viewNone"}>
        <div className="avatarGestionContainer">
          <img
            src={`${process.env.REACT_APP_BACK}/${user.avatar}`}
            alt=""
            className="avatarUserGestion"
          />
        </div>
        <div className="viewMoreDescr">
          <div>Description : {user.description_users}</div>
        </div>
        <div className="viewMoreInfos">
          <div>Telephone : {user.phone} </div>
          <div>email : {user.email}</div>
          <div>Ville : {user.city}</div>
        </div>
      </div>
    </>
  );
};
export default UsersInGestion;
