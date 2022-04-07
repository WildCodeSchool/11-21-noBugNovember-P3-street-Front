/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useRef } from "react";
import "../styles/CreateProject.css";
import "react-calendar/dist/Calendar.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import AdminReturnButton from "../components/AdminReturnButton";

const AdminProjectEdition = () => {
  const [projectDetail, setProjectDetail] = useState([]);
  const [domaines, setDomaine] = useState([]);
  const [regions, setRegions] = useState([]);
  const [image, setImage] = useState({ data: "" });
  const [status, setStatus] = useState("");
  const params = useParams();
  const mySelect = useRef();
  const secondSelect = useRef();
  const path = "/admin/projets";
  const getProjectDetails = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK}/admin/project_details_edit/${params.id}`
      )
      .then((response) => response.data)
      .then((data) => setProjectDetail(data));
  };

  const getDomains = () => {
    axios
      .get("http://localhost:3030/all/domain")
      .then((res) => setDomaine(res.data));
  };

  const getRegions = () => {
    axios
      .get("http://localhost:3030/all/regions")
      .then((res) => setRegions(res.data));
  };

  const [newProject, setNewProject] = useState({});
  let idDomaine;
  let idRegions;
  const editProject = (e) => {
    e.preventDefault();
    if (confirm(`Êtes-vous sûr de vouloir modifier ce projet?`) === true) {
      switch (mySelect.current.value.toLowerCase()) {
        case "arts-visuels":
          idDomaine = 1;
          break;
        case "musique":
          idDomaine = 2;
          break;
        case "littérature et poésie":
          idDomaine = 3;
          break;
        case "arts de la scène":
          idDomaine = 4;
          break;
        case "cinéma":
          idDomaine = 5;
          break;
        case "arts médiatiques":
          idDomaine = 6;
          break;
        default:
      }
      switch (secondSelect.current.value.toLowerCase()) {
        case "auvergne-rhône-alpes":
          idRegions = 1;
          break;
        case "bourgogne-franche-comté":
          idRegions = 2;
          break;
        case "bretagne":
          idRegions = 3;
          break;
        case "centre-val de loire":
          idRegions = 4;
          break;
        case "corse":
          idRegions = 5;
          break;
        case "grand est":
          idRegions = 6;
          break;
        case "hauts-de-france":
          idRegions = 7;
          break;
        case "ile-de-france":
          idRegions = 8;
          break;
        case "normandie":
          idRegions = 9;
          break;

        case "nouvelle-aquitaine":
          idRegions = 10;
          break;
        case "occitanie":
          idRegions = 11;
          break;
        case "pays de la loire":
          idRegions = 12;
          break;
        case "provence-alpes-côte d’azur":
          idRegions = 13;
          break;
        default:
      }

      axios
        .put(`${process.env.REACT_APP_BACK}/admin/edit_project/${params.id}`, {
          name: newProject.name,
          estimated_start_date: newProject.startDate,
          estimated_end_date: newProject.endDate,
          description: newProject.description,
          domain_id: idDomaine,
          region_id: idRegions,
          youtubelink: newProject.youtube,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
    }
    setNewProject({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);
    const response = await fetch("http://localhost:3030/all/image", {
      method: "POST",
      body: formData,
    });
    if (response) setStatus(response.statusText);
  };

  const handleFileChange = (e) => {
    const img = {
      data: e.target.files[0],
    };
    setImage(img);
  };

  useEffect(() => {
    getProjectDetails();
    getDomains();
    getRegions();
  }, []);

  return (
    <>
      <div className="adminnavbar">
        <NavbarAdmin />
      </div>
      <AdminReturnButton route={path} />
      <div className="titleContainer">
        <h2>Modifier le projet</h2>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {status && <h4>{status}</h4>}
        <div className="firstContainer">
          <div className="secondContainer">
            <div className="thirdContainer">
              <p>Nom du projet</p>
              <input
                className="name"
                type="text"
                placeholder="Streetzer"
                value={projectDetail.name}
                onChange={(e) => {
                  setProjectDetail({ name: e.target.value });
                  setNewProject({ ...newProject, name: e.target.value });
                }}
              />

              <p>Domaine</p>
              <select
                className="selectDomaine"
                name="Domaine"
                ref={mySelect}
                onChange={(e) => {
                  setNewProject({
                    ...newProject,
                    domain: e.target.value,
                  });
                }}
              >
                <option value="">{projectDetail.domain}</option>
                {domaines !== [] &&
                  domaines.map((domaine) => (
                    <option key={domaine.id} value={domaine.domain}>
                      {domaine.domain}
                    </option>
                  ))}
              </select>
              <p>Description</p>
              <textarea
                className="descriptionProject"
                type="text"
                value={projectDetail.description}
                onChange={(e) => {
                  setProjectDetail({ description: e.target.value });
                  setNewProject({ ...newProject, description: e.target.value });
                }}
              />
            </div>
            <div className="fourthContainer">
              <div className="photoContainer"></div>
              <div className="buttonContainer">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div>
                    <label>Upload profile picture</label>
                    <input
                      type="file"
                      name="file"
                      onChange={(e) => handleFileChange(e)}
                      required
                    />
                  </div>
                  <div>
                    <button type="submit">Upload</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="fifthContainer">
              <div className="sixthContainer">
                <p>Région</p>
                <select
                  className="selectRegion"
                  name="regions"
                  ref={secondSelect}
                  onChange={(e) => {
                    setNewProject({
                      ...newProject,
                      region: e.target.value,
                    });
                  }}
                >
                  <option value="">{projectDetail.region_name}</option>
                  {regions !== [] &&
                    regions.map((region) => (
                      <option key={region.id} value={region.region_name}>
                        {region.region_name}
                      </option>
                    ))}
                </select>
                <Stack
                  className="calendar"
                  component="form"
                  noValidate
                  spacing={3}
                  onChange={(e) => {
                    const { value } = e.target;
                    setNewProject({ ...newProject, startDate: value });
                  }}
                >
                  <TextField
                    id="date"
                    label="Date de début"
                    type="date"
                    defaultValue={projectDetail.date_start}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Stack>
                <Stack
                  component="form"
                  noValidate
                  spacing={3}
                  onChange={(e) => {
                    const { value } = e.target;
                    setNewProject({ ...newProject, endDate: value });
                  }}
                >
                  <TextField
                    id="date"
                    label="Date de fin"
                    type="date"
                    defaultValue={projectDetail.date_end}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Stack>
              </div>
              <iframe
                src={`https://www.youtube.com/embed/${newProject.youtube}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                allowfullscreen
                className="player"
              ></iframe>
              <label>Ajouter un lien youtube : </label>
              <input
                type="text"
                onChange={(e) =>
                  setNewProject({ ...newProject, youtube: e.target.value })
                }
              />
              <div className="seventhContainer">
                <div className="holderButton">
                  <div className="holderButton">
                    <button
                      className="secondButton"
                      onClick={(e) => editProject(e)}
                    >
                      Modifier le projet
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

export default AdminProjectEdition;
