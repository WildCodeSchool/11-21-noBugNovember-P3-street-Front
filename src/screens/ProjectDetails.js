import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import UsersInProject from "../components/UsersInProject";
import "../styles/ProjectDetails.css";
const ProjectDetails = () => {
  const [projectDetail, setProjectDetail] = useState([]);
  const [projectUsers, setProjectUsers] = useState([]);
  const [creatorId, setCreatorId] = useState();
  const params = useParams();

  const createLink = () => {
    let donnees = projectDetail.map((e) => e.idUser);
    setCreatorId(`/talents/${[donnees]}`);
  };

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

  useEffect(() => {
    createLink();
  }, [projectDetail]);

  return (
    <div className="projectDetailsContainer">
      <div className="blocInfosDetailsProjet">
        <div className="wrapperAvatarInfos">
          <div className="avatarDetailsProjet">
            {projectDetail.map((el) => (
              <img src={`${process.env.REACT_APP_BACK}/${el.logo}`} alt="" />
            ))}
          </div>

          <div className="infosDetailsProjet">
            <div className="titreDetailsProjet">
              <h3>{projectDetail.map((el) => el.name)}</h3>
            </div>
            <div className="createurDetailsProjet">
              <p>by&nbsp;</p>
              <Link to={creatorId !== undefined ? creatorId : "/"}>
                <p className="nameCreatorDetailsProjet">
                  {projectDetail.map((el) => el.firstname)}&nbsp;
                  {projectDetail.map((el) => el.lastname)}
                </p>
              </Link>
            </div>
            <div className="ouEtQuandDetailsProject">
              <div className="dateDetailsProject">
                <p>
                  <i class="fa-solid fa-calendar-days"></i>&nbsp;Début :&nbsp;
                  {projectDetail.map((el) => el.date_start)}
                </p>
                <p>
                  <i class="fa-solid fa-flag-checkered"></i> Fin :&nbsp;
                  {projectDetail.map((el) => el.end_date)}
                </p>
              </div>
              <div className="ouDetailsProject">
                <p>
                  <i className="fa-solid fa-location-dot" />
                  &nbsp;
                  {projectDetail.map((el) => el.region_name)}
                </p>
              </div>
            </div>

            <div className="descriDetailsProjet">
              <p>{projectDetail.map((el) => el.description)}</p>
            </div>
          </div>
        </div>

        <div className="membresDetailsProjet">
          {projectUsers.map((el, index) => (
            <UsersInProject user={el} key={index} />
          ))}
        </div>
      </div>
      <div className="blocVisuelDetailsProjet">
        <div className="videoDetailsProjet">
          <div className="playerContainer">
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
    </div>
  );
};
export default ProjectDetails;
