import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UsersInProject from "../components/UsersInProject";
import Footer from "../components/Footer";
import "../styles/ProjectDetails.css";
const ProjectDetails = () => {
  const [projectDetail, setProjectDetail] = useState([]);
  const [projectUsers, setProjectUsers] = useState([]);
  const [creatorProject, setCreatorProject] = useState([]);
  const params = useParams();
  /*   let strYoutube = projectDetail.map((el) => el.youtubelink);
  let destructCreator = creatorProject[0];
  let creatorId = `/talents/${destructCreator.id}`; */

  function getProjectDetails() {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/project_details/${params.id}`)
      .then((response) => response.data)
      .then((data) => setProjectDetail(data));
  }
  const usersInProject = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/project_users/${params.id}`)
      .then((response) => response.data)
      .then((data) => setProjectUsers(data));
    // setNoCreator(projectUsers.filter((el) => el.firstname.includes(projectDetail.firstname));
  };

  const getCreatorProject = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/creatorproject/${params.id}`)
      .then((response) => response.data)
      .then((data) => setCreatorProject(data));
    // setNoCreator(projectUsers.filter((el) => el.firstname.includes(projectDetail.firstname));
  };

  useEffect(() => {
    getProjectDetails();
    usersInProject();
    getCreatorProject();
  }, []);

  console.log("creatorProject", creatorProject);
  console.log("projectDetail", projectDetail[0]);
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
              {/*     <Link to={creatorId}> */}
              <p>by&nbsp;</p>
              <p className="nameCreatorDetailsProjet">
                {projectDetail.map((el) => el.firstname)}&nbsp;
                {projectDetail.map((el) => el.lastname)}
              </p>
              {/*   </Link> */}
            </div>
            <div className="ouEtQuandDetailsProject">
              <div className="dateDetailsProject">
                <p>
                  <i class="fa-solid fa-calendar-days"></i>&nbsp;Début :&nbsp;
                  {projectDetail.map((el) =>
                    el.estimated_start_date.slice(0, 10)
                  )}
                </p>
                <p>
                  <i class="fa-solid fa-flag-checkered"></i> Fin :&nbsp;
                  {projectDetail.map((el) =>
                    el.estimated_end_date.slice(0, 10)
                  )}
                </p>
              </div>
              <div className="ouDetailsProject">
                <p>
                  <i className="fa-solid fa-location-dot" />
                  &nbsp;
                  {projectDetail.map((el) => el.localisation)}
                </p>
              </div>
            </div>

            <div className="descriDetailsProjet">
              <p>{projectDetail.map((el) => el.description)}</p>
            </div>
          </div>
        </div>

        <div className="membresDetailsProjet">
          {/*      {creatorProject
            // .filter((el) => el.firstname.includes(projectDetail.firstname))
            .map((el, index) => (
              <UsersInProject user={el} key={index} />
            ))} */}
          {projectUsers
            // .filter((el) => el.firstname.includes(projectDetail.firstname))
            .map((el, index) => (
              <UsersInProject user={el} key={index} />
            ))}
        </div>
      </div>
      <div className="blocVisuelDetailsProjet">
        {/*   <div className="detailsDetailsProjet">
          <p>Des details</p> <p>Des details</p> <p>Des details</p>
          <p>Des details</p> <p>Des details</p> <p>Des details</p>
          <p>
            Deserunt eiusmod dolore cupidatat cupidatat veniam reprehenderit
            eiusmod ex. Officia reprehenderit minim non incididunt deserunt anim
            dolor anim minim. Non veniam anim do in cupidatat. Dolor amet dolore
            aute excepteur adipisicing consequat nostrud ad occaecat duis nisi.
            Deserunt eiusmod dolore cupidatat cupidatat veniam reprehenderit
            eiusmod ex. Officia reprehenderit minim non incididunt deserunt anim
            dolor anim minim. Non veniam anim do in cupidatat. Dolor amet dolore
            aute excepteur adipisicing consequat nostrud ad occaecat duis
            nisi.Reprehenderit aliqua ad qui enim. Ad nisi in enim reprehenderit
            veniam duis veniam ex. Sunt eu duis non sunt tempor magna aliquip.
            Lorem dolore sunt Lorem et duis ut. Adipisicing commodo esse esse
            elit commodo deserunt ipsum adipisicing ea labore non labore
            occaecat ad.
          </p>
        </div> */}
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
