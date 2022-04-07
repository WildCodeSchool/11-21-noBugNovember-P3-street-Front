/* eslint-disable no-restricted-globals */
import axios from "axios";
import avatar from "../assets/avatar.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectsInGestion.css";

const AnnonceInGestion = ({
  annonce,
  isFilter,
  getValidatedAnnoncesUser,
  getNonValidatedAnnoncesUser,
  getValidatedAnnoncesProjet,
  getNonValidatedAnnoncesProjet,
  update,
  setUpdate,
  isValidated,
}) => {
  const [viewMore, setViewMore] = useState(false);
  const annonceUser = `/edit_user_annonce/${annonce.id}`;
  const annonceProject = `/edit_project_annonce/${annonce.id}`;

  const deleteAnnonce = (id) => {
    if (isFilter === true) {
      if (
        confirm(
          `Êtes-vous sûr de vouloir supprimer l'annonce ? ATTENTION : Toute suppression est définitive`
        ) === true
      ) {
        axios.delete(
          `${process.env.REACT_APP_BACK}/admin/projects_annonces_delete/${annonce.id}`
        );
        alert(`Annonce supprimée`);
        setUpdate(!update);
      } else {
      }
    } else {
      if (
        confirm(
          `Êtes-vous sûr de vouloir supprimer l'annonce ? ATTENTION : Toute suppression est définitive`
        ) === true
      ) {
        axios.delete(
          `${process.env.REACT_APP_BACK}/admin/users_annonces_delete/${annonce.id}`
        );
        alert(`Annonce supprimée`);
        setUpdate(!update);
      } else {
      }
    }
  };

  const iWantView = () => {
    setViewMore(!viewMore);
  };

  const blockUnblock = async (value) => {
    annonce.name
      ? await axios.put(
          `${process.env.REACT_APP_BACK}/admin/annonce_project/${annonce.id}`,
          {
            blocked: value,
          }
        )
      : await axios.put(
          `${process.env.REACT_APP_BACK}/admin/annonce_user/${annonce.id}`,
          {
            blocked: value,
          }
        );
    setUpdate(!update);
  };

  return (
    <div className={viewMore ? "projectgestion active" : "projectgestion"}>
      <div className="premiereligne">
        <div className="buttomreveal" onClick={() => iWantView()}>
          <div className={viewMore ? "premierebarre active" : "premierebarre"}>
            <i class="fa-solid fa-bolt"></i>
          </div>
        </div>
        <div className="contentprojectadmin">
          <div className="entries">
            {annonce.role ? annonce.role : annonce.art_name}
          </div>
          <div className="entries">
            Initié par :{annonce.name ? annonce.name : annonce.firstname}{" "}
            {annonce.name ? annonce.name : annonce.lastname}
          </div>
          <div className="entries">{annonce.date}</div>
        </div>
      </div>
      <div className={viewMore ? "secondeligne active" : "secondeligne"}>
        <div className="cestlelogo"></div>
        <div className="descrip">
          {annonce.description
            ? annonce.description
            : annonce.description_annonce}
        </div>
      </div>
      <div className={viewMore ? "troisiemeligne active" : "troisiemeligne"}>
        {annonce.phone ? (
          <div className="thephone">
            <i className="fa-solid fa-phone-flip" />
            {"  "}
            {annonce.phone}
          </div>
        ) : (
          ""
        )}
        {annonce.email ? (
          <div className="themail">
            <i className="fa-solid fa-envelope" />
            {"  "}
            {annonce.email}
          </div>
        ) : (
          ""
        )}
        <div className="lieuregion">
          <i className="fa-solid fa-location-dot" />
          {"  "}
          {annonce.localisation ? annonce.localisation : annonce.city}
        </div>
        <div className="elstatus"></div>
        <div className="lesbouttons">
          <div
            className={annonce.blocked === 0 ? "onsupprime" : "onvalideUser"}
            onClick={() =>
              annonce.blocked ? blockUnblock(0) : blockUnblock(1)
            }
          >
            {annonce.blocked === 0 ? "Bloquer" : "Valider"}
          </div>
          {isFilter ? (
            <Link to={annonceProject}>
              <div className="onmodifie">Modifier l'annonce</div>
            </Link>
          ) : (
            <Link to={annonceUser}>
              <div className="onmodifie">Modifier l'annonce</div>
            </Link>
          )}
          {isValidated ? (
            ""
          ) : (
            <div className="onsupprime" onClick={deleteAnnonce}>
              Supprimer l'annonce
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnonceInGestion;
