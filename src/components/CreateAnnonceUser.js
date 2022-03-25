/* eslint-disable no-restricted-globals */
import "../styles/CreateAnnonce.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import AdminReturnButton from "./AdminReturnButton";
import NavbarAdmin from "./NavbarAdmin";

const CreateAnnonceUser = () => {
  const [newAnnonce, setNewAnnonce] = useState({
    description: "",
    date: "",
  });
  const path = "/admin/annonces";
  console.log(newAnnonce);

  const createAnnonce = (e) => {
    e.preventDefault();
    if (confirm(`Êtes-vous sûr de vouloir créer cette annonce`) === true) {
      axios
        .post(`${process.env.REACT_APP_BACK}/users/submitAnnonceUser`, {
          description_annonce: newAnnonce.description,
          date: newAnnonce.date,
          users_id: 1,
          blocked: 1,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("nope");
    }
  };

  return (
    <>
      <div className="adminnavbar">
        <NavbarAdmin />
      </div>
      <AdminReturnButton route={path} />
      <div className="titleContainer">
        <h2>Créer votre annonce utilisateur</h2>
      </div>
      <form>
        <div className="firstContainer">
          <div className="secondContainer">
            <p>Description</p>
            <textarea
              className="descriptionAnnonce"
              type="text"
              onChange={(e) => {
                const { value } = e.target;
                setNewAnnonce({ ...newAnnonce, description: value });
              }}
            />

            <div className="fifthContainer">
              <div className="sixthContainer">
                <Stack
                  component="form"
                  noValidate
                  spacing={3}
                  onChange={(e) => {
                    const { value } = e.target;
                    setNewAnnonce({ ...newAnnonce, date: value });
                  }}
                >
                  <TextField
                    id="date"
                    label="Date de disponibilité"
                    type="date"
                    defaultValue=""
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Stack>
              </div>
              <div className="seventhContainer">
                <div className="holderButton">
                  <div className="holderButton">
                    <button
                      className="secondButton"
                      onClick={(e) => createAnnonce(e)}
                    >
                      Publier l'annonce
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateAnnonceUser;
