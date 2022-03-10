import axios from "axios";
import avatar from "../assets/avatar.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectsInGestion.css";

const AnnonceInGestion = ({ annonce }) => {
  const [viewMore, setViewMore] = useState(false);
  const iWantView = () => {
    setViewMore(!viewMore);
  };

  return (
    <div className={viewMore ? "projectgestion active" : "projectgestion"}>
      <div className="premiereligne">
        <div className="buttomreveal" onClick={() => iWantView()}>
          <div className={viewMore ? "premierebarre active" : "premierebarre"}>
            \
          </div>
          <div className={viewMore ? "secondebarre active" : "secondebarre"}>
            /
          </div>
        </div>
        <div className="contentprojectadmin">
          <div className="entries">{annonce.role}</div>
          <div className="entries">Initié par :{annonce.name}</div>
          <div className="entries">
            Date estimée pour le lancement :{annonce.date}
          </div>
        </div>
      </div>
      <div className={viewMore ? "secondeligne active" : "secondeligne"}>
        <div className="cestlelogo">
          {/* <img src={`${process.env.REACT_APP_BACK}/${project.logo}`} /> */}
        </div>
        <div className="descrip"></div>
      </div>
      <div className={viewMore ? "troisiemeligne active" : "troisiemeligne"}>
        <div className="thephone">
          <i className="fa-solid fa-phone-flip" />
          {"  "}
        </div>
        <div className="themail">
          <i className="fa-solid fa-envelope" />
          {"  "}
        </div>
        <div className="lieuregion">
          <i className="fa-solid fa-location-dot" />
          {"  "}
        </div>
        <div className="elstatus"></div>
        <div className="lesbouttons">
          <div className="onsupprime">Bloquer le projet</div>
        </div>
      </div>
    </div>
  );
};

export default AnnonceInGestion;
