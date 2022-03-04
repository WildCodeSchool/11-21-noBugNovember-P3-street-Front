import React from 'react';
import '../styles/Form.css';
import neon from "../assets/woman-neon-light.jpg";

const FormSuccess = () => {
  return (
    <div className='form-content'>
      <h1 className='form-success'>Nous avons bien reçu votre demande de création de profil !</h1>
      <img className='form-img-2' src={neon} alt='success' />
    </div>
  );
};

export default FormSuccess;