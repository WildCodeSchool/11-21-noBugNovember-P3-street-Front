import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
    city: '',
    country: '',
    youtube: '',
    instagram: '',
    twitter: '',
    spotify: '',
    description: '',
    domain :'',
    subDomain :''
    
  });

//   const submitUser = () => {
//     console.log(values)
//   axios.post(`${process.env.REACT_APP_BACK}/users/submitUser`, {
//     firstname: values.firstname,
//     lastname: values.lastname,
//     password: values.password,
//     email: values.email,
//     phone: values.phone,
//     city: values.city,
//     country: values.country,
//     youtube: values.instagram,
//     instagram: values.instagram,
//     twitter: values.twitter,
//     spotify: values.spotify,
//     description_users: values.description
//     // domain: values.domain,
//     // subDomain: values.subDomain
//   });
// };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
  

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;