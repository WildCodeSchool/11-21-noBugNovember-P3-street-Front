import React, { useState } from 'react';
import "./CreateProject.css";
import 'react-calendar/dist/Calendar.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


const CreateProject = () => {
    
  return (
    <>
      <div className="titleContainer" >
          <h2>Créez votre projet</h2>
      </div>
        <div className="firstContainer">
            <div className="secondContainer" >
                <div className="thirdContainer">
                    <p>Nom du projet</p>
                    <input className="name" type="text" placeholder="Streetzer"></input>
                    <p>Domaine</p>
                    <input className="domaine" type="search" placeholder="Sélectionnez un domaine artistique"></input>
                    <p>Description</p>
                    <input className="descriptionProject" type="text"></input>
                </div>
                <div className="fourthContainer" >
                    <div className="photoContainer"></div>
                    <div className="buttonContainer"><button className="firstButton">Changer de photo</button></div>
                </div>
                <div className="fifthContainer">
                    <div className="sixthContainer">
                        <p>Région</p>
                        <input className="region" type="select" placeholder="Séléctionnez la région"></input>
                        {/* <p>Date de début</p> */}
                        <Stack className="calendar" component="form" noValidate spacing={3}>
                        <TextField
                            id="date"
                            label="Date de début"
                            type="date"
                            defaultValue="2022-02-28"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            />  
                        </Stack>
                        <Stack  component="form" noValidate spacing={3}>
                        <TextField
                            id="date"
                            label="Date de fin"
                            type="date"
                            defaultValue="2022-02-28"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            />
                        </Stack>
                    </div>
                    <div className="seventhContainer">
                        <div className="holderButton">
                            <div className="holderButton"><button className="secondButton">Publier le projet</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>    

  );
};

export default CreateProject;












