import ProjectCard from "../components/ProjectCard";
import UserCard from "../components/UserCard";
const Project = () => {
  return (
    <div>
      <div className="navbar">PROJECTS</div>
      <div>
        <ProjectCard />

        <UserCard />
      </div>
    </div>
  );
};

export default Project;
