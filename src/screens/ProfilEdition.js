/* eslint-disable no-restricted-globals */
import "../styles/Profil.css";
import React, { useEffect, useState } from "react";
import validate from "../components/ValidateInfo";
import useForm from "../components/useForm";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfilEdition = ({ idUser }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [domain, setDomain] = useState([]);
  const [subDomain, setSubdomain] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [profil, setProfil] = useState([]);
  const [reponse, setReponse] = useState([]);
  const [selectDomain, setSelectDomain] = useState(); //Choix utilisateur domaines
  const [selectSubDomain, setSelectSubDomain] = useState(); //Choix utilisateuur sous-domaines
  const [domainId, setDomainId] = useState();
  const [subDomainId, setSubDomainId] = useState();
  const [editProfil, setEditProfil] = useState({});

  console.log(idUser);
  const submitForm = () => {
    setIsSubmitted(true);
  };

  //   const { handleChange, handleSubmit, errors } = useForm(submitForm, validate);
  //   const { handleSubmit, errors } = useForm(submitForm, validate);

  const getSubdomain = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/subdomain`)
      .then((res) => res.data)
      .then((data) => setSubdomain(data));
  };

  const getDomain = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/domain`)
      .then((res) => res.data)
      .then((data) => setDomain(data));
  };

  const getProfil = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/users/profil/${idUser}`)
      .then((res) => res.data)
      .then((data) => setProfil(data));
  };

  const annonceEdition = (e) => {
    e.preventDefault();
    if (confirm(`Êtes-vous sûr de vouloir modifier ce projet?`) === true) {
      axios.put(`${process.env.REACT_APP_BACK}/admin/update_profil/${idUser}`, {
        firstname: editProfil.firstname,
        lastname: editProfil.lastname,
        description_users: editProfil.description,
        birthday: editProfil.birthday,
        date: editProfil.date,
        phone: editProfil.phone,
        domain_id: editProfil.domain,
        sub_domain_id: editProfil.art_name,
        art_name: editProfil.subDomain,
        youtube: editProfil.youtube,
        instagram: editProfil.instagram,
        twitter: editProfil.twitter,
        spotify: editProfil.spotify,
        tiktok: editProfil.tiktok,
        email: editProfil.email,
        city: editProfil.city,
        country: editProfil.country,
      });
    } else {
      console.log("nope");
    }
  };

  useEffect(() => {
    getDomain();
    getSubdomain();
    getProfil();
  }, []);

  useEffect(() => {
    if (selectDomain !== undefined) {
      axios
        .put(`${process.env.REACT_APP_BACK}/all/domain_has_sub_domain`, {
          domain: selectDomain,
        })
        .then((response) => response.data)
        .then((data) => setReponse(data));
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
  }, [selectDomain]);

  const handleDomain = (e) => {
    let choice = e.target.value;
    setSelectDomain(choice);
    const getId = domain.filter((el) => el.domain.includes(choice));
    setDomainId(getId[0].id);
    setEditProfil({ ...editProfil, domain: domainId });
  };
  console.log(editProfil);
  const handleSubDomain = (e) => {
    let choice = e.target.value;
    setSelectSubDomain(choice);
    const getId = subDomain.filter((el) => el.art_name.includes(choice));
    setSubDomainId(getId[0].id);
    setEditProfil({ ...editProfil, art_name: subDomainId });
  };

  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <div className="join">
            <h1>Modifie ton profil {profil.firstname}</h1>
          </div>
          (*) = Informations obligatoires
          {console.log("ID", domainId)}
          {console.log("ID", subDomainId)}
          <form onSubmit="" className="form-user" noValidate>
            <div className="userinfos">Vos informations</div>
            <div className="infos-container">
              <div className="infos-inputs">
                <label className="form-label">Nom (*)</label>
                <input
                  className="form-input"
                  type="text"
                  name="lastname"
                  placeholder="Votre nom"
                  value={profil.lastname}
                  //   onChange={handleChange}
                />
                {/* {errors.lastname && <p>{errors.lastname}</p>} */}
              </div>
              <div className="infos-inputs">
                <label className="form-label">Prénom (*)</label>
                <input
                  className="form-input"
                  type="text"
                  name="firstname"
                  placeholder="Votre prénom"
                  value={profil.firstname}
                  //   onChange={handleChange}
                />
                {/* {errors.firstname && <p>{errors.firstname}</p>} */}
              </div>
              <div className="infos-inputs">
                <label className="form-label">Email (*)</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Votre adresse email"
                  value={profil.email}
                  //   onChange={handleChange}
                />
                {/* {errors.email && <p>{errors.email}</p>} */}
              </div>
              <div className="infos-inputs">
                <label className="form-label">Date de naissance (*)</label>
                <input
                  className="form-input"
                  type="date"
                  name="birthday"
                  placeholder="Année/Mois/Jour"
                  value={profil.birthday}
                  //   onChange={handleChange}
                />
                {/* {errors.birthday && <p>{errors.birthday}</p>} */}
              </div>
              <div className="infos-inputs">
                <label className="form-label">Téléphone</label>
                <input
                  className="form-input"
                  type="tel"
                  name="phone"
                  placeholder="Votre numéro de téléphone"
                  value={profil.phone}
                  //   onChange={handleChange}
                />
                {/* {errors.phone && <p>{errors.phone}</p>} */}
              </div>
            </div>
            <div className="userinfos">Votre domaine d'activité (*)</div>
            <div className="userdomain">
              <select
                className="selectDomain"
                name="domain"
                onChange={handleDomain}
              >
                <option value="">{profil.domain}</option>
                {domain.map((el) => (
                  <option name="domain">{el.domain}</option>
                ))}
              </select>

              <select
                className="selectDomain"
                name="subDomain"
                onChange={handleSubDomain}
              >
                <option value="">{profil.art_name}</option>
                {isFilter
                  ? reponse.map((el) => <option>{el.art_name}</option>)
                  : subDomain.map((el) => <option>{el.art_name}</option>)}
              </select>
            </div>
            <div className="userinfos">Votre localisation</div>
            <div className="location-container">
              <div className="location-inputs">
                <label className="form-label">Ville (*)</label>
                <input
                  className="form-input"
                  type="text"
                  name="city"
                  placeholder="Votre ville"
                  value={profil.city}
                  //   onChange={handleChange}
                />
                {/* {errors.city && <p>{errors.city}</p>} */}
              </div>
              <div className="location-inputs">
                <label className="form-label">Pays (*)</label>
                <input
                  className="form-input"
                  type="text"
                  name="country"
                  placeholder="Votre pays"
                  value={profil.country}
                  //   onChange={handleChange}
                />
                {/* {errors.country && <p>{errors.country}</p>} */}
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
                  value={profil.youtube}
                  //   onChange={handleChange}
                />
              </div>
              <div className="social-inputs">
                <label className="form-label">instagram</label>
                <input
                  className="form-input"
                  type="text"
                  name="instagram"
                  placeholder="Votre Instagram"
                  value={profil.instagram}
                  //   onChange={handleChange}
                />
              </div>

              <div className="social-inputs">
                <label className="form-label">Twitter</label>
                <input
                  className="form-input"
                  type="text"
                  name="twitter"
                  placeholder="Votre Twitter"
                  value={profil.twitter}
                  //   onChange={handleChange}
                />
              </div>
              <div className="social-inputs">
                <label className="form-label">Spotify / Soundcloud</label>
                <input
                  className="form-input"
                  type="text"
                  name="spotify"
                  placeholder="Votre Spotify / Soundcloud"
                  value={profil.spotify}
                  //   onChange={handleChange}
                />
              </div>
              <div className="social-inputs">
                <label className="form-label">Tiktok</label>
                <input
                  className="form-input"
                  type="text"
                  name="tiktok"
                  placeholder="Votre Tiktok"
                  value={profil.tiktok}
                  //   onChange={handleChange}
                />
              </div>
            </div>
            <div className="userinfos">Votre descritpion</div>
            <div className="description-container">
              <div className="description-inputs">
                <label className="form-label">Description</label>
                <textarea
                  className="description-input"
                  type="text"
                  name="description"
                  placeholder="Parlez-nous un peu de vous..."
                  value={profil.description_users}
                  //   onChange={handleChange}
                />
              </div>
              <button
                className="profil-input-btn"
                type="submit"
                onClick={annonceEdition}
              >
                Modifier votre profil
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfilEdition;
