/* eslint-disable no-restricted-globals */
import axios from "axios";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminReturnButton from "../components/AdminReturnButton";
import NavbarAdmin from "../components/NavbarAdmin";
const AdminUserAnnonceEdition = () => {
  const [annonceDetails, setAnnonceDetails] = useState([]);
  const [editAnnonce, setEditAnnonce] = useState({});
  const params = useParams();
  const path = "/admin/annonces";

  let navigate = useNavigate();

  const getAnnonceDetails = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK}/admin/annonceuser_details_edit/${params.id}`
      )
      .then((response) => response.data)
      .then((data) => setAnnonceDetails(data));
  };

  const annonceEdition = (e) => {
    e.preventDefault();
    if (confirm(`Êtes-vous sûr de vouloir modifier ce projet ?`) === true) {
      axios.put(
        `${process.env.REACT_APP_BACK}/admin/edit_annonce_user/${params.id}`,
        {
          description_annonce: editAnnonce.description_annonce,
          date: editAnnonce.date,
        }
      );
      navigate("/admin/annonces");
    } else {
    }
  };

  useEffect(() => {
    getAnnonceDetails();
  }, []);

  return (
    <>
      <div className="adminnavbar">
        <NavbarAdmin />
      </div>
      <AdminReturnButton route={path} />
      <div className="titleContainer">
        <h2>
          Modifier l'annonce utilisateur de "{annonceDetails.firstname}{" "}
          {annonceDetails.lastname}"
        </h2>
      </div>
      <form>
        <div className="firstContainer">
          <div className="secondContainer">
            <p>Description</p>
            <textarea
              className="descriptionAnnonce"
              type="text"
              value={
                editAnnonce.description_annonce
                  ? editAnnonce.description_annonce
                  : annonceDetails.description_annonce
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

export default AdminUserAnnonceEdition;
