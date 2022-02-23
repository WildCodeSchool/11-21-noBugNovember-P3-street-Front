import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import ProjectAnnonceCard from "../components/ProjectAnnonceCard";
import "../styles/Project.css";
import "../styles/SearchContainer.css";
import SearchDomain from "../components/SearchDomain";
import SearchSubDomain from "../components/SearchSubDomain";

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
  const [isFilter, setIsFilter] = useState(false); //c'est filtré ou bien ?
  const [filter, setFilter] = useState([]);
  const [selectStatus, setSelectStatus] = useState();
  console.log("status", selectStatus);
  console.log("view", selectView);

  const arreteTout = (id) => {
    setIsFilter(false);
    choiceView(id);
  };

  const letsGo = () => {
    let temp;
    if (selectDomain !== undefined && selectView === 0) {
      temp = allProjects.filter((e) => e.domain === selectDomain);
    } else if (selectDomain !== undefined && selectView === 1) {
      temp = allProjects.filter(
        (e) => e.domain === selectDomain && e.status === selectStatus
      );
    } else if (
      selectDomain === undefined &&
      selectStatus !== undefined &&
      selectView === 0
    ) {
      temp = allProjects.filter((e) => e.status === selectStatus);
    }

    if (selectDomain !== undefined && selectView === 0) {
      temp = allProjects.filter(
        (e) => e.domain === selectDomain && e.status === selectStatus
      );
    } else if (selectDomain !== undefined && selectView === 1) {
      temp = allProjectAnnonces.filter(
        (e) => e.domain === selectDomain && e.status === selectStatus
      );
    }

    if (temp !== undefined) {
      setFilter(temp);
      setIsFilter(true);
    }
  };

  const goodBye = () => {
    setIsFilter(false);
    setFilter();
    setSelectDomain();
    setSelectSubDomain();
    setSelectStatus();
  };

  const choiceView = (id) => {
    setSelectView(id);
  };

  const derouleDomain = () => {
    setViewDomain(!viewDomain);
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

  const searchDomain = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/domain`)
      .then((response) => response.data)
      .then((data) => setDomain(data));
  };

  const searchSubDomain = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/subdomain`)
      .then((response) => response.data)
      .then((data) => setSubDomain(data));
  };

  useEffect(() => {
    searchAllProjects();
    searchAllProjectsAnnonces();
    searchDomain();
    searchSubDomain();
  }, []);

  return (
    <div className="talent">
      <div className="introtalents">
        <h1>Liste des projets</h1>
      </div>
      <div className="selecttalent">
        <div
          className={selectView === 0 ? "all active" : "all"}
          onClick={() => arreteTout(0)}
        >
          Voir tous les projets
        </div>
        <div
          className={selectView === 1 ? "select active" : "select"}
          onClick={() => arreteTout(1)}
        >
          Voir les annonces projets
        </div>
      </div>
      <div className="thefilter">
        <div className="domain" onClick={() => derouleDomain()}>
          {selectDomain !== undefined ? selectDomain : "Domaine"}
          <div className={viewDomain ? "hello" : "cache"}>
            <SearchDomain
              domain={domain}
              setSelectDomain={setSelectDomain}
              setViewDomain={setViewDomain}
            />
          </div>
        </div>
        {selectView === 0 ? (
          <div className="statusFilter">
            <div
              className={selectStatus === 0 ? "allStatus active" : "allStatus"}
              onClick={() => setSelectStatus(0)}
            >
              Projets en cours(recherche)
            </div>
            <div
              className={selectStatus === 1 ? "allStatus active" : "allStatus"}
              onClick={() => setSelectStatus(1)}
            >
              Projet en cours(complet)
            </div>
            <div
              className={selectStatus === 2 ? "allStatus active" : "allStatus"}
              onClick={() => setSelectStatus(2)}
            >
              Projets terminés
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="search" onClick={() => letsGo()}>
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="cancel" onClick={() => goodBye()}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="grille">
        {selectView === 0
          ? isFilter
            ? filter.map((el, index) => (
                <ProjectCard project={el} key={index} />
              ))
            : allProjects.map((el, index) => (
                <ProjectCard project={el} key={index} />
              ))
          : isFilter
          ? filter.map((el, index) => (
              <ProjectAnnonceCard annonce={el} key={index} />
            ))
          : allProjectAnnonces.map((el, index) => (
              <ProjectAnnonceCard annonce={el} key={index} />
            ))}
      </div>
    </div>
  );
};

export default Project;
