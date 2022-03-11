import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UsersInProject from "../components/UsersInProject";
import "../styles/ProjectDetails.css";

const ProjectDetails = () => {
  const [projectDetail, setProjectDetail] = useState([]);
  const [projectUsers, setProjectUsers] = useState([]);
  const params = useParams();
  console.log("details", projectDetail);

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
      <div className="projectTitle">
        <h1>{projectDetail.map((el) => el.name)}</h1>
      </div>
      <div className="projectInfos">
        <div className="projectInfosContainer">
          <div className="imgTextContainer">
            {projectDetail.map((el) => (
              <img
                src={`${process.env.REACT_APP_BACK}/${el.logo}`}
                alt=""
                className="projectAvatar"
              />
            ))}

            <div className="projectTextContainer">
              <p>{projectDetail.map((el) => el.description)}</p>
              <p>
                Créateur du projet : {projectDetail.map((el) => el.firstname)}
                {projectDetail.map((el) => el.lastname)}
              </p>
            </div>
          </div>
          <div className="userSection">
            <div className="usersTitle">
              <h2>Participants au projet :</h2>
            </div>
            {projectUsers.map((el, index) => (
              <UsersInProject user={el} key={index} />
            ))}
          </div>
        </div>
        <div className="playerContainer">
          {console.log(projectDetail.youtubelink)}
          <iframe
            src={`https://www.youtube.com/embed/${projectDetail.map(
              (el) => el.youtubelink
            )}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            allowfullscreen
            className="player"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
