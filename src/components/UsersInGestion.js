/* eslint-disable no-restricted-globals */
import axios from "axios";
import avatar from "../assets/avatar.png";
import { useEffect, useState } from "react";
import "../styles/UsersInGestion.css";
const UsersInGestion = ({
  user,
  getValidatedUsers,
  getBlockedUsers,
  blockedUsers,
  validatedUsers,
  setValidatedUsers,
  setBlockedUsers,
  // validatedUsersToFilter,
}) => {
  const [viewMore, setViewMore] = useState(false);
  const [blockedStatus, setBlockedStatus] = useState([]);

  const handleClickViewMore = () => {
    setViewMore(!viewMore);
  };

  // const handleBlockUnblock = () => {
  //   if (user.blocked === 1) {
  //     setBlockedStatus(0);
  //   } else {
  //     setlockedStatus(1);
  //   }
  // };
  // console.log(blockedStatus);

  // useEffect(() => {
  //   console.log(blockedStatus);
  //   const blockUnblock = () => {
  //     axios.put(`${process.env.REACT_APP_BACK}/admin/block_user/${user.id}`, {
  //       blocked: blockedStatus,
  //     });
  //   };
  //   blockUnblock();
  //   setValidatedUsers(validatedUsersToFilter);
  // }, [handleBlockUnblock]);

  const majUsers = () => {
    getValidatedUsers();
    getBlockedUsers();
  };

  const searchUserStatut = (val) => {
    if (val === 0) {
      console.log(blockedUsers.find((element) => element.id === user.id));
      setValidatedUsers(
        ...validatedUsers,
        (blockedUsers.find((element) => element.id === user.id).blocked = 0)
      );
    } else if (val === 1) {
      console.log(validatedUsers.find((element) => element.id === user.id));
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
      console.log("user deleted");
      getBlockedUsers();
    } else {
      console.log("user not deleted");
    }
  };

  return (
    <>
      <div className={viewMore ? "usersInGestionViewMore" : "usersInGestion"}>
        <div className="entryViewMore" onClick={handleClickViewMore}>
          <img
            src="https://img.icons8.com/external-ayo-icons-royyan-wijaya/24/000000/external-arrow-arrow-line-ayo-icons-royyan-wijaya-3.png"
            alt={viewMore ? "arrowDown" : "arrowUp"}
            className={viewMore ? "arrowUp" : "arrowDown"}
          />
        </div>
        <div className="entries">{user.lastname}</div>
        <div className="entries">{user.firstname}</div>
        <div className="entries">{user.art_name}</div>
        <div className="entries">{user.city}</div>
        <div
          className={
            user.blocked === 0 ? "boutonGestionBloquer" : "boutonGestionValider"
          }
          onClick={() => (user.blocked ? blockUnblock(0) : blockUnblock(1))}
        >
          {user.blocked === 0 ? "Bloquer" : "Valider"}
        </div>
        <div
          onClick={deleteUser}
          className={user.blocked ? "boutonDeleteUser" : "viewNone"}
        >
          <img
            src="https://img.icons8.com/windows/32/000000/remove-user-male--v1.png"
            alt="delete"
          />
        </div>
      </div>
      <div className={viewMore ? "viewMore" : "viewNone"}>
        <div className="avatarGestionContainer">
          {user.avatar === null ? (
            <img src={avatar} alt="" className="avatarUserGestion" />
          ) : (
            <img
              src={`${process.env.REACT_APP_BACK}/${user.avatar}`}
              alt=""
              className="avatarUserGestion"
            />
          )}
        </div>
        <div className="viewMoreDescr">
          <div className="viewMoreDescrTitle">Description : </div>
          <div>{user.description_users}</div>
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
