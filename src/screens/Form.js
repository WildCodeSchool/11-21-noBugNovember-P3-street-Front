import React, { useEffect, useState } from "react";
import "../styles/Form.css";
import FormSuccess from "../components/FormSucces";
import validate from "../components/ValidateInfo";
import useForm from "../components/useForm";
import axios from "axios";
import sha256 from "crypto-js/sha256";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [domain, setDomain] = useState([]);
  const [subDomain, setSubdomain] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [reponse, setReponse] = useState([]);
  const [selectDomain, setSelectDomain] = useState(); //Choix utilisateur domaines
  const [selectSubDomain, setSelectSubDomain] = useState(); //Choix utilisateuur sous-domaines
  const [domainId, setDomainId] = useState();
  const [subDomainId, setSubDomainId] = useState();

  const submitForm = () => {
    setIsSubmitted(true);
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

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

  useEffect(() => {
    getDomain();
    getSubdomain();
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
    handleChange(e);
  };
  const handleSubDomain = (e) => {
    let choice = e.target.value;
    setSelectSubDomain(choice);
    const getId = subDomain.filter((el) => el.art_name.includes(choice));
    setSubDomainId(getId[0].id);
    handleChange(e);
  };

  const submitUser = () => {
    axios.post(`${process.env.REACT_APP_BACK}/users/submitUser`, {
      admin: 0,
      blocked: 1,
      firstname: values.firstname,
      lastname: values.lastname,
      password: sha256(values.password).toString(),
      email: values.email,
      phone: values.phone,
      birthday: values.birthday,
      city: values.city,
      country: values.country,
      forget_password: "lol",
      youtube: values.youtube,
      instagram: values.instagram,
      twitter: values.twitter,
      spotify: values.spotify,
      tiktok: values.tiktok,
      description_users: values.description,
      available: 1,
      phoneVisibility: 1,
      emailVisibility: 1,
      domain_id: domainId,
      sub_domain_id: subDomainId,
    });
  };

  return (
    <>
      <div className="form-container">
        {!isSubmitted ? (
          <div className="form-content">
            <div className="join">
              <h1>Rejoignez-nous en créant votre profil juste en dessous !</h1>
            </div>
            {/*   (*) = Informations obligatoires */}
            <form onSubmit={handleSubmit} className="form-user" noValidate>
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
                          value={values.lastname}
                          onChange={handleChange}
                        />
                        {errors.lastname && <p>{errors.lastname}</p>}
                      </div>
                      <div className="infos-inputs">
                        <label className="form-label">Prénom (*)</label>
                        <input
                          className="form-input"
                          type="text"
                          name="firstname"
                          placeholder="Votre prénom"
                          value={values.firstname}
                          onChange={handleChange}
                        />
                        {errors.firstname && <p>{errors.firstname}</p>}
                      </div>
                    </div>
                    <div className="infos-inputs">
                      <label className="form-label">Email (*)</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="Votre adresse email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="infos-inputs">
                      <label className="form-label">
                        Date de naissance (*)
                      </label>
                      <input
                        className="form-input"
                        type="date"
                        name="birthday"
                        placeholder="Année/Mois/Jour"
                        value={values.birthday}
                        onChange={handleChange}
                      />
                      {errors.birthday && <p>{errors.birthday}</p>}
                    </div>
                    <div className="infos-inputs">
                      <label className="form-label">Téléphone</label>
                      <input
                        className="form-input"
                        type="tel"
                        name="phone"
                        placeholder="Votre numéro de téléphone"
                        value={values.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <p>{errors.phone}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="userinfos">Votre domaine d'activité (*)</div>
              <div className="userdomain">
                <select
                  className="selectDomain"
                  name="domain"
                  value={values.domain}
                  onChange={handleDomain}
                >
                  <option value="">Choisissez votre domaine</option>
                  {domain.map((el) => (
                    <option name="domain">{el.domain}</option>
                  ))}
                </select>
                {isFilter ? (
                  <select
                    className="selectSubdomain"
                    name="subDomain"
                    value={values.subDomain}
                    onChange={handleSubDomain}
                  >
                    <option value="">Choisissez votre sous-domaine</option>
                    {isFilter
                      ? reponse.map((el) => <option>{el.art_name}</option>)
                      : subDomain.map((el) => <option>{el.art_name}</option>)}
                  </select>
                ) : (
                  ""
                )}
              </div>
              <div className="userinfos">Votre mot de passe</div>
              <div className="password-container">
                <div className="password-inputs">
                  <label className="form-label">Mot de passe (*)</label>
                  <input
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Votre mot de passe"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="password-inputs">
                  <label className="form-label">
                    Confirmer mot de passe (*)
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    name="password2"
                    placeholder="Confirmer le mot de passe"
                    value={values.password2}
                    onChange={handleChange}
                  />
                  {errors.password2 && <p>{errors.password2}</p>}
                </div>
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
                    value={values.city}
                    onChange={handleChange}
                  />
                  {errors.city && <p>{errors.city}</p>}
                </div>
                <div className="location-inputs">
                  <label className="form-label">Pays (*)</label>
                  <input
                    className="form-input"
                    type="text"
                    name="country"
                    placeholder="Votre pays"
                    value={values.country}
                    onChange={handleChange}
                  />
                  {errors.country && <p>{errors.country}</p>}
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
                    value={values.youtube}
                    onChange={handleChange}
                  />
                </div>
                <div className="social-inputs">
                  <label className="form-label">instagram</label>
                  <input
                    className="form-input"
                    type="text"
                    name="instagram"
                    placeholder="Votre Instagram"
                    value={values.instagram}
                    onChange={handleChange}
                  />
                </div>
                <div className="social-inputs">
                  <label className="form-label">Twitter</label>
                  <input
                    className="form-input"
                    type="text"
                    name="twitter"
                    placeholder="Votre Twitter"
                    value={values.twitter}
                    onChange={handleChange}
                  />
                </div>
                <div className="social-inputs">
                  <label className="form-label">Spotify / Soundcloud</label>
                  <input
                    className="form-input"
                    type="text"
                    name="spotify"
                    placeholder="Votre Spotify / Soundcloud"
                    value={values.spotify}
                    onChange={handleChange}
                  />
                </div>
                <div className="social-inputs">
                  <label className="form-label">Tiktok</label>
                  <input
                    className="form-input"
                    type="text"
                    name="tiktok"
                    placeholder="Votre Tiktok"
                    value={values.tiktok}
                    onChange={handleChange}
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
                  />
                </div>
                <button
                  className="form-input-btn"
                  type="submit"
                  onClick={() => submitUser()}
                >
                  Créer votre profil
                </button>
              </div>
            </form>
          </div>
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
