import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import ProjectAnnonceCard from "../components/ProjectAnnonceCard";
import "../styles/Project.css";
import SearchContainer from "../components/SearchContainer";

const Project = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [allProjectAnnonces, setAllProjectAnnonces] = useState([]);
  const [domain, setDomain] = useState([]); //Liste des domaines
  const [viewDomain, setViewDomain] = useState(false); //Vue de la liste des domaines
  const [selectDomain, setSelectDomain] = useState();
  const [selectSubDomain, setSelectSubDomain] = useState();
  const [selectView, setSelectView] = useState(0); //Choix entre tous les users et les annonces
  const [subDomain, setSubDomain] = useState([]); //Liste des sous-domaines
  const [viewSubDomain, setViewSubDomain] = useState(false);

  const choiceView = (id) => {
    setSelectView(id);
  };

  const derouleDomain = () => {
    setViewDomain(!viewDomain);
  };

  const derouleSubDomain = () => {
    setViewSubDomain(!viewSubDomain);
  };

  const searchAllProjects = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/projects`)
      .then((response) => response.data)
      .then((data) => setAllProjects(data));
  };

  const searchAllProjectsAnnonces = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/annonces_all_projects`)
      .then((response) => response.data)
      .then((data) => setAllProjectAnnonces(data));
  };

  useEffect(() => {
    searchAllProjects();
    searchAllProjectsAnnonces();
  }, []);

  return (
    <div className="talent">
      {console.log(allProjectAnnonces)}
      <div className="introtalents">
        <h1>Liste des projets</h1>
      </div>

      <div className="selecttalent">
        <div
          className={selectView === 0 ? "all active" : "all"}
          onClick={() => choiceView(0)}
        >
          Voir tous les projets
        </div>
        <div
          className={selectView === 1 ? "select active" : "select"}
          onClick={() => choiceView(1)}
        >
          Voir les annonces projet
        </div>
      </div>
      <div className="thefilter">
        <div className="domain" onClick={() => derouleDomain()}>
          Domaine
          <div
            className={
              viewDomain ? (
                <SearchContainer
                  domain={domain}
                  setViewDomain={setViewDomain}
                />
              ) : (
                "case"
              )
            }
          ></div>
        </div>
        <div className="subdomain" onClick={() => derouleSubDomain()}>
          Sous-domaine
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="cancel">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>

      <div className="grille">
        {selectView === 0
          ? allProjects.map((el, index) => (
              <ProjectCard project={el} key={index} />
            ))
          : allProjectAnnonces.map((el, index) => (
              <ProjectAnnonceCard annonce={el} key={index} />
            ))}
      </div>
    </div>
  );
};

export default Project;
