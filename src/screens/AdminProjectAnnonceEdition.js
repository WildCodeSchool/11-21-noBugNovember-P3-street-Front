/* eslint-disable no-restricted-globals */
import axios from "axios";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminReturnButton from "../components/AdminReturnButton";
import NavbarAdmin from "../components/NavbarAdmin";
const AdminProjectAnnonceEdition = () => {
  const [annonceDetails, setAnnonceDetails] = useState([]);
  const [editAnnonce, setEditAnnonce] = useState({});
  const [subDomains, setSubDomains] = useState([]);
  const params = useParams();
  const path = "/admin/annonces";

  const getAnnonceDetails = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK}/admin/annonceprojet_details_edit/${params.id}`
      )
      .then((response) => response.data)
      .then((data) => setAnnonceDetails(data));
  };
  const getSubDomains = () => {
    axios
      .get(`${process.env.REACT_APP_BACK}/all/subdomain`)
      .then((response) => response.data)
      .then((data) => setSubDomains(data));
  };

  const annonceEdition = (e) => {
    e.preventDefault();
    if (confirm(`Êtes-vous sûr de vouloir modifier ce projet?`) === true) {
      axios.put(
        `${process.env.REACT_APP_BACK}/admin/edit_annonce_project/${params.id}`,
        {
          role: editAnnonce.role,
          description: editAnnonce.description_annonce,
          date: editAnnonce.date,
        }
      );
    } else {
    }
  };

  useEffect(() => {
    getAnnonceDetails();
    getSubDomains();
  }, []);

  return (
    <>
      <div className="adminnavbar">
        <NavbarAdmin />
      </div>
      <AdminReturnButton route={path} />
      <div className="titleContainer">
        <h2>Modifier l'annonce du projet "{annonceDetails.name}"</h2>
      </div>
      <form>
        <div className="firstContainer">
          <div className="secondContainer">
            <p>Vous recherchez :</p>
            <select
              className="selectDomaine"
              name="Domaine"
              onChange={(e) => {
                setEditAnnonce({ ...editAnnonce, role: e.target.value });
              }}
            >
              <option value="">{annonceDetails.role}</option>
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
              value={
                editAnnonce.description_annonce
                  ? editAnnonce.description_annonce
                  : annonceDetails.description
              }
              onChange={(e) => {
                setEditAnnonce({
                  ...editAnnonce,
                  description_annonce: e.target.value,
                });
              }}
            />

            <div className="fifthContainer">
              <div className="sixthContainer">
                <Stack
                  component="form"
                  noValidate
                  spacing={3}
                  onChange={(e) => {
                    setEditAnnonce({
                      ...editAnnonce,
                      date: e.target.value,
                    });
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
                      onClick={(e) => annonceEdition(e)}
                    >
                      Modifier l'annonce
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

export default AdminProjectAnnonceEdition;
