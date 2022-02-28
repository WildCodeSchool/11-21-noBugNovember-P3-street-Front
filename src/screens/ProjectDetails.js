import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UsersInProject from "../components/UsersInProject";
import "../styles/ProjectDetails.css";
const ProjectDetails = () => {
  const [projectDetail, setProjectDetail] = useState([]);
  const [projectUsers, setProjectUsers] = useState([]);
  const params = useParams();

  console.log(params);

  const getProjectDetails = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/project_details/${params.id}`)
      .then((response) => response.data)
      .then((data) => setProjectDetail(data));
  };
  const usersInProject = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/project_users/${params.id}`)
      .then((response) => response.data)
      .then((data) => setProjectUsers(data));
  };

  useEffect(() => {
    getProjectDetails();
    usersInProject();
  }, []);
  return (
    <div className="projectDetailsContainer">
      {console.log("USERS", projectUsers)}
      <div className="projectInfos">
        <div className="projectAvatarContainer">
          {projectDetail.map((el) => (
            <img
              src={`${process.env.REACT_APP_BACK}/${el.logo}`}
              alt=""
              className="projectAvatar"
            />
          ))}
        </div>
        <div className="projectTextContainer">
          <h1>{projectDetail.map((el) => el.name)}</h1>
          <p>{projectDetail.map((el) => el.description)}</p>
          <p>Créateur du projet : {projectDetail.map((el) => el.firstname)}</p>
          <p>{projectDetail.map((el) => el.lastname)}</p>
        </div>
      </div>
      <div className="usersContainer">
        <h2>Participants au projet</h2>
        {projectUsers.map((el, index) => (
          <UsersInProject user={el} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
