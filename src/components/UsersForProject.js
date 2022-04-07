/* eslint-disable no-restricted-globals */
import axios from "axios";
import "../styles/AdminAddMates.css";
import avatar from "../assets/avatar.png";
import { useEffect, useState } from "react";

const UsersForProject = (props) => {
  const auRevoir = () => {
    if (
      confirm(
        `Êtes-vous sûr de vouloir enlever ${props.firstname} ${props.lastname} du projet ?`
      ) === true
    ) {
      axios.delete(`${process.env.REACT_APP_BACK}/admin/user_bye_project/`, {
        data: {
          users_id: props.id,
          project_id: props.projectId,
        },
      });

      alert(`${props.firstname} ${props.lastname} est retiré(e) du projet`);
      props.usersInProject();
    } else {
    }
  };

  return (
    <div className="essai">
      <div className="illustration2">
        <img
          src={
            props.avatar !== null
              ? `${process.env.REACT_APP_BACK}/${props.avatar}`
              : `${avatar}`
          }
          alt=""
        />
        <div className="merci" onClick={() => auRevoir()}>
          <i class="fa-solid fa-xmark" />
        </div>
      </div>
      <div className="leprenom">
        {props.firstname} {props.lastname}
      </div>
      <div className="sub-domain">{props.job}</div>
    </div>
  );
};

export default UsersForProject;
