import "../styles/ProjectCard.css";
import projectImage from "../assets/project.jpg";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const projectId = `/projets/${project.id}`;
  const dateProject = project.estimated_start_date.slice(0, 10);

  return (
    <Link to={projectId}>
      <div className="projectContainer">
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
          <div className="quandOu localisation">
            <i className="fa-solid fa-location-dot"></i>&nbsp;
            {project.region_name}
          </div>
          <div className="quandOu projecTtime">
            <i class="fa-solid fa-calendar-days"></i>&nbsp;
            {dateProject}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
