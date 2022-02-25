import "../styles/ProjectCard.css";
import projectImage from "../assets/project.jpg";

const ProjectAnnonceCard = ({ annonce }) => {
  return (
    <div className="projectContainer">
      <div className="head">
        <div className="avatar">
          <img src={`${process.env.REACT_APP_BACK}/${annonce.logo}`} alt="" />
        </div>
        <div className="rightside">
          <div className="job">{annonce.role}</div>
          <div className="pseudo"></div>
        </div>
      </div>
      <div className="desc">{annonce.description}</div>
      <div className="content">
        <div className="localisation">
          <i className="fa-solid fa-location-dot"></i>
          {annonce.localisation}
        </div>
      </div>
    </div>
  );
};
export default ProjectAnnonceCard;
