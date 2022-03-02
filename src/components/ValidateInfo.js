export default function validateInfo(values) {
    let errors = {};
  
    if (!values.lastname.trim()) {
      errors.lastname = 'Nom requis';
    }
    if (!values.firstname.trim()) {
      errors.firstname = 'Nom requis';
    }
  
    if (!values.email.trim()) {
      errors.email = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Adresse email invalide';
    }
  
    if (!values.city.trim()) {
      errors.city = 'Ville requise';
    }

    if (!values.country.trim()) {
      errors.country = 'Pays requis';
    }

    return errors;
  }