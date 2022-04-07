/* eslint-disable no-restricted-globals */
import "../styles/CreateAnnonce.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import AdminReturnButton from "./AdminReturnButton";
import NavbarAdmin from "./NavbarAdmin";

const CreateAnnonceProject = () => {
  const [newAnnonce, setNewAnnonce] = useState({});
  const [subDomains, setSubDomains] = useState([]);
  const path = "/admin/annonces";

  const createAnnonce = (e) => {
    e.preventDefault();
    if (confirm(`Êtes-vous sûr de vouloir créer cette annonce?`) === true) {
      axios
        .post(`${process.env.REACT_APP_BACK}/users/submitAnnonceProject`, {
          role: newAnnonce.role,
          description: newAnnonce.description,
          date: newAnnonce.date,
          project_id: 1,
          blocked: 1,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
    }
  };
  const getSubDomains = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/subdomain`)
      .then((response) => response.data)
      .then((data) => setSubDomains(data));
  };

  useEffect(() => {
    getSubDomains();
  }, []);

  return (
    <>
      <div className="adminnavbar">
        <NavbarAdmin />
      </div>
      <AdminReturnButton route={path} />
      <div className="titleContainer">
        <h2>Créer votre annonce projet</h2>
      </div>
      <form>
        <div className="firstContainer">
          <div className="secondContainer">
            <p>Vous recherchez :</p>
            <select
              className="selectAnnonce"
              name="Annonce"
              onChange={(e) => {
                setNewAnnonce({ ...newAnnonce, role: e.target.value });
              }}
            >
              <option value="">Choisissez le role</option>
              {subDomains !== [] &&
                subDomains.map((subDomain) => (
                  <option key={subDomain.id} value={subDomain.domain}>
                    {subDomain.art_name}
                  </option>
                ))}
            </select>
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
                    label="Date"
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

export default CreateAnnonceProject;
