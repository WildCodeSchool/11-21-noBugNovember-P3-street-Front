import React, { useEffect, useState } from 'react';
import validate from '../components/ValidateInfo';
import useForm from '../components/useForm';
import axios from 'axios';
import '../styles/UpdateProfil.css'
import { useParams } from "react-router-dom";


const UpdateProfil = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [domain, setDomain] = useState([]);
    const [subDomain, setSubdomain] = useState([]);
    const [isFilter, setIsFilter] = useState(false);
    const [profil, setProfil] = useState([]);
    const [reponse, setReponse] = useState([]);
    const [selectDomain, setSelectDomain] = useState(); //Choix utilisateur domaines
    const [selectSubDomain, setSelectSubDomain] = useState(); //Choix utilisateuur sous-domaines
    const [domainId, setDomainId] = useState()
    const [subDomainId,setSubDomainId] = useState()
    const params = useParams();

  console.log(domain)
  const submitForm = () => {
    setIsSubmitted(true);
  }
  
  const { handleChange, handleSubmit, errosUpdate } = useForm(
    submitForm,
    validate
  );

  const [newProfil, setNewProfil] = useState({});
  console.log(newProfil);
  
  const getSubdomain = () => {
    axios.get(`${process.env.REACT_APP_BACK}/all/subdomain`)
         .then((res) => (res.data))
         .then((data) => setSubdomain(data))
    };

  const getDomain = () => {
    axios.get(`${process.env.REACT_APP_BACK}/all/domain`)
         .then((res) => res.data)
         .then((data) => setDomain(data))
};

  const getProfil = () => {
    axios.get(`${process.env.REACT_APP_BACK}/users/profil/${params.id}`)
         .then((res) => res.data)
         .then((data) => setProfil(data))
  };

  const UpdateProfilUser = () => {
    axios
        .put(`${process.env.REACT_APP_BACK}/users/update_profil}${params.id}`, {
          lastname: newProfil.lastname,
          firstname: newProfil.firstname,
          password: newProfil.password,
          forget_password: newProfil.password2,
          description: newProfil.description_users,
          domain_id: newProfil.idDomain,
          subdomain_id: newProfil.idSubDomain,
          email: newProfil.email,
          phone: newProfil.phone,
          city: newProfil.city,
          country: newProfil.country,
          birthday: newProfil.birthday,
          twitter: newProfil.twitter,
          instagram: newProfil.instagram,
          youtube: newProfil.youtube,
          spotify: newProfil.spotify,
          tiktok: newProfil.tiktok,
  
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setNewProfil({});
    };

  useEffect(() => {
    getDomain()
    getSubdomain()
    getProfil()
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
      // console.log(selectDomain)
    } else {
      setIsFilter(false);
    }
  }, [selectDomain]);
  // console.log(values)

const handleDomain = (e) => {
  let choice = e.target.value
  setSelectDomain(choice)
  const getId = domain.filter((el) => el.domain.includes(choice))
  setDomainId(getId[0].id)
  handleChange(e)
};
const handleSubDomain= (e) => {
  let choice = e.target.value
  setSelectSubDomain(choice)
  const getId = subDomain.filter((el) => el.art_name.includes(choice))
  setSubDomainId(getId[0].id)
  handleChange(e)
}

return (
  <>
<div className='form-container'>
  <div className='form-content'>
    <div className='join'>
      <h1>Bienvenue chez Streezer ! - Modification de votre profil</h1>
    </div>
    (*) = Informations obligatoires
    {console.log('ID',domainId)}
    {console.log('ID',subDomainId)}
      <form onSubmit={handleSubmit} className='form-user' noValidate>
      <div className='userinfos'>Vos informations</div>
        <div className='infos-container'>
    <div className='infos-inputs'>
      <label className='form-label'>Nom (*)</label>
        <input
          className='form-input'
          type='text'
          name='lastname'
          placeholder='Votre nom'
          value={profil.lastname}
          onChange={handleChange}
         />
      {errosUpdate.lastname && <p>{errosUpdate.lastname}</p>}
    </div>
    <div className='infos-inputs'>
      <label className='form-label'>Prénom (*)</label>
      <input
        className='form-input'
        type='text'
        name='firstname'
        placeholder='Votre prénom'
        value={profil.firstname}
        onChange={handleChange}
      />
      {errosUpdate.firstname && <p>{errosUpdate.firstname}</p>}
    </div>
    <div className='infos-inputs'>
      <label className='form-label'>Email (*)</label>
      <input
        className='form-input'
        type='email'
        name='email'
        placeholder='Votre adresse email'
        value={profil.email}
        onChange={handleChange}
      />
      {errosUpdate.email && <p>{errosUpdate.email}</p>}
      </div>
      <div className='infos-inputs'>
      <label className='form-label'>Date de naissance (*)</label>
      <input
        className='form-input'
        type='date'
        name='birthday'
        placeholder='Année/Mois/Jour'
        value={profil.birthday}
        onChange={handleChange}
      />
      {errosUpdate.birthday && <p>{errosUpdate.birthday}</p>}
      </div>
      <div className='infos-inputs'>
      <label className='form-label'>Téléphone</label>
      <input
        className='form-input'
        type='tel'
        name='phone'
        placeholder='Votre numéro de téléphone'
        value={profil.phone}
        onChange={handleChange}
      />
      {errosUpdate.phone && <p>{errosUpdate.phone}</p>}
      </div>
    </div>
      <div className='userinfos'>Votre domaine d'activité (*)</div>
    <div className='userdomain'>
      <select className="selectDomain" name="domain" value={profil.domain} onChange={handleDomain} >
          <option value='' >Choisissez votre domaine</option>
          {domain.map((el) => (
            <option name='domain'>{el.domain}</option>
          ))}
        </select>
        {isFilter ?
      <select className="selectSubdomain" name="subDomain" value={profil.subDomain} onChange={handleSubDomain}>
          <option value="">Choisissez votre sous-domaine</option>
          {isFilter ? 
            reponse.map((el) =>(
              <option  >{el.art_name}</option>
            ))
            : subDomain.map((el) => (
            <option>{el.art_name}</option>
          ))}
        </select>
        : ''
        }
    </div>
      <div className='userinfos'>Votre mot de passe</div>
    <div className='password-container'>
    <div className='password-inputs'>
      <label className='form-label'>Mot de passe (*)</label>
      <input
        className='form-input'
        type='password'
        name='password'
        placeholder='Votre mot de passe'
        value={profil.password}
        onChange={handleChange}
      />
      {errosUpdate.password && <p>{errosUpdate.password}</p>}
      </div>
    <div className='password-inputs'>
      <label className='form-label'>Confirmer mot de passe (*)</label>
      <input
        className='form-input'
        type='password'
        name='password2'
        placeholder='Confirmer le mot de passe'
        value={profil.password2}
        onChange={handleChange}
      />
      {errosUpdate.password2 && <p>{errosUpdate.password2}</p>}
    </div>
    </div>
    <div className='userinfos'>Votre localisation</div>
    <div className='location-container'>
    <div className='location-inputs'>
      <label className='form-label'>Ville (*)</label>
      <input
        className='form-input'
        type='text'
        name='city'
        placeholder='Votre ville'
        value={profil.city}
        onChange={handleChange}
      />
      {errosUpdate.city && <p>{errosUpdate.city}</p>}
      </div>
      <div className='location-inputs'>
      <label className='form-label'>Pays (*)</label>
      <input
        className='form-input'
        type='text'
        name='country'
        placeholder='Votre pays'
        value={profil.country}
        onChange={handleChange}
      />
      {errosUpdate.country && <p>{errosUpdate.country}</p>}
      </div>
    </div>
    <div className='userinfos'>Vos réseaux sociaux</div>
    <div className='social-container'>
    <div className='social-inputs'>
      <label className='form-label'>Youtube</label>
      <input
        className='form-input'
        type='text'
        name='youtube'
        placeholder='Votre chaîne Youtube'
        value={profil.youtube}
        onChange={handleChange}
      />
      </div>
      <div className='social-inputs'>
      <label className='form-label'>instagram</label>
      <input
        className='form-input'
        type='text'
        name='instagram'
        placeholder='Votre Instagram'
        value={profil.instagram}
        onChange={handleChange}
      />
      </div>
      <div className='social-inputs'>
      <label className='form-label'>Twitter</label>
      <input
        className='form-input'
        type='text'
        name='twitter'
        placeholder='Votre Twitter'
        value={profil.twitter}
        onChange={handleChange}
      />
      </div>
      <div className='social-inputs'>
      <label className='form-label'>Spotify / Soundcloud</label>
      <input
        className='form-input'
        type='text'
        name='spotify'
        placeholder='Votre Spotify / Soundcloud'
        value={profil.spotify}
        onChange={handleChange}
      />
      </div>
      <div className='social-inputs'>
      <label className='form-label'>Tiktok</label>
      <input
        className='form-input'
        type='text'
        name='tiktok'
        placeholder='Votre Tiktok'
        value={profil.tiktok}
        onChange={handleChange}
      />
      </div>
    </div>
    <div className='userinfos'>Votre descritpion</div>
    <div className='description-container'>
    <div className='description-inputs'>
    <label className='form-label'>Description</label>
    <textarea
        className="description-input" 
        type="text" 
        name="description" 
        placeholder="Parlez-nous un peu de vous..." 
        value={profil.description_users}
        onChange={handleChange}
        />
        </div>
        <button className='profil-input-btn' type='submit' onClick={UpdateProfilUser}>
      Enregistrer votre profil
      </button>
    </div>
  </form>
    </div>
  </div> 
</>
    );
};

export default UpdateProfil