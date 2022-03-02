import React, { useState } from 'react';
import '../styles/Form.css';
import FormRight from '../components/FormRight';
import FormSuccess from '../components/FormSucces';
import brahim from "../assets/Brahim.jpg";
import validate from '../components/ValidateInfo';
import useForm from '../components/useForm';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <div className='join'>
      <h1>Rejoignez-nous en créant votre profil juste en dessous !</h1>
    </div>
        <div className='form-container'>
          <div className='form-content-middle'>
            <img className='form-img' src={brahim} alt='brahim' />
          </div>
        <div className='form-content-left'>
          <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>On commence ici !</h1>
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
      </form>
        </div>
        {!isSubmitted ? (
          <FormRight submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;