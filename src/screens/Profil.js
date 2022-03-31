import "../styles/Profil.css";
import React, { useEffect, useState } from "react";
import validate from "../components/ValidateInfo";
import useForm from "../components/useForm";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profil = ({ idUser }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [domain, setDomain] = useState([]);
  const [subDomain, setSubdomain] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [profil, setProfil] = useState([]);
  const [reponse, setReponse] = useState([]);
  const [pDomain, setpDomain] = useState(); //Choix utilisateur domaines
  const [selectSubDomain, setSelectSubDomain] = useState(); //Choix utilisateuur sous-domaines
  const [domainId, setDomainId] = useState();
  const [subDomainId, setSubDomainId] = useState();

  console.log(idUser);
  const submitForm = () => {
    setIsSubmitted(true);
  };

  const { handleChange, handleSubmit, errors } = useForm(submitForm, validate);

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

  useEffect(() => {
    getDomain();
    getSubdomain();
    getProfil();
  }, []);

  useEffect(() => {
    if (pDomain !== undefined) {
      axios
        .put(`${process.env.REACT_APP_BACK}/all/domain_has_sub_domain`, {
          domain: pDomain,
        })
        .then((response) => response.data)
        .then((data) => setReponse(data));
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
  }, [pDomain]);

  const handleDomain = (e) => {
    let choice = e.target.value;
    setpDomain(choice);
    const getId = domain.filter((el) => el.domain.includes(choice));
    setDomainId(getId[0].id);
    handleChange(e);
  };
  const handleSubDomain = (e) => {
    let choice = e.target.value;
    setSelectSubDomain(choice);
    const getId = subDomain.filter((el) => el.art_name.includes(choice));
    setSubDomainId(getId[0].id);
    handleChange(e);
  };
  console.log(profil);
  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <div className="join">
            <h1>Votre profil {profil.firstname}</h1>
          </div>
          <form onSubmit={handleSubmit} className="form-user" noValidate>
            <div className="userinfos">Vos informations</div>
            <div className="infos-container">
              <div className="nomPrenomContainer infoDoubleContainer">
                <div className="infos-inputs">
                  <label className="form-label">Nom</label>
                  <span className="form-input">Nomdefamille</span>
                </div>
                <div className="infos-inputs">
                  <label className="form-label">Prénom</label>
                  <span className="form-input">Nomdefamille</span>
                </div>
              </div>

              <div className="dateTelContainer infoDoubleContainer">
                <div className="infos-inputs">
                  <label className="form-label">Date de naissance</label>
                  <span className="form-input">Nomdefamille</span>
                </div>
                <div className="infos-inputs">
                  <label className="form-label">Téléphone</label>
                  <span className="form-input">Nomdefamille</span>
                </div>
              </div>
              <div className="infos-inputs">
                <label className="form-label">Email</label>
                <span className="form-input">
                  peutetrequecechampesttropgrandmaiscestplusjolie@jesuisnul.com
                </span>
              </div>
              <div className="dateTelContainer infoDoubleContainer">
                <div className="location-inputs">
                  <label className="form-label">Ville</label>
                  <span className="form-input">Nomdefamille</span>
                </div>
                <div className="location-inputs">
                  <label className="form-label">Pays</label>
                  <span className="form-input">Nomdefamille</span>
                </div>
              </div>
            </div>

            <div className="location-container">
              <div className="userinfos">Votre domaine d'activité</div>
              <div className="domainSubDomainContainer infoDoubleContainer">
                <div className="location-inputs">
                  <span className="form-input">Domain</span>
                </div>
                <div className="location-inputs">
                  <span className="form-input">SubDomain</span>
                </div>
              </div>
            </div>

            <div className="userinfos">Vos réseaux sociaux</div>
            <div className="social-container">
              <div className="social-inputs">
                <label className="form-label">Youtube</label>
                <span className="form-input">Nomdefamille</span>
              </div>
              <div className="social-inputs">
                <label className="form-label">Instagram</label>
                <span className="form-input">Nomdefamille</span>
              </div>
              <div className="social-inputs">
                <label className="form-label">Twitter</label>
                <span className="form-input">Nomdefamille</span>
              </div>
              <div className="social-inputs">
                <label className="form-label">Spotify / Soundcloud</label>
                <span className="form-input">Nomdefamille</span>
              </div>
              <div className="social-inputs">
                <label className="form-label">Tiktok</label>
                <span className="form-input">Nomdefamille</span>
              </div>
            </div>
            <div className="userinfos">Votre descritpion</div>
            <div className="description-container">
              <div className="description-inputs">
                <p className="description-input">
                  Magna magna minim ullamco nulla non officia amet eu labore
                  ullamco ex id. Aliqua cupidatat qui velit ea enim occaecat.
                  Anim fugiat nulla eiusmod veniam proident nostrud ea cillum
                  nulla est exercitation. Cupidatat non est consequat aliqua.
                  Elit sit elit mollit eiusmod aute exercitation sunt ea sunt
                  est. Non fugiat irure adipisicing aliquip minim id in sint
                  esse dolor ullamco pariatur quis duis.
                </p>
              </div>
              <div className="btnProfilWrapper">
                <div className="profil-input-btn" type="submit">
                  Modifier votre profil
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profil;
