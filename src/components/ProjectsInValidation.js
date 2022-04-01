/* eslint-disable no-restricted-globals */
import axios from "axios";
import avatar from "../assets/avatar.png";
import { useState } from "react";
import "../styles/ProjectsInGestion.css";
import { Link } from "react-router-dom";

const ProjectsInGestion = ({
  project,
  getValidatedProjects,
  getBlockedProjects,
}) => {
  const [viewMore, setViewMore] = useState(false);
  const projectId = `/edit_project/${project.id}`;
  const deleteProject = () => {
    if (
      confirm(
        `Êtes-vous sûr de vouloir supprimer le projet ${project.name} ? ATTENTION : Toute suppression est définitive !`
      ) === true
    ) {
      axios.delete(
        `${process.env.REACT_APP_BACK}/admin/project_delete/${project.id}`
      );
      alert(`Projet ${project.name} supprimé`);

      getBlockedProjects();
    } else {
    }
  };

  const iWantView = () => {
    setViewMore(!viewMore);
  };

  const validatedProject = () => {
    if (
      confirm(`Êtes-vous sûr de valider le projet ${project.name} ?`) === true
    ) {
      axios.put(`${process.env.REACT_APP_BACK}/admin/projects/${project.id}`);
      alert(`Projet ${project.name} validé`);

      getBlockedProjects();
      getValidatedProjects();
    } else {
    }
  };

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
          <img src={`${process.env.REACT_APP_BACK}/${project.logo}`} />
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
        <div className="lesbouttons">
          <div className="onvalide" onClick={() => validatedProject()}>
            Valider le projet
          </div>
          <Link to={projectId}>
            <div className="onmodifie">Modifier le projet</div>
          </Link>
          <div className="onsupprime" onClick={() => deleteProject(project.id)}>
            Supprimer le projet
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsInGestion;
