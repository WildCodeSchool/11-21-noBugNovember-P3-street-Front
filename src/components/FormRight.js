import React from 'react';
import validate from './ValidateInfo';
import useForm from './useForm';
import '../styles/Form.css';

const FormRight = ({ submitForm }) => {
  const { handleChange, handleSubmit, values} = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          La suite là !
        </h1>
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
  );
};

export default FormRight;