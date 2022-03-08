import React, { useState } from 'react';
import '../styles/Form.css';
import FormSuccess from '../components/FormSucces';
import validate from '../components/ValidateInfo';
import useForm from '../components/useForm';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
    <div className='join'>
      <h1>Rejoignez-nous en créant votre profil juste en dessous !</h1>
    </div>
    <div className='form-container'>
    {!isSubmitted ? (
        <div className='form-content'>
          <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='form-inputs'>
          <label className='form-label'>Nom</label>
            <input
              className='form-input'
              type='text'
              name='lastname'
              placeholder='Votre nom'
              value={values.lastname}
              onChange={handleChange}
             />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Prénom</label>
          <input
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Votre prénom'
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Votre adresse email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          </div>
        <div className='form-inputs'>
          <label className='form-label'>Mot de passe</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Votre mot de passe'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirmer mot de passe</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirmer votre mot de passe'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Téléphone</label>
          <input
            className='form-input'
            type='tel'
            name='phone'
            placeholder='Votre numéro de téléphone'
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Ville</label>
          <input
            className='form-input'
            type='text'
            name='city'
            placeholder='Votre ville'
            value={values.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Pays</label>
          <input
            className='form-input'
            type='text'
            name='country'
            placeholder='Votre pays'
            value={values.country}
            onChange={handleChange}
          />
          {errors.country && <p>{errors.country}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Youtube</label>
          <input
            className='form-input'
            type='text'
            name='Youtube'
            placeholder='Votre chaîne Youtube'
            value={values.youtube}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>instagram</label>
          <input
            className='form-input'
            type='text'
            name='instagram'
            placeholder='Votre Instagram'
            value={values.instagram}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Twitter</label>
          <input
            className='form-input'
            type='text'
            name='twitter'
            placeholder='Votre Twitter'
            value={values.twitter}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Spotify / Soundcloud</label>
          <input
            className='form-input'
            type='text'
            name='spotify'
            placeholder='Votre Spotify / Soundcloud'
            value={values.spotify}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
        <label className='form-label'>Description</label>
        <input
            className='form-input'
            type='text'
            name='description'
            placeholder='Parlez-nous un peu de vous...'
            value={values.description}
            onChange={handleChange}
          />
          <button className='form-input-btn' type='submit'>
          Créer votre profil
          </button>
        </div>
      </form>
        </div>
        ) : (
          <FormSuccess /> 
        )
          }
      </div> 
    </>
        );
};
    

export default Form;