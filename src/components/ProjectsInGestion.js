/* eslint-disable no-restricted-globals */
import axios from "axios";
import avatar from "../assets/avatar.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectsInGestion.css";

const ProjectsInGestion = ({
  project,
  getValidatedProjects,
  getBlockedProjects,
}) => {
  const [changeStatus, setChangeStatus] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const link = `/admin/ajout/${project.id}`;

  const elStatus = () => {
    if (project.status === 0) {
      return "En recherche d'équipiers";
    } else if (project.status === 1) {
      return "Équipe complète";
    } else if (project.status === 2) {
      return "Projet terminé";
    }
  };

  const iWantView = () => {
    setViewMore(!viewMore);
  };

  const validatedProject = () => {
    if (
      confirm(`Êtes-vous sûr de bloquer le projet ${project.name} ?`) === true
    ) {
      axios.put(`${process.env.REACT_APP_BACK}/admin/projects/${project.id}`);
      alert(`Projet ${project.name} bloqué`);

      getBlockedProjects();
      getValidatedProjects();
    } else {
    }
  };

  const updateStatus = (choiceStatus) => {
    axios.put(
      `${process.env.REACT_APP_BACK}/admin/update_status/${project.id}`,
      {
        status: choiceStatus,
      }
    );
    alert(`Status mise à jour`);
    getValidatedProjects();
    getBlockedProjects();
  };

  useEffect(() => {}, [project]);

  return (
    <div className={viewMore ? "projectgestion active" : "projectgestion"}>
      <div className="premiereligne">
        <div className="buttomreveal" onClick={() => iWantView()}>
          <div className={viewMore ? "premierebarre active" : "premierebarre"}>
            <i class="fa-solid fa-bolt"></i>
          </div>
        </div>
        <div className="contentprojectadmin">
          <div className="nameproject">{project.name}</div>
          <div className="initiateur">
            Initié par : {project.firstname} {project.lastname}
          </div>
          <div className="start_date">
            Date estimée pour le lancement : {project.date}
          </div>
        </div>
      </div>
      <div className={viewMore ? "secondeligne active" : "secondeligne"}>
        <div className="cestlelogo">
          <img
            src={`${process.env.REACT_APP_BACK}/${project.logo}`}
            alt="logo"
          />
        </div>
        <div className="descrip">{project.description}</div>
      </div>
      <div className={viewMore ? "troisiemeligne active" : "troisiemeligne"}>
        <div className="thephone">
          <i className="fa-solid fa-phone-flip" />
          {"  "}
          {project.phone}
        </div>
        <div className="themail">
          <i className="fa-solid fa-envelope" />
          {"  "}
          {project.email}
        </div>
        <div className="lieuregion">
          <i className="fa-solid fa-location-dot" />
          {"  "}
          {project.region_name}
        </div>
        <div className="elstatus">{elStatus()}</div>
        <div className="lesbouttons">
          <Link to={link}>
            <div className="onvalide">Ajouter des équipiers</div>
          </Link>
          <div
            className="changestatus"
            onClick={() => setChangeStatus(!changeStatus)}
          >
            Changer le status
            <div className={changeStatus ? "popup active" : "popup"}>
              <div className="recherche" onClick={() => updateStatus(0)}>
                En recherche d'équipiers
              </div>
              <div className="enequipe" onClick={() => updateStatus(1)}>
                Équipe compléte
              </div>
              <div className="finish" onClick={() => updateStatus(2)}>
                Projet terminé
              </div>
            </div>
          </div>
          <div className="onsupprime" onClick={() => validatedProject()}>
            Bloquer le projet
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsInGestion;
