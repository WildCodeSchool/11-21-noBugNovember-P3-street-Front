/* eslint-disable no-restricted-globals */
import "../styles/Profil.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import placeHolderAvatr from "../assets/avatar.png";

const ProfilEdition = ({ idUser }) => {
  const [profil, setProfil] = useState([]);
  const [editProfil, setEditProfil] = useState({});

  const getProfil = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/users/profil/${idUser}`)
      .then((res) => res.data)
      .then((data) => setProfil(data));
  };

  const annonceEdition = (e) => {
    e.preventDefault();
    if (confirm(`Êtes-vous sûr de vouloir modifier votre profil?`) === true) {
      axios.put(`${process.env.REACT_APP_BACK}/users/update_profil/${idUser}`, {
        firstname: editProfil.firstname,
        lastname: editProfil.lastname,
        description_users: editProfil.description,
        birthday: editProfil.birthday,
        date: editProfil.date,
        phone: editProfil.phone,
        youtube: editProfil.youtube,
        instagram: editProfil.instagram,
        twitter: editProfil.twitter,
        spotify: editProfil.spotify,
        tiktok: editProfil.tiktok,
        email: editProfil.email,
        city: editProfil.city,
        country: editProfil.country,
      });
      alert("Profil modifié !");
    } else {
    }
  };

  useEffect(() => {
    getProfil();
  }, []);

  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <div className="join">
            <h1>Modifie ton profil {profil.firstname}</h1>
          </div>
          <form onSubmit="" className="form-user" noValidate>
            <div className="colsInfos">
              <div className="colLeftInfos">
                <div className="userinfos">Vos informations</div>
                <div className="infos-container">
                  <div className="nomPrenomContainer infoDoubleContainer">
                    <div className="infos-inputs">
                      <label className="form-label">Nom (*)</label>
                      <input
                        className="form-input"
                        type="text"
                        name="lastname"
                        placeholder="Votre nom"
                        value={
                          editProfil.lastname !== undefined
                            ? editProfil.lastname
                            : profil.lastname
                        }
                        onChange={(e) =>
                          setEditProfil({
                            ...editProfil,
                            lastname: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="infos-inputs">
                      <label className="form-label">Prénom (*)</label>
                      <input
                        className="form-input"
                        type="text"
                        name="firstname"
                        placeholder="Votre prénom"
                        value={
                          editProfil.firstname !== undefined
                            ? editProfil.firstname
                            : profil.firstname
                        }
                        onChange={(e) =>
                          setEditProfil({
                            ...editProfil,
                            firstname: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="dateTelContainer infoDoubleContainer">
                    {" "}
                    <div className="infos-inputs">
                      <label className="form-label">
                        Date de naissance (*)
                      </label>
                      <input
                        className="form-input"
                        type="date"
                        name="birthday"
                        placeholder="Année/Mois/Jour"
                        value={
                          editProfil.birthday !== undefined
                            ? editProfil.birthday
                            : profil.birthday
                        }
                        onChange={(e) =>
                          setEditProfil({
                            ...editProfil,
                            birthday: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="infos-inputs">
                      <label className="form-label">Téléphone</label>
                      <input
                        className="form-input"
                        type="tel"
                        name="phone"
                        placeholder="Votre numéro de téléphone"
                        value={
                          editProfil.phone !== undefined
                            ? editProfil.phone
                            : profil.phone
                        }
                        onChange={(e) =>
                          setEditProfil({
                            ...editProfil,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="infos-inputs">
                    <label className="form-label">Email (*)</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="Votre adresse email"
                      value={
                        editProfil.email !== undefined
                          ? editProfil.email
                          : profil.email
                      }
                      onChange={(e) =>
                        setEditProfil({
                          ...editProfil,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="dateTelContainer infoDoubleContainer">
                    <div className="location-inputs">
                      <label className="form-label">Ville (*)</label>
                      <input
                        className="form-input"
                        type="text"
                        name="city"
                        placeholder="Votre ville"
                        value={
                          editProfil.city !== undefined
                            ? editProfil.city
                            : profil.city
                        }
                        onChange={(e) =>
                          setEditProfil({
                            ...editProfil,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="location-inputs">
                      <label className="form-label">Pays (*)</label>
                      <input
                        className="form-input"
                        type="text"
                        name="country"
                        placeholder="Votre pays"
                        value={
                          editProfil.country !== undefined
                            ? editProfil.country
                            : profil.country
                        }
                        onChange={(e) =>
                          setEditProfil({
                            ...editProfil,
                            country: e.target.value,
                          })
                        }
                      />
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
              </div>
              <div className="colRightInfos">
                <img
                  className="avatarProfil avatarProfilModif"
                  src={placeHolderAvatr}
                  alt={profil.firstname}
                ></img>
                <div className="AjoutAvatar">Changer d'image</div>
              </div>
            </div>
            <div className="userinfos">Vos réseaux sociaux</div>
            <div className="social-container">
              <div className="social-inputs">
                <label className="form-label">Youtube</label>
                <input
                  className="form-input"
                  type="text"
                  name="youtube"
                  placeholder="Votre chaîne Youtube"
                  value={
                    editProfil.youtube !== undefined
                      ? editProfil.youtube
                      : profil.youtube
                  }
                  onChange={(e) =>
                    setEditProfil({
                      ...editProfil,
                      youtube: e.target.value,
                    })
                  }
                />
              </div>
              <div className="social-inputs">
                <label className="form-label">Instagram</label>
                <input
                  className="form-input"
                  type="text"
                  name="instagram"
                  placeholder="Votre Instagram"
                  value={
                    editProfil.instagram !== undefined
                      ? editProfil.instagram
                      : profil.instagram
                  }
                  onChange={(e) =>
                    setEditProfil({
                      ...editProfil,
                      instagram: e.target.value,
                    })
                  }
                />
              </div>

              <div className="social-inputs">
                <label className="form-label">Twitter</label>
                <input
                  className="form-input"
                  type="text"
                  name="twitter"
                  placeholder="Votre Twitter"
                  value={
                    editProfil.twitter !== undefined
                      ? editProfil.twitter
                      : profil.twitter
                  }
                  onChange={(e) =>
                    setEditProfil({
                      ...editProfil,
                      twitter: e.target.value,
                    })
                  }
                />
              </div>
              <div className="social-inputs">
                <label className="form-label">Spotify / Soundcloud</label>
                <input
                  className="form-input"
                  type="text"
                  name="spotify"
                  placeholder="Votre Spotify / Soundcloud"
                  value={
                    editProfil.spotify !== undefined
                      ? editProfil.spotify
                      : profil.spotify
                  }
                  onChange={(e) =>
                    setEditProfil({
                      ...editProfil,
                      spotify: e.target.value,
                    })
                  }
                />
              </div>
              <div className="social-inputs">
                <label className="form-label">Tiktok</label>
                <input
                  className="form-input"
                  type="text"
                  name="tiktok"
                  placeholder="Votre Tiktok"
                  value={
                    editProfil.tiktok !== undefined
                      ? editProfil.tiktok
                      : profil.tiktok
                  }
                  onChange={(e) =>
                    setEditProfil({
                      ...editProfil,
                      tiktok: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="userinfos">Votre description</div>
            <div className="description-container">
              <div className="description-inputs">
                <textarea
                  className="description-input"
                  type="text"
                  name="description"
                  placeholder="Parlez-nous un peu de vous..."
                  value={
                    editProfil.description !== undefined
                      ? editProfil.description
                      : profil.description_users
                  }
                  onChange={(e) =>
                    setEditProfil({
                      ...editProfil,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div className="btnProfilWrapperModif">
                <Link to="/profil">
                  <div className="profil-input-btn cancelBtn">Annuler</div>
                </Link>
                <div
                  className="profil-input-btn"
                  type="submit"
                  onClick={annonceEdition}
                >
                  Enregistrer
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfilEdition;
