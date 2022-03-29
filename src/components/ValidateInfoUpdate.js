export default function validateInfoUpdate(profil) {
    let errorsUpdate = {};
  
    if (!profil.lastname.trim()) {
      errorsUpdate.lastname = 'Nom requis';
    }

    if (!profil.firstname.trim()) {
      errorsUpdate.firstname = 'Prénom requis';
    }

    if (!profil.birthday.trim()) {
      errorsUpdate.birthday = 'Date de naissance requise';
    }
  
    if (!profil.email.trim()) {
      errorsUpdate.email = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(profil.email)) {
      errorsUpdate.email = 'Adresse email invalide';
    }

    if (!profil.password) {
      errorsUpdate.password = 'Mot de passe requis';
    } else if (profil.password.length < 6) {
      errorsUpdate.password = 'Le mot de passe doit contenir 6 caractères ou plus';
    }

    if (!profil.password2) {
      errorsUpdate.password2 = 'Mot de passe requis';
    } else if (profil.password2 !== profil.password) {
      errorsUpdate.password2 = 'Les mots de passe ne correspondent pas';
    }
  
    if (!profil.city.trim()) {
      errorsUpdate.city = 'Ville requise';
    }

    if (!profil.country.trim()) {
      errorsUpdate.country = 'Pays requis';
    }

    return errorsUpdate;
  }