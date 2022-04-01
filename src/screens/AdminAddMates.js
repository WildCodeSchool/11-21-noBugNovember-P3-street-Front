import axios from "axios";
import AddUsersInProject from "../components/AddUsersInProject";
import NavbarAdmin from "../components/NavbarAdmin";
import AdminDetailProject from "../components/AdminDetailProject";
import "../styles/AdminAddMates.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AdminAddMates = () => {
  const [projectDetail, setProjectDetail] = useState([]); //données BDD projet
  const [projectUsers, setProjectUsers] = useState([]); //données talents
  const [dataProject, setDataProject] = useState({});
  const [decouverte, setDecouverte] = useState(false);
  let { id } = useParams();

  const getProjectDetails = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/project_details/${id}`)
      .then((response) => response.data)
      .then((data) => setDataProject(data[0]));
  };

  const usersInProject = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/project_users/${id}`)
      .then((response) => response.data)
      .then((data) => setProjectUsers(data));
  };

  useEffect(() => {
    getProjectDetails();
    usersInProject();
  }, []);

  useEffect(() => {}, [projectDetail, projectUsers]);

  return (
    <div className="adminaddmates">
      <div className="adminnavbar">
        <NavbarAdmin />
      </div>
      <div className="lancement">
        <h1>Ajout d'équipiers</h1>
        <div className="encart">
          <AdminDetailProject
            dataProject={dataProject}
            projectUsers={projectUsers}
            getProjectDetails={getProjectDetails}
            usersInProject={usersInProject}
          />
        </div>
      </div>
      <div className={decouverte ? "essai2 active" : "essai2"}>
        <div
          className={decouverte ? "buttonAddMates  active" : "buttonAddMates "}
          onClick={() => setDecouverte(!decouverte)}
        >
          <i class="fa-solid fa-caret-up" />
        </div>
        <AddUsersInProject
          decouverte={decouverte}
          projectId={dataProject.id}
          usersInProject={usersInProject}
        />
      </div>
    </div>
  );
};

export default AdminAddMates;
