import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectUserLaunch from "../components/ProjectUserLaunch";
import ProjectUserParticipate from "../components/ProjectUserParticipate";
import Reseaux from "../components/Reseaux";
import axios from "axios";
import "../styles/UserDetail.css";

const UserDetail = () => {
  const [data, setData] = useState([]); //Données talent
  const [participe, setParticipe] = useState(); //Projet où le talent est collaborateur
  const [projet, setProjet] = useState([]); //Projet où le talent est initiateur
  const [selectProjet, setSelectProjet] = useState(0);
  let { id } = useParams();

  const choiceProjet = (id) => {
    setSelectProjet(id);
  };

  const creatorOfProject = () => {
    axios
      .put(`${process.env.REACT_APP_BACK}/all/project_creator`, { id: id })
      .then((response) => response.data)
      .then((data) => setProjet(data));
  };

  const dataUser = () => {
    axios
      .put(`${process.env.REACT_APP_BACK}/all/user`, { id: id })
      .then((response) => response.data)
      .then((data) => setData(data));
  };

  const disponibilite = () => {
    if (data.available === 1) {
      return (
        <div>
          <i class="fa-solid fa-calendar-check" alt="Disponible" /> Disponible
        </div>
      );
    } else {
      return (
        <div>
          <i class="fa-solid fa-calendar-minus bye" alt="Non disponible" /> Non
          disponible
        </div>
      );
    }
  };

  const userHasProjects = () => {
    axios
      .put(`${process.env.REACT_APP_BACK}/all/userhasprojects`, { id: id })
      .then((response) => response.data)
      .then((data) => setParticipe(data));
  };

  useEffect(() => {
    dataUser();
    userHasProjects();
    creatorOfProject();
  }, []);

  return (
    <div className="UserDetail">
      <div className="profil">
        <div className="perso">
          <img
            src={`${process.env.REACT_APP_BACK}/${data.avatar}`}
            alt={data.firstname}
          />
        </div>
        <div className="blaze">
          {data.firstname} {data.lastname}
        </div>
        <div className="onejob">
          {data.domain} - {data.art_name}
        </div>
        <div className="living">
          {data.country} - {data.city}
        </div>
        <div className="dispo2">{disponibilite()}</div>
        <div className="description3">{data.description_users}</div>
        <div className="lesresals">
          {data.twitter !== undefined ||
          data.youtube !== undefined ||
          data.instagram !== undefined ||
          data.spotify !== undefined ||
          data.tiktok !== undefined ? (
            <Reseaux
              youtube={data.youtube}
              twitter={data.twitter}
              spotify={data.spotify}
              instagram={data.instagram}
              tiktok={data.tiktok}
            />
          ) : (
            `Aucun réseaux sociaux renseignés`
          )}
        </div>
      </div>
      <div className="projects">
        <div className="lefiltre">
          <div
            className={
              selectProjet === 0 ? "lancerbyuser active" : "lancerbyuser"
            }
            onClick={() => choiceProjet(0)}
          >
            Projets lancés par {data.firstname}
          </div>
          <div
            className={
              selectProjet === 1
                ? "participatebyuser active"
                : "participatebyuser"
            }
            onClick={() => choiceProjet(1)}
          >
            Projets où {data.firstname} a participé
          </div>
        </div>
        <div className="result">
          <div className={selectProjet === 0 ? "creator" : "cache"}>
            <div className="lanceur">
              {projet !== undefined && projet.length > 0
                ? projet.map((p) => (
                    <ProjectUserLaunch
                      id={p.id}
                      name={p.name}
                      logo={p.logo}
                      status={p.status}
                      description={p.description}
                      domain={p.domain}
                      youtube={p.youtubelink}
                    />
                  ))
                : `Aucun projet par ${data.firstname}`}
            </div>
          </div>
          <div className={selectProjet === 1 ? "participe" : "cache"}>
            <div className="lanceur">
              {participe !== undefined && participe.length > 0
                ? participe.map((pa) => (
                    <ProjectUserParticipate
                      id={pa.id}
                      name={pa.name}
                      status={pa.status}
                      logo={pa.logo}
                      domain={pa.domain}
                    />
                  ))
                : `${data.firstname} n'a participé à aucun projet`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
