export default function validateInfo(values) {
    let errors = {};
  
    if (!values.lastname.trim()) {
      errors.lastname = 'Nom requis';
    }

    if (!values.firstname.trim()) {
      errors.firstname = 'Prénom requis';
    }

    if (!values.birthday.trim()) {
      errors.birthday = 'Date de naissance requise';
    }
  
    if (!values.email.trim()) {
      errors.email = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Adresse email invalide';
    }

    if (!values.password) {
      errors.password = 'Mot de passe requis';
    } else if (values.password.length < 6) {
      errors.password = 'Le mot de passe doit contenir 6 caractères ou plus';
    }

    if (!values.password2) {
      errors.password2 = 'Mot de passe requis';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Les mots de passe ne correspondent pas';
    }
  
    if (!values.city.trim()) {
      errors.city = 'Ville requise';
    }

    if (!values.country.trim()) {
      errors.country = 'Pays requis';
    }

    return errors;
  }