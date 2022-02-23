import "../styles/ProjectCard.css";
import projectImage from "../assets/project.jpg";

const ProjectCard = ({ project }) => {
  return (
    <div className="userContainer">
      <div className="head">
        <div className="avatar">
          <img src={`${process.env.REACT_APP_BACK}/${project.logo}`} alt="" />
        </div>
        <div className="rightside">
          <div className="job">{project.name}</div>
          <div className="pseudo"></div>
        </div>
      </div>
      <div className="desc">{project.description}</div>
      <div className="content">
        <div className="localisation">
          <i className="fa-solid fa-location-dot"></i>
          {project.localisation}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
