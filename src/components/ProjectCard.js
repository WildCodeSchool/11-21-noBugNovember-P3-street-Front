import "./ProjectCard.css";
import projectImage from "../assets/project.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProjectCard = () => {
  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img src={projectImage} alt="project" className="projectImage" />
        {/* <div className="projectCat">
          <h2>Cinema</h2>
        </div> */}
      </div>
      <div>
        <div className="cardInfo">
          <h1>INCEPTION</h1>
          <div className="info">
            <p>Cinema</p>
            <p>Project owner : Jean Jack</p>
            <div className="buttonDiv">
              <button className="button">REJOINDRE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
