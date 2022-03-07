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
    // setNoCreator(projectUsers.filter((el) => el.firstname.includes(projectDetail.firstname));
  };

  useEffect(() => {
    getProjectDetails();
    usersInProject();
  }, []);

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
              <p>{projectDetail.map((el) => el.name)}</p>
            </div>
            <div className="createurDetailsProjet">
              <p>
                by&nbsp;
                {projectDetail.map((el) => el.firstname)}
                {projectDetail.map((el) => el.lastname)}
              </p>
            </div>
            <div className="descriDetailsProjet">
              <p>
                Deserunt eiusmod dolore cupidatat cupidatat veniam reprehenderit
                eiusmod ex. Officia reprehenderit minim non incididunt deserunt
                anim dolor anim minim. Non veniam anim do in cupidatat. Dolor
                amet dolore aute excepteur adipisicing consequat nostrud ad
                occaecat duis nisi.
              </p>
            </div>
          </div>
        </div>

        <div className="membresDetailsProjet">
          {projectUsers
            // .filter((el) => el.firstname.includes(projectDetail.firstname))
            .map((el, index) => (
              <UsersInProject user={el} key={index} />
            ))}
        </div>
      </div>
      <div className="blocVisuelDetailsProjet">
        <div className="detailsDetailsProjet">
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
        </div>
        <div className="videoDetailsProjet">
          Blahblah
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
    </div>
  );
};
export default ProjectDetails;
