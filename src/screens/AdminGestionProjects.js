import "../styles/AdminGestionProjects.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProjectsInGestion from "../components/ProjectsInGestion";
import NavbarAdmin from "../components/NavbarAdmin";
import ProjectsInValidation from "../components/ProjectsInValidation";
import "../styles/CreateProject.css";
const AdminGestionProjects = () => {
  const [validatedProjects, setValidatedProjects] = useState([]);
  const [blockedProjects, setBlockedProjects] = useState([]);
  const [isFilter, setIsFilter] = useState(false); //c'est filtré ou bien ?

  const getValidatedProjects = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/admin/validated_projects`)
      .then((response) => response.data)
      .then((data) => setValidatedProjects(data));
  };

  const getBlockedProjects = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/admin/blocked_projects`)
      .then((response) => response.data)
      .then((data) => setBlockedProjects(data));
  };

  useEffect(() => {
    getValidatedProjects();
    getBlockedProjects();
  }, []);

  return (
    <div className="gestionProjectsContainer">
      <div className="adminnavbar">
        <NavbarAdmin />
      </div>
      <div className="adminTitle">
        <h2>Gestion des projets</h2>
      </div>
      <div className="filtreGestionProjects">
        <div
          className={isFilter === false ? "isvalidated active" : "isvalidated"}
          onClick={() => setIsFilter(false)}
        >
          Projets en attente
        </div>
        <div
          className={isFilter ? "isproject active" : "isproject"}
          onClick={() => setIsFilter(true)}
        >
          Projets validés
        </div>
      </div>

      <div className="tableauContainer">
        {isFilter !== true
          ? blockedProjects.map((el) => (
              <ProjectsInValidation
                key={el.id}
                project={el}
                getBlockedProjects={getBlockedProjects}
                getValidatedProjects={getValidatedProjects}
              />
            ))
          : validatedProjects.map((el) => (
              <ProjectsInGestion
                key={el.id}
                project={el}
                getBlockedProjects={getBlockedProjects}
                getValidatedProjects={getValidatedProjects}
              />
            ))}
      </div>
    </div>
  );
};
export default AdminGestionProjects;
