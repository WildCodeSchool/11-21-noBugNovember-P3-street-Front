import axios from "axios";
import { useEffect } from "react";
import "../styles/UsersInGestion.css";
const UsersInGestion = ({ user }) => {
  const BlockUnblock = (value) => {
    axios.put(`${process.env.REACT_APP_BACK}/admin/block_user/${user.id}`, {
      blocked: value,
    });
  };

  return (
    <div className="usersInGestion">
      <div className="entries">{user.lastname}</div>
      <div className="entries">{user.firstname}</div>
      <div className="entries">{user.art_name}</div>
      <div className="entries">{user.city}</div>
      <div
        className={
          user.blocked === 0 ? "boutonGestionBloquer" : "boutonGestionValider"
        }
        onClick={() => (user.blocked === 0 ? BlockUnblock(1) : BlockUnblock(0))}
      >
        {user.blocked === 0 ? "Bloquer" : "Valider"}
      </div>
    </div>
  );
};
export default UsersInGestion;
