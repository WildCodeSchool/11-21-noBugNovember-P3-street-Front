import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./CreateProject.css";
import 'react-calendar/dist/Calendar.css';

const CreateProject = () => {
    const [value, onChange] = useState(new Date())
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
                    <input className="description" type="text"></input>
                </div>
                <div className="fourthContainer" >
                    <div className="photoContainer"></div>
                    <div className="buttonContainer"><button className="firstButton">Changer de photo</button></div>
                </div>
                <div className="fifthContainer">
                    <div className="sixthContainer">
                        <p>Région</p>
                        <input className="region" type="select" placeholder="Séléctionnez la région"></input>
                        <p>Date de début</p>
                        <Calendar className="calendar" onChange={onChange} value={value} />
                        {/* <input className="date" type="select" placeholder="Jour"></input>
                        <input className="date" type="select" placeholder="Mois"></input>
                        <input className="date" type="select" placeholder="Année"></input> */}
                        <p>Date de fin estimée</p>
                        <input className="jourEnd" type="select" placeholder="Jour"></input>
                        <input className="moisEnd" type="select" placeholder="Mois"></input>
                        <input className="annéeEnd" type="select" placeholder="Année"></input>
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












// // <h2>Créez votre projet</h2>
// <div className="firstDiv">   
// <div className="nameContainer">
//   <p>Nom du projet</p>
//   <input className="name" type="text" placeholder="Streetzer"></input>
// </div>
// <div className="domaineContainer">
//   <p>Domaine</p>
//   <input
//     className="domaine"
//     type="search"
//     placeholder="Sélectionnez un domaine artistique"
//   ></input>
// </div>
// <div className="descriptionContainer">
//   <p>Description</p>
//   <input className="description" type="text"></input>
// </div>
// <div className="regionContainer">
//   <p>Région</p>
//   <input className="region" type="select" placeholder="Séléctionnez la région"></input>
// </div>
// <div className="dateBegin">
//   <p>Date de début</p>
//   <input className="jour" type="select" placeholder="Jour"></input>
//   <input className="mois" type="select" placeholder="Mois"></input>
//   <input className="année" type="select" placeholder="Année"></input>
// </div>
// <div className="dateEnd">
//   <p>Date de fin estimée</p>
//   <input className="jourEnd" type="select" placeholder="Jour"></input>
//   <input className="moisEnd" type="select" placeholder="Mois"></input>
//   <input className="annéeEnd" type="select" placeholder="Année"></input>
// </div>
// {/* <div className="holderButton">
//   <div className="holderButton">Publier le projet</div>
// </div> */}
// </div>