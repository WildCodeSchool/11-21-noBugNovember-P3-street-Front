import "../styles/Profil.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Profil = ({ idUser }) => {
  const [profil, setProfil] = useState([]);

  const getProfil = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/users/profil/${idUser}`)
      .then((res) => res.data)
      .then((data) => setProfil(data));
  };

  useEffect(() => {
    getProfil();
  }, []);

  console.log(profil);
  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <div className="join">
            <h1>Votre profil {profil.firstname}</h1>
          </div>
          <form onSubmit="" className="form-user" noValidate>
            <div className="userinfos">Vos informations</div>
            <div className="infos-container">
              <div className="nomPrenomContainer infoDoubleContainer">
                <div className="infos-inputs">
                  <label className="form-label">Nom</label>
                  <span className="form-input">{profil.lastname}</span>
                </div>
                <div className="infos-inputs">
                  <label className="form-label">Prénom</label>
                  <span className="form-input">{profil.firstname}</span>
                </div>
              </div>

              <div className="dateTelContainer infoDoubleContainer">
                <div className="infos-inputs">
                  <label className="form-label">Date de naissance</label>
                  <span className="form-input">{profil.birthday}</span>
                </div>
                <div className="infos-inputs">
                  <label className="form-label">Téléphone</label>
                  <span className="form-input">{profil.phone}</span>
                </div>
              </div>
              <div className="infos-inputs">
                <label className="form-label">Email</label>
                <span className="form-input">{profil.email}</span>
              </div>
              <div className="dateTelContainer infoDoubleContainer">
                <div className="location-inputs">
                  <label className="form-label">Ville</label>
                  <span className="form-input">{profil.city}</span>
                </div>
                <div className="location-inputs">
                  <label className="form-label">Pays</label>
                  <span className="form-input">{profil.country}</span>
                </div>
              </div>
            </div>

            <div className="location-container">
              <div className="userinfos">Votre domaine d'activité</div>
              <div className="domainSubDomainContainer infoDoubleContainer">
                <div className="location-inputs">
                  <span className="form-input">{profil.domain}</span>
                </div>
                <div className="location-inputs">
                  <span className="form-input">{profil.art_name}</span>
                </div>
              </div>
            </div>

            <div className="userinfos">Vos réseaux sociaux</div>
            <div className="social-container">
              <div className="social-inputs">
                <label className="form-label">Youtube</label>
                <span className="form-input">{profil.youtube}</span>
              </div>
              <div className="social-inputs">
                <label className="form-label">Instagram</label>
                <span className="form-input">{profil.instagram}</span>
              </div>
              <div className="social-inputs">
                <label className="form-label">Twitter</label>
                <span className="form-input">{profil.twitter}</span>
              </div>
              <div className="social-inputs">
                <label className="form-label">Spotify / Soundcloud</label>
                <span className="form-input">{profil.spotify}</span>
              </div>
              <div className="social-inputs">
                <label className="form-label">Tiktok</label>
                <span className="form-input">{profil.tiktok}</span>
              </div>
            </div>
            <div className="userinfos">Votre descritpion</div>
            <div className="description-container">
              <div className="description-inputs">
                <p className="description-input">{profil.description_users}</p>
              </div>
              <div className="btnProfilWrapper">
                <Link to="/update_profil">
                  <div className="profil-input-btn" type="submit">
                    Modifier votre profil
                  </div>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profil;
